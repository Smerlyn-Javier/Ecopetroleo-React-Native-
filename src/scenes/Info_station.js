import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'



// COMPONENTS
import { CustomHeader, CardInfoStation } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'



// DATA
const data = {
    name: 'ECO HERRERA',
    distance: '3.54 KM',
    services: [
        {
            image: require('../assets/images/resources/Test.png'),
            name: 'Food Shop'
        },
        {
            image: require('../assets/images/resources/Test.png'),
            name: 'Food Shop'
        },
        {
            image: require('../assets/images/resources/Test.png'),
            name: 'Food Shop'
        },
        {
            image: require('../assets/images/resources/Test.png'),
            name: 'Food Shop'
        }
    ],
    contact: '809-548-8181',
    direcction: 'ANTIGUA CARRT. DUARTE NO.3, ESQ. LA PAZ, ENRIQUILLO. Km 9'
}

function InfoStation(props) {
    return (
        <View>
            <CustomHeader name='Informacion de la estación' context={props} />
            <ScrollView style={styles.container}>
                <View style={styles.hero}>
                    <Image style={styles.image} source={require('../assets/images/resources/horizontal-logo.png')} />
                </View>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.titleStation}>{data.name}</Text>
                        <View style={styles.containerDistance}>
                            <Text style={styles.KM}>{data.distance}</Text>
                            <Text style={styles.distance}>Distancia</Text>
                        </View>
                    </View>
                    <View style={styles.cards}>
                        <CardInfoStation type='SERVICES' station={data} />
                        <CardInfoStation type='CONTACTS' station={data} />
                        <CardInfoStation type='MAP' station={data} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
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
        height: 200,
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
    }
})
export default InfoStation;