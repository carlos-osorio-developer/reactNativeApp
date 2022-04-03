import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './src/comps/LoginForm';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Text>Hello device!</Text>
        <LoginForm />
        <StatusBar />
      </View>
    </NavigationContainer>
  );
};

export default App;
