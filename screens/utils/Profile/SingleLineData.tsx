import { COLORS, FONTS } from '@/styles'
import { StyleSheet, Text, View } from 'react-native'


export default function SingleLineData({text, value}: {text: string, value: string}) {
  if (value) {
    return (
      <View style={{display: 'flex', marginBottom: 15}}>
        <Text style={stylesheet.text}>{text}</Text>
        <View style={stylesheet.detail}>
          <Text style={{fontFamily: FONTS.defaultBold, color: COLORS.text, fontSize: 14}}>{value}</Text>
        </View>
      </View>
    )
  }
  return null
}


const stylesheet = StyleSheet.create({
  detail: {
    width: '100%',
    minWidth: 0,
    display: 'flex',
    justifyContent: 'center'
  },
  text: {
    color: COLORS.highlight2,
    fontFamily: FONTS.default,
    fontSize: 12,
    marginBottom: 5
  }
})
