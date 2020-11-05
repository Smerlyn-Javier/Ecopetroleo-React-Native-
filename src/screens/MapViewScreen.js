// import React from 'react';
// import { View, Text, StyleSheet, Platform } from 'react-native';

// import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// // COMPONENTS
// import { CustomHeader } from '../components/organisms'

// // SERVICES
// import { stationsServices } from '../services'

// let dataStation=[];

// async function getStations() {
//     const stations = await new stationsServices().getStations();
//     dataStation = stations;
// }

// function MapViewScreen(props) {




//     getStations();


//     if (Platform.OS === 'ios') {

//         return (
//             <View style={styles.containerIos}>
//                 <CustomHeader name='Encuentrate' context={props} />

//                 <MapView
//                     style={styles.mapIos}
//                     initialRegion={{
//                         latitude: 18.735693,
//                         longitude: -70.162651,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     <Marker
//                         coordinate={{ latitude: 18.735693, longitude: -70.162651 }}
//                         title='ESTACION II'
//                         image={require('../assets/images/resources/Marker-icon-ios.png')}
//                         onPress={() => { props.navigation.navigate('Info_station') }}
//                     />

//                 </MapView>
//             </View>
//         )
//     }
//     else if (Platform.OS === 'android') {

//         return (
//             <View style={styles.containerAndroid}>
//                 <CustomHeader name='Encuentranos' context={props} />

//                 <MapView
//                     provider={PROVIDER_GOOGLE}
//                     style={styles.mapAndroid}
//                     initialRegion={{
//                         latitude: 18.735693,
//                         longitude: -70.162651,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     <Marker
//                         coordinate={{ latitude: 18.735693, longitude: -70.162651 }}
//                         title='ESTACION II'
//                         image={require('../assets/images/resources/Marker-icon.png')}
//                         onPress={() => { props.navigation.navigate('Info_station') }}
//                     />

//                 </MapView>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     mapIos: {
//         height: '100%'
//     },
//     containerIos: {

//     },

//     mapAndroid: {
//         height: '100%',
//     },

//     containerAndroid: {

//     },
// })

// export default MapViewScreen;






import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

// COMPONENTS
import { CustomHeader } from '../components/organisms'

// SERVICES
import { stationsServices } from '../services'


class MapViewScreen extends Component {

    state = {
        stations: [],
    };

    async componentDidMount() {
        const stationsResponse = await new stationsServices().getStations();

        

        let stations = [];
        stationsResponse.forEach(element => {
            let obj ={
                id: element.id,
                post_title: element.post_title,
                latitud: Number(element.latitud.replace(',','')),
                longitud: Number(element.longitud.replace(',','')),
                direccion: element.direccion,
                telefono: element.telefono
            }
            stations.push(obj)
        });
        this.setState({ stations })
    }
    render() {
        console.log(this.state.stations)

        if (Platform.OS === 'ios') {

            return (
                <View style={styles.containerIos}>
                    <CustomHeader name='Encuentrate' context={this.props} />

                    <MapView
                        style={styles.mapIos}
                        initialRegion={{
                            latitude: 18.735693,
                            longitude: -70.162651,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {

                            this.state.stations.map((element, key) => (
                                <Marker
                                    key={key}
                                    coordinate={{ latitude: element.latitud, longitude: element.longitud }}
                                    title={element.post_title}
                                    image={require('../assets/images/resources/Marker-icon-ios.png')}
                                    onPress={() => { this.props.navigation.navigate('Info_station') }}
                                />
                            ))
                        }


                    </MapView>
                </View>
            )
        }


        else if (Platform.OS === 'android') {

            return (
                <View style={styles.containerAndroid}>
                    <CustomHeader name='Encuentranos' context={this.props} />

                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={styles.mapAndroid}
                        initialRegion={{
                            latitude: 18.735693,
                            longitude: -70.162651,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                        {

                            this.state.stations.map((element, key) => (
                                <Marker
                                    key={key}
                                    coordinate={{ latitude: element.latitud, longitude: element.longitud }}
                                    title={element.post_title}
                                    image={require('../assets/images/resources/Marker-icon.png')}
                                    onPress={() => { this.props.navigation.navigate('Info_station') }}
                                />
                                
                            ))
                        }
                    </MapView>
                </View>
            )
        }
    }



}

const styles = StyleSheet.create({
    mapIos: {
        height: '100%'
    },
    containerIos: {

    },

    mapAndroid: {
        height: '100%',
    },

    containerAndroid: {

    },
})

export default MapViewScreen;