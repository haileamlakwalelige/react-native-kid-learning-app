import React from 'react';
import {Text,View,ScrollView,Image,Button,StyleSheet,TouchableOpacity} from 'react-native';
import App from './App';
import {Audio} from 'expo-av';
const image1=require('./assets/apple4.jpg')
const image2=require('./assets/ball.jpg')
const image3=require('./assets/cat.jpg')
const image4=require('./assets/dog1.jpg')
const image5=require('./assets/elephant1.jpg')
const image6=require('./assets/fox1.jpg')
const image7=require('./assets/giraffe1.jpg')
const image8=require('./assets/horse.jpg')
const image9=require('./assets/icecream.jpg')
const image10=require('./assets/juice.jpg')
const image11=require('./assets/king1.jpg')
const image12=require('./assets/lion.jpg')
const image13=require('./assets/monkey.jpg')
const image14=require('./assets/nest.jpg')
const image15=require('./assets/orange.jpg')
const image16=require('./assets/pen.jpg')
const image17=require('./assets/queen.png')
const image18=require('./assets/rabbit1.jpg')
const image19=require('./assets/sun.jpg')
const image20=require('./assets/tree.jpg')
const image21=require('./assets/umbrella.jpg')
const image22=require('./assets/violin.jpg')
const image23=require('./assets/window.jpg')
const image24=require('./assets/xylophone.jpg')
const image25=require('./assets/yak.jpg')
const image26=require('./assets/zebra.jpg')


 const  playSound = async () => {
     await Audio.Sound.createAsync(
       require('./assets/AforApple.wav'),
       {shouldPlay:true}
     )
  }

const  playSound1 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Bforball.wav'),
       {shouldPlay:true}
     )
  }

const  playSound2 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Cforcat.wav'),
       {shouldPlay:true}
     )
  }


  const  playSound3 = async () => {
     await Audio.Sound.createAsync(
       require('./assets/Dfordog.wav'),
       {shouldPlay:true}
     )
  }


  
const Words=({navigation})=>{
  return(
<ScrollView
horizontal >
<View  style={{flexDirection:'row',justifyContent:'center',alignItem:'center',marginRight:20}}>
<Text style={{padding:10}}/>
<View>
< Image source={image1}   style={styles.image}/>
<Button title="A FOR APPLE"
 onPress={playSound}
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image2}   style={styles.image}/>
<Button title="B FOR BALL"
onPress={playSound1}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image3}   style={styles.image}/>
<Button title="C FOR CAT"
onPress={playSound2}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image4}   style={styles.image}/>
<Button title="D FOR DOG"
onPress={playSound3}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image5}   style={styles.image}/>
<Button title="E FOR ELEPHANT"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image6}   style={styles.image}/>
<Button title="F FOR FOX"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image7}   style={styles.image}/>
<Button title="G FOR GIRAFFE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image8}   style={styles.image}/>
<Button title="H FOR HORSE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image9}   style={styles.image}/>
<Button title="I FOR ICE CREAM"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image10}   style={styles.image}/>
<Button title="J FOR JUICE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image11}   style={styles.image}/>
<Button title="K FOR KING"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image12}   style={styles.image}/>
<Button title="L FOR LION"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image13}   style={styles.image}/>
<Button title="M FOR MONKEY"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image14}   style={styles.image}/>
<Button title="N FOR NEST"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image15}   style={styles.image}/>
<Button title="O FOR ORANGE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image16}   style={styles.image}/>
<Button title="P FOR PEN"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image17}   style={styles.image}/>
<Button title="Q FOR QUEEN"
//onPress={alert("you press the button")}
/>
</View>
<View>
<Image source={image18}   style={styles.image}/>
<Button title="R FOR RABBIT"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image19}   style={styles.image}/>
<Button title="S FOR SUN"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image20}   style={styles.image}/>
<Button title="T FOR TREE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image21}   style={styles.image}/>
<Button title="U FOR UMBRELLA"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image22}   style={styles.image}/>
<Button title="V FOR VIOLIN"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image23}   style={styles.image}/>
<Button title="W FOR WINDOW"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image24}   style={styles.image}/>
<Button title="X FOR XYLOPHONE"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image25}   style={styles.image}/>
<Button title="Y FOR YAK"
//onPress={alert("you press the button")}
/>
</View>
<Text style={{padding:10}}/>
<View>
<Image source={image26}   style={styles.image}/>
<Button title="Z FOR ZEBRA"
//onPress={alert("you press the button")}
/>
</View>

<View style={{flexDirection: 'column'}}>
<Text style={{padding:10}}></Text>

<TouchableOpacity  onPress={()=>navigation.navigate('AmharicFidel')} style={{
    padding: 5,
    left:0,
    width:300,
    margin:3,
    alignItems: 'center',
      backgroundColor: '#ffa500'}}  >
<Text style={{fontWeight: "bold"}}>Prev</Text>
</TouchableOpacity>
<Text style={{padding:10}}></Text>

<TouchableOpacity  onPress={()=>navigation.navigate('Home')} style={{
    padding: 5,
    left:0,
    width:300,
    margin:3,
    alignItems: 'center',
 backgroundColor: '#ffa500'}}  >
<Text style={{fontWeight: "bold"}}>HOME</Text>
</TouchableOpacity>
<Text style={{padding:10}}></Text>
<TouchableOpacity  onPress={()=>navigation.navigate('Numbers')} style={{
    padding: 5,
    marginBottom: 20,
    left:0,
    right:10,
     width:300,
    top:10,
    margin:3,
    alignItems: 'center',
backgroundColor: '#ffa500'}}  >
<Text style={{fontWeight: "bold"}}>Next</Text>
</TouchableOpacity>
    </View>
    </View>
  
</ScrollView>
  );
}
export default Words;

const styles=StyleSheet.create({

image:{
height:350,
width:300,
},
 
})