import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// SATYLES
import { Colors } from '../../assets/styles'

function DrawerContent(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <SafeAreaView>
                    <View>

                        <Drawer.Section style={styles.drawerSection} >

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="account-multiple" size={size} color={color}
                                    />
                                )}
                                label="SOBRE NOSOTROS"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('About_us') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="google-maps" size={size} color={color}
                                    />
                                )}
                                label="ENCUENTRANOS"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('First_screen') }}
                            />


                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="gas-station" size={size} color={color}
                                    />
                                )}
                                label="PRECIOS DE COMBUSTIBLES"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('Prices') }}
                            />


                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="newspaper" size={size} color={color}
                                    />
                                )}
                                label="PROMOCIONES Y EVENTOS"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('Promotions') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="notebook-outline" size={size} color={color}
                                    />
                                )}
                                label="ECO TIPS"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('Tips') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="face-agent" size={size} color={color}
                                    />
                                )}
                                label="CONTACTO Y AYUDA"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('Contacts') }}
                            />

                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon
                                        name="tools" size={size} color={color}
                                    />
                                )}
                                label="CONFIGURACIÓN"
                                labelStyle={styles.labelStyle}
                                onPress={() => { props.navigation.navigate('First_screen') }}
                            />





                        </Drawer.Section>

                    </View>
                </SafeAreaView>
            </DrawerContentScrollView>


            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                labelStyle={{color:Colors.RED_LIGHT}}
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={Colors.RED_LIGHT}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{fontWeight:'bold',color:Colors.RED_LIGHT}}
                    onPress={() => { props.navigation.navigate('First_screen') }}
                />
            </Drawer.Section>


        </View>
    )
}

const styles = StyleSheet.create({
    labelStyle: {
        color: 'grey',
        fontWeight:'bold'
    },
    drawerSection: {
        marginTop: 50,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})

export default DrawerContent;