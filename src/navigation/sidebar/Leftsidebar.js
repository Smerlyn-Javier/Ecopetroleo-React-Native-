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

// DRAWER CONTENT 
import DrawerContent from './DrawerContent'

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
import { First_screen, Splash_screen, Sign_up, Log_in, Password_recovery } from '../../scenes'
// SCREEMS 
import { About_us } from '../../screens'
const Drawer = createDrawerNavigator();

// STYLES
import {Colors} from '../../assets/styles'

function Leftsidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
            
            drawerType="slide"
            drawerPosition="left"
                drawerContentOptions={{
                    activeTintColor: "red",
                    activeBackgroundColor:'red',
                    itemStyle: {color:'white'},

                }}
                
                drawerContent={props => <DrawerContent {...props}/> }
                >
                <Drawer.Screen
                    name="Splash_screen"
                    component={Splash_screen}
                    options={
                        {
                            gestureEnabled: false,
                            drawerLabel: 'Splash screen',
                            
                        }
                    }
                />

                <Drawer.Screen
                    name="First_screen"
                    component={First_screen}
                    options={
                        {
                            gestureEnabled: false,
                            drawerLabel: 'First screen'
                        }
                    }
                />

                <Drawer.Screen
                    name="Log_in"
                    component={Log_in}
                    options={
                        {
                            gestureEnabled: false,
                            drawerLabel: 'Log in'
                        }
                    }
                />

                <Drawer.Screen
                    name="Sign_up"
                    component={Sign_up}
                    options={
                        {
                            gestureEnabled: false,
                            drawerLabel: 'Sign up'
                        }
                     
                    }
                />

                <Drawer.Screen
                    name="Password_recovery"
                    component={Password_recovery}
                    options={
                        {
                            gestureEnabled: false,
                            drawerLabel: 'Password recovery',
                        }
                    }
                />

                <Drawer.Screen
                    name="About_us"
                    component={About_us}
                    options={
                        {
                            gestureEnabled: true,
                            drawerLabel: 'About us',
                        }
                    }
                />


            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Leftsidebar;