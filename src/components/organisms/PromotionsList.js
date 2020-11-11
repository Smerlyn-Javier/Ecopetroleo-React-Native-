import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ListItem } from 'react-native-elements'

// MOLECULES
import { Items } from '../molecules'

// SERVICES
import { promotionsEventsServices } from '../../services'

class PromotionsList extends Component {

    state = {
        promotionsEventsList:[]
    }
    async componentDidMount(){
        const promotionsEventsResult = await new promotionsEventsServices().getPromotionsEvents();
        console.log(promotionsEventsResult)
        let promotionsEventsList = promotionsEventsResult;
        this.setState({promotionsEventsList})
    }
    render() {
        return (

            <View>
                {
                    this.state.promotionsEventsList.map((element, key) => (
                        <ListItem key={key} bottomDivider={true} onPress={() => { 
                            this.props.context.navigation.navigate('Info_promotions')
                            this.props.context.navigation.navigate(
                                'Info_promotions',
                                {
                                    idPromotionEvent: element.id
                                }
                                )
                             }}>
                            <ListItem.Content>
                                <Items type='PROMOTIONS' image={element.thumbnail} title={element.title} description={element.content} />
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        )

    }

}

export default PromotionsList;