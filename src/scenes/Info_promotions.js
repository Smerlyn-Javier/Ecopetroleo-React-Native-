import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'


// COMPONENTS
import { CustomHeader } from '../components/organisms'

// SERVICES
import { promotionsEventsServices } from '../services'

// STYLES
import { Colors } from '../assets/styles'

class InfoPromotions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
        }
    }
    async setPromotionEvent(idPromotionEvent) {
        const promotionEventResult = await new promotionsEventsServices().getPromotionEvent(idPromotionEvent)
        console.log(promotionEventResult)
        let data = promotionEventResult
        this.setState({ data })
    }
    render() {
        const { idPromotionEvent } = this.props.route.params
        this.setPromotionEvent(idPromotionEvent);
        return (
            <View>
                <CustomHeader name='' context={this.props} />
                <ScrollView>
                    <View style={styles.heroContainer}>
                        <Image style={styles.image} source={{uri:this.state.data.thumbnail}} />
                    </View>
                    <View style={styles.promotionInfoContainer}>
                        <Text style={styles.title}>{this.state.data.title}</Text>
                        <Text style={styles.creator}>Publicado ayer por admin</Text>
                        <Text style={styles.description}>{String(this.state.data.content).replace('<p>','').replace('</p>','')}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    heroContainer: {},
    image: {
        width: '100%',
        resizeMode:'cover',
        height: 500,
    },
    promotionInfoContainer: {
        // backgroundColor:'red',
        marginHorizontal: 15,
        padding: 10,
        marginBottom:50
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: Colors.BLUE_LIGHT
    },
    creator: {
        marginVertical: 10,
        fontSize: 12,
        fontWeight: '400',
        color: 'gray'
    },
    description: {
        textAlign: 'justify',
        fontSize: 12,
        fontWeight: '400'
    }
})
export default InfoPromotions;