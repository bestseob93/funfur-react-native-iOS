import React, { Component } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native'
import Header from '../components/Common/Header'
import { StackNavigator, TabNavigator } from 'react-navigation'
import {
  SplashScreen,
  UsernameScreen,
  PasswordScreen,
  RegisterScreen,
  HomeScreen,
  ShopScreen,
  ReViewScreen,
  MyPageScreen
} from './Screens'

const TabNav = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '',
    },
    Shop: {
      screen: ShopScreen,
      path: 'shop',
    },
    ReView: {
      screen: ReViewScreen,
      path: 'review',
    },
    MyPage: {
      screen: MyPageScreen,
      path: 'mypage',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
      labelStyle: {
        fontSize: 14
      },
      showIcon: false,
      animationEnabled: true
    },
  }
)

const App = StackNavigator(
  {
    Splash: {
      screen: SplashScreen,
    },
    Username: {
      screen: UsernameScreen,
      navigationOptions: {
        header: null
      }
    },
    Password: {
      screen: PasswordScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
    },
    TabsNavigator: {
      screen: TabNav,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    headerMode: 'float'
  }
)

export default App