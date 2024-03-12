import { StyleSheet, Text, View , } from 'react-native'
import React from 'react'
import HomeScreen from '../src/Screens/HomeScreen';
import ProductScreen from '../src/Screens/ProductScreen';
import ProfileScreen from '../src/Screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AnimalScreen from '../src/Screens/AnimalScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AdviceScreen from '../src/Screens/AdviceScreen';
import MyTabs from './MateriaTop';




const Tap = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Tap.Navigator screenOptions={{
      tabBarShowLabel:false,
      //headerTintColor:'yellow', title 
      tabBarInactiveBackgroundColor:'white',
      tabBarActiveBackgroundColor:'white',
      tabBarActiveTintColor:'#cce7c9',
      headerTitleAlign:'center',
            
      tabBarInactiveTintColor:'#8C8C8C',
    }}>
      <Tap.Screen name="Home" component={HomeScreen} options={{headerStyle:{backgroundColor:'#cce7c9'} , tabBarIcon:({color , size})=>(
              <AntDesign name="home" size={size} color={color}/>)}}/>

      <Tap.Screen name="Product" component={ProductScreen} options={{headerShown:false ,tabBarIcon:({color , size})=>(
                <Ionicons name="storefront-outline" size={size} color={color}/>
      )}}/>

       <Tap.Screen name="Animal" component={AnimalScreen} options={{tabBarIcon:({color , size})=>(
                <MaterialIcons name="pets" size={size} color={color}/>
      )}}/>

      <Tap.Screen name="Advice" component={MyTabs} options={{tabBarIcon:({color , size})=>(
                <Ionicons name="book-outline" size={size} color={color}/>
      )}}/>

      <Tap.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:({color , size})=>(
                <Feather name="user" size={size} color={color}/>
      )}}/>
    </Tap.Navigator>
  </NavigationContainer>
  )
}
export default  Navigation;

const styles = StyleSheet.create({  
container:{
    flex:1,
    backgroundColor:'white',
},
  tittle:{
    fontSize:30,
    color:'black',
    backgroundColor:'white',
    textAlign:'center',
    margin:10,
  }})