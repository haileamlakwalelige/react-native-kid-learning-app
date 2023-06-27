import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';

const image=require('./assets/coder2.jpg')
export default function About({navigation}){

  return(
    <View style={{backgroundColor:'gold',height:450}}>
    
    <View>
    <Text  style={styles.texth}>About Us</Text>
    <Text style={styles.text}>This App is created for the purpose of  teaching kids about letters,numbers , words and alphabets</Text> 
    </View>
    <View >
    <Text style={styles.deve}>Developed By</Text>
    <Text style={styles.name}>Abinet Erbaye</Text>
    <Text style={styles.name}>Getu Girma</Text>
    <Text style={styles.name}>Haileamlak Waleligne</Text>
    </View>
    <View>
    <TouchableOpacity  style={styles.button}
    onPress={()=>navigation.navigate('Home')}>
    <Text style={styles.textb}>Home</Text>
    </TouchableOpacity>
    </View>
    </View>
  );
}


const styles=StyleSheet.create({
  button:{
     padding: 5,
    left:0,
    marginTop:10,
    width:100,
    marginLeft:90,
    
    alignItems: 'center',
      backgroundColor: '#000',
    
  },
  textb:{
    color:'white',
    fontWeight:'bold',
  },
  texth:{
    paddingTop:5,
    padding:35,
    paddingLeft:50,
     color:'blue',
     fontSize:30,
     fontWeight:'bold',
      fontFamily: 'cursive',
     
  },
  text:{
    fontWeight:'bold',
    fontSize:18,
      },
      deve:{
        fontWeight:'bold',
        fontSize:30,
        color:'yellowgreen'
      },
      name:{
        fontWeight:'bold',
        fontSize:25,
      }
})






