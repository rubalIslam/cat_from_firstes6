import React, { useState, useRef, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  Alert,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  SafeAreaView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from "react-native";

import Colors from "../utils/Colors";
import CustomText from "../components/UI/CustomText";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { Login as LoginAction } from "../reducers/auth/authActions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import PropTypes from "prop-types";

import * as LocalAuthentication from "expo-local-authentication";
import * as SecureStore from "expo-secure-store";
import { secretKey } from "../utils/Config";
//import { TextInput } from "react-native-gesture-handler";
//import {TextInput} from "react-native-paper";
//import CustomText from "../components/UI/CustomText";
//import { onChange } from "react-native-reanimated";
//Components
//import { LoginForm } from "./components";
import { login } from "../actions/userActions"

const { height, width } = Dimensions.get("window");
export default function LoginScreen(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const { handleSubmit } = props;
  const [showPass, setShowPass] = useState(false);
  const auth = useSelector((state) => state.auth);
  const unmounted = useRef(false);

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const [error1,setError1] = useState("");

  const [editable, setEditable] = useState(false);
 
  useEffect(() => {
    setEditable(true);
  }, []);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);

  const submit = async (e) => {
    if (email === "" || password === ""){
      setError1("Email or password cannot be empty")
    }else{
      setError1("Trying to Login...")
    }
    try {
      console.log("bf")
      //await dispatch(LoginAction(email, password));
      await dispatch(login(email,password));
      console.log("af")
      try{
        props.navigation.navigate("HomeTab");
      }catch(err){
        setError1("Cannot login as Admin, Go to AdminLogin Page")
      }
    } catch (err) {
      //props.navigation.navigate("HomeTab");
      //alert(err);
      setError1("Enter valid username and password")
    }
  };

  return (
    <KeyboardAwareScrollView
      extraScrollHeight={110}
      contentContainerStyle={styles.container}
    >
      <ImageBackground
        style={{ flex: 1, position: "absolute", height, width }}
        source={require("../../src/assets/Images/flower3.jpg")}
        blurRadius={10}
      ></ImageBackground>

      <SafeAreaView style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, left: 20 }}
        >
          <Ionicons
            name="ios-arrow-back"
            size={35}
            color={Colors.light_green}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <View>
            <CustomText style={styles.title}>LOGIN</CustomText>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            placeholder="Email"
            placeholderTextColor="grey"
            onChangeText={text => setEmail(text)}
            //value={text}
            editable={editable}
          />

          <TextInput
            style={styles.textInput}
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={text => setPassword(text)}
            value={password}
          />
          {
            error1 ? 
              <Text style={{color:"red"}}>{error1}</Text>
              :null
          }
          <TouchableOpacity style={styles.button} onPress={submit}>
              <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.group}>
            
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("ForgetPwScreen");
              }}
            >
              <CustomText
                style={{
                  ...styles.textSignSmall,
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Forget Password ?
              </CustomText>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("SignUpScreen");
              }}
            >
              <CustomText
                style={{
                  ...styles.textSignLink,
                  //fontFamily: "Roboto-Medium",
                }}
              >
                 Don't have an account, Register First
              </CustomText>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
  /*
  return (
    <View
    //style={styles.container}
    >
      <ImageBackground
        style={{ flex: 1, position: "absolute", height, width }}
        source={require("../../src/assets/Images/flower3.jpg")}
        blurRadius={10}
      ></ImageBackground>
      
      

      <KeyboardAwareScrollView
        //behavior={Platform.OS == "ios" ? "position" : "height"}
        extraScrollHeight={110}
        //style={styles.container}
      >
        <SafeAreaView style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{ position: "absolute", top: 50, left: 20 }}
          >
            <Ionicons
              name="ios-arrow-back"
              size={35}
              color={Colors.light_green}
            />
            <View style={styles.header}>
              <View>
                <CustomText style={styles.title}>LOGIN</CustomText>
              </View>
            </View>
            
          <ScrollView
            //style={styles.container}
          >
          
            <TouchableWithoutFeedback 
                onPress={Keyboard.dismiss}
          >
            <View
              style={{
                flexDirection: "column",
                marginHorizontal: 10,
                zIndex: -1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="grey"
                onChangeText={(text) => setEmail(text)}
                value={email}
              />

              <TextInput
                style={styles.textInput}
                placeholder="password"
                placeholderTextColor="grey"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
              />

              <View style={styles.group}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("ForgetPwScreen");
                  }}
                >
                  <CustomText
                    style={{
                      ...styles.textSignSmall,
                      //fontFamily: "Roboto-Medium",
                    }}
                  >
                    Forget Password ?
                  </CustomText>
                </TouchableOpacity>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </ScrollView>
          
          </TouchableOpacity>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    </View>
  );
  */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 330,
    height: 50,
    borderRadius: 5,
    backgroundColor: "teal",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10

  },
  buttonText: {
    color: "white",
    fontSize: 24
  },
  group: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  textInput: {
    borderBottomColor: "green",
    borderBottomWidth: 1,
    width: 330,
    height: 45,
    marginBottom: 30,
    color: "teal",
  },
  header: {
    marginTop: height * 0.01,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    color: "green",
    fontWeight: "bold",
    fontSize: 40,
    letterSpacing: 5,
    //fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  text: {
    color: "#fff",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: Colors.lighter_green,
  },
  textSign: {
    fontSize: 15,
    color: "#fff",
    //fontFamily: "Roboto-Medium",
  },
  textSignSmall: {
    color: "#3667a8",
    textAlign: "center",
  },
  textSignLink: {
    color: "#3667a8",
    textAlign: "center",
  },
  center: {
    alignItems: "center",
  },
  circleImage: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    padding: 20,
    borderRadius: 55,
    borderStyle: "dashed",
    borderColor: Colors.grey,
  },
  faceid: {
    resizeMode: "contain",
    height: 70,
    width: 70,
  },
  loginOpt: {
    color: Colors.lighter_green,
    //fontFamily: "Roboto-Medium",
    marginBottom: 10,
  },
});
