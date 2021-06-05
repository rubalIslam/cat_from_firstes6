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
import AppNavigator from "./src/navigation/AppNavigator";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import { reducer as formReducer } from "redux-form";
import { StatusBar } from "expo-status-bar";

import LocalNotication from "./src/components/Notification/LocalNotification";

const rootReducer = combineReducers({
    store: productReducer,
});

const store = createStore(
    rootReducer,
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