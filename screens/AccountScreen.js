import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function AccountScreen({ navigation }) {

  const imageUrl = 'https://cdn1.logocore.com/wp-content/uploads/2016/10/12180559/Yesq-Logo-Tutorial-Geometric-Circles.png'

  return (
    <View style={styles.container}>

      <Image source={{ uri: imageUrl }} style={styles.image} />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('History')} >
        <Text style={styles.text}>HISTORY</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Information')} >
        <Text style={styles.text}>INFORMATION</Text>
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
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 40,
    width: 200
  },

  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
});