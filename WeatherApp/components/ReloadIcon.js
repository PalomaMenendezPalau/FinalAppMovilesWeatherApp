import React from 'react'
import {View , StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons' 

export default function ReloadIcon ({  load  }) {
    return (
    <View style={styles.ReloadIcon}>
        <Ionicons onPress={load} name="reload" size={24} color="black" />
    </View>
    )
}


const styles = StyleSheet.create ({
    ReloadIcon: {
        position: 'absolute',
        top: -50,
        right: 20,
        
    }
})