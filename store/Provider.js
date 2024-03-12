import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Context from './Context'

const Provider = props => {
    const [cart , setCart] = useState([]);

    const providerValue = {
        cart,
        setCart,
    };
  return (
    <Context.Provider value={providerValue}>
        {props.children}
    </Context.Provider>
  )
}

export default Provider

const styles = StyleSheet.create({})