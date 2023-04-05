import React from 'react'
import { View, Text } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'


//Stack
import HomeNavigator from './HomeNavigator'

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
        initialRouteName="Accueil"
        tabBarOptions={{
            keyboardHidesTabBar:true,
            showLabel:false,
            activeTintColor:"#36794D"
        }}
    
    >
      <Tab.Screen
          name="Accueil"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon 
                color={color}  
                name="home" 
                style={{position:'relative'}}
                size={30}
                />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Panier"
          component={}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon 
                color={color}  
                name="shopping-cart" 
                style={{position:'relative'}}
                size={30}
                />
            ),
          }}
        />
        <Tab.Screen
          name="Admin"
          component={}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon 
                color={color}  
                name="cog" 
                style={{position:'relative'}}
                size={30}
                />
            ),
          }}
        />
        <Tab.Screen
          name="Profil"
          component={}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon 
                color={color}  
                name="user" 
                style={{position:'relative'}}
                size={30}
                />
            ),
          }}
        />*/}

    </Tab.Navigator>
     
  )
}

export default Main