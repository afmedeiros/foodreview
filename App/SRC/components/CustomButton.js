import { StyleSheet, Text, Pressable } from "react-native";
import React from "react";

const CustomButton = ({title, destino}) => {
    return(
        <Pressable onPress={destino} style={styles.container}>
            <Text style={styles.text}>
                Login
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3b71f3',
        width:'50%',
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    text:{
        padding: 15,
        fontWeight: 'bold',
        color:'white'
    }
})