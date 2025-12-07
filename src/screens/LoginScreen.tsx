// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Navigation props'unu alıyoruz ki sayfa değiştirebilelim
const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KampusPost'a Hoşgeldin</Text>
      
      {/* Şifre kontrolü yok demiş hoca, direkt Home'a yolluyoruz */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Giriş Yap" 
          onPress={() => navigation.navigate('Home')} 
        />
      </View>

      {/* Kayıt ekranına yollayan buton */}
      <View style={styles.buttonContainer}>
        <Button 
          title="Kayıt Ol" 
          color="green"
          onPress={() => navigation.navigate('Register')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  buttonContainer: { marginBottom: 10 }
});

export default LoginScreen;