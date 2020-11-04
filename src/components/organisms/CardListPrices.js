import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ListItem } from 'react-native-elements';

import { FuelsItems } from '../molecules'

function CardListPrices(props) {
    // console.log(props.fuelsProps)
    return (
        <View>
            {
                props.fuelsProps.map((element, key) => (
                    <View style={styles.block}>
                            <Text style={styles.title}>{element.date}</Text>
                        <ListItem key={key} bottomDivider={false} style={styles.listContainer} containerStyle={{padding:0}}>

                            <ListItem.Content style={styles.itemContent} >
                                <FuelsItems fuels={element.fuels} />
                            </ListItem.Content>

                        </ListItem>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
     marginBottom:10,
     padding:0,
    },
    title:{
      textAlign:'center',
      color:'#39b54a',
      fontWeight:"600",
      marginVertical:10
    },
    listContainer: {
        flex: 1,
        // height: 200,
        padding:0,
        // flexDirection:'row',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    itemContent: {
        display:'flex',
        justifyContent:'center',
        padding:0,
        // height: 500,
        backgroundColor: 'red'
    }
})

export default CardListPrices;