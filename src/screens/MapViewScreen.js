import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

function MapViewScreen(props) {
    return (
        <View>
            <CustomHeader name='Encuentranos' context={props} />
            <Text>HOLA</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    map: {
        height: '100%'
    }
})

export default MapViewScreen;