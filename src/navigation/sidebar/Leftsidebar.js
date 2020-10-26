import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



// DRAWER CONTENT 
import DrawerContent from './DrawerContent'

// SCENES
import { First_screen, Splash_screen, Sign_up, Log_in, Password_recovery } from '../../scenes'
// SCREEMS 
import { About_us, Promotions, Tips, Contacts, Prices } from '../../screens'
const Drawer = createDrawerNavigator();

// STYLES
import { Colors } from '../../assets/styles'

function Leftsidebar() {
    return (
        <NavigationContainer>
            <Drawer.Navigator

                drawerType="slide"
                drawerPosition="left"
                drawerContentOptions={{
                    activeTintColor: "red",
                    activeBackgroundColor: 'red',
                    itemStyle: { color: 'white' },

                }}

                drawerContent={props => <DrawerContent {...props} />}
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

                <Drawer.Screen
                    name="Promotions"
                    component={Promotions}
                    options={
                        {
                            gestureEnabled: true,
                            drawerLabel: 'Promotions',
                        }
                    }
                />

                <Drawer.Screen
                    name="Tips"
                    component={Tips}
                    options={
                        {
                            gestureEnabled: true,
                            drawerLabel: 'Tips',
                        }
                    }
                />


                <Drawer.Screen
                    name="Contacts"
                    component={Contacts}
                    options={
                        {
                            gestureEnabled: true,
                            drawerLabel: 'Contacts',
                        }
                    }
                />

                <Drawer.Screen
                    name="Prices"
                    component={Prices}
                    options={
                        {
                            gestureEnabled: true,
                            drawerLabel: 'Prices',
                        }
                    }
                />


            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Leftsidebar;