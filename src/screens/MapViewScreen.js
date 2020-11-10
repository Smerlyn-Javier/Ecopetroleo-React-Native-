import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import {Observable} from "rxjs";

// COMPONENTS
import { CustomHeader } from '../components/organisms'

// SERVICES
import { stationsServices } from '../services'


class MapViewScreen extends Component {

    state = {
        stations: [],
        currencyLocation: {
            latitude: 18.735693,
            longitude: -70.162651,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
        }
    };

    async componentDidMount() {

        const stationsResponse = await new stationsServices().getStations();
        let stations = [];

        (stationsResponse || []).forEach(element => {
            let obj = {
                id: element.id,
                post_title: element.post_title,
                latitud: Number(element.latitud.replace(',', '')),
                longitud: Number(element.longitud.replace(',', '')),
                direccion: element.direccion,
                telefono: element.telefono
            }
            stations.push(obj)
        });

        this.setState({ stations })


        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
            .then(location => {
                let objLocation = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.05,
                }
                this.setState({ currencyLocation: objLocation })
                console.log(location);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }


    render() {

        // this.componentDidMount();
        if (Platform.OS === 'ios') {

            return (
                <View style={styles.containerIos}>
                    <CustomHeader name={`Encuentranos`} context={this.props} />
                    <MapView
                        style={styles.mapIos}
                        // showsUserLocation={true}
                        // followsUserLocation={true}
                        showsMyLocationButton={true}
                        showsTraffic={false}
                        zoomControlEnabled={true}
                        rotateEnabled={false}
                        showsUserLocation={true}
                        initialRegion={{
                            latitude: this.state.currencyLocation.latitude,
                            longitude: this.state.currencyLocation.longitude,
                            latitudeDelta: this.state.currencyLocation.latitudeDelta,
                            longitudeDelta: this.state.currencyLocation.longitudeDelta,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: this.state.currencyLocation.latitude, longitude: this.state.currencyLocation.longitude }}
                            title="Ubicación Actual"

                        />
                        {

                            this.state.stations.map((element, key) => (
                                <Marker
                                    key={key}
                                    coordinate={{ latitude: element.latitud, longitude: element.longitud }}
                                    title={element.post_title}
                                    image={require('../assets/images/resources/Marker-icon-ios.png')}
                                    onPress={() => {
                                        this.props.navigation.navigate('Info_station')
                                        this.props.navigation.navigate(
                                            'Info_station',
                                            {
                                                idStation: element.id,
                                                longitud: element.latitud,
                                                latitud: element.latitud,
                                                stationName: element.post_title,
                                            }
                                        )
                                    }}
                                />
                            ))
                        }


                    </MapView>
                </View>
            )
        }


        else if (Platform.OS === 'android') {
            return (
                <View style={styles.containerAndroid}>
                    <CustomHeader name={`Encuentranos`} context={this.props} />

                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapAndroid}
                        // showsUserLocation={true}
                        // followsUserLocation={true}
                        showsMyLocationButton={true}
                        // showsTraffic={false}
                        zoomControlEnabled={true}
                        rotateEnabled={false}
                        showsUserLocation={true}
                        initialRegion={{
                            latitude: this.state.currencyLocation.latitude,
                            longitude: this.state.currencyLocation.longitude,
                            latitudeDelta: this.state.currencyLocation.latitudeDelta,
                            longitudeDelta: this.state.currencyLocation.longitudeDelta,
                        }}
                    >
                        <Marker
                            coordinate={{ latitude: this.state.currencyLocation.latitude, longitude: this.state.currencyLocation.longitude }}
                            title="Ubicación Actual"

                        />
                        {

                            this.state.stations.map((element, key) => (
                                <Marker
                                    key={key}
                                    coordinate={{ latitude: element.latitud, longitude: element.longitud }}
                                    title={element.post_title}
                                    image={require('../assets/images/resources/Marker-icon.png')}
                                    onPress={() => {
                                        this.props.navigation.navigate(
                                            'Info_station',
                                            {
                                                idStation: element.id,
                                                longitud: element.latitud,
                                                latitud: element.latitud,
                                                stationName: element.post_title,
                                            }
                                        )
                                        this.props.navigation.navigate('Info_station')
                                    }}
                                />

                            ))
                        }
                    </MapView>
                </View>
            )
        }
    }



}

const styles = StyleSheet.create({
    mapIos: {
        height: '100%'
    },
    containerIos: {

    },

    mapAndroid: {
        height: '100%',
    },

    containerAndroid: {

    },
})

export default MapViewScreen;