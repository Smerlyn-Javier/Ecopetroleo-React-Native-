import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CardInfoStation(props) {
    if (props.type === 'SERVICES') {
        return (

            <View style={styles.servicesContainer}>
                <Text style={styles.titleServices}> SERVICIOS </Text>
                <View style={styles.services}>{

                    props.station.services.map((element, key) => (
                        <View style={styles.servicesContent}>
                            <Image style={styles.serviceImage} source={element.image} />
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

            <View style={styles.contactsContainer}>
                <Icon name="phone" size={25} color='#5c5c5c' />
                <View style={styles.textContactsContainer}>
                    <Text style={styles.contactTitle}>CONTACTENOS</Text>
                    <Text style={styles.phone}>{props.station.contact}</Text>
                </View>
            </View>
        )
    }
    else if (props.type === 'MAP') {
        return (

            <View style={styles.mapContainer}>
                <Icon name="map-marker" size={25} color='#5c5c5c' />
                <View style={styles.textmapContainer}>
                    <Text style={styles.mapTitle}>UBICACIÓN</Text>
                    <Text style={styles.direcction}>{props.station.direcction}</Text>
                </View>
            </View>
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
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    serviceImage: {
        height: 30,
        width: 30,
        marginVertical: 5,
        borderRadius: 50,
        resizeMode: 'cover'
    },
    serviceName: {
        fontSize: 10,
        color: '#2a2ea1'
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
        color:'#5c5c5c',
        fontSize: 12,
        fontWeight: '400'
    },
    phone: {
        color:'#787878',
        fontSize: 10,
        fontWeight: '400'
    },


    // MAP

    mapContainer: {
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

    textMapContainer: {
        marginHorizontal: 10
    },
    mapTitle: {
        color:'#5c5c5c',
        fontSize: 12,
        fontWeight: '400'
    },
    direcction: {
        color:'#787878',
        fontSize: 10,
        fontWeight: '400',
        width:'90%'
    }


})

export default CardInfoStation;