import React from 'react'
import { View,Image, Text,StyleSheet,SafeAreaView } from 'react-native'


export default function Header() {
  return (
    <SafeAreaView style={styles.header} >
      <Image 
        source={require('../assets/logo.png')}
        resizeMode="contain"
        style={{height:50}}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    header:{
        width:"100%",
        flexDirection:'row',
        alignContent:"center",
        justifyContent:"center",
        padding:20,
        marginTop:80
    }
})