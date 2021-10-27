import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import InputText from "../components/Input";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Login</Text>
            <Text style={styles.secondHead}>Add your details to login</Text>
            <InputText placeholder="Email" style={styles.input} />
            <InputText placeholder="Password" style={styles.input} />
            <TouchableOpacity title='Submit' style={styles.button}>Submit</TouchableOpacity>
            <Text style={styles.textDetail}>Forget your Password ?</Text>
            <Text style={styles.textDetail}>Don't have any Account  <Text style={styles.innerLink}>Sign Up</Text>
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width:"100%",
height:"auto",
paddingHorizontal:'10px'    },

    input: {
        color: 'black',
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
        paddingHorizontal:'25px',
        paddingVertical:'15px',
        marginBottom:'28px',
        borderRadius:'20px',
        

    },
    head: {
        fontSize: '25px',
        textAlign:'center' ,
        marginBottom:'28px'

    },
    secondHead:{
        color:'gray',
        textAlign:'center' ,
        marginBottom:'28px'


    },
    button: {
        textAlign:'center' ,
        backgroundColor: '#45fa81',
        color: 'white',
        paddingHorizontal:'25px',
        paddingVertical:'15px',
        marginBottom:'28px',
        borderRadius:'20px',


    },   
    textDetail:{
        color:'gray',
        textAlign:'center' ,

    },
    innerLink:{
        fontWeight:'bold',
        color:'#45fa81'
    }
}
)