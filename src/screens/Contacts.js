import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'

function Contacts(props) {
    return (
        <View >
            <CustomHeader name='Contacto' context={props} />
            <ScrollView style={styles.container}>
                <Button
                    icon={{
                        name: "my-location",
                        size: 20,
                        color: "white"
                    }}
                    iconRight={true}
                    title="COMO LLEGAR"
                    iconContainerStyle={{ marginLeft: 50 }}
                    buttonStyle={styles.buttonstyle1}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Información de Contacto</Text>



                    <Text style={styles.parrafo}>
                        Ave. Rómulo Betancourt No. 527{"\n"}
                        El Renacimiento, Sto. Dgo., DN.{"\n"}
                    </Text>

                    <Text style={styles.parrafo}>
                        Tels: +1(809)508-6247 | +(809)508-6249{"\n"}
                        Fax: 809-532-1014{"\n"}
                        Email: info@ecopetrodom.com{"\n"}
                    </Text>

                </View>

                <View style={styles.socialmediaButtons}>
                    <TouchableOpacity>
                        <Icon name="facebook" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="youtube" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="twitter" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="instagram" size={25} color='grey' />
                    </TouchableOpacity>
                </View>



                <Button
                    icon={{
                        name: "add-ic-call",
                        size: 20,
                        color: "white"
                    }}
                    iconRight={true}
                    title="Llamanos"
                    iconContainerStyle={{ marginLeft: 50 }}
                    buttonStyle={styles.buttonstyle2}
                />

                <Button
                    icon={{
                        name: "email",
                        size: 20,
                        color: "white"
                    }}
                    iconRight={true}
                    title="Envianos un mail"
                    iconContainerStyle={{ marginLeft: 50 }}
                    buttonStyle={styles.buttonstyle3}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    buttonstyle1: {
        backgroundColor: Colors.BLUE_LIGHT
    },
    buttonstyle2: {
        marginTop: 10,
        backgroundColor: Colors.GREEN_LIGHT
    },
    buttonstyle3: {
        marginTop: 10,
        backgroundColor: Colors.RED_LIGHT
    },
    textContainer: {
        marginTop: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    parrafo: {
        fontWeight: '200'
    },
    socialmediaButtons: {
        width: '50%',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
    }
})
export default Contacts;