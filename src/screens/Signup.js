import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import InputText from "../components/Input";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <InputText placeholder="Email" style={styles.input} />
            <InputText placeholder="Password" style={styles.input} />
            <TouchableOpacity title='Submit' style={styles.button}>Submit</TouchableOpacity>
            <Text>Forget your Password ?</Text>
            <Text>Don't have any Account  <Text>Sign Up</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        backgroundColor: 'rgba(64, 0, 201, 0.1)'
    },

    input: {
        color: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.11)',
        padding:'10px 0px'
    },
    head: {
        fontSize: '25px',
        fontWeight: 'bold',

    },
    button: {
        backgroundColor: '#45fa81',
        color: 'white'
    }
}
)