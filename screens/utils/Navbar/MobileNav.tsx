import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ParamList, screens } from "@/utils/utils"
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'
import { COLORS, FONTS } from '@/styles'
import QRLogo from '@assets/svg/qr.svg'
import SearchLogo from '@assets/svg/search.svg'
import ProfileLogo from '@assets/svg/profile.svg'


function NavButton({Logo, active, changeTab}: {Logo: any, active: boolean, changeTab: () => void}) {
  return (
    <Pressable style={active? stylesheet.activeButton: stylesheet.button} onPress={changeTab}>
      <Logo width={25} height={25} fill={active? COLORS.primary: COLORS.highlight2}/>
    </Pressable>
  )
}


export default function MobileNav() {
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const route = useRoute<RouteProp<ParamList>>()
  const { id } = useContext(SearchContext)
  const activeScreen = route.name

  return (
    <View style={stylesheet.view}>
      <NavButton Logo={ProfileLogo} active={screens.PROFILE == activeScreen} changeTab={() => navigation.navigate(screens.PROFILE)} />
      <NavButton Logo={QRLogo} active={screens.QR == activeScreen} changeTab={() => navigation.navigate(screens.QR)} />
      <NavButton Logo={SearchLogo} active={screens.SEARCH == activeScreen} changeTab={() => navigation.navigate(screens.SEARCH, id? {id}: undefined)}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    borderTopColor: COLORS.highlight1,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    flex: 1,
    paddingVertical: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.highlight1,
    borderRadius: 100,
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
