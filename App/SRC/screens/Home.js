import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { DataContext, Fornecedor } from '../context/dataContext'

const Home = () => {
  const actualState = useContext(DataContext)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}> {actualState.state.counter}</Text>
      <Button 
        title="Aumentar"
        onPress={() => actualState.dispatch({type:"aumentar", payload:100})}
        />  
        <br></br>
        <Button 
        title="Diminuir"
        onPress={() => actualState.dispatch({type:"diminuir", payload:100})}
        />
        <br></br>
        <Button 
        title="Zerar"
        onPress={() => actualState.dispatch({type:"zerar"})}
        />
        { actualState.state.showMessage ? <Text>MENSAGIS SECRETIS</Text> : null}
        <br></br>
        <Button 
        title="Mostrar mensagem secreta"
        onPress={() => actualState.dispatch({type:"mostrar"})}
        />    

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
  },
  text: {
      padding: 15, 
      fontSize: 35,
      alignItems: 'center',
  }    
})


export default () => {
  return(
    <Fornecedor>
      <Home />
    </Fornecedor>
  )
}