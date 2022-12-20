import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = () => {

    const products = useSelector(state=>state.cartProducts)

    const calculateSum = () => {
        let sum = 0;
        for(let i of products){
            sum = sum + i.price;
        }
        return sum;
    }
  

    return <View style={styles.cartContainer}>
        <Text style={styles.cartTitle}>cart</Text>
        <Text>სრული ღირებულება:{calculateSum()} </Text>
        <View>
            {products.map((el, index)=><SingleCartProduct product={el} index={index} key={index}/>)}
        </View>
        </View>
}

export default CartScreen;

const SingleCartProduct = ({product, index}) => {

const dispatch = useDispatch();

const deleteProductFromCart = () => {
    dispatch({type:'REMOVE_PRODUCT_FROM_CART', payload:index})
}

    return <View style={styles.singleCarContainer}>
        
<Text>{product.title}</Text>
<Text>price: {product.price}</Text>
<Button
onPress={() => deleteProductFromCart()}
title="წაშლა"
color="#841584"
backgroundColor="red"
/>
    </View>
}

const styles = StyleSheet.create({
    cartContainer:{
        flex:1,
        width:'100%',
        padding:20,
        paddingTop:100,
        backgroundColor:'#E1BEE7'
    },
    cartTitle:{
        textAlign:'left',
        color:'red',
        fontSize:20
    },
    singleCarContainer:{
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#d2a3e3',
        borderRadius:10,
        marginBottom:10,
        padding:5
        
    }
})