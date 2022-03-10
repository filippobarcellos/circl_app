import React from 'react'
import { Platform } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { RootTabParamList } from '../../types'
import theme from '@styles/theme'
import CirclIcon from '@assets/icons/Circl'
import { Fixtures, Home, Profile } from '@screens/index'
import { FixtureNavigator } from './FixtureNavigator'

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName='Fixtures'
      screenOptions={{
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[100],
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: theme.colors.shades[120],
          borderTopColor: 'transparent',
          height: Platform.OS === 'ios' ? getBottomSpace() + 46 : 80,
          paddingVertical: 12,
        },
      }}
    >
      <BottomTab.Screen
        name='Fixtures'
        component={FixtureNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='search' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => <CirclIcon isFocused={focused} />,
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Feather>['name']
  color: string
}) {
  return <Feather size={25} style={{ marginBottom: -3 }} {...props} />
}
