import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image } from 'react-native';

export default function Start({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('./assets/images/logo.png')} style={styles.image}/>
        <Text style={styles.text}>라임프로필</Text>
      </View>
      <View style={styles.login}>
        <TextInput style={styles.textInput} placeholder="ID" />
        <TextInput style={styles.textInput} placeholder="PW" secureTextEntry={true}/>
        <TouchableOpacity style={styles.loginbutton} onPress={()=>navigation.navigate('Main')}>
          <Text style={{color:"#FFFF"}}>로그인</Text>
        </TouchableOpacity> 
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      paddingTop:16.54,
      fontSize:30,
      fontWeight:"700",
      alignItems: "center",
      color:"#3D4558"
    },
    logo:{
      flex:1,
      alignItems: 'center'
    },
    login:{
      flex:1,
      alignItems:'center'
    },
    textInput:{
      padding:10,
      borderBottomColor:'#3D4558',
      borderBottomWidth: 1,
      width:273
    },
    loginbutton:{
      marginTop:40,
      backgroundColor:"#565E61",
      width:100,
      height:34,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:90
    },
    image:{
      resizeMode:'contain',
      width:77.9,
      height: 39.78,
      marginTop:263,
    }
  });
  