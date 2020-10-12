import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";

import { Custom_statusBar } from '../components/atoms'

// STYLES 
import {Heights} from '../assets/styles'
class Splash_screen extends Component {


  goToScreen(routeName) {
    this.props.navigation.navigate(routeName)
  }

  componentDidMount() {
    setTimeout(() => {
      this.goToScreen('First_screen')
    }, 5000, this)
  }

  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <Custom_statusBar barType="HIDDEN" />
        <View style={styles.container}>
          <Image style={styles.image} source={require('../assets/images/resources/horizontal-logo.png')} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: 'white',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width:'100%',
  },
  image:{
     width:'80%',
     height: Heights.HEIGHT_20 * 5,
     resizeMode: 'cover',
  }
})

export default Splash_screen;