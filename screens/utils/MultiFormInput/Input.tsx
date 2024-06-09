import { COLORS, FONTS } from "@/styles"
import { GenericObject } from "@/utils/utils"
import { Dispatch } from "react"
import { InputModeOptions, KeyboardTypeOptions, Pressable, StyleSheet, TextInput, View } from "react-native"
import RemoveIcon from '@assets/svg/remove.svg'


export default function Input({value, mode, onChange, onDelete}: {value: string, mode: InputModeOptions, onChange: Dispatch<string>, onDelete: Dispatch<GenericObject>}) {

  const onTextInput = (text: string) => {
    if (mode == 'numeric') onChange(text.replace(/[^0-9]/g, ''))
    else onChange(text)
  }
  
  return (
    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: 10, backgroundColor: COLORS.highlight1, paddingRight: 15}}>
      <TextInput inputMode={mode} style={stylesheet.input} value={value || ''} onChangeText={onTextInput}/>
      <Pressable style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: 10}} onPress={onDelete}>
        <RemoveIcon width={20} height={20} color={COLORS.highlight2}/>
      </Pressable>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  input: {
    flex: 1,
    minWidth: 0,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.highlight1,
    color: COLORS.text,
    fontFamily: FONTS.default
  },
})
