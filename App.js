// In App.js in a new project

import * as React from 'react';
import { View, Text , StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import WorldStats from './screens/WorldStats';
import CountriesList from './screens/CountriesList';
import CountryDetails from './screens/CountryDetails';
import Favourites from './screens/Favourites';


const Drawer = createDrawerNavigator();

const MyDrawer=()=>   {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
       name="Home"
       options={{
          drawerIcon:()=> <Ionicons name="md-home" size={32}  /> ,
       }}
       
       component={StackHome} />
      <Drawer.Screen name="Countries List" component={StackNavigator} options={{drawerIcon:()=><Ionicons name="map" size={32} color="black" />}} />
      <Drawer.Screen name="Favourites" component={StackFav}
      options={{drawerIcon:()=><Ionicons name="md-star" size={32} color="black" />}}
      
      />
    </Drawer.Navigator>
  );
}

const StackFav=({navigation})=>{
  return(
    <Stack.Navigator>
      <Stack.Screen name="Favourites" component={Favourites}  
      options={{
        headerTintColor:'white',
        headerStyle:{
          backgroundColor:'red',
  
  
        },
        headerLeft:()=><View style={{padding: 10}}><Ionicons 
        name="md-menu" size={32} color="white"  onPress={()=>navigation.toggleDrawer()}/></View>,
        
  
      }}
      
      
      />
    </Stack.Navigator>
  )
  }
  
const StackNavigator=()=>{
  return(
  <Stack.Navigator 
  
  screenOptions={({navigation})=>({
    headerTitleAlign:'center',
    headerTintColor:'white',
    headerStyle:{
      backgroundColor:'red'
    },headerLeft:()=>
       <View style={{paddingLeft: 10}} >
         <Ionicons 
         name="md-menu" size={32} color="white"  onPress={()=>navigation.toggleDrawer()}/> 
        
        </View>
    })}>
    
     
    <Stack.Screen name="CountryList" component={CountriesList} />
    <Stack.Screen name="CountryDetails" component={CountryDetails} />
    
  </Stack.Navigator>
  )

}
const StackHome=({navigation})=>{
  return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={WorldStats}  
    options={{
      headerTintColor:'white',
      headerStyle:{
        backgroundColor:'red',


      },
      headerLeft:()=><View style={{padding: 10}}><Ionicons 
      name="md-menu" size={32} color="white"  onPress={()=>navigation.toggleDrawer()}/></View>,
      

    }}
    
    
    />
  </Stack.Navigator>
)
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  container:{
      flex: 1, alignItems: 'center', justifyContent: 'center' 
  },
  



})

export default App;