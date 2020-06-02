import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import HomeScreen from '../screens/HomeScreen'
import ArticleScreen from '../screens/ArticleScreen'
import ClipScreen from '../screens/ClipScreen'

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

const HomeTab = () => {
  return (
    <StyledSafeAreaView>
      <TopTab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          labelStyle: { fontSize: 13 },
          tabStyle: { width: 'auto' },
          style: { backgroundColor: 'paleturquoise' },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <TopTab.Screen name='business' component={HomeScreen} />
        <TopTab.Screen name='entertainment' component={HomeScreen} />
        <TopTab.Screen name='general' component={HomeScreen} />
        <TopTab.Screen name='health' component={HomeScreen} />
        <TopTab.Screen name='science' component={HomeScreen} />
        <TopTab.Screen name='sports' component={HomeScreen} />
        <TopTab.Screen name='technology' component={HomeScreen} />
      </TopTab.Navigator>
    </StyledSafeAreaView>
  )
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Article'
        component={ArticleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Clip'
        component={ClipScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName

    if (route.name === 'Home') {
      iconName = 'home'
    } else if (route.name === 'Clip') {
      iconName = 'bookmark-check'
    }

    return <MaterialCommunityIcons name={iconName} size={size} color={color} />
  },
})

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={screenOptions}>
        <BottomTab.Screen
          name='Home'
          component={HomeStack}
          options={{ tabBarLabel: 'ニュース一覧' }}
        />
        <BottomTab.Screen
          name='Clip'
          component={ClipStack}
          options={{ tabBarLabel: '後で読む記事' }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`
