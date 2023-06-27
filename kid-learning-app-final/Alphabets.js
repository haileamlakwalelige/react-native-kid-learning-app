import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,ImageBackground } from 'react-native';
// import Words from './Words';
import {Audio} from 'expo-av';


 
const  playSoundA = async () => {
     await Audio.Sound.createAsync(
       require('./assets/A.wav'),
       {shouldPlay:true}
     )
  }
  const  playSoundB = async () => {
     await Audio.Sound.createAsync(
       require('./assets/B.wav'),
       {shouldPlay:true}
     )
  }
  const  playSoundC = async () => {
     await Audio.Sound.createAsync(
       require('./assets/C.wav'),
       {shouldPlay:true}
     )
  }
  const  playSoundD = async () => {
     await Audio.Sound.createAsync(
       require('./assets/D.wav'),
       {shouldPlay:true}
     )
  }
  const  playSoundE = async () => {
     await Audio.Sound.createAsync(
       require('./assets/E.wav'),
       {shouldPlay:true}
     )
  }

const kid=require('./assets/queen.png')
export default function Alphabets({navigation}) {
  return (
    <View  style={styles.container} >
    <ImageBackground source={kid} >
     <Text style={{fontWeight:'bold',fontSize:30,color:'#00ff00'}}>     READ ALPHABETS</Text>
    <View style={{ paddingTop: 30,}}>
  <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonA} 
  onPress={playSoundA}  >
  <Text style={styles.texty}>A</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonB}   onPress={playSoundB}>
  <Text style={styles.texty}>B</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonC}  onPress={playSoundC}>
  <Text style={styles.texty}  >C</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonD}   onPress={playSoundD}>
  <Text style={styles.texty}>D</Text>
  </TouchableOpacity >
  <TouchableOpacity   style={styles.buttonE}   onPress={playSoundE}>
  <Text style={styles.texty}>E</Text>
  </TouchableOpacity>
  <TouchableOpacity   style={styles.buttonF}  onPress={()=>alert("F")}>
  <Text style={styles.texty}>F</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}  onPress={()=>alert("G")}>
  <TouchableOpacity  style={styles.buttonG}>
  <Text style={styles.texty}>G</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonH}>
  <Text style={styles.texty}>H</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonI}>
  <Text style={styles.texty}>I</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonJ}>
  <Text style={styles.texty}>J</Text>
  </TouchableOpacity >
  <TouchableOpacity   style={styles.buttonK}>
  <Text style={styles.texty}>K</Text>
  </TouchableOpacity>
  <TouchableOpacity   style={styles.buttonL}>
  <Text style={styles.texty}>L</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonM}>
  <Text style={styles.texty}>M</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonN}>
  <Text style={styles.texty}>N</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonO}>
  <Text style={styles.texty}>O</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonP}>
  <Text style={styles.texty}>P</Text>
  </TouchableOpacity >
  <TouchableOpacity   style={styles.buttonQ}>
  <Text style={styles.texty}>Q</Text>
  </TouchableOpacity>
  <TouchableOpacity   style={styles.buttonR}>
  <Text style={styles.texty}>R</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonS}>
  <Text style={styles.texty}>S</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonT}>
  <Text style={styles.texty}>T</Text>
  </TouchableOpacity>
  <TouchableOpacity    style={styles.buttonU}>
  <Text style={styles.texty}>U</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row'}}>
  <TouchableOpacity  style={styles.buttonV}>
  <Text style={styles.texty}>V</Text>
  </TouchableOpacity >
  <TouchableOpacity   style={styles.buttonW}>
  <Text style={styles.texty}>W</Text>
  </TouchableOpacity>
  <TouchableOpacity   style={styles.buttonX}>
  <Text style={styles.texty}>X</Text>
  </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',paddingLeft:50}}>
  <TouchableOpacity  style={styles.buttonY}>
  <Text style={styles.texty}>Y</Text>
  </TouchableOpacity >
  <TouchableOpacity   style={styles.buttonZ}>
  <Text style={styles.texty}></Text>
  </TouchableOpacity>
  </View>
 </View>
 
 <View style={{flexDirection: 'row'}}>
     <TouchableOpacity   style={styles.button}
     onPress={()=>navigation.navigate('Home')}>
  <Text style={styles.texty}>Prev</Text>
  </TouchableOpacity>
   <TouchableOpacity   style={styles.button}
   onPress={()=>navigation.navigate('AmharicFidel')}>
  <Text style={styles.texty}>Next</Text>
  </TouchableOpacity>
    </View>
 </ImageBackground>
    </View>
  );
}


// function prevnext({navigation})
// {
//   return(
//     <View style={{flexDirection: 'row'}}>
//      <TouchableOpacity   style={styles.button}
//      onPress={()=>navigation.navigate('Home')}>
//   <Text style={styles.texty}>Prev</Text>
//   </TouchableOpacity>
//    <TouchableOpacity   style={styles.button}
//    onPress={()=>navigation.navigate('Words')}>
//   <Text style={styles.texty}>Next</Text>
//   </TouchableOpacity>
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,

  },
  texty: {
    color: "#0000ff",
    fontWeight: "900",
    fontSize: 20,
 },
 button: {
    alignItems: "center",
    backgroundColor: "#ffa500",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:150,
    top:10,
    margin:3,
   elevation: 60,
  },
  buttonA: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonB: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonC: {
    alignItems: "center",
    backgroundColor: "#000080",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonD: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonE: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonF: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
   buttonG: {
    alignItems: "center",
    backgroundColor: "#000080",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonH: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonI: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonJ: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonK: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonL: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonM: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonN: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonO: {
    alignItems: "center",
    backgroundColor: "#000080",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonP: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonQ: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonR: {
    alignItems: "center",
    backgroundColor: "#ffff00",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonS: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonT: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonY: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonX: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonU: {
    alignItems: "center",
    backgroundColor: "#000080",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonV: {
    alignItems: "center",
    backgroundColor: "#ff0000",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonW: {
    alignItems: "center",
    backgroundColor: "green",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  },
  buttonZ: {
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding:10,
    marginBottom: 30,
    left:0,
    right:10,
    width:100,
    top:10,
    margin:3,
     elevation: 60,
  borderRadius: 80,
  }
});
