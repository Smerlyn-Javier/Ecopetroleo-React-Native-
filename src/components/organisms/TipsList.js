import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ListItem } from 'react-native-elements'

// MOLECULES
import { Items } from '../molecules'

// SERVICES
import { ecotipsServices } from '../../services'

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

class TipsList extends Component {
    state={
        data:[]
    }
    async componentDidMount(){
        const ecotipsResult = await new ecotipsServices().getEcoTips();
        let data = ecotipsResult;
        this.setState({data});
    }
    render(){
        return (
            <View>
                {
                    this.state.data.map((element, key) => (
                        <ListItem key={key} bottomDivider={true} onPress={(event) => { console.log(event) }}>
                            <ListItem.Content>
                                <Items type='TIPS' image={element.thumbnail} title={element.title} description={element.content} />
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        )
    }
}

export default TipsList;