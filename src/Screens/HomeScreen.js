import { StyleSheet, Text, View,StatusBar,ScrollView, Dimensions,Image, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Categoty } from '../res/data';
import Categoryitem from '../../components/Categoryitem';
import MostPopular from '../../components/MostPopular';
import { CategoryPopular } from '../res/dataPopular';
const {height} = Dimensions.get('window');
const HomeScreen = () => {


  const renderCategory = ()=>{
    const categoryComponent = Categoty.map(cate =>{
      return(
        <Categoryitem
          img={cate.img}
          imageD={cate.imageD}
          name={cate.name}
          detail={cate.detail}
          food={cate.food}
          foodimg={cate.foodimg}
          typeimg={cate.typeimg}
          mammal={cate.mammal}
          endangered={cate.endangered}
          mating={cate.mating}
          middleAge={cate.middleAge}/>
      );
    });
    return categoryComponent;
  };

  const renderPopular = () =>{
    const PopularComponent = CategoryPopular.map(popular =>{
      return(
        <MostPopular
        img={popular.img}
        name={popular.name}
        type={popular.type}/>
      );
    });
    return PopularComponent;
  };

  return (
    <SafeAreaView style={{backgroundColor:'#E8E8E8'}}>
      <StatusBar backgroundColor='#cce7c9'/>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.txt}>Join our animal lovers community</Text>
          <View style={styles.father}>
          <View>
          <Image source={require("../assets/images/smiling.png")}
          resizeMode='contain' style={styles.image}/>
          </View>
          <View  style={styles.btn}>
          <Button style={styles.btn1} title="Join Now" color={'#cce7c9'}/>
          </View>
          </View>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.category}>
          {renderCategory()}
        </View>
        </ScrollView>


        <View style={styles.borderPopular}>
          <Text style={styles.popular}>Most popular</Text>
        </View>

        
          <View style={styles.popularCard} >
            {renderPopular()}
          </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#E8E8E8',
  },
  top:{
    width:340,
    height:150,
    marginTop:15,
    marginRight:5,
    marginLeft:10,
    borderRadius:15,
    elevation: 15,
    backgroundColor:'white',
  },
  father:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  txt:{
    fontSize:22,
    margin:10,
    color:'black',
  },
  btn:{
    width:120,
    height:40,
    marginRight:20,
    marginTop:10,
    borderRadius:5,
    elevation: 5,
  },
  btn1:{
    borderRadius: 4,
    },
  image:{
    width:80,
    height:80,
    marginTop:-30,
    marginLeft:30,
  },
  category:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  borderPopular:{
    marginRight:15,
    width:105,
    marginTop:20,
    alignItems:'center',
    marginLeft:230,
    backgroundColor:'#cce7c9',
    elevation: 5,
    borderRadius:5,
    padding:5,
  },
  popular:{
    color:'white',
    fontSize:15,
  },
  popularCard:{
    margin:5,
  }
})