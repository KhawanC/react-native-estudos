import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Ionicons } from '@expo/vector-icons'
import { Categoria } from '../../pages/Categoria';
import { Favorito } from '../../pages/Favorito';
import { Carrinho } from '../../pages/Carrinho';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home-outline' : 'home-outline';
              } else if (route.name === 'Categoria') {
                iconName = focused ? 'apps-outline' : 'apps-outline';
              } else if (route.name === 'Favorito') {
                iconName = focused ? 'heart-outline' : 'heart-outline';
              } else if (route.name === 'Carrinho') {
                iconName = focused ? 'cart-outline' : 'cart-outline';
              } 
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                backgroundColor: "#0f131a",
                borderTopColor: 'transparent',
                borderRadius: 50,
                marginBottom: 15,
                marginLeft: 25,
                marginRight: 25,
                zIndex: 2
            }
          })}>
            <Tab.Screen name='Home' component={Home} options={{
                title: 'Delivery',
                headerStyle: {
                    backgroundColor: '#0f131a'
                }, headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginLeft: 15
                }, headerTitleAlign: 'left',
                headerTintColor: '#ffff',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
            }}/>
            <Tab.Screen name='Categoria' component={Categoria} options={{
                title: 'Categorias',
                headerStyle: {
                    backgroundColor: '#0f131a'
                }, headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginLeft: 15
                }, headerTitleAlign: 'left',
                headerTintColor: '#ffff',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
            }}/>
            <Tab.Screen name='Favorito' component={Favorito} options={{
                title: 'Favorito',
                headerStyle: {
                    backgroundColor: '#0f131a'
                }, headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginLeft: 15
                }, headerTitleAlign: 'left',
                headerTintColor: '#ffff',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
            }}/>
            <Tab.Screen name='Carrinho' component={Carrinho} options={{
                title: 'Carrinho',
                headerStyle: {
                    backgroundColor: '#0f131a'
                }, headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    marginLeft: 15
                }, headerTitleAlign: 'left',
                headerTintColor: '#ffff',
                headerShadowVisible: false,
                headerBackTitleVisible: false,
            }}/>
        </Tab.Navigator>
    )
    
}

export default function() {
    return(
        <Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
            <Screen name='Home' component={TabNavigator}/>
            <Screen name='Login' component={Login}/>
            <Screen name='Categoria' component={Categoria}/>
            <Screen name='Favorito' component={Favorito}/>
            <Screen name='Carrinho' component={Carrinho}/>
        </Navigator>
        
    )
}
