import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,ActivityIndicator
} from "react-native";
import Feather from '@expo/vector-icons/Feather';
import One from "../../assets/1_image.png";
import Two from '../../assets/2-image.jpg'
import { useState } from "react";
import axios from "axios";
const images=[One,Two];
const Home = () => {
  const [city, setCity] = useState("");
  const [weather,setWeather]=useState({})
  const [randomImage,setRandomImage]=useState(images[0])
  const [loding, setLoding] = useState(false);
  const getWeather = async () => {
    if (!city) return; //791ff2f8963e1d2a5b535dfc25f5e422
    console.log("Fetching weather data for", city);
    setLoding(true)
    try {
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=791ff2f8963e1d2a5b535dfc25f5e422`);

      setWeather(res.data)
      const n =Math.floor(Math.random()*images.length)
      setRandomImage(images[n])
      setLoding(false)
    } catch (error) {
    alert('city not fond')
    setLoding(false)
    }
  };

  return (
    <ImageBackground source={randomImage} style={styles.image}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.textinputcontainer}>
          <TextInput
            style={styles.textinput}
            value={city}
            placeholder="Your city"
            onChangeText={(text) => setCity(text)} 
          />
          {loding ? 
            <ActivityIndicator size='small' color='black'/>:
            <Feather onPress={getWeather} name="search" size={24} color="black" /> 
          }
      
      
        </View>
        {Object.keys(weather).length>0 ? 
        <>
        <View style={styles.locationcontainer}>
          <Text style={styles.location}>{weather?.name},{weather?.sys?.country}</Text>
        </View>
        <View style={styles.weathercontainer}>
          <Text style={styles.temp}>{Math.round(weather.main.temp)}C</Text>
          <Text style={styles.weather}>{weather.weather[0].main}</Text>
        </View>
        </>
        : null}
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  textinputcontainer: {
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    top: 100,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  textinput: {
    height: 40,
    fontWeight: "600",
    flex: 1,
    
  },
  locationcontainer:{
    marginTop:150
  },
  location:{
    color:'white',
    fontSize:35,
    textAlign:'center',
    textShadowColor:'rgb(0,0,0,0.55)',
    textShadowOffset:{width:-1,height:-1},
    textShadowRadius:5,
  },
  weathercontainer:{
    alignItems:'center'
  },
  temp:{
    color:'white',
    fontSize:35,
    textAlign:'center',
    textShadowColor:'rgb(0,0,0,0.55)',
    textShadowOffset:{width:-1,height:-1},
    textShadowRadius:5,
  },
  weather:{
    color:'white',
    fontSize:35,
    textAlign:'center',
    textShadowColor:'rgb(0,0,0,0.55)',
    textShadowOffset:{width:-1,height:-1},
    textShadowRadius:5,
  }
});

export default Home;
