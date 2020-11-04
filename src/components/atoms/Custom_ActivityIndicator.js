import React from 'react'
import { View, StyleSheet } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';

function Custom_ActivityIndicator(props) {
    return (
        <View style={styles.container}>
            <Spinner
                visible={props.spinner}
                textContent={'Cargando...'}
                textStyle={styles.spinnerTextStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
    },
    spinnerTextStyle: {
        fontWeight: '300',
        color: 'white',
        textAlign: "center"
    },
});

export default Custom_ActivityIndicator;