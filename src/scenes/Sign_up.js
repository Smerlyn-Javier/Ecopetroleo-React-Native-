import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { State } from 'react-native-gesture-handler';

//STYLES 
import { Colors } from '../assets/styles'


// IMAGES
const vertical_logo = require('../assets/images/resources/vertical-logo.png')



function Sign_up(props) {

    let [Hide_or_Show, setHideShow] = useState(true);
    const onPress = () => setHideShow(prevHS => prevHS = !prevHS);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
            <ScrollView>
                <View style={styles.container}>
                    <Image style={styles.image} source={vertical_logo} />
                    <Text style={{ margin: 20, color: Colors.BLACK, fontWeight: 'bold' }}>CREA TU CUENTA</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        placeholder='UserName'
                        errorStyle={{ color: 'red' }}
                        errorMessage=''
                        inputStyle={styles.inputStyle}
                    />
                    <Input
                        placeholder='Nombre'
                        errorStyle={{ color: 'red' }}
                        errorMessage=''
                        inputStyle={styles.inputStyle}
                    />
                    <Input
                        placeholder='Correo'
                        errorStyle={{ color: 'red' }}
                        errorMessage=''
                        inputStyle={styles.inputStyle}
                    />

                    <Input
                        placeholder="Contraseña"
                        secureTextEntry={Hide_or_Show}
                        inputStyle={styles.inputStyle}
                        rightIcon={
                            <TouchableOpacity onPress={onPress}>{
                                Hide_or_Show == true ? <Text style={styles.textColor}>SHOW</Text> : <Text style={styles.textColor}>HIDE</Text>
                            }
                            </TouchableOpacity>
                        }
                    />

                    <TouchableOpacity style={styles.button1}
                        onPress={() => {
                            alert('You tapped the button!');
                        }} >
                        <Text style={styles.button1_text}>Registrarme</Text>
                    </TouchableOpacity>



                    <Text style={styles.errorText}>*Error</Text>

                    <TouchableOpacity onPress={() => {props.navigation.navigate('Log_in')}}>
                        <Text style={styles.haveAcount}>Ya tengo una cuenta</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        marginTop: 20,
        height: 150,
        width: '90%',
        resizeMode: "contain"
    },
    inputContainer: {
        marginTop: 0,
        padding: 20
    },
    inputStyle: {
        fontSize: 16
    },
    textColor: {
        color: Colors.BLUE_LIGHT,
    },
    button1: {
        backgroundColor: Colors.BLUE_LIGHT,
        borderColor: Colors.BLUE_LIGHT,
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 80,
        marginTop: 10
    },
    button1_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    errorText: {
        color: Colors.RED_LIGHT,
        marginTop: 15,
        textAlign: 'center',
    },
    haveAcount: {
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.BLUE_LIGHT,
    }
})

export default Sign_up;