import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text,Button } from 'react-native';

const Stack = createStackNavigator();

function Home(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button 
                title="Learn More"
                color="#841584"
                onPress={() => console.log(props)} />
        </View>
    );
}
function Notifications() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Notifications</Text>
        </View>
    );
}
function Profile() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Profile</Text>
        </View>
    );
}
function Settings() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings</Text>
        </View>
    );
}


function NavigationStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
        name="Home"
        component={Home}
        options={{
        headerTitle: "Si, pero no ...",
          headerLeft: () => (
            <Button
              onPress={() => console.log("no me toques!!!!")}
              title="Info"
              color="#000"
            />
          ),
        }}
      />
                {/* <Stack.Screen name="Home" component={Home} /> */}
                <Stack.Screen name="Notifications" component={Notifications} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationStack;