import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { Custom_statusBar } from '../components/atoms'

function First_screen(props) {
    return (
        <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Custom_statusBar barType="WHITE" />
            <View>
                <Text>First screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default First_screen;