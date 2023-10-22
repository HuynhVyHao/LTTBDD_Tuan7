import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, Pressable} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./Sreen/Screen2";
import Screen3 from "./Sreen/Screen3";
const Stack= createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Screen1}/>
        <Stack.Screen name ="Screen2" component={Screen2}/>
        <Stack.Screen name ="Screen3" component={Screen3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Screen1({navigation,route}){
  return (
    <View style={styles.container}>
      <Text style ={{width:'351px',
      height:'87px',
      lineHeight:'26px',
      fontWeight:400,
      fontSize:'26px',
      textAlign:'center',
      fontFamily:'VT323'
    }}>A premium online store for sporter and their stylish choice</Text>

    <View style={styles.bg_item}>
      <View style={{alignContent:'center',top:50}}>
      
      <Image style={styles.image}
      
      source={require('../Tuan7/assets/1.png')} />
      </View>


    </View>
    <Text style ={{width:'351px',
      height:'61px',
      lineHeight:'29.87px',
      fontWeight:700,
      fontSize:'26px',
      textAlign:'center',
      fontFamily:'Ubuntu'
    }}>POWER BIKE<br/>SHOP</Text>

     <Pressable onPress={() => navigation.navigate("Screen2")}
                 style={styles.btn}>
        <Text style={styles.txtbtn}>Get Started</Text>
      </Pressable>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'space-around'
   
  },
  bg_item :{
    width:359,
    height:388,
    backgroundColor:'#E941411A',
    borderRadius:50,
  },
  image :{
    width:'292px',
    height:'270px',
    left:31,
    
  },
  btn:{
    width:'340px',
    height:'61px',
    borderRadius:'30px',
    backgroundColor: 'red',
    justifyContent:'center'

  },
  txtbtn:{
        
        fontSize: "20px", 
        fontWeight: 700 ,
        textAlign: 'center',
        color:'white'
  }
});
