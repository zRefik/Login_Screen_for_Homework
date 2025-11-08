import React from "react";
import { StyleSheet,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GirisEkrani from "./components/LoginScreen";

const Login = () => {
  return (
    <SafeAreaView style={stila.kutu}>
      <Text style={stila.baslik}>GİRİŞ YAP</Text>
      <GirisEkrani/>
    </SafeAreaView>
  );
}

const stila = StyleSheet.create({
kutu:{
flex:1,

},
baslik:{
    fontSize:32,
    fontWeight:"bold",
    textAlign:"center",
    top:70,
  
}


});


export default Login;