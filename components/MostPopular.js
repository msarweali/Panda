import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ScreenNames from '../routes/ScreenNames';

const MostPopular = props => {
    const {name , img , type} = props;
    const navigation = useNavigation();
     const onPopularPress = () =>{
        const popular = {...props};
        navigation.navigate(ScreenNames.animalScreen, {dataPopular: popular});
     };
  return (
    <View>
          <View style={styles.main}>
            <View style={styles.card}>
            <View style={styles.topContainer}>
              <Image source={img} style={styles.img}/>
              <View style={styles.typename}>
              <Text style={styles.txtname}>{name}</Text>
              <Text style={styles.txttype}>{type}</Text>
              </View>
              <View style={styles.end}>
                <TouchableOpacity onPress={onPopularPress}>
                <View style={styles.icon}>
                <FontAwesome5 name="angle-down" size={18} color={'white'}/>
                </View>
                </TouchableOpacity>
              </View>
            </View>
            </View>
        </View>
    </View>
  )
}

export default MostPopular

const styles = StyleSheet.create({
    card: {
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'white',
        borderBottomRightRadius:30,
        marginLeft:15,
        marginTop:15,
        width:320,
        height:100,
        elevation:5,
      },
      txt: {
        fontSize: 15,
        marginRight:30,
      },
      img: {
        width: 40,
        height: 40,
        marginTop:30,
        marginLeft:270,
        resizeMode: 'contain',
      },
      typename:{
        flexDirection:'column',
        marginTop:-45,
        marginRight:60,
      },
      txttype:{
        color:'#E8E8E8',
        fontSize:15,
      },
      txtname:{
        color:'black',
        fontSize:20,
      },
      end:{
        width:30,
        height:40,
        borderBottomRightRadius:15,
        backgroundColor:'#cce7c9',
        elevation:10,
        marginRight:290,
        marginTop:-73,
      },
      icon:{
        marginTop:10,
        marginRight:10,
      }
})