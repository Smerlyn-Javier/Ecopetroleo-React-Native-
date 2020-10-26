import React from 'react'
import { View, Text, ScrollView, StyleSheet, } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// COMPONENTS
import { CustomHeader, CardListPrices } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'

const data = [
    {
        date: '29 JUNIO AL 05 DE JULIO DE 2019',
        fuels: [

            {
                name: '',
                up: false,
                down: true,
                price: '28.97',
                coin: 'RD$'
            }
        ]
    },
    {
        date: '30 JUNIO AL 05 DE JULIO DE 2019',
        fuels: [

            {
                name: '',
                up: false,
                down: true,
                price: '28.97',
                coin: 'RD$'
            }
        ]
    }
]



function Prices(props) {
    return (
        <View >
            <CustomHeader name='Precios' context={props} />
            <ScrollView style={styles.container}>
                <CardListPrices fuelsProps={data}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
})
export default Prices;