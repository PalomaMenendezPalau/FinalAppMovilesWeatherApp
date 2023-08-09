import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View , ActivityIndicator } from 'react-native';
import * as Location from 'expo-location'
import WeatherInfo from './components/WeatherInfo'
import {colors} from './utils/index'
import ReloadIcon from './components/ReloadIcon'
import WeatherDetails from './components/WeatherDetails';

//Constantes para la API 
const API_KEY = '487a41999fd4a98038e4a7c82b2723ce'
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function App() {

  // Uso useState para definir los estados del clima , unidad & errores

  const [errorMessage, setErrorMessage] = useState(null)
  const [currentWeather, setCurrentWeather] = useState(null)
  const [unitsSystem, setUnitsSystem] = useState('metric')
  const [language, setLanguage] = useState('sp')

  // Llamo al hook de use Effect 

  useEffect(() => {
    load()
  }, [unitsSystem])

  async function load () {
    setCurrentWeather(null)
    setErrorMessage(null)
    try {
      let { status } = await Location.requestForegroundPermissionsAsync()
      
      if (status !== 'granted') {
        
        setErrorMessage('Necesitamos acceso a tu locacion para correr la App')
        return 
      }

      // Saco la ubicacion del dispositivo para pasarle a la API que me trae el clima.

      const location = await Location.getCurrentPositionAsync()
      const {latitude ,longitude } = location.coords
  
      const Url =  `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&lang=${language}&appid=${API_KEY}`
      
      //API REQUEST 
      const response = await fetch (Url)
      const result = await response.json()

      if(response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

  } catch (error) {}
  }
  if(currentWeather) {
    
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <StatusBar style="auto" />
          <ReloadIcon load={load} />
          <WeatherInfo currentWeather={currentWeather} />
          <WeatherDetails currentWeather={currentWeather} />
        </View>
        
      </View>
    )
} else  if (errorMessage) {
  return (
    <View style={styles.container}>
       <ReloadIcon load={load} />
      <Text>{errorMessage}</Text>
      <StatusBar style="auto" />
    </View>
  )
} else {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.TEMPERATURE_COLOR} />
      <StatusBar style="auto" />
    </View>
  )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    },
  main: {
    justifyContent: "top-center",
    flex: 1,
    marginTop: 120
  }
})

