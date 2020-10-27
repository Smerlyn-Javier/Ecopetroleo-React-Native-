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
                name: 'Gasolina Premium',
                price: '28.97',
                coin: 'RD$',
                color:'#061ba1',
                icon:true
            },
            {
                name: 'Gasolina Regular',
                price: '28.97',
                coin: 'RD$',
                color:'#a10606',
                icon:false
            },
            {
                name: 'Gasoil Optimo',
                price: '28.97',
                coin: 'RD$',
                color:'#027812',
                icon:true
            },
            {
                name: 'Gasoil Regular',
                price: '28.97',
                coin: 'RD$',
                color:'#cfa902',
                icon:false
            },
            {
                name: 'Kerosene',
                price: '28.97',
                coin: 'RD$',
                color:'#000000',
                icon:true
            },
            {
                name: 'GLP',
                price: '28.97',
                coin: 'RD$',
                color:'#de0000',
                icon:false
            },
            {
                name: 'GNV',
                price: '28.97',
                coin: 'RD$',
                color:'#de0000',
                icon:true
            },
        ]
    },
    {
        date: '30 JUNIO AL 05 DE JULIO DE 2019',
        fuels: [

            {
                name: 'Gasolina Premium',
                price: '28.97',
                coin: 'RD$',
                color:'#061ba1',
                icon:true
            },
            {
                name: 'Gasolina Regular',
                price: '28.97',
                coin: 'RD$',
                color:'#a10606',
                icon:false
            },
            {
                name: 'Gasoil Optimo',
                price: '28.97',
                coin: 'RD$',
                color:'#027812',
                icon:true
            },
            {
                name: 'Gasoil Regular',
                price: '28.97',
                coin: 'RD$',
                color:'#cfa902',
                icon:false
            },
            {
                name: 'Kerosene',
                price: '28.97',
                coin: 'RD$',
                color:'#000000',
                icon:true
            },
            {
                name: 'GLP',
                price: '28.97',
                coin: 'RD$',
                color:'#de0000',
                icon:false
            },
            {
                name: 'GNV',
                price: '28.97',
                coin: 'RD$',
                color:'#de0000',
                icon:true
            },
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
        backgroundColor:'white',
        padding: 16
    },
})
export default Prices;