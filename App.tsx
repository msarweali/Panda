import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './routes/Navigation';
import Provider from './store/Provider';



const App = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  )
}
export default App

const styles = StyleSheet.create({})