import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { ListItem } from 'react-native-elements'

// MOLECULES
import { Items } from '../molecules'

// SERVICES
import { stationsServices } from '../../services'

class StationList extends Component {
    state = {
        data: [],
        word: '',
        dataResult: [],

    }
    async componentDidMount() {
        const StationResult = await new stationsServices().getStations();
        let data = StationResult;
        this.setState({ data });
        this.setState({ word: this.props.word })
        this.setState({dataResult:this.state.data})
    }
    componentDidUpdate(pre) {
        if (this.state.word != pre.word) {
            this.setState({ word: pre.word })
            let data = this.state.data;
            let searchText = pre.word.trim().toLowerCase();
            let dataResult = data.filter(l => {
                return l.post_title.toLowerCase().match(searchText);
            });
            this.setState({ dataResult });
        }
    }
    render() {
        return (
            <View>
                {
                    this.state.dataResult.map((element, key) => (
                        <ListItem key={key} bottomDivider={true} onPress={() => { 
                            this.props.context.props.navigation.navigate(
                            'Info_station',
                            {
                                idStation: element.id,
                                longitud: element.latitud,
                                latitud: element.latitud,
                                stationName: element.post_title,
                            }
                        ) 
                        }}>
                            <ListItem.Content>
                                <Items type='STATIONS' title={element.post_title} direcction={element.direccion} phone={element.telefono} />
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
        )
    }
}

export default StationList;