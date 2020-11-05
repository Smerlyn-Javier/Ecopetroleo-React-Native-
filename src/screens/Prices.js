import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet,} from 'react-native'

// COMPONENTS
import { CustomHeader, CardListPrices } from '../components/organisms'
import { Custom_ActivityIndicator } from '../components/atoms'

// STYLES
import { Colors } from '../assets/styles'

// SERVICES
import { fuelServices } from '../services'



class Prices extends Component {

    state = {
        fuels: [],
        spinner: true,
    };
    async componentDidMount() {
        let spinner = false;
        setTimeout(() => this.setState({ spinner }), 2000)

        const fuelsResponse = await new fuelServices().getFuels();
        let fuels = []

        fuelsResponse.forEach(element => {

            let obj1 = {
                date: element.fecha_str,
                fuels: []
            }
            for (const property in element) {

                switch (property) {

                    case 'ga_premium':
                        var obj2 = {
                            name: 'Gasolina Premium',
                            price: element[property],
                            coin: 'RD$',
                            color: '#061ba1',
                            icon: true
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'ga_regular':
                        var obj2 = {
                            name: 'Gasolina Regular',
                            price: element[property],
                            coin: 'RD$',
                            color: '#a10606',
                            icon: false
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'gasoil_optimo':
                        var obj2 = {
                            name: 'Gasoil Optimo',
                            price: element[property],
                            coin: 'RD$',
                            color: '#027812',
                            icon: true
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'gasoil_regular':
                        var obj2 = {
                            name: 'Gasoil Regular',
                            price: element[property],
                            coin: 'RD$',
                            color: '#cfa902',
                            icon: false
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'kerosene':
                        var obj2 = {
                            name: 'Kerosene',
                            price: element[property],
                            coin: 'RD$',
                            color: '#000000',
                            icon: true
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'glp':
                        var obj2 = {
                            name: 'GLP',
                            price: element[property],
                            coin: 'RD$',
                            color: '#de0000',
                            icon: false
                        }
                        obj1.fuels.push(obj2);
                        break
                    case 'gnv':
                        var obj2 = {
                            name: 'GNV',
                            price: element[property],
                            coin: 'RD$',
                            color: '#de0000',
                            icon: true
                        }
                        obj1.fuels.push(obj2);
                        break



                }

            }

            fuels.push(obj1)

        });
        this.setState({ fuels });

    }


    render() {
        return (
            <View >
                <CustomHeader name='Precios' context={this.props} />
                <Custom_ActivityIndicator spinner={this.state.spinner} />
                <ScrollView style={styles.container}>
                    <CardListPrices fuelsProps={this.state.fuels} />
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16
    },
})
export default Prices;