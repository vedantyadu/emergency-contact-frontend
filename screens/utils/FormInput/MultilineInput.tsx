import { COLORS, FONTS } from '@/styles'
import { Dispatch, useState } from 'react'
import { InputModeOptions, StyleSheet, Text, TextInput, View } from 'react-native'


export default function MultilineInput({title, value, onChange, mode}: {title: string, value: string, onChange: Dispatch<string>, mode: InputModeOptions}) {
  
  const [height, setHeight] = useState<number>(0)

  const onTextChange = (newText: string) => {
    if (mode == 'numeric') onChange(newText.replace(/[^0-9]/g, ''))
    else onChange(newText)
  }
  
  return (
    <View style={stylesheet.view}>
      <Text style={stylesheet.text}>{title}</Text>
      <TextInput onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)} inputMode={mode} multiline={true} style={[stylesheet.input, {height: Math.max(40, height)}]} value={value || ''} onChangeText={onTextChange}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 10,
    maxHeight: 240,
    minWidth: 0,
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
