import React from 'react';
import {styles} from "./Button.styles";
import { Text, TouchableOpacity } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function ButtonComponent({onPress, title = "Button", color="#00a884"}) {  
  return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor: color }]}
    onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
