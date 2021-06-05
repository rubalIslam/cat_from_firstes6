import React,{ useState, useCallback, useEffect} from 'react';
import { View, StyleSheet, ScrollView,Text } from 'react-native';
//import { Formik } from 'formik';
//import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
//import { registerUser, loginUser,clearAuthError } from '../../store/actions';
import { useFocusEffect } from '@react-navigation/native'


const AuthScreen = () =>{
    const dispatch = useDispatch();
/*
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
*/
    


    const error = useSelector(state => state.auth.error )
    const [formType, setFormType] = useState(true)
    const [ securEntry,setSecurEntry] = useState(true);
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values) => {
        setLoading(true)
        if(formType){
            // register
            dispatch(registerUser(values));
        } else {
            // sign in
            dispatch(loginUser(values))
        }
    }

    return (
        <View>
            <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <Text>auth</Text>
            </View>
        </ScrollView>
        </View>
    )
} 


const styles = StyleSheet.create({
    contentContainer:{
        flex:1,
        backgroundColor:"tomato"
    },
    container:{
        padding:50,
        alignItems:'center'
    },
    inputStyle:{
        fontSize:15,
        color:"white"
    },
    inputContainerStyle:{
      borderBottomWidth:3,
      borderBottomColor: "black"
    }
})

export default AuthScreen;