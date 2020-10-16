import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity,Platform } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// STYLES
import { Colors, Typography } from '../../assets/styles'


function CustomHeader(props) {
    return (
        
            <View style={styles.headerContainer}>

                <TouchableOpacity onPress={() => {  props.context.navigation.openDrawer() }}>
                    <Icon name="menu" size={30} color="white" />
                </TouchableOpacity>

                <Text style={styles.textName}>{props.name}</Text>
                <Text></Text>
            </View>
      
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        flexDirection: 'row',
        alignItems: Platform.select({
            ios:'flex-end',
            android:'center'
        }),
        backgroundColor: Colors.BLUE_LIGHT,
        justifyContent: 'space-between',
        height: Platform.select({
            ios:100,
            android:50
        }),
    },

    textName: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_18,
        fontWeight: 'bold',
    }
})
export default CustomHeader;