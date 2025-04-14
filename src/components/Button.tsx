import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps{
    label: string;
    onPress: () => void;
    icon: any;
}

const Button: React.FC<ButtonProps> = ({label,onPress,icon}) => {
  return (
    <TouchableOpacity onPress={()=> onPress()} >
        <View style={styles.view} >
            <Text style={styles.text}>{label}{icon}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    view:{
        paddingHorizontal:10,
        width:150,
        paddingVertical:15,
        borderRadius:50,
        backgroundColor:"#B72A3B",
        marginTop:60
    },
    text:{
        color:"white",
        fontWeight:"bold",
        textAlign:'center',
        fontSize:20
    }
})

export default Button