import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image, RefreshControl, TouchableOpacity, Linking } from 'react-native'

import openMap, { createOpenLink } from 'react-native-open-maps';

// COMPONENTS
import { CustomHeader, CardInfoStation } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'

// SERVICES
import { stationsServices } from '../services'

class InfoStation extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }
    async setStation(idStation) {
        const stationResponse = await new stationsServices().getStation(Number(idStation));
        //  console.log(stationResponse)
        let obj = {
            name: stationResponse.title,
            distance: '3.54 KM',
            services: [],
            contact: (stationResponse.acf || {}).telefono,
            direcction: (stationResponse.acf || {}).direccion,
            url: stationResponse.thumbnail,
            longitude: Number(stationResponse.acf.lng),
            latitude: Number(stationResponse.acf.lat),

        }

        if ((stationResponse.acf || {}).servicios_disponibles) {

            (stationResponse.acf || {}).servicios_disponibles.forEach(element => {
                let obj1 = {
                    image: element.imagen_servicio.url,
                    name: element.nombre_servicio
                }
                obj.services.push(obj1)
            });
        }

        let data = obj;
        this.setState({ data })
    }

    goToMap() {
        const station = { latitude: this.state.data.latitude, longitude: this.state.data.longitude };
        const openStation = createOpenLink(station);
        openStation()
    }

    render() {

        const { longitud, latitud, stationName, idStation } = this.props.route.params
        this.setStation(idStation)

        return (
            <View>
                <CustomHeader name={stationName} context={this.props} />

                <ScrollView style={styles.container}>
                    <View style={styles.hero}>
                        <Image style={styles.image} source={{ uri: this.state.data.url }} />
                    </View>
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.titleStation}>{stationName}</Text>
                            <TouchableOpacity style={styles.ir} onPress={() => Linking.openURL(`https://maps.apple.com/?q=${stationName}&ll=${this.state.data.latitude},${this.state.data.longitude}`)}>

                                <Text style={styles.irText}>Ir al mapa</Text>
                            </TouchableOpacity>
                            {/* <View style={styles.containerDistance}>
                                <Text style={styles.KM}>{data.distance}</Text>
                                <Text style={styles.distance}>Distancia</Text>
                            </View> */}
                        </View>
                        <View style={styles.cards}>
                            <CardInfoStation type='SERVICES' station={this.state.data} />
                            <CardInfoStation type='CONTACTS' station={this.state.data} />
                            <CardInfoStation type='MAP' station={this.state.data} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        position: 'relative'
    },
    hero: {
        zIndex: 1
    },
    content: {
        top: -50,
        zIndex: 2,
        marginHorizontal: 10,
        backgroundColor: 'orange',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: 250,
        width: '100%',
        resizeMode: 'cover'
    },
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

    },
    titleStation: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
    },
    KM: {
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    },
    distance: {
        textAlign: 'center',
        fontSize: 12,
        color: 'white',
        fontWeight: '400'
    },

    ir: {
        backgroundColor: Colors.BLUE_LIGHT,
        borderRadius: 30,
        padding: 10
    },
    irText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: Colors.WHITE
    }
})
export default InfoStation;