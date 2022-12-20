import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    const loginAsync = async () => {
        axios.post('https://cms.vendoo.ge/api/customer/login', {
            username:email,
            password:psw
        })
        .then(res=>navigation.navigate('main'))
        .catch(err=>console.warn(err))

    }
   

    return <View style={styles.mainContainer}>
        <View style={styles.inputsContainer}>
        <Text style={styles.Vendoo}>VENDOO</Text>
        <TextInput style={styles.textInput} value={email} onChangeText={setEmail} placeholder="იმეილი"></TextInput>
        <TextInput style={styles.pass} value={psw} onChangeText={setPsw} placeholder="პაროლი" secureTextEntry={true} ></TextInput>
        <TouchableOpacity  onPress={loginAsync} >
            <View style={styles.Button}>
                <Text style={styles.Login} >რეგისტრაცია</Text>
            </View>
        </TouchableOpacity>
        
      
        </View>
    </View>
}

export default LoginScreen;


const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#E1BEE7',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    inputsContainer:{
        padding:15,
        borderRadius:5,
        width:'80%'
    },
    
    textInput:{
        backgroundColor:'#CE93D8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white',
        height:55,
        paddingLeft:10
    },
    pass:  {
        backgroundColor:'#CE93D8',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:35,
        marginHorizontal:20,
        marginVertical:10,
        borderWidth:1,
        borderColor:'white',
        height:55,
        paddingLeft:10

},

    Vendoo: {
        color:'#CE93D8',
        fontSize:50,
        letterSpacing:8,
        marginLeft:25
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
    Login: {
        fontSize:20,
        fontWeight:'600',
        letterSpacing: 0.5,
        color:'white',
    }
})