import { useState, useCallback , useEffect} from "react"
import {View} from "react-native"
import {Button, IconButton, Text, TextInput} from "react-native-paper"
import Icon from "react-native-vector-icons/AntDesign"
import { useMyContextController, login } from "../context"


export default Login = ({navigation})=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [controller, dispatch] = useMyContextController();
    const {userLogin} = controller;
    useEffect(()=>{
        if(userLogin!=null)
            navigation.navigate("Home")
    },[userLogin])
    const onSubmit =()=>{
        login(dispatch,email,password);
        
    }
    return (
       
        <View style={{flex:1, justifyContent:"center", alignContent:"center"}}>
            <Text style={{fontSize:30, fontWeight: "bold", alignSelf:"center", color:"blue"}}>
                LOGIN
            </Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput placeholder="Password" value={password} onChangeText={setPassword}
                secureTextEntry={!showPassword}
            />
            <Button mode="contained" onPress={onSubmit}>Đăng Nhập</Button>
        </View>
       
    )

}