import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { FixturesStackParamList } from '../../types'
import { Fixtures, FixtureDetails } from '@screens/index'

const Stack = createNativeStackNavigator<FixturesStackParamList>()

export function FixtureNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Fixtures}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='FixtureDetails'
        component={FixtureDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
