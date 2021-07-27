import 'react-native-gesture-handler';
import React from 'react';
import Start from "./Start";
import Main from "./Main";
import Chatbot from './Chatbot';
import Weekly from './Weekly';
import Came from './Came';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

// bottombar
function TabStack({navigation, route}){
  return(
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#F4F4F4', inactiveBackgroundColor:'#F4F4F4'}}
    screenOptions={({route})=>({
      tabBa
    </Tab.Navigator>
  )
}

// page 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Main" component={TabStack}/>
        <Stack.Screen name="Weekly" component={Weekly}/>
        <Stack.Screen name="Chatbot" component={Chatbot}/>
        <Stack.Screen name="Camera" component={Came}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

