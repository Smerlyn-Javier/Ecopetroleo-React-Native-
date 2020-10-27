import React from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'


// COMPONENTS
import { CustomHeader } from '../components/organisms'

// STYLES
import { Colors } from '../assets/styles'

function InfoTips(props) {
    return (
        <View>
            <CustomHeader name='' context={props} />
            <ScrollView>
                <View style={styles.heroContainer}>
                    <Image style={styles.image} source={require('../assets/images/resources/Test.png')}/>
                </View>
                <View style={styles.tipsInfoContainer}>
                    <Text style={styles.title}>Ecopetroleo Patrocina Rally Los Compadres en la provincia Hato Mayor</Text>
                    <Text style={styles.creator}>Publicado ayer por admin</Text>
                    <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    heroContainer: {},
    image:{
        width:'100%',
        resizeMode:'cover',
        height:500,
    },
    tipsInfoContainer:{
        // backgroundColor:'red',
        marginHorizontal:15,
        padding:10
    },
    title:{
      fontSize:18,
      fontWeight:'700',
      color:Colors.BLUE_LIGHT
    },
    creator:{
        marginVertical:10,
        fontSize:12,
        fontWeight:'400',
        color:'gray'
    },
    description:{
        textAlign:'justify',
        fontSize:12,
        fontWeight:'400'
    }
})
export default InfoTips;