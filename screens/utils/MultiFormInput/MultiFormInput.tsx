import { COLORS, FONTS } from '@/styles'
import { InputModeOptions, KeyboardTypeOptions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import Input from './Input'
import { Dispatch, useState } from 'react'
import PlusIcon from '@assets/svg/plus.svg'


export default function MultiFormInput({title, values, onChange, mode}: {title: string, values: string[], onChange: Dispatch<string[]>, mode: InputModeOptions}) {

  const onChangeText = ((newText: string, index: number) => {
    const temp = [...values]
    temp[index] = newText
    onChange(temp)
  })

  const onDeleteValue = (index: number) => {
    const temp = [...values]
    temp.splice(index, 1)
    onChange(temp)
  }

  const AddValue = () => {
    const temp = [...values]
    temp.push('')
    onChange(temp)
  }
  
  return (
    <View style={stylesheet.view}>
      <Text style={stylesheet.text}>{title}</Text>
      <View style={stylesheet.container}>
        {values.map((item, index) => <Input mode={mode} key={index} value={item} onDelete={() => onDeleteValue(index)} onChange={(newText: string) => onChangeText(newText, index)}/>)}
        <Pressable onPress={AddValue} style={{width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, height: 40, backgroundColor: COLORS.highlight1}}>
          <PlusIcon width={25} height={25} color={COLORS.highlight2}/>
        </Pressable>
      </View>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  text: {
    color: COLORS.highlight2,
    fontFamily: FONTS.default,
    fontSize: 12,
    marginBottom: 5
  },
  view: {
    display: 'flex',
    marginBottom: 10
  },
  container: {
    display: 'flex',
    gap: 5
  }
})
