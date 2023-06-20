import 'react-native-gesture-handler';

import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './Src/Stack/Login';
import Home from './Src/BottomTab/Home';
import Account from './Src/BottomTab/Account';
import Settings from './Src/BottomTab/Settings';
// import AboutUs from './Src/Drawer/AboutUS';
import Help from './Src/Drawer/Help';
import LogOut from './Src/Drawer/LogOut';
import User from './Src/Drawer/User';
import Firstpage from './Src/PassingValue/Firstpage';
import Secondpage from './Src/PassingValue/Secondpage';
import Calculator from './Src/Calculator';
import CustomSidebarMenu from './Src/Drawer/CustomSidebarMenu';

import Register from './Src/Page/Register';
import Otp from './Src/Page/Otp';
import Students from './Src/Page/Students';
import SchoolBoard from './Src/Page/SchoolBoard';
import Apptour from './Src/Page/Apptour';
import { Dimensions } from 'react-native/types';
import Course from './Src/Page/Course';
import Chapter from './Src/Page/Chapter';
import Video from './Src/Page/Video';




const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();


function StackNav(){
  return(
    <Stack.Navigator      
    initialRouteName="cal"
    screenOptions={{headerShown: false}}
    
    >
      {/* <Stack.Screen name='CalcButton'component={CalcButton}/> */}
      {/* <Stack.Screen name='Calculator'component={Calculator}/> */}
      {/* <Stack.Screen name='Firstpage'component={Firstpage}/>
      <Stack.Screen name='Secondpage'component={Secondpage}/> */}
      <Stack.Screen name='Register'component={Register}/>
      <Stack.Screen name='Otp'component={Otp}/>
      <Stack.Screen name='Students'component={Students}/>
      <Stack.Screen name='SchoolBoard' component={SchoolBoard}/>
      <Stack.Screen name='Apptour' component={Apptour}/>
      <Stack.Screen name='Course' component={Course}/>
      <Stack.Screen name='DrawerNav' component={DrawerNav}/>
      <Stack.Screen name='BottomTabNav' component={BottomTabNav}/>
      {/* <Stack.Screen name='Course' component={Course}/> */}
      <Stack.Screen name='Chapter' component={Chapter}/>
      <Stack.Screen name='Video' component={Video}/>
      


      <Stack.Screen name='Login'component={Login}/>
      
       
      <Stack.Screen name='Home' component={DrawerNav}/> 
      



    </Stack.Navigator>
  )
}


function DrawerNav(){
  return(

    <Drawer.Navigator  
    drawerContent={props=><CustomSidebarMenu{...props}/>}
    screenOptions={{
      headerShown:false,
      drawerIcon: ({focused, size}) => (
        <Icon
           name="home"
           size={size}
           color={focused ? '#7cc' : '#ccc'}
        />
     ),

       
     }}
    
    >
      <Drawer.Screen
        name='Home' 
        component={BottomTabNav} />
      
      <Drawer.Screen
        name='Help'
        component={Help}
      />
      <Drawer.Screen
        name='LogOut'
        component={LogOut}
      />



    </Drawer.Navigator>
  )
}

function BottomTabNav(){
  return(
    <BottomTab.Navigator
     screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarLabelStyle:{fontSize:14},
      tabBarItemStyle:{width:100},
      tabBarStyle:{backgroundColor:'white',bottom:25,left:20,right:20,elevation:0,borderRadius:15,height:80,width:350,shadowColor:'green',shadowOffset:{width:6,height:10},shadowOpacity:0.25,shadowRadius:3.5,elevation:5,position:'absolute'}
     }} 
    
    
    
    
    >
      <BottomTab.Screen 
    name='Home' 
    component={Home}
    options={{
                
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'grey',
      tabBarIcon:({focused})=> 
      focused ? <Icon name="home" size={34} color='#00FF00' />:<Icon name="home" size={34} color='grey'/>
      
    }}
    />

<BottomTab.Screen 
    name='Recent' 
    component={Account}
    options={{
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'grey',
      tabBarIcon:({focused})=> 
      focused ?<Icon name="arrow-right" size={44} color='#00FF00' />:<Icon name="arrow-right" size={54} color='grey'/>
    }}
    />
    <BottomTab.Screen 
    name='Exams' 
    component={Settings}
    options={{
      tabBarActiveTintColor:'green',
      tabBarInactiveTintColor:'grey',
      tabBarIcon:({focused})=> 
      focused ? <Icon name="local-library" size={34} color='#00FF00' />:<Icon name="local-library" size={34} color="grey"/>
    }}
    />
          <BottomTab.Screen
                name='Profile'
               component={Settings}
               options={{
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> 
                focused ? <Icon name="person" size={34} color='#00FF00' />:<Icon name="person" size={34} color="grey" />
              }} >
              </BottomTab.Screen>
              <BottomTab.Screen
                name='contact'
               component={Settings}
               options={{
                tabBarActiveTintColor:'green',
                tabBarInactiveTintColor:'grey',
                tabBarIcon:({focused})=> 
                focused ? <Icon name="mail" size={34} color='#00FF00' />:<Icon name="mail" size={34} color="grey" />
              }} >
              </BottomTab.Screen>





    </BottomTab.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
    <StackNav/>
    </NavigationContainer>
  )
}

export default App

