import { Image, Pressable, StyleSheet, View, ScrollView, Text, useWindowDimensions } from'react-native'
import CloseLogo from '@assets/svg/remove.svg'
import { COLORS, FONTS } from '@/styles'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ParamList, WIDTH_THRESHOLD, screens } from '@/utils/utils'
import { useContext } from 'react'
import { SearchContext } from '@/context/SearchContext'
import SingleLineData from '@screens/utils/Profile/SingleLineData'
import MultiLineData from '@screens/utils/Profile/MultiLineData'


export function Details() {
  
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const { details } = useContext(SearchContext)
  const { width } = useWindowDimensions()

  return (
    <ScrollView style={{width: '100%', paddingHorizontal: width > WIDTH_THRESHOLD? 40: 20}} contentContainerStyle={stylesheet.container}>
      <View style={{width: '100%', display: 'flex', alignItems: 'flex-end', paddingVertical: 20}}>
        <Pressable style={{padding: 5, backgroundColor: COLORS.highlight1, borderRadius: 20}} onPress={() => navigation.navigate(screens.SEARCH)}>
          <CloseLogo width={25} height={25} color={COLORS.highlight2}/>
        </Pressable>
      </View>
      <View style={{display: 'flex', width: '100%', paddingVertical: 10}}>
        <Image style={stylesheet.image} source={{uri: details?.imageurl || ''}}/>
        <Text style={stylesheet.id}>{details?.id}</Text>
        <SingleLineData text='Full name' value={details?.fullname}/>
        <SingleLineData text='Email' value={details?.email}/>
        <SingleLineData text='Phone' value={details?.phone}/>
        <SingleLineData text='Date of birth (yyyy-mm-dd)' value={details?.dob? details?.dob.slice(0, 10): null}/>
        <MultiLineData text='Contacts' value={details?.contacts}/>
        <SingleLineData text='Blood group' value={details?.bloodtype}/>
        <SingleLineData text='Height (cm)' value={details?.height}/>
        <SingleLineData text='Weight (kg)' value={details?.weight}/>
        <MultiLineData text='Medical history' value={details?.medicalhistory}/>
        <SingleLineData text='Additional information' value={details?.additionalinfo}/>
      </View>
    </ScrollView>
  )
}


const stylesheet = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center'
  },
  image: {
    width: 128,
    aspectRatio: 1,
    borderRadius: 128,
    marginBottom: 20
  },
  id: {
    color: COLORS.highlight2,
    fontFamily: FONTS.defaultBold,
    fontSize: 12,
    marginBottom: 20
  }
})
