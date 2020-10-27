import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ListItem } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function FuelItems(props) {

    return (
        <View style={styles.listContainer}>
            {/* {
                props.fuels.map((element, key) => (
                    <View style={styles.block}>


                    <ListItem key={key} bottomDivider={false} containerStyle={{padding:0}}>
                        <ListItem.Content>
                            <View style={styles.container}>
                                <Text>A</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    </View>
                ))
            } */}
            {
                props.fuels.map((element, key) => (
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: 5,
                        padding: 10,
                        borderRadius: 10,
                        backgroundColor: element.color
                    }}>
                        <Text style={styles.text}>{element.name}</Text>
                        <View style={styles.elementPrice}>
                            {
                                element.icon == true ?  <Icon name="arrow-up-bold" size={20} color={'#ffffff'} /> : <Icon name="arrow-down-bold" size={20} color={'#ffffff'} />
                            }
                            <Text style={styles.text}>{element.coin}</Text>
                            <Text style={styles.text}>{element.price}</Text>
                        </View>
                    </View>

                ))

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        height: 20,
    },
    listContainer: {
        backgroundColor: 'white',
        width: '100%',
    },
    block: {
        backgroundColor: 'red',
        height: 10,
        width: '100%',
    },
    elementPrice: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
        marginHorizontal: 2,
        marginVertical: 3
    }
})
export default FuelItems;