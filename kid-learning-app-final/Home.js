import * as React from 'react';
import {ScrollView, Text, View, StyleSheet ,Button,TouchableOpacity,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Alphabets from "./Alphabets";
import Numbers from './Numbers';
import Words from './Words';
import App from './App';
import AmharicFidel from './AmharicFidel'

const image = { uri: "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/6a/e6/dc/6ae6dcbf-b4f3-477d-e18c-4dca49c4b9d2/AppIconOmni-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg" };
export default function Home({navigation}){
return(
  <ImageBackground 
  source={image}    style={{width:'100%',height:'100%'}}>
<View   style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{paddingTop:5,padding:35,paddingLeft:50, color:'white',fontSize:30,fontWeight:'bold', fontFamily: 'cursive'}}>Home Screen</Text>
<TouchableOpacity  onPress={()=>navigation.navigate('Alphabets')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
    borderRadius: 80,
    width:150,
    top:10,
    margin:3,
    alignItems: 'center',
     elevation: 60,
 bottm:30, backgroundColor: 'green'}}  >
<Text style={{fontWeight: "bold"}}>GO TO ALPHABETS</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>navigation.navigate('AmharicFidel')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
    width:150,
    top:10,
    margin:3,
     elevation: 60,
     alignItems: 'center',
     borderRadius: 80,
    
 bottm:30, backgroundColor: 'yellow'}}  >
<Text style={{fontWeight: "bold"}}>አማርኛ ፊደላት</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>navigation.navigate('Words')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
    width:150,
    top:10,
    margin:3,
     elevation: 60,
     alignItems: 'center',
     borderRadius: 80,
    
 bottm:30, backgroundColor: 'red'}}  >
<Text style={{fontWeight: "bold"}}>GO TO WORDS</Text>
</TouchableOpacity>

<Text style={{padding:10}}></Text>
<TouchableOpacity  onPress={()=>navigation.navigate('Numbers')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
    width:150,
    top:10,
    margin:3,
    borderRadius: 80,
     elevation: 60,
     alignItems: 'center',
 bottm:30, backgroundColor: 'blue'}}  >
<Text style={{fontWeight: "bold"}}>GO TO NUMBERS</Text>
</TouchableOpacity>
<TouchableOpacity  onPress={()=>navigation.navigate('About')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
    width:150,
    top:10,
    margin:3,
   borderRadius: 80,
    alignItems: 'center',
     elevation: 60,
 bottm:30, backgroundColor: 'lime'}}  >
<Text style={{fontWeight: "bold"}}>About Us</Text>
</TouchableOpacity>
</View>
</ImageBackground>

);
}





