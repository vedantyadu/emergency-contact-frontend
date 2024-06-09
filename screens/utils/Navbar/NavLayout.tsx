import { ReactElement } from 'react'
import { View, useWindowDimensions } from 'react-native'
import { WIDTH_THRESHOLD } from '@/utils/utils'
import MobileNav from '@screens/utils/Navbar/MobileNav'
import DesktopNav from '@screens/utils/Navbar/DesktopNav'
import { COLORS } from '@/styles'


export default function NavLayout({children}: {children: ReactElement | ReactElement[]}) {

  const { width } = useWindowDimensions()

  if (width >= WIDTH_THRESHOLD) {
    return (
      <View style={{flex: 1, flexDirection: 'row', borderRightWidth: 2, borderLeftWidth: 2, borderColor: COLORS.highlight1}}>
        <DesktopNav/>
        { children }
      </View>
    )
  }
  return (
    <>
      { children }
      <MobileNav/>
    </>
  )
}
