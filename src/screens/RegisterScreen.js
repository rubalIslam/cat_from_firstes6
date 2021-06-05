import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView
} from "react-native";
/*import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../actions/userActions";
*/
export default function SingUpScreen({ setToken, setId }) {
 /* const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [errorSignup,setErrorSignUp] = useState("");

  const dispatch = useDispatch()  
  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
      if(userInfo) {
          console.log("push to main screen")
          //navigation.navigate("MainScreen")
      }
  }),[userInfo, navigation]

  const handleSubmit = async () => {
      //e.preventDefault()
    if(password !== confirmPassword){
        //alert("Password and Confirm Password is not same!")
        setMessage("Password and Confirm Password is not same!")
    }else{
        console.log("passwordcorrect")
        try{
          dispatch(register(name, email, password))
          navigation.navigate('LoginScreen')
        }catch(err){
          setErrorSignUp(err)
        }
    }
  }

  return (
    <ScrollView bounces={false} contentContainerStyle={styles.container}>
      <KeyboardAwareScrollView extraScrollHeight={110}>
        <SafeAreaView>
          <View style={styles.inner}>
            <Text style={styles.title}>If you dont have account, Please Register Here</Text>
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#E1E1E1"
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor="#E1E1E1"
              onChangeText={text => setName(text)}
            />
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#E1E1E1"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
            <TextInput
              autoCapitalize="none"
              style={styles.textInput}
              placeholder="Confirm password"
              placeholderTextColor="#E1E1E1"
              secureTextEntry={true}
              onChangeText={text => setConfirmPassword(text)}
            />
            {message && <Text style={{color:"red", paddingTop:20}}>): {message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}> Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <Text style={styles.underButton}>
                Already have an account, SignIn
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </ScrollView>
  );
  */
  return (
    <Text>
      Signup
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
  inner: {
    padding: 24,
    flex: 1,
    alignItems: "center"
  },
  title: {
    textAlign:"center",
    fontSize: 24,
    color: "white",
    marginVertical: 20
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
    paddingLeft: 15,
    color: "white"
  },
  textArea: {
    width: 330,
    height: 80,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    textAlignVertical: "top",
    color: "white",
    marginBottom: 20
  }
});
