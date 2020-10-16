import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ListItem } from 'react-native-elements'

// MOLECULES
import { Items } from '../molecules'


const data = [
    {
        title: 'Titulo del tip',
        description: 'Descripcion del tip',
        testImage: require('../../assets/images/resources/Test.png'),
    },
    {
        title: 'Titulo del tip',
        description: 'Descripcion del tip',
        testImage: require('../../assets/images/resources/Test.png'),
    },
]

function TipsList(props) {
    return (
        <View>
            {
                data.map((element, key) => (
                    <ListItem key={key} bottomDivider={true} onPress={(event) => { console.log(event) }}>
                        <ListItem.Content>
                            <Items type='TIPS' image={element.testImage} title={element.title} description={element.description} />
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}

export default TipsList;