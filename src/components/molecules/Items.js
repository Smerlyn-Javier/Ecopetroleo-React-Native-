import React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';

// STYLES
import {Colors} from '../../assets/styles'
function Items(props) {

    if (props.type === 'PROMOTIONS') {
        return (
            <View style={styles.promotionItemContainer}>

                <View style={styles.promotionsImage}>
                    <Image style={styles.promoImage} source={{uri:props.image}} />
                </View>

                <View style={styles.promotionsDescription}>
                    <Text style={styles.promoTitle}>{props.title}</Text>
                    <Text style={styles.promoDescription}>{props.description}</Text>
                </View>

            </View>
        )
    }
    else if (props.type === 'TIPS') {
        return (
            <View style={styles.tipsItemContainer}>

            <View style={styles.tipsImage}>
                <Image style={styles.tipsImage} source={props.image} />
            </View>

            <View style={styles.tipsDescriptionContainer}>
                <Text style={styles.tipsTitle}>{props.title}</Text>
                <Text style={styles.tipsDescription}>{props.description}</Text>
            </View>

        </View>
        )
    }
    else if (props.type === 'PRICES') {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
    else {
        return (
            <View>
                <Text></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // PROMOTION
    promotionItemContainer: {
        display:'flex',
        flexDirection:'row',
        width:'100%',
        paddingRight:100
    },
    promoImage:{
        height:100,
        width:100
    },
    promotionsDescription:{
      paddingHorizontal:10,
      width:'100%'
      
    },
    promoTitle:{
     fontSize:16,
     fontWeight:'bold',
     color:Colors.BLUE_LIGHT,
     marginBottom:5
    },
    promoDescription:{
     fontSize:12,
     fontWeight:'200'
    },

    // TIPS
    tipsItemContainer: {
        display:'flex',
        flexDirection:'row',
    },
    tipsImage:{
        height:100,
        width:100
    },
    tipsDescriptionContainer:{
      paddingHorizontal:10,
      
    },
    tipsTitle:{
     fontSize:16,
     fontWeight:'bold',
     color:Colors.BLUE_LIGHT,
     marginBottom:5
    },
    tipsDescription:{
     fontSize:12,
     fontWeight:'200'
    },
})
export default Items;