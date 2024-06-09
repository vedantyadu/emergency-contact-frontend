import { SearchContext } from '@/context/SearchContext'
import { COLORS, FONTS } from '@/styles'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from './SearchBar'
import { useContext, useEffect, useState } from 'react'
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { ParamList, screens } from '@/utils/utils'
import ScanView from '@screens/Search/ScanView'
import { Details } from './Details'



export default function Search() {

  const route = useRoute<RouteProp<ParamList>>()
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const { id, setId } = useContext(SearchContext)

  useEffect(() => {
    setId(route.params?.id)
  }, [route.params?.id])

  if (id) {
    return (
      <View style={stylesheet.view}>
        <Details/>
      </View>
    )
  }
  
  return (
    <View style={[stylesheet.view, {padding: 20}]}>
      <SearchBar/>
      <ScanView/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  scannerWrapper: {
    overflow: 'hidden',
    backgroundColor: COLORS.highlight1,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.highlight1,
    width: '100%',
    maxWidth: 400,
    aspectRatio: 1
  },
  scannerText: {
    fontFamily: FONTS.defaultBold,
    marginTop: 20,
    color: COLORS.text
  }
})
