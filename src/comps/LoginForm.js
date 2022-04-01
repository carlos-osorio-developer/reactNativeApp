import React from 'react';
import { View, TextInput, Button } from 'react-native';

const LoginForm = () => (
  <View>
    <TextInput placeholder='Email' />
    <TextInput placeholder='Contraseña' />
    <Button title='Enviar' onPress={() => {console.log('Enviado')}} />
  </View>
);

export default LoginForm;
