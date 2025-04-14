import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Welcome from './src/screen/Welcome'

const App = () => {
  return (
    <View style={styles.conatiner}>
      <Welcome/>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner: {
      flex: 1,
    }
})
export default App