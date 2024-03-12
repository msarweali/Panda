import { Alert, StyleSheet, Text, View , Image, ScrollView} from 'react-native'

const ProductScreen = props => {
  const product = props.route.params.data;

  return (
    <View style={styles.container}>
    <View style={styles.imgstyle}>
    <Image source={product.imageD} style={styles.img} />
    </View>
    <ScrollView>
    <View style={styles.bottom}>
    <View style={styles.nameView}>
    <Text style={styles.name}>{`${product.name}`}</Text>
    </View>
    <View style={styles.detailView}>
    <Text style={styles.detail}>{`${product.detail}`}</Text>
    </View>
    <View style={styles.border}>
    <View style={styles.foodView}>
      <Text style={styles.bestfood}>
        Best Food : 
      </Text>
    <Text style={styles.food}>{`${product.food}`}</Text>
    </View>
    <View style={styles.foodView}>
      <Text style={styles.bestfood}>
      Middle age : 
      </Text>
    <Text style={styles.food}>{`${product.middleAge}`}</Text>
    </View>
    <View style={styles.foodView}>
      <Text style={styles.bestfood}>
      Mating period : 
      </Text>
    <Text style={styles.food}>{`${product.mating}`}</Text>
    </View>
    </View>






    </View>
    <View style={styles.aa}>
    <View style={styles.icons}> 
      <View style={styles.borderPopular}>
      <Image source={product.foodimg} style={styles.image1}/>
      </View>

      <View style={styles.borderPopular}>
      <Image source={product.typeimg} style={styles.image1}/>
      </View>

      <View style={styles.borderPopular}>
      <Image source={product.mammal} style={styles.image1}/>
      </View>

      <View style={styles.borderPopular}>
      <Image source={product.endangered} style={styles.image1}/>
      </View>

      <View style={styles.borderPopular}>
      <Image source={product.endangered} style={styles.image1}/>
      </View>

    </View>
    </View>
    </ScrollView>
  </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
   
  },
  imgstyle:{
    alignItems:'center',
    backgroundColor:'#cce7c9',
    elevation:15,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30,   
    height: 200,
  },
  img: {
    width:150,
    height: 150,
    marginTop:20,
    alignItems:'center',
    resizeMode: 'contain',
  },
  aa:{
    alignItems:'center',
    marginTop:30,
  },
  icons:{
    flexDirection:'row',
    alignItems:'center',
  },
  image1:{
    width: 30,
    height: 30,
    marginTop:10,
  },
  borderPopular:{
    alignItems:'center',
    width:60,
    height:50,
    margin:4,
    backgroundColor:'#cce7c9',
    elevation: 10,
    borderRadius:10,
  },
  bottom:{
    margin:5,
    marginTop:20,
  },
  name:{
    color:'black',
    marginRight:10,
    marginTop:10,
    fontSize:25,
  },
  detail:{
    color:'#999999',
    marginRight:10,
    marginTop:20,
    fontSize:15,
  },
  border:{
    marginTop:20,
  },
  foodView:{
    flexDirection:'row-reverse',
    alignItems:'center',
    margin:5,
    color:'black',
    fontSize:18,
  },
  bestfood:{
    marginTop:10,
    marginRight:10,
    color:'#cce7c9',
    fontSize:18,
  },
  food:{
    color:'black',
    marginRight:10,
    marginTop:14,
    fontSize:15,
  },

})