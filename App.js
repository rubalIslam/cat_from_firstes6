import React, { useEffect } from "react";
//import { LogBox } from "react-native";
import {Text, SafeAreaView, View } from "react-native";
//Reducer
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    authReducer
} from "./src/reducers/auth/authReducer";
import {
    productReducer
} from "./src/reducers/product/productReducer";
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer,
    productTopRatedReducer,
  } from './src/reducerscopy/productReducers';
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './src/reducerscopy/userReducers';
import AppNavigator from "./src/navigation/AppNavigator";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { reducer as formReducer } from "redux-form";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { AsyncStorage } from "react-native";

//import LocalNotication from "./src/components/Notification/LocalNotification";

/*const userInfoFromStorage = AsyncStorage.getItem('userInfo')
  ? AsyncStorage.getItem('userInfo')
  : null
*/
//console.log("ui",userInfoFromStorage);

const rootReducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,
    store: productReducer,
    auth: authReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
});

const initailState = {
    userLogin: {
        //userInfo: userInfoFromStorage
    }
}

const store = createStore(
    rootReducer,
    initailState,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App(){
    return(
        <Provider store={store}>
            <AppNavigator />
            <Text>app</Text>
        </Provider>
    )
}