import { COLORS, FONTS } from '@/styles'
import { Dispatch } from 'react'
import { InputModeOptions, StyleSheet, Text, TextInput, View } from 'react-native'


export default function FormInput({title, value, onChange, mode}: {title: string, value: string, onChange: Dispatch<string>, mode: InputModeOptions}) {
  
  const onTextChange = (newText: string) => {
    if (mode == 'numeric') onChange(newText.replace(/[^0-9]/g, ''))
    else onChange(newText)
  }
  
  return (
    <View style={stylesheet.view}>
      <Text style={stylesheet.text}>{title}</Text>
      <TextInput inputMode={mode} style={stylesheet.input} value={value? String(value): ''} onChangeText={onTextChange}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  input: {
    width: '100%',
    minWidth: 0,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.highlight1,
    color: COLORS.text,
    fontFamily: FONTS.default
  },
  text: {
    color: COLORS.highlight2,
    fontFamily: FONTS.default,
    fontSize: 12,
    marginBottom: 5
  },
  view: {
    display: 'flex',
    marginBottom: 10
  }
})
