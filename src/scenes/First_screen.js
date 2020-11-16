import React from 'react';
import { SafeAreaView, Text, View, ImageBackground, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';

// COMPONENTS
import { Custom_statusBar } from '../components/atoms'

// IMAGES
const arco_image = require('../assets/images/resources/arco-image.png');
const horizontal_logo = require('../assets/images/resources/horizontal-logo.png');
const background_image = require('../assets/images/resources/first-screen-background.png');

// STYLES
import { Colors, Typography } from '../assets/styles'

function First_screen(props) {
    return (

        <View style={styles.container}>
            <Custom_statusBar barType="HIDDEN" />

            <ImageBackground source={background_image} style={styles.background_image}>

                <Image source={arco_image} style={styles.arco_image} >
             
                </Image>

                <Image source={horizontal_logo} style={styles.horizontal_logo} />

                <View style={styles.background_blue}>

                    <Text style={styles.text1}>Mantente más informado para
                    <Text style={styles.text2}> llegar más lejos</Text>
                    </Text>



                    <TouchableOpacity style={styles.button1}
                        onPress={() => {
                            props.navigation.navigate('Log_in')
                        }} >
                        <Text style={styles.button1_text}>Iniciar sesión</Text>


                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button2}
                        onPress={() => {
                            props.navigation.navigate('Sign_up')
                        }} >
                        <Text style={styles.button2_text}>Registrarme</Text>
                    </TouchableOpacity>





                </View>

            </ImageBackground>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    background_image: {
        flex: 1,
        resizeMode: "cover",
    },
    arco_image: {
        flex: 1,
        zIndex: 2,
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: "flex-start",
    },
    background_blue: {
        flex: 1,
        zIndex: 0,
        padding: 10,
        height: '100%',
        alignItems: 'center',
        paddingTop: "80%",
        justifyContent: 'center',
        backgroundColor: 'rgba(30, 70, 155,0.8)',
    },
    horizontal_logo: {
        position: 'absolute',
        zIndex:3,
        height: "50%",
        width: "80%",
        resizeMode: 'contain',
        marginHorizontal:'10%'
    },
    text1: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_18 + 1,
        fontWeight: "200",
        width: "80%",
        marginBottom: 40
    },
    text2: {
        color: Colors.WHITE,
        fontSize: Typography.FONT_SIZE_18 + 1,
        fontWeight: "bold",
    },

    button1: {
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 25,
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 80,
    },
    button1_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    button2: {
        backgroundColor: Colors.GREEN_LIGHT,
        borderColor: Colors.GREEN_LIGHT,
        borderWidth: 2,
        borderRadius: 25,
        // marginBottom: 100,
        paddingVertical: 10,
        paddingHorizontal: 80,
    },
    button2_text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});


export default First_screen;