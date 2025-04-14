import { View, Text, Image, StyleProp,ImageStyle } from 'react-native'
import React from 'react'

const Logo: React.FC = () => {
    const imageStyle: StyleProp<ImageStyle> = {
        width: 300,
        height: 300,
        resizeMode: 'cover'
    }
  return (
    <View>
      <Image source={require('../assets/img/Logo.png')} style={imageStyle} />
    </View>
  )
}

export default Logo