import React, { Component } from "react";
import { StatusBar, SafeAreaView, Platform } from "react-native";

// CONF PLATFORMS 
const confPlatform = Platform.select({
    ios: {
        backgroundColor: 'white',
        barStyle: 'dark-content',
    },
    android: {
        backgroundColor: 'black',
        barStyle: 'light-content',
    }
})

const confPlatformBlack = Platform.select({
    ios: {
        backgroundColor: 'black',
        barStyle: 'light-content',
    },
    android: {
        backgroundColor: 'black',
        barStyle: 'light-content',
    }
})

const confPlatformWhite = Platform.select({


    ios: {
        backgroundColor: 'white',
        barStyle: 'dark-content',
    },
    android: {
        backgroundColor: 'white',
        barStyle: 'dark-content',
    }
})

class Custom_statusBar extends Component {
    render() {
        if (this.props.barType === 'BLACK') {
            return (
                <SafeAreaView>
                    <StatusBar hidden={false} backgroundColor={confPlatformBlack.backgroundColor} barStyle={confPlatformBlack.barStyle} />
                </SafeAreaView>
            );
        }
        else if (this.props.barType === 'WHITE') {
            return (
                <SafeAreaView>
                    <StatusBar hidden={false} backgroundColor={confPlatformWhite.backgroundColor} barStyle={confPlatformWhite.barStyle} />
                </SafeAreaView>
            );
        }

        else if (this.props.barType === 'HIDDEN') {
            return (
                <SafeAreaView>
                    <StatusBar hidden={true} backgroundColor={confPlatformBlack.backgroundColor} barStyle={confPlatformBlack.barStyle} />
                </SafeAreaView>
            );
        }
        else {
            return (
                <SafeAreaView>
                    <StatusBar hidden={false} backgroundColor={confPlatform.backgroundColor} barStyle={confPlatform.barStyle} />
                </SafeAreaView>
            );
        }
    }
}

export default Custom_statusBar;