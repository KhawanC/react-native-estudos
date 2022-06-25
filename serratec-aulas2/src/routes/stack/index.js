import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Categoria } from '../../pages/Categoria';
import { Entypo, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIconStyle: {
                color: 'black'
            },
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: "#16212b",
                borderTopColor: 'transparent',
                borderRadius: 50,
                marginBottom: 15,
                marginLeft: 25,
                marginRight: 25,
                zIndex: 2
            }, tabBarActiveTintColor: '#fff',
        }}>
            <Tab.Screen name='Home' component={Home} tabBarIconStyle/>
            <Tab.Screen name='Categoria' component={Categoria}/>
        </Tab.Navigator>
    )
    
}

export default function() {
    return(
        <Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Screen name='Home' component={TabNavigator}/>
            <Screen name='Login' component={Login}/>
            
        </Navigator>
        
    )
}
