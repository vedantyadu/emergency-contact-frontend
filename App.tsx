import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { View, StatusBar, StyleSheet, Platform } from 'react-native'
import { configureAxios, links } from "@/utils/utils"
import Tabs from '@screens/index'
import { COLORS } from '@/styles'
import { useFonts } from 'expo-font'
import { AuthProvider } from '@/context/AuthContext'
import * as Linking from 'expo-linking'
import { useEffect } from 'react'


configureAxios()

const prefix = Linking.createURL('/')

let customFonts = {
  'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.bg,
  },
}

const linking = {
  prefixes: [prefix],
  config: {
    screens: links
  }
}


export default function App() {

  const [isLoaded] = useFonts(customFonts)

  // useEffect(() => {
  //   const open = async () => {
  //     const initialURL = await Linking.getInitialURL()
  //     const scheme = Linking.parse(initialURL as string)
  //     console.log(scheme)
  //     console.log(prefix)
  //     if (Platform.OS == 'web') {
  //       Linking.openURL('exp://192.168.1.4:8081/--/qr')
  //     }
  //   }
  //   open()
  // }, [])

  if (isLoaded) {
    return (
      <AuthProvider>
        <StatusBar backgroundColor={COLORS.text}/>
        <View style={stylesheet.window}>
          <View style={stylesheet.view}>
            <NavigationContainer linking={linking} theme={theme}>
              <Tabs/>
            </NavigationContainer>
          </View>
        </View>
      </AuthProvider>
    )
  }

  return (
    <View/>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    maxWidth: 1280,
    flex: 1
  },
  window: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.bg
  }
})
