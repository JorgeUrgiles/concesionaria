import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const imageUrl = 'https://cadenaser00.epimg.net/ser/imagenes/2008/09/14/cultura/1221347838_740215_0000000000_noticia_normal.jpg'



export default function InformationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> EMPLOYEE PROFILE</Text>
            <Image
                style={styles.image}
                source={{ uri: imageUrl }} />
            <Text style={styles.text1}> Name: Homero J. Simpson</Text>
            <Text style={styles.text1}> Email: hsimpson@gmail.com</Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Welcome')} >
                <Text style={styles.text2}>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',

    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 25
    },

    text1: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'flex-start',
        marginTop: 30,
        marginBottom: 25,
        marginLeft: 60
    },
    text2: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    image: {
        width: '50%',
        height: 250,
        borderRadius: 8,
        marginBottom: 8,

    },
    btn: {
        marginTop: '2%',
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },

});
