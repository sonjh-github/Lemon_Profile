import 'react-native-gesture-handler';
import React from 'react';
import Start from "./Start";
import Main from "./Main";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

// bottombar
function TabStack({navigation, route}){
  return(
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:'#F4F4F4', inactiveBackgroundColor:'#F4F4F4'}}>
       <Tab.Screen name="Home" component={Main}/>
       {/* <Tab.Screen name="Camera" component={Camera}/> */}
    </Tab.Navigator>
  )
}

// page 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Start" component={Start}/>
        <Stack.Screen name="Main" component={TabStack}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

