import React from 'react'
import { Text, View, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'

import MapView, { Marker } from 'react-native-maps';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
        return (

            <View style={styles.mapContainer}>
                <View style={{display:'flex',flexDirection:'row', marginBottom:25}}>
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
                        initialRegion={{
                            latitude: 18.735693,
                            longitude: -70.162651,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >

                        <Marker
                            coordinate={{ latitude: 18.735693, longitude: -70.162651 }}
                            title='SOY YO'
                            image={require('../../assets/images/resources/Marker-icon.png')}
                        />

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
        width: '90%'
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