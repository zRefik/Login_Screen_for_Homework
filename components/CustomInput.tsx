import React from "react";
import { StyleSheet,TextInput } from "react-native";

interface OzelTextProps{
    plalceholder:string,
    value:string,
    onchangeText:(text:string)=>void,
    
}

const OzelText:React.FC<OzelTextProps> = ({plalceholder,value,onchangeText}) => {
return(
    <TextInput
    style={stilc.inputFont}
    placeholder={plalceholder}
    value={value}
    onChangeText={onchangeText}
    />
);
};

const stilc = StyleSheet.create({
    
inputFont:{
    width:"71%",
    height:60,
    borderWidth:0.5,
    borderRadius:22,
    fontSize:19,
    textAlign:"center",
}
    

});

export default OzelText;