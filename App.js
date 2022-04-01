import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import LoginForm from './src/components/loginForm'

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })

  return (
  <View style={styles.container}>
    <Text>Hello world!</Text>
    <Text>Hello device!</Text>
    <LoginForm />
    <StatusBar />
  </View>
  )
}

export {
  App,
}
