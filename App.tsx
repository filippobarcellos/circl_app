import { LogBox } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_500Medium,
  RedHatDisplay_700Bold,
  RedHatDisplay_900Black,
} from '@expo-google-fonts/red-hat-display'

import Navigation from './src/navigation'
import theme from './src/styles/theme'

LogBox.ignoreLogs([
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
])

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatDisplay_400Regular,
    RedHatDisplay_500Medium,
    RedHatDisplay_700Bold,
    RedHatDisplay_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Navigation />
        <StatusBar style='light' />
      </ThemeProvider>
    )
  }
}
