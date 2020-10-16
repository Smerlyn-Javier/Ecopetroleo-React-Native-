import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ListItem } from 'react-native-elements'

// MOLECULES
import { Items } from '../molecules'


const data = [
    {
        title: 'Titulo de la promo',
        description: 'Descripcion de la promo',
        testImage: require('../../assets/images/resources/Test.png'),
    },
    {
        title: 'Titulo de la promo',
        description: 'Descripcion de la promo',
        testImage: require('../../assets/images/resources/Test.png'),
    },
]

function PromotionsList(props) {
    return (
        <View>
            {
                data.map((element, key) => (
                    <ListItem key={key} bottomDivider={true} onPress={(event) => { console.log(event) }}>
                        <ListItem.Content>
                            <Items type='PROMOTIONS' image={element.testImage} title={element.title} description={element.description} />
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default PromotionsList;