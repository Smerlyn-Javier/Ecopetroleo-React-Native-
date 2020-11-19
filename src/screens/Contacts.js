import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity,Linking } from 'react-native'

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MapView, { Marker} from 'react-native-maps';


// COMPONENTS
import { CustomHeader } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'

function Contacts(props) {
    return (
        <View >
            <CustomHeader name='Contacto' context={props} />
            <ScrollView style={styles.container}>



                <View style={styles.mapContainer}>
                   

                <MapView
                        style={styles.mapIos}
                        zoomEnabled={false}
                        showsUserLocation={true}
                        // maxZoomLevel={7}
                        // minZoomLevel={9}
                        initialRegion={{
                            latitude: 18.4452807,
                            longitude: -69.9748689,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >

                    
                        <Marker
                            coordinate={{ latitude: 18.4452807, longitude: -69.9748689 }}
                            title='Ubicación de contacto'
                            image={require('../assets/images/resources/Marker-icon-ios.png')}
                        />

                    

                    </MapView>
                </View>





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
                    onPress={()=>{Linking.openURL(`https://maps.apple.com/?q=ecopetroleo&ll=18.4452807,-69.9748689`)}}

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
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://facebook.com/EcoPetroleoDom')}} >
                        <Icon name="facebook" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://youtube.com/channel/UCCgwNPnYq0yziwtOsGAbxBg')}}>
                        <Icon name="youtube" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://twitter.com/ecopetroleodom?lang=es')}}>
                        <Icon name="twitter" size={25} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL('http://instagram.com/ecopetroleord/?hl=es-la')}}>
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
                    onPress={()=>{Linking.openURL(`tel:+1(809)508-6247`)}}
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
                    onPress={()=>{Linking.openURL(`mailto:info@ecopetrodom.com`)}}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    mapContainer:{
         height:300,
         marginBottom:10
    },
    mapIos: {
        height: 300,
        width: '100%'
    },
    containerIos: {

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
        marginBottom:150,
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