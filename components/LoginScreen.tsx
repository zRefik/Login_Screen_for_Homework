import React,{useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import OzelText from "./CustomInput";

const GirisEkrani:React.FC = () => {
    const [eposta, setEposta] = useState("");
    const [sifre, setSifre] = useState("");


    const handleLogin = () => {
        console.log("E-Posta:", eposta);
        console.log("Şifre:", sifre);
    };

    return(

        <View style={stile.kutu}>
            

            <Text style={stile.text}>E-Posta:</Text>

            <OzelText
            plalceholder="E-Posta Giriniz"
            value={eposta}
            onchangeText={setEposta}
            />


            <Text style={stile.text}>Şifre:</Text>
            <OzelText 
            
            plalceholder="Şifre Giriniz"
            value={sifre}
            onchangeText={setSifre}
            />

            <TouchableOpacity style={stile.buton} onPress={handleLogin}>
                <Text style={stile.butonFont}>Giriş Yap</Text>
            </TouchableOpacity>


        </View>
    );
}

const stile = StyleSheet.create({
kutu:{
    
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    gap:20,
    
},

text:{
    fontSize:26,
    color:"orange",
    fontWeight:"bold",
},

buton:{
    width:"42%",
    height:47,
    backgroundColor:"black",
    borderColor:"orange",
    borderWidth:2,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:22,

},

butonFont:{
    fontSize:26,
    color:"orange",
    fontWeight:"bold",
}

});


export default GirisEkrani;