import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


function Feed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
        </View>
    );
}

function Article(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Article Screen</Text>
            <Button
                title="Learn More"
                color="#841584"
                onPress={() => props.navigation.openDrawer()} />
        </View>
    );
}


// SCENES
import { First_screen, Splash_screen, Sign_up, Log_in } from '../../scenes'

const Drawer = createDrawerNavigator();

function Leftsidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContentOptions={{
                    activeTintColor: '#e91e63',
                    itemStyle: { marginVertical: 30 },

                }}>

                <Drawer.Screen
                    name="Splash_screen"
                    component={Splash_screen}
                    options={{ drawerLabel: 'Splash screen' }, { gestureEnabled: true }}
                />

                <Drawer.Screen
                    name="First_screen"
                    component={First_screen}
                    options={{ drawerLabel: 'First screen' }, { gestureEnabled: true }}
                />

                <Drawer.Screen
                    name="Log_in"
                    component={Log_in}
                    options={{ drawerLabel: 'Log in' }, { gestureEnabled: true }}
                />

                <Drawer.Screen
                    name="Sign_up"
                    component={Sign_up}
                    options={{ drawerLabel: 'Sign up' }, { gestureEnabled: true }}
                />


            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Leftsidebar;