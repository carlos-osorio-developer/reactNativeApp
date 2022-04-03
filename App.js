import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';

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
      <NavigationStack />
    </NavigationContainer>
  );
};

export default App;
