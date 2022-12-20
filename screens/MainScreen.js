import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

const MainScreen = () =>{
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products?sort=desc')
        .then(res=>setProducts(res.data))
        .catch(err=>console.log(err))
    },[])
    return <View style={styles.mainContainer}>
        <View style={styles.head}>

        <TouchableOpacity   onPress={() => navigation.navigate('cart')}>
            <View style={styles.basket}>
                <Text style={styles.buttonText} >კალათა</Text>
            </View>
        </TouchableOpacity>

        
        </View>
        <ScrollView alwaysBounceHorizontal={false}>
            {products.map((el, index)=><SingleProduct product={el} key={index}/>)}
        </ScrollView>
    </View>
}

export default MainScreen;

const SingleProduct = (props)=> {


const {product} = props;
const dispatch = useDispatch();


    const addToCart = (product) => {
        dispatch({type:'ADD_TO_CART', payload:product})
    }



    return <View style={styles.productContainer}>
<Image style={styles.productImage} source={{uri:product.image}}/>
<Text>დასახელება: {product.title}</Text>
<Text>ღირებულება: {product.price}</Text>

<TouchableOpacity  onPress={() => addToCart(product)}>
            <View style={styles.Button}>
                <Text style={styles.buttonText} >დამატება</Text>
            </View>
        </TouchableOpacity>

    </View>
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:20,
        paddingVertical:50,
        backgroundColor:'#E1BEE7'
    },
    head:{
        
        width:'100%',
        justifyContent: 'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:20
    },
    productContainer:{
        marginBottom:20
    },
    productImage:{
        width:'90%',
        height:200,
        objectFit:'cover'
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
    buttonText: {
        fontSize:20,
        fontWeight:'600',
        letterSpacing: 0.5,
        color:'white',
    },
    basket:{
        backgroundColor:'#CE93D8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white',
        height:60,
        width:300
    }
})