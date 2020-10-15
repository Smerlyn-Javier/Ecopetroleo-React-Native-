import React from 'react';
import { SafeAreaView, View,Text } from 'react-native';

// COMPONENTS
import {CustomHeader} from '../components/organisms'

function About_us(props) {
    return (
        <SafeAreaView>
            <CustomHeader name='Quiénes Somos' context={props}/>
            <View>
                <Text>Hola</Text>
            </View>
        </SafeAreaView>
    )
} 

export default About_us;