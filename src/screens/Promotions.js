import React from 'react';
import { View, Text, StyleSheet, RefreshControl, ScrollView } from 'react-native';


// COMPONENTS
import { CustomHeader,PromotionsList } from '../components/organisms'


function wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

function Promotions(props) {


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        wait(2000).then(() => setRefreshing(false));
    }, [refreshing]);





    return (
        <View style={styles.container}>
            <CustomHeader name='Promociones y eventos' context={props} />
            <ScrollView style={styles.scrollContainer}  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <PromotionsList context={props}/>
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
export default Promotions;