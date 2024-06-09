import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ParamList, screens } from "@/utils/utils"
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'
import { COLORS, FONTS } from '@/styles'
import QRLogo from '@assets/svg/qr.svg'
import SearchLogo from '@assets/svg/search.svg'
import ProfileLogo from '@assets/svg/profile.svg'


function NavButton({Logo, tabName, active, changeTab}: {Logo: any, tabName: string, active: boolean, changeTab: () => void}) {
  return (
    <Pressable style={active? stylesheet.activeButton: stylesheet.button} onPress={changeTab}>
      <Logo style={{marginRight: 5}} width={15} height={15} fill={active? COLORS.primary: COLORS.text}/>
      <Text style={active? stylesheet.activeText: stylesheet.text}>{tabName}</Text>
    </Pressable>
  )
}


export default function DesktopNav() {
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const route = useRoute<RouteProp<ParamList>>()
  const { id } = useContext(SearchContext)
  const activeScreen = route.name

  return (
    <View style={stylesheet.view}>
      <NavButton Logo={ProfileLogo} tabName='Profile' active={screens.PROFILE == activeScreen} changeTab={() => navigation.navigate(screens.PROFILE)} />
      <NavButton Logo={QRLogo} tabName='Your QR' active={screens.QR == activeScreen} changeTab={() => navigation.navigate(screens.QR)} />
      <NavButton Logo={SearchLogo} tabName='Search' active={screens.SEARCH == activeScreen} changeTab={() => navigation.navigate(screens.SEARCH, id? {id}: undefined)}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    width: 225,
    borderColor: COLORS.highlight1,
    borderRightWidth: 2,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  button: {
    marginBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    marginBottom: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: COLORS.highlight1
  },
  text: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.text
  },
  activeText: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.primary
  },
})
