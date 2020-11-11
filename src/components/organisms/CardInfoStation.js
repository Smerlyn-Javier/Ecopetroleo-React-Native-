import React from 'react'
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'

import MapView, { Marker,Polyline } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import MapViewDirections from 'react-native-maps-directions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const origin = { latitude: 18.735693, longitude: -70.162651 };
const destination = { atitude: 18.735695, longitude: -70.162652 };
const GOOGLE_MAPS_APIKEY = 'AIzaSyAZC6s8YMGHtnSoeM8p3-d_oVfiKOCe0pw';

function CardInfoStation(props) {
    if (props.type === 'SERVICES') {
        return (

            <View style={styles.servicesContainer}>
                <Text style={styles.titleServices}> SERVICIOS </Text>
                <View style={styles.services}>{
                    (props.station.services || []).map((element, key) => (
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
    else if (props.type === 'CONTACTS') {
        return (

            <TouchableOpacity style={styles.contactsContainer} onPress={() => { Linking.openURL(`tel:${props.station.contact}`) }}>
                <Icon name="phone" size={25} color='#5c5c5c' />
                <View style={styles.textContactsContainer}>
                    <Text style={styles.contactTitle}>CONTACTENOS</Text>
                    <Text style={styles.phone}>{props.station.contact}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    else if (props.type === 'MAP') {



        // GetLocation.getCurrentPosition({
        //     enableHighAccuracy: true,
        //     timeout: 15000,
        // })
        // .then(location => {
        //     console.log(location);
        // })
        // .catch(error => {
        //     const { code, message } = error;
        //     console.warn(code, message);
        // })


        return (

            <View style={styles.mapContainer}>
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 25 }}>
                    <Icon name="map-marker" size={25} color='#5c5c5c' />
                    <View style={styles.textmapContainer}>
                        <Text style={styles.mapTitle}>UBICACIÓN</Text>
                        <Text style={styles.direcction}>{props.station.direcction}</Text>
                    </View>
                </View>
                <View style={styles.contentMap}>

                    <MapView
                        style={styles.mapIos}
                        zoomEnabled={false}
                        showsUserLocation={true}
                        // maxZoomLevel={7}
                        // minZoomLevel={9}
                        initialRegion={{
                            latitude: 18.735693,
                            longitude: -70.162651,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >

                        <Polyline
                        geodesic={true}
                        coordinates={[{ latitude: 18.5528159, longitude: -69.9279594 },{ latitude: 18.4861446, longitude: -69.894265 }]}
                        strokeWidth={1}
                        />

                        {/* <Marker
                            coordinate={{ latitude: 18.5528159, longitude: -69.9279594 }}
                            title='Ubicación Actual'
                            image={require('../../assets/images/resources/Marker-icon-ios.png')}
                        />

                        <Marker
                            coordinate={{ latitude: 18.4861446, longitude: -69.894265 }}
                            title='Ubicación Actual'
                            image={require('../../assets/images/resources/Marker-icon-ios.png')}
                        />

                        <MapViewDirections
                            origin={{ latitude: parseFloat(18.5528159), longitude: parseFloat(-69.9279594) }}
                            destination={{ atitude: parseFloat(18.4861446), longitude: parseFloat(-69.894265) }}

                            apikey='AIzaSyAZC6s8YMGHtnSoeM8p3-d_oVfiKOCe0pw'
                            strokeWidth={3}
                            strokeColor='hotpink'
                        /> */}

                    </MapView>

                </View>
            </View >
        )
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


})

export default CardInfoStation;