import { COLORS, FONTS } from '@/styles'
import { StyleSheet, Text, View } from 'react-native'


export default function Error({message}: {message: string}) {
  if (message) {
    return (
      <View style={stylesheet.view}>
        <Text style={stylesheet.text}>{message}</Text>
      </View>
    )
  }
  return (null)
}


const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: COLORS.errorbackground,
    marginBottom: 20
  },
  text: {
    fontFamily: FONTS.default,
    color: COLORS.error,
    textAlign: 'center'
  }
})
