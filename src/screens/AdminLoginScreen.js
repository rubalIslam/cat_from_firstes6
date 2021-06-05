import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet,
  SafeAreaView
} from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//import axios from "axios";
/*
import { useDispatch, useSelector } from 'react-redux'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { firebase,firebaseLoggedInDetail,firebaseUsers } from "../components/Firebase/firebase";
import { login } from "../actions/userActions"
import AuthGlobal from "../../Context/store/AuthGlobal";
//import { navigationRef } from "../RootNavigation";
import * as RootNavigation from "../RootNavigation";
 */
export default function SignInScreen({ navigation }) {
  /*
  const context = useContext(AuthGlobal)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tried,setTried] = useState(1)
  //const navigation = useNavigation();
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const [error1,setError1] = useState("");
  //console.log(userLogin)

  useEffect(() => {
    console.log("context",context)
    
  },[userInfo])

  const handleSubmit = async (e) => {
    //const loginToken;
    //const loginId;
    let today = new Date();
    let dateTime = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let userMail = "";
    let i=1;
    //e.preventDefault()
    if (email === "" || password === ""){
      setError1("Email or password cannot be empty")
    }else{
      setError1("Trying to Login...")
    }
    try {
      await dispatch(login(email,password))
      try{
        navigation.navigate("AdminTab",{ screen: 'MainTab'})
      }catch(e){
        //alert(e)
        setError1("cannot login as User, goto UserLogin Page")
      }
      //navigation.navigate("HomeTab",{ screen: 'HomeTab'})
      console.log(error)
    } catch (err) {
      //alert(err)
      console.log("err")
      //navigation.navigate("HomeTab",{ screen: 'HomeTab'})
      setError1(err)
    }
    
  };
 
  
  return (
    <KeyboardAwareScrollView
      extraScrollHeight={110}
      contentContainerStyle={styles.container}
    >
      <SafeAreaView style={{ alignItems: "center" }}>
        <Text style={styles.loginText}>Login As Admin</Text>
        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            placeholder="email"
            placeholderTextColor="#E1E1E1"
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            placeholderTextColor="#E1E1E1"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          {
            error ?
              <Text style={{color:"red"}}>{error}</Text>:null
          }
          {
            error1 ?
              <Text style={{color:"red"}}>{error1}</Text>:null
          }
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Welcome");
            }}
          >
            <Text style={styles.underButton}>Not an Admin Login as User</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
  */
 return (
   <Text>
     AdminLogin
   </Text>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 190,
    height: 65,
    borderRadius: 50,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  loginText:{
    color:"white",
    fontSize:40,
    fontWeight:"bold"
  },
  buttonText: {
    color: "white",
    fontSize: 24
  },
  underButton: {
    marginTop: 15,
    color: "white",
    textDecorationLine: "underline"
  },
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    color: "white"
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  }
});
