import React from 'react';
import { View,Text } from 'react-native';

import { ListItem } from 'react-native-elements'

function FuelItems(props){
    console.log(props.fuels)
    return(
        <View>
             {
                props.fuels.map((element, key) => (
                    <ListItem key={key} bottomDivider={false}>
                        <ListItem.Content>
                            <View>
                                <Text>Soy el elemento nieto</Text>
                            </View>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default FuelItems;