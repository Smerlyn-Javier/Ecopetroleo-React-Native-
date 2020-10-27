import React from 'react';
import { View, Text } from 'react-native';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

function MapView(props) {
    return (
        <View>
            <CustomHeader name='Encuentranos' context={props} />
            <Text>
                HOLA
            </Text>
        </View>
    )
}

export default MapView;