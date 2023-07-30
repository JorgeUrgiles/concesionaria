import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function WelcomeScreen({ navigation }) {

    const imageUrl = 'https://cdn1.logocore.com/wp-content/uploads/2016/10/12180559/Yesq-Logo-Tutorial-Geometric-Circles.png'

    return (
        <View style={styles.container}>

            <Image source={{ uri: imageUrl }} style={styles.image} />

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Login')} >
                <Text style={styles.text}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Register')} >
                <Text style={styles.text}>REGISTER</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btn: {
        width: '50%',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        color: 'white',
        marginBottom: 40

    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    }
});