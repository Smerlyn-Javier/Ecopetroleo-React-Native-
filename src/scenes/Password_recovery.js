import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { Input } from 'react-native-elements';


//STYLES 
import { Colors } from '../assets/styles'

// SERVICES
import { recoveryServices } from '../services'

// IMAGES
const vertical_logo = require('../assets/images/resources/vertical-logo.png')



class Password_recovery extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            recoveryResponse:'',
        }
    }

    async recoveryPassword(username){
        const recoveryPasswordResult = await new recoveryServices().recoveryPassword(username)
        this.setState({recoveryResponse:recoveryPasswordResult})
    }

    render() {

        return (
            <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image style={styles.image} source={vertical_logo} />
                        <Text style={{ margin: 20, color: Colors.BLACK, fontWeight: 'bold' }}>RECUPERA TU CONTRASEÑA</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Input
                            placeholder='UserName'
                            errorStyle={{ color: 'red' }}
                            errorMessage=''
                            inputStyle={styles.inputStyle}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />

                        <TouchableOpacity style={styles.button1}
                            onPress={() => {
                                this.recoveryPassword(this.state.username);
                            }} >
                            <Text style={styles.button1_text}>Recuperar mi contraseña</Text>
                        </TouchableOpacity>



                        {/* <Text style={styles.errorText}>{this.state.recoveryResponse}</Text> */}
                        <Text style={styles.responseText}>{this.state.recoveryResponse}</Text>

                        <View style={styles.labels}>

                            <TouchableOpacity onPress={() => { props.navigation.navigate('Log_in') }}>
                                <Text style={styles.haveAcount}>Ingresar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { props.navigation.navigate('Sign_up') }}>
                                <Text style={styles.haveAcount}>Registrate</Text>
                            </TouchableOpacity>
                        </View>

                    </View>



                </ScrollView>

            </SafeAreaView>
        )
    }

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
        paddingHorizontal: 50,
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
    responseText:{
        color: Colors.GREEN_LIGHT,
        marginTop: 15,
        textAlign: 'center',
    },
    haveAcount: {
        marginTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.BLUE_LIGHT,
    },
    labels: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Password_recovery;