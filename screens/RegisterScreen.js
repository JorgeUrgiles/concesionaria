import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RegisterScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt1}>REGISTER</Text>
            <TextInput
                style={styles.txtinput1}
                placeholder='Your Name'
                placeholderTextColor="white" />
            <TextInput
                style={styles.txtinput1}
                placeholder='Email adress'
                placeholderTextColor="white" />
            <TextInput
                style={styles.txtinput2}
                placeholder='Password'
                secureTextEntry={true}
                keyboardType="default"
                placeholderTextColor="white"
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Login')} >
                <Text style={styles.text}>CREATE YOUR ACCOUNT</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'top',


    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txt1: {

        color: 'white',
        fontSize: 40,
        marginBottom: 20,
        marginTop: 100

    },
    txt2: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
    ,
    txt3: {
        color: 'white',
        fontSize: 20,

        textDecorationLine: 'underline'
    },
    txtinput1: {
        borderColor: "#333",
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        width: "80%",
        marginBottom: 50,
        color: 'white',
        borderColor: 'white'

    },
    txtinput2: {
        borderColor: "#333",
        padding: 10,
        borderWidth: 1,
        borderRadius: 50,
        width: "80%",
        justifyContent: "center",
        color: 'white',
        borderColor: 'white',
        marginBottom: 1,
    },
    btn: {
        marginTop: '10%',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },
    btn2: {

        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginLeft: -150

    }
});