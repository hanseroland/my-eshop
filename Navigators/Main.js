import React from 'react'
import { View, Text } from 'react-native'
import {createBottomNavigator} from '@react-navigator/bottom-naviagtion'


const Tab = createBottomNavigator();

const Main = () => {
  return (
    <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
            keyboardHidesTabBar:true,
            showLabel:false,
            activeTintColor:"#36794D"
        }}
    
    />
     
  )
}

export default Main