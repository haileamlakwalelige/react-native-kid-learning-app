import React from 'react';
import {Text,View,ScrollView,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';
import App from './App';
import {Audio} from 'expo-av';


const image1=require('./assets/one.jpg')
const image2=require('./assets/two.jpg')
const image3=require('./assets/three.jpg')
const image4=require('./assets/four.jpg')
const image5=require('./assets/five.jpg')
const image6=require('./assets/six.jpg')
const image7=require('./assets/seven.jpg')
const image8=require('./assets/eight.jpg')
const image9=require('./assets/nine.jpg')
const image10=require('./assets/tenn.jpg')

 const  playSound1 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/One.wav'),
       {shouldPlay:true}
     )
  }
  const  playSound2 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Two.wav'),
       {shouldPlay:true}
     )
  }
  const  playSound3 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Three.wav'),
       {shouldPlay:true}
     )
  }
  const  playSound4 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Four.wav'),
       {shouldPlay:true}
     )
  }
  const  playSound5 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Five.wav'),
       {shouldPlay:true}
     )
  }
  

const Numbers =({navigation})=>{
  return(
    <ScrollView horizontal>
    <TouchableOpacity  style={styles.button}   onPress={playSound1}>
    <Image source={image1} style={styles.image} />
    <Text  style={styles.text}>ONE</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}  onPress={playSound2}>
    <Image source={image2} style={styles.image} />
    <Text  style={styles.text}>TWO</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}  onPress={playSound3}>
    <Image source={image3} style={styles.image} />
    <Text  style={styles.text}>THREE</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}  onPress={playSound4}>
    <Image source={image4} style={styles.image} />
    <Text  style={styles.text}>FOUR</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}  onPress={playSound5}>
    <Image source={image5} style={styles.image} />
    <Text  style={styles.text}>FIVE</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}>
    <Image source={image6} style={styles.image} />
    <Text   style={styles.text}>SIX</Text>
    </TouchableOpacity>

     <TouchableOpacity style={styles.button}>
    <Image source={image7} style={styles.image} />
    <Text    style={styles.text}>SEVEN</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}>
    <Image source={image8} style={styles.image} />
    <Text  style={styles.text}>EIGHT</Text>
    </TouchableOpacity>

     <TouchableOpacity  style={styles.button}>
    <Image source={image9} style={styles.image} />
    <Text   style={styles.text}>NINE</Text>
    </TouchableOpacity>
    
     <TouchableOpacity  style={styles.button}>
    <Image source={image10} style={styles.image} />
    <Text   style={styles.text}>TEN</Text>
    </TouchableOpacity>

    <View   style={{width:'10%',backgroundColor:'powderblue'}}>

 <TouchableOpacity  onPress={()=>navigation.navigate('Words')}  style={styles.nav}>
    <Text   style={styles.text}>Prev</Text>
    </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('Home')}  style={styles.nav}>
    <Text   style={styles.text}>Home</Text>
    </TouchableOpacity>
     <TouchableOpacity   onPress={()=>navigation.navigate('About')}   style={styles.nav}>
    <Text   style={styles.text}>Next</Text>
    </TouchableOpacity>
    </View>
    </ScrollView>

  );
}
export default Numbers;

const styles=StyleSheet.create({
//   container:{
// flexDirection:'row',
// justifyContent:'center',
// // alignItem:'center',
//   },
image:{
height:350,
width:300,
},
button: {
alignItems: "center",
backgroundColor: "powderblue",
width:320,
padding:10,
marginBottom: 30,
left:0,
right:10,
top:10,
margin:3,
borderRadius: 8,
  },

  text:{
    fontWeight:'bold',
    fontSize:30,
  },
  nav:{
    width:'70%',
    margin:30,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center',
  }
})