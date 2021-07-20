import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Chatbot({navigation}){
  return(
    <View style={styles.container}>
      <View style={styles.title}>
          <TouchableOpacity style={{marginTop:52, marginLeft:28}} onPress={()=>navigation.push('Main')} >
              <AntDesign name="arrowleft" color='#000000' size={20}/>
          </TouchableOpacity>
          <Text style={styles.text}>챗봇</Text>
      </View>
      <View style={styles.contain}>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      justifyContent: 'center' //가로 정렬
    },
    title:{
        flex:1,
        flexDirection: 'row'
    },
    text:{
        marginTop:51,
        marginLeft:140,
        fontWeight: '400',
        fontSize: 18
    },
    contain:{
        flex:5
    }
  });
  