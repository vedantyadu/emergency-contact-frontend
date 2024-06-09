import { COLORS, FONTS } from '@/styles'
import { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Eye from '@assets/svg/eye.svg'
import SlashEye from '@assets/svg/eyeslash.svg'


export default function PasswordInput({title, value, onChange}: {title: string, value: string, onChange: (text: string) => void}) {

  const [viewPassword, setViewPassword] = useState<Boolean>(false)

  return (
    <View style={stylesheet.view}>
      <Text style={stylesheet.text}>{title}</Text>
      <View style={{display: 'flex', flexDirection: 'row', backgroundColor: COLORS.highlight1, borderRadius: 10}}>
        <TextInput secureTextEntry={!viewPassword} style={stylesheet.input} value={value} onChangeText={onChange}/>
        <Pressable style={{paddingHorizontal: 10, display: 'flex', justifyContent: 'center', height: 40}} onPress={() => setViewPassword(!viewPassword)}>
          { viewPassword && <SlashEye color={COLORS.highlight2} height={18} width={18}/> }
          { !viewPassword && <Eye color={COLORS.highlight2} height={18} width={18}/> }
        </Pressable>
      </View>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  input: {
    minWidth: 0,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.highlight1,
    color: COLORS.text,
    fontFamily: FONTS.default,
    flex: 1
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
