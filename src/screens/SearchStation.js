import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { Input } from 'react-native-elements';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// COMPONENTS
import { CustomHeader, StationList } from '../components/organisms'


class SearchStation extends Component {
    state = {
        data: [],
        search: '',
        showLoading:true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({showLoading:false})
        },5000)
    }

    render() {

        return (
            <View style={styles.container}>
                <CustomHeader name='Encuentra una estación' context={this.props} />

                <Input
                    placeholder='Escribe el nombre de la estación'
                    errorStyle={{ color: 'red' }}
                    errorMessage=''
                    leftIcon={
                        <Icon
                            name='magnify'
                            size={24}
                            color='black'
                        />
                    }
                    inputStyle={styles.inputStyle}
                    onChangeText={(search) => { this.setState({ search }) }}
                />

                <ScrollView>
                    <StationList word={this.state.search} context={this} />
                </ScrollView>

                {
                    this.state.showLoading == true ? <Text style={{ color: 'grey', textAlign: 'center', marginBottom: 10 }}>Cargando...</Text> : <Text></Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    inputStyle: {
        fontSize: 16
    },
})
export default SearchStation;