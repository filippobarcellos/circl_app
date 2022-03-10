import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootNavigator } from './RootNavigator'
import { BottomTabNavigator } from './BottomTabNavigator'

export default function Navigation() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
