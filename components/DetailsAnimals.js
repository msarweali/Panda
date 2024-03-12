import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../routes/ScreenNames';

const DetailsAnimals = props => {
    const {name , img} = props;


  return (
          <View style={styles.card}>
            <View style={styles.topContainer}>
              <Image source={img} style={styles.img}/>
              <View style={styles.bordertxt}>
              <Text style={styles.txtname}>{name}</Text>
              </View>
            </View>
        </View>
  )
}

export default DetailsAnimals

const styles = StyleSheet.create({
  card: {
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'white',
    elevation:5,
    marginLeft:10,
    margin:3,
    width:60,
    height:70,
  },
  img: {
    width: 35,
    height: 35,
    marginTop:10,
    marginLeft:12,
    textAlign:'center',
    resizeMode: 'contain',
  },
})