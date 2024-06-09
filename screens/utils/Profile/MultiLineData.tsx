import { COLORS, FONTS } from '@/styles'
import { StyleSheet, Text, View } from 'react-native'


export default function MultiLineData({text, value}: {text: string, value: Array<string>}) {
  if (value && value.length > 0) {
    return (
      <View style={{display: 'flex', marginBottom: 15}}>
        <Text style={stylesheet.text}>{text}</Text>
        <View style={stylesheet.detail}>
          {value.map((val, index) => <Text key={index} style={{fontFamily: FONTS.defaultBold, color: COLORS.text, fontSize: 14}}>{val}</Text>)}
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
    justifyContent: 'center',
    gap: 5
  },
  text: {
    color: COLORS.highlight2,
    fontFamily: FONTS.default,
    fontSize: 12,
    marginBottom: 5
  }
})
