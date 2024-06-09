import { COLORS, FONTS } from '@/styles'
import { Pressable, StyleSheet, Text } from 'react-native'


export default function Item({value, onChange, closeDropDown}: {value: string, onChange: (val: string) => void, closeDropDown: () => void}) {
  
  const changeValue = () => {
    closeDropDown()
    onChange(value)
  }
  
  return (
    <Pressable style={stylesheet.button} onPress={changeValue}>
      <Text style={stylesheet.text}>{value}</Text>
    </Pressable>
  )
}


const stylesheet = StyleSheet.create({
  button: {
    backgroundColor: COLORS.highlight1,
    height: 40, justifyContent: 'center',
    paddingHorizontal: 5,
    borderTopWidth: 1,
    borderColor: COLORS.highlightmid
  },
  text: {
    fontFamily: FONTS.default,
    color: COLORS.text
  }
})
