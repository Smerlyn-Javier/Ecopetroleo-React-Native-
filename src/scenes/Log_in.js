import React, { Component, useState } from 'react'
import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'


import { Input } from 'react-native-elements';


//STYLES 
import { Colors } from '../assets/styles'

// SERVICES
import { loginServices } from '../services'

// IMAGES
const vertical_logo = require('../assets/images/resources/vertical-logo.png')



class Log_in extends Component {

    constructor(props) {
        super(props);
        this.onPressHide_or_Show = this.onPressHide_or_Show.bind(this);
        this.state = {
            username: '',
            password: '',
            loginResponse: '',
            Hide_or_Show: true,
            showLoading:false,
        }
    }

    async login(username, password) {
        const loginResponse = await new loginServices().userLogin(username, password);
        this.setState({ loginResponse })
    }

     onPressHide_or_Show() {

        if (this.state.Hide_or_Show) {
            var Hide_or_Show = false
            this.setState({ Hide_or_Show })
        }
        else {
            var Hide_or_Show = true
            this.setState({ Hide_or_Show })
        }

    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Image style={styles.image} source={vertical_logo} />
                    </View>

                    <View style={styles.inputContainer}>
                        
                        <Input
                            placeholder='UserName'
                            errorStyle={{ color: 'red' }}
                            errorMessage=''
                            inputStyle={styles.inputStyle}
                            onChangeText={(username) => { this.setState({ username }) }}
                        />

                        <Input
                            placeholder="Contraseña"
                            secureTextEntry={this.state.Hide_or_Show}
                            inputStyle={styles.inputStyle}
                            onChangeText={(password) => { this.setState({ password }) }}
                            rightIcon={
                                <TouchableOpacity onPress={this.onPressHide_or_Show}>{
                                    this.state.Hide_or_Show == true ? <Text style={styles.textColor}>SHOW</Text> : <Text style={styles.textColor}>HIDE</Text>
                                }
                                </TouchableOpacity>
                            }
                        />

                        {
                        this.state.showLoading == true ? <Text style={{color:'grey', textAlign:'center', marginBottom:10}}>Cargando...</Text> : <Text></Text>
                        }

                        <TouchableOpacity style={styles.button1}
                            onPress={() => {
                                this.login(this.state.username, this.state.password)
                                this.setState({showLoading:true})
                                setTimeout(() => {

                                    if (this.state.loginResponse == 'ok') {
                                        this.props.navigation.navigate('MapViewScreen')
                                    }
                                    else {
                                        this.setState({showLoading:false})
                                        alert('Datos invalidos.')
                                    }
                                }, 5000)

                            }} >
                            <Text style={styles.button1_text}>Ingresar</Text>
                        </TouchableOpacity>



                        {/* <Text style={styles.errorText}>*Error</Text> */}

                        <View style={styles.labels}>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Password_recovery') }}>
                                <Text style={styles.haveAcount}>¿Olvidaste tu contraseña?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sign_up') }}>
                                <Text style={styles.haveAcount}>Registrarte</Text>
                            </TouchableOpacity>
                        </View>

                    </View>



                </ScrollView>

            </SafeAreaView >
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
    },
    labels: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default Log_in;