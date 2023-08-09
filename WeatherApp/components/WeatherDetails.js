import React from 'react'
import {View , Text, StyleSheet } from 'react-native'
import { colors } from '../utils/index'
import {FontAwesome5 , MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR,BORDER_COLOR,DETAILS_COLOR} = colors

export default function WeatherDetails ({currentWeather}) {
    const {
        main: {feels_like,humidity},

    } = currentWeather

    return (
    <View  style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
            <View style={{... styles.weatherDetailsBox, borderRightWidth: 1 , borderRightColor: BORDER_COLOR}}>
                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={25} color={DETAILS_COLOR} />
                        <View>
                            <Text> Sensacion Termica:</Text>
                            <Text> {feels_like}°C </Text>
                        </View>
                </View>
            </View>
            <View style={{... styles.weatherDetailsBox, borderRightWidth: 1 , borderRightColor: BORDER_COLOR}}>
            <View style={styles.weatherDetailsRow}>
                <MaterialCommunityIcons name="water" size={30} color={DETAILS_COLOR} />
                     <View>
                        <Text> Humedad:</Text>
                        <Text> {humidity}% </Text>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}

const styles = StyleSheet.create( {
    weatherDetails: {
        alignItems: 'center',
        marginHorizontal: 10,
        borderWidth: 3,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
        marginVertical: 20
    
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent:'space-between',

    },
    weatherDetailsBox: {
        flex: 1,
        padding:20
    }
    
})