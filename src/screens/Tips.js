import React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';


// COMPONENTS
import { CustomHeader,TipsList } from '../components/organisms'




function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function Tips(props) {


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);





    return (
        <View style={styles.container}>
            <CustomHeader name='ECO Tips' context={props} />
            <ScrollView style={styles.scrollContainer}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <TipsList/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    scrollContainer:{
        padding:0
    }
})
export default Tips;