import {StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
        
        <Text style={styles.pay} >სრული ღირებულება:{calculateSum()} </Text>
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

<TouchableOpacity  onPress={() => deleteProductFromCart()} >
            <View style={styles.Button}>
                <Text style={styles.delete} >წაშლა</Text>
            </View>
        </TouchableOpacity>

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
    singleCarContainer:{
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:'#d2a3e3',
        borderRadius:10,
        marginBottom:10,
        padding:5
        
    },
    Button: {
        backgroundColor:'#CE93D8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white',
        height:55
    },
    delete: {
        fontSize:20,
        fontWeight:'600',
        letterSpacing: 0.5,
        color:'white',
    },
    pay: {
        fontWeight:'600',
        fontSize:25,
        marginBottom:25
    }

})