import FormInput from '@screens/utils/FormInput/FormInput'
import { ProfileContext } from '@/context/ProfileContext'
import DateInput from '@screens/utils/Calendar/DateInput'
import { StyleSheet, View } from 'react-native'
import { COLORS, FONTS } from '@/styles'
import { Dispatch, useContext, useState } from 'react'
import Dropdown from '@screens/utils/Dropdown/Dropdown'
import MultiFormInput from '@screens/utils/MultiFormInput/MultiFormInput'
import MultilineInput from '@screens/utils/FormInput/MultilineInput'
import { GenericObject } from '@/utils/utils'


const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']


export default function DetailForm({formData, setFormData}: {formData: GenericObject, setFormData: Dispatch<GenericObject>}) {

  const setData = (field: string, value: any) => {
    setFormData({...formData, [field]: value})
  }
  
  return (
    <View style={stylesheet.view}>
      <FormInput mode='text' title='Full name' value={formData.fullname} onChange={(newData) => setData('fullname', newData)}/>
      <FormInput mode='numeric' title='Phone number' value={formData.phone} onChange={(newData) => setData('phone', newData)}/>
      <DateInput title='Date of birth (yyyy-mm-dd)' date={formData.dob? formData.dob?.slice(0, 10) | null} setDate={(newData) => setData('dob', new Date(newData).toISOString())}/>
      <MultiFormInput title='Contacts' mode='numeric' values={formData.contacts || []} onChange={(newData) => setData('contacts', newData)}/>
      <FormInput mode='numeric' title='Height (cm)' value={formData.height} onChange={(newData) => setData('height', Number(newData))}/>
      <FormInput mode='numeric' title='Weight (kg)' value={formData.weight} onChange={(newData) => setData('weight', Number(newData))}/>
      <Dropdown items={bloodTypes} title='Blood type' value={formData.bloodtype} onChange={(newData) => setData('bloodtype', newData)}/>
      <MultiFormInput title='Medical history' mode='text' values={formData.medicalhistory || []} onChange={(newData) => setData('medicalhistory', newData)}/>
      <MultilineInput mode='text' title='Additional information' value={formData.additionalinfo} onChange={(newData) => setData('additionalinfo', newData)}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    marginBottom: 20
  },
  input: {
    width: '100%',
    minWidth: 0,
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.highlight1,
    color: COLORS.text,
    fontFamily: FONTS.default
  }
})
