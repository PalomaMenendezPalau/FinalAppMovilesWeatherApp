import React from 'react'
import {View , Text , StyleSheet, Image} from 'react-native'
import {colors} from '../utils/index'

const {PRIMARY_COLOR,SECONDARY_COLOR,TEMPERATURE_COLOR} = colors

export default function WeatherInfo({currentWeather}) {
    const {
        main: {temp},
        weather: [details],
        name,
    } = currentWeather
    const {icon, main , description} = details
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`

    return (
        <View style={styles.weatherInfo}>
            <Text style={styles.textSecondary}>{name}</Text>
            <Text style={styles.temperatureStyle}> {temp}°C </Text>
            
            <Image style={styles.weatherIcon} source ={{uri: iconUrl}} />
            <Text style={styles.textPrimary}>{description}</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',        
    },
    weatherIcon: {
        width:100,
        height: 100
    },
    textPrimary: {
        fontSize: 30,
        color: PRIMARY_COLOR,
        textTransform: 'capitalize'
    },
    temperatureStyle: {
        fontSize: 30,
        color: TEMPERATURE_COLOR,
    },
    textSecondary: {
        fontSize: 40,
        color: SECONDARY_COLOR,
        textTransform: 'capitalize',
        fontWeight: 500
    }
})