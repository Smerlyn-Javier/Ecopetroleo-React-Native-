import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'

import MapView, { Marker, Polyline } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import MapViewDirections from 'react-native-maps-directions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// STYLES
import { Colors } from '../../assets/styles'

const origin = { latitude: 18.735693, longitude: -70.162651 };
const destination = { atitude: 18.735695, longitude: -70.162652 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyAZC6s8YMGHtnSoeM8p3-d_oVfiKOCe0pw';

class CardInfoStation extends Component {

    state = {
        currencyLocation: {
            latitude: 18.735693,
            longitude: -70.162651,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
        },
        distance: 0,
        duration: 0,
    };


    componentDidMount() {
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

        if (this.props.type === 'SERVICES') {
            return (

                <View style={styles.servicesContainer}>
                    <Text style={styles.titleServices}> SERVICIOS </Text>
                    <View style={styles.services}>{
                        (this.props.station.services || []).map((element, key) => (
                            <View style={styles.servicesContent} key={key}>
                                <Image style={styles.serviceImage} source={{ uri: element.image }} />
                                <Text style={styles.serviceName}>{element.name}</Text>
                            </View>
                        ))
                    }
                    </View>
                </View>
            )
        }
        else if (this.props.type === 'CONTACTS') {
            return (

                <TouchableOpacity style={styles.contactsContainer} onPress={() => { Linking.openURL(`tel:${this.props.station.contact}`) }}>
                    <Icon name="phone" size={25} color='#5c5c5c' />
                    <View style={styles.textContactsContainer}>
                        <Text style={styles.contactTitle}>CONTACTENOS</Text>
                        <Text style={styles.phone}>{this.props.station.contact}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        else if (this.props.type === 'MAP') {


            return (

                <View style={styles.mapContainer}>

                    <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 25 }}>


                        <Icon name="map-marker" size={25} color='#5c5c5c' />


                        <View style={styles.textmapContainer}>
                            <Text style={styles.mapTitle}>UBICACIÓN</Text>
                            <Text style={styles.direcction}>{this.props.station.direcction}</Text>
                        </View>


                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <View style={styles.containerDistance}>
                            <Text style={styles.KM}>{this.state.distance} km</Text>
                            <Text style={styles.distance}>Distancia</Text>
                        </View>

                        <View style={styles.containerDistance}>
                            <Text style={styles.KM}>{parseInt(this.state.duration)} min</Text>
                            <Text style={styles.distance}>Duración</Text>
                        </View>
                    </View>

                    <View style={styles.contentMap}>

                        <MapView
                            style={styles.mapIos}
                            zoomEnabled={false}
                            maxZoomLevel={7}
                            minZoomLevel={7}
                            initialRegion={{
                                latitude: this.props.station.latitude || 18.4861446,
                                longitude: this.props.station.longitude || -69.894265,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >



                            <Marker
                                coordinate={{ latitude: parseFloat(this.props.station.latitude || 18.4861446), longitude: parseFloat(this.props.station.longitude || -69.894265) }}
                                title='Ubicación de la estación'
                                image={require('../../assets/images/resources/Marker-icon-ios.png')}
                            />

                            <Marker
                                coordinate={{ latitude: this.state.currencyLocation.latitude || 18.4861446, longitude: this.state.currencyLocation.longitude || -69.894265 }}
                                title='Ubicación Actual'
                                image={require('../../assets/images/resources/Marker-icon-user.png')}
                            />

                            <MapViewDirections
                                origin={{ latitude: parseFloat(this.state.currencyLocation.latitude || 18.4861446), longitude: parseFloat(this.state.currencyLocation.longitude || -69.894265) }}
                                destination={{ latitude: parseFloat(this.props.station.latitude || 18.4861446), longitude: parseFloat(this.props.station.longitude || -69.894265) }}
                                onReady={(event) => { this.setState({ distance: event.distance, duration: event.duration }) }}
                                apikey='AIzaSyAZC6s8YMGHtnSoeM8p3-d_oVfiKOCe0pw'
                                strokeWidth={4}
                                strokeColor='#38B04F'
                            />

                        </MapView>

                    </View>
                </View >
            )
        }
    }

}

const styles = StyleSheet.create({
    // SERVICES
    servicesContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        marginBottom: 20,
        justifyContent: 'center',


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    titleServices: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black'
    },
    services: {
        padding: 10,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    serviceImage: {
        height: 30,
        width: 30,
        marginVertical: 5,
        borderRadius: 50,
        resizeMode: 'cover',
        marginHorizontal: 10
    },
    serviceName: {
        textAlign: 'center',
        fontSize: 10,
        color: '#2a2ea1',
        marginHorizontal: 10,
        width: 60,
    },
    servicesContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    //CONTACTS 
    contactsContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        marginBottom: 20,


        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textContactsContainer: {
        marginHorizontal: 10
    },
    contactTitle: {
        color: '#5c5c5c',
        fontSize: 12,
        fontWeight: '400'
    },
    phone: {
        color: '#787878',
        fontSize: 10,
        fontWeight: '400'
    },


    // MAP

    mapContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: 15,
        marginBottom: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textMapContainer: {
        marginHorizontal: 10
    },
    mapTitle: {
        color: '#5c5c5c',
        fontSize: 12,
        fontWeight: '400'
    },
    direcction: {
        color: '#787878',
        fontSize: 10,
        fontWeight: '400',
        width: '80%'
    },
    contentMap: {
        height: 300,
    },
    mapIos: {
        // flex:1,
        height: 300,
        width: '100%'
    },
    containerIos: {

    },


    // HEADER
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: Colors.GREEN_LIGHT
    },
    cards: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#2a823b'
    },
    containerDistance: {
        marginBottom: 15
    },
    titleStation: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    },
    KM: {
        textAlign: 'center',
        fontSize: 14,
        color: Colors.BLUE_LIGHT,
        fontWeight: '600'
    },
    distance: {
        textAlign: 'center',
        fontSize: 12,
        color: 'black',
        fontWeight: '400'
    },

})

export default CardInfoStation;