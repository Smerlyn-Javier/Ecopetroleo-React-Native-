import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

function MapViewScreen(props) {
    if (Platform.OS === 'ios') {

        return (
            <View style={styles.containerIos}>
                <CustomHeader name='Encuentrate' context={props} />

                <MapView
                    style={styles.mapIos}
                    initialRegion={{
                        latitude: 18.735693,
                        longitude: -70.162651,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
    }
    else if (Platform.OS === 'android') {

        return (
            <View style={styles.containerAndroid}>
                <CustomHeader name='Encuentranos' context={props} />

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapAndroid}
                    initialRegion={{
                        latitude: 18.735693,
                        longitude: -70.162651,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        )
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