//import 'react-native-gesture-handler';
import React, { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import * as SecureStore from "expo-secure-store";
//import AuthScreen from './components/auth';

import Welcome from "../screens/Welcome";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/RegisterScreen";
/*
import MainScreen from "./screens/MainScreen";
import HomeScreen from "./screens/HomeScreen";
//import MainScreen from "./screens/MainScreen";

//Admin routes
import UserListScreen from "./screens/UserListScreen";
*/
import AdminLoginScreen from "../screens/AdminLoginScreen";

import { useDispatch, useSelector } from "react-redux";
/*import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
*/
import IntroScreen from "../screens/IntroScreen";
/*
import { login } from "../actions/userActions";
*/
//import ProfileScreen from './components/user/profile/profile';
//import { Stack, HomeStack, VideosStack, screenOptions } from './routes/stacks';

//import AsyncStorage from "@react-native-async-storage/async-storage";
//import AsyncStorage from "@react-native-community/async-storage";

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
/*
const MainDrawer = () => (
    <Drawer.Navigator
    >
        <Drawer.Screen name="Home" component={HomeStack}/>
        <Drawer.Screen name="Videos" component={VideosStack}/>
   
    </Drawer.Navigator>
)
*/

const IntroStack = createStackNavigator();
export const IntroStackScreen = () => (
  <IntroStack.Navigator>
    <IntroStack.Screen
      name="IntroScreen"
      component={IntroScreen}
      options={{ headerShown: false}}
    >

    </IntroStack.Screen>
  </IntroStack.Navigator>
)
const LoginStack = createStackNavigator();
export const LoginStackScreen = () => (
  <LoginStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      cardOverlayEnabled: true,
    }}
    mode="modal"
  >
    <LoginStack.Screen name="LoginScreen" component={SignInScreen} />
    {/*<LoginStack.Screen name='ForgetPwScreen' component={ForgetPwScreen} />*/}
  </LoginStack.Navigator>
);

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/*
      <AuthStack.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={{
          animationEnabled: false,
        }}
      />*/}
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const WelcomeStack = createStackNavigator();
export const WelcomeStackScreen = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name="WelcomeScreen"
        component={Welcome}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          animationEnabled: false,
        }}
      />
      <AuthStack.Screen
        name="AdminLoginScreen"
        component={AdminLoginScreen}
        options={{
          animationEnabled: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </HomeStack.Navigator>
);
const MainStack = createStackNavigator();
export const MainStackScreen = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen
      name="Main"
      component={MainScreen}
      options={{
        animationEnabled: false,
      }}
    />
    <MainStack.Screen
      name="ProductScreen"
      component={ProductScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </MainStack.Navigator>
);

const CartStack = createStackNavigator();
export const CartStackScreen = () => (
  <CartStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <CartStack.Screen
      name="Cart"
      component={CartScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </CartStack.Navigator>
);

const ProfileStack = createStackNavigator();
export const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </ProfileStack.Navigator>
);

const Tab = createBottomTabNavigator();
export const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const color = focused ? "green" : "grey";
          if (route.name === "HomeTab") {
            iconName = "logout";
          } else if (route.name === "MainTab") {
            iconName = "home";
          } else if (route.name === "CartTab") {
            iconName = "shoppingcart";
          } else if (route.name === "ProfileTab") {
            iconName = "profile";
          }
          return <AntDesign name={iconName} size={23} color={color} />;
        },
      })}
      barStyle={{
        backgroundColor: "grey",
        height: 50,
        justifyContent: "center",
      }}
      activeColor={"green"}
      inactiveColor={"grey"}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Logout",
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="MainTab"
        component={MainStackScreen}
        options={{
          tabBarLabel: "Main",
          animationEnabled: false,
        }}
      />
      
      <Tab.Screen
        name="CartTab"
        component={CartStackScreen}
        options={{
          tabBarLabel: "Cart",
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          animationEnabled: false,
        }}
      />
    </Tab.Navigator>
  );
};

const UserListStack = createStackNavigator();
export const UserListStackScreen = () => (
  <UserListStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <UserListStack.Screen
      name="UserList"
      component={UserListScreen}
      options={{
        animationEnabled: false,
      }}
    />
  </UserListStack.Navigator>
);

const AdminTab = createBottomTabNavigator();
export const AdminTabScreen = () => {
  return (
    <AdminTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          const color = focused ? "green" : "grey";
          if (route.name === "HomeTab") {
            iconName = "logout";
          } else if (route.name === "MainTab") {
            iconName = "home";
          } else if (route.name === "CartTab") {
            iconName = "shoppingcart";
          } else if (route.name === "ProfileTab") {
            iconName = "profile";
          } else if (route.name === "UserListTab") {
            iconName = "addusergroup";
          }
          return <AntDesign name={iconName} size={23} color={color} />;
        },
      })}
      barStyle={{
        backgroundColor: "grey",
        height: 50,
        justifyContent: "center",
      }}
      activeColor={"green"}
      inactiveColor={"grey"}
    >
      
      <Tab.Screen
        name="HomeTab"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Logout",
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="MainTab"
        component={MainStackScreen}
        options={{
          tabBarLabel: "Main",
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStackScreen}
        options={{
          tabBarLabel: "Cart",
          animationEnabled: false,
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          animationEnabled: false,
        }}
      />
      <AdminTab.Screen
        name="UserListTab"
        component={UserListStackScreen}
        options={{
          tabBarLabel: "UserList",
          animationEnabled: false,
        }}
      />
    </AdminTab.Navigator>
  );
};
//=================ROOT NAV======================================
//=================ROOT NAV======================================
//=================ROOT NAV======================================
//=================ROOT NAV======================================
const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  //const user = useSelector((state) => state.auth.user);
  //const userLogin = useSelector((state) => state.userLogin.userInfo);
  //userLogin && console.log("userLogin", userLogin["isAdmin"]);

  const userLogin = {
    "token":"ase",
    "isAdmin":false
  }
  const user = "welcome";
  const firstTime = "no";

  return (
    <Drawer.Navigator
      drawerContentOptions={{
        itemStyle: { marginVertical: 3 },
      }}
      screenOptions={{
        headerShown: false,
      }}
    >
      {/*firstTime == "yes" ? (
        <Drawer.Screen
          name="AuthStack3"
          component={AuthStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Login
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="login"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ) : (
        <Drawer.Screen
          name="Welcome1"
          component={WelcomeStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Welcome
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="cart-plus"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
        )*/}

      {userLogin && userLogin["token"] && userLogin["isAdmin"] == true ? (
        <Drawer.Screen
          key="AdminTab"
          name="AdminTab"
          component={AdminTabScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Home
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ) : (
        <Drawer.Screen
          name="AuthStack2"
          component={AuthStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Login
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="login"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      )}
      {userLogin && userLogin["token"] && userLogin["isAdmin"] == false ? (
        <Drawer.Screen
          key="HomeTab"
          name="HomeTab"
          component={TabScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Home
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ) : (
        <Drawer.Screen
          name="AuthStack1"
          component={AuthStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Login
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="login"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      )}
      {/*user == "" ? (
        <Drawer.Screen
          name="AuthStack"
          component={AuthStackScreen}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Login
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="login"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
      ) : (
        <Drawer.Screen
          name="Welcome"
          component={Welcome}
          options={() => ({
            title: ({ focused }) => (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "500",
                  //fontFamily: "Roboto-Medium",
                }}
              >
                Welcome
              </Text>
            ),
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="cart-plus"
                size={23}
                //color={focused ? Colors.lighter_green : Colors.grey}
              />
            ),
          })}
        />
        )*/}
    </Drawer.Navigator>
  );
};
