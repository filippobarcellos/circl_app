import React from 'react'
import { Platform } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { getBottomSpace } from 'react-native-iphone-x-helper'

import { Fixtures, Search, Profile } from '@screens/index'
import { RootTabParamList } from '../../types'
import theme from '@styles/theme'

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
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          marginTop: -32,
          height: Platform.OS === 'ios' ? getBottomSpace() + 60 : 80,
          paddingVertical: 12,
        },
      }}
    >
      <BottomTab.Screen
        name='Fixtures'
        component={Fixtures}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
