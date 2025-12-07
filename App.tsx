// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Birazdan oluşturacağımız sayfaları buraya çağırıyoruz
import LoginScreen from './src/screens/LoginScreen'; 
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';

// Stack yapısını kuruyoruz
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        
        {/* Giriş Ekranı */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Giriş Yap' }} 
        />

        {/* Kayıt Ekranı */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Kayıt Ol' }} 
        />

        {/* Ana Ekran (Postların olduğu yer) */}
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Ana Sayfa' }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}