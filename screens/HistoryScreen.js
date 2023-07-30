import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import empleados from '../assets/data/empleados.json'



export default function HistoryScreen() {

    return (
        <View style={styles.container}>

            <View style={styles.container1}>
                <Text style={styles.text}>HISTORIAL DE VENTAS</Text>
            </View>

            <FlatList
                data={empleados.ventas}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text style={styles.text1}>Fecha: {item.fecha}</Text>
                        <Text style={styles.text1}>Cliente: {item.cliente}</Text>
                        <Text style={styles.text1}>Auto: {item.auto}</Text>
                        <Text style={styles.text1}>Precio: {item.precio}</Text>
                        <Text style={styles.text1}>Vendedor: {item.vendedor}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.fecha}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'black',
    },
    container1: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',

    },
    text: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 25,

    },
    text1: {
        color: 'white'
    }

});