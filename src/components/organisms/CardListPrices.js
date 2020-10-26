import React from 'react';
import { View,Text } from 'react-native';

import { ListItem } from 'react-native-elements';

import {FuelsItems} from '../molecules'

function CardListPrices(props){
    console.log(props.fuelsProps)
    return(
        <View>
             {
                props.fuelsProps.map((element, key) => (
                    <ListItem key={key} bottomDivider={false}>
                        <Text>{element.date}</Text>
                        <ListItem.Content>
                            <FuelsItems fuels={element.fuels}/>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default CardListPrices;