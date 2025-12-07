// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegister = () => {
    // Şifre kontrol mevzusu burada
    if (password !== passwordConfirm) {
      Alert.alert('Hata', 'Şifreler uyuşmuyor babuş! Tekrar dene.');
      return;
    }

    // Her şey yolundaysa
    console.log('Kayıt başarılı');
    Alert.alert('Başarılı', 'Kayıt işlemi tamam (gibi yaptı)!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>E-posta</Text>
      <TextInput 
        style={styles.input} 
        placeholder="E-postanızı girin" 
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Şifre</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Şifrenizi girin" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Şifre Tekrar</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Şifreyi tekrar girin" 
        secureTextEntry 
        value={passwordConfirm}
        onChangeText={setPasswordConfirm}
      />

      <Button title="Kayıt Ol" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 }
});

export default RegisterScreen;