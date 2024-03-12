import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Context from '../../store/Context'
import Categoryitem from '../../components/Categoryitem';
import { ScrollView } from 'react-native-gesture-handler';

const Cart = () => {
    const {cart} = useContext(Context);
    const renderCart = ()=>{
        return cart.map(product =>{
            return <Categoryitem {...product}/>;
        });
    };
  return (
    <View style={styles.container}>
        <ScrollView>
            {renderCart()}
        </ScrollView>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})