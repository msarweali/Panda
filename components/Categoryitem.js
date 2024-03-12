import { StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Navigation from '../routes/Navigation';
import ScreenNames from '../routes/ScreenNames';


const Categoryitem = props => {
    const {name , img , id,} = props;

    const navigation = useNavigation();

    const onCategoryPress = ()=>{
        const category = {...props};
        navigation.navigate(ScreenNames.productScreen, {data: category});
    };

  return (
    <TouchableOpacity onPress={onCategoryPress}>
        <View style={styles.card}>
            <View style={styles.topContainer}>
              <Image source={img} style={styles.img}/>
              <View style={styles.bordertxt}>
              <Text style={styles.txtname}>{name}</Text>
              </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Categoryitem

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
      txtname:{
        textAlign:'center',
        color:'white',
        fontSize:10,
        marginTop:2,
      },
      bordertxt:{
        backgroundColor:'#cce7c9',
        borderBottomRightRadius:10,
        borderBottomLeftRadius:10,
        marginTop:5,
        width:60,
        height: 20,
      },
})