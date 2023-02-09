import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react"; 
import { StyleSheet, Text,Platform,Button,View, Image ,SafeAreaView, Alert,TouchableOpacity,TextInput,} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    
  
    <SafeAreaView style={[styles.container,containerStyle]}>
         <Text>Raithu Nestham</Text>
         <Image source={{
          width: 150,
          height:70,
          center: 40,
          uri:'https://learning.swecha.org/pluginfile.php/1/core_admin/logo/0x200/1671556603/Swecha_Logo_English.png',
         }
         } />
          
          <Button
          color="lightblue"
          title="Submit"
          onPress={() => 
          Alert.alert("Submit","Your data gets stored",[
            {text: "YES",onPress: ()=>console.log("Yes")},
            {text: "NO",onPress: ()=>console.log("No")},
          
          ]) }>

          </Button >
          <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}
const containerStyle={backgroundColor:"#69DE94"};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#097969',
    paddingTop:Platform.OS === "android"?55:0
  },
  image:{
    marginBottom:40,
  },
  inputView: {
    alignItems: "center",
    width: "70%",
    backgroundColor: "#FFC0CB",
    borderRadius: 60,
    justifyContent:"center",
    height: 40,
    margin: 40,
    marginTop:49,

  },
  TextInput: {
    height: 10,
    flex: 2,
    padding: 10,
    marginLeft: 16,
    marginTop: 5,
    
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
    marginBottom: 0,
    margin: 84,
  },
  loginBtn:
  {
    width:"50%",
    borderRadius:25,
    margin: 84,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    backgroundColor:"#FF1493",
    margin: 84,
  },
});