import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

function MapViewScreen(props) {
    return (
        <View>
<CustomHeader name='Contacto' context={props} />

            <MapView
                style={styles.map}
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

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})

export default MapViewScreen;