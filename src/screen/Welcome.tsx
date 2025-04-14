import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../components/Logo'
import BackImg from '../components/BackImg'
import Button from '../components/Button'
import {NativeStackNavigationProp } from '@react-navigation/native-stack'


const Welcome=() => {

  return (
    <BackImg>
        <View style={styles.container}>
            <View style={styles.logo}>
                <Logo />
            </View>
            <Text style={styles.text}>Welcome</Text>
            <Text>Find your Dream Books  </Text>
            <Text>&</Text>
            <Text>Share With US!</Text>

            <Button label={'Get Started'}  />

            <Text style={styles.sponser}>Powered by ICTClub</Text>
        </View>
    </BackImg>
    
  )
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text:{
        color:'black',
        alignItems:'center',
        fontSize: 30,
        marginTop: 20,
        marginBottom:50,
        fontFamily:"LobsterTwo-Bold"
    },
    logo:{
        marginTop: 100,
        alignItems:'center',
        
    },
    header:{
        fontSize:10,
    },
    sponser:{
        color:'#928D8D',
        marginTop:70
    }
})
export default Welcome