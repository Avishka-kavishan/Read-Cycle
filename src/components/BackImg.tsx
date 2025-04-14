import { View, Text, ImageBackground, StyleSheet, ImageSourcePropType } from 'react-native'
import React, { Children } from 'react'

interface BackImgProps{
    children: React.ReactNode
}

const BackImg: React.FC<BackImgProps> = ({children}) => {
  return (
    <ImageBackground source={require('../assets/img/ss.jpg')}
    resizeMode='cover' style={styles.img} >
        <View style={{ flex: 1 }}>
            {children}
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    img: {
      flex: 1,
    },
  })

export default BackImg