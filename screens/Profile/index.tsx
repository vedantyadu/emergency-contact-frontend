import { Text, StyleSheet, useWindowDimensions, ScrollView, View, Pressable, Platform } from 'react-native'
import { ProfileContext } from '@/context/ProfileContext'
import DetailForm from '@screens/Profile/DetailForm'
import { GenericObject, WIDTH_THRESHOLD, defaultprofilepicture } from '@/utils/utils'
import { COLORS, FONTS } from '@/styles'
import { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker'
import axios, { AxiosError } from 'axios'
import { getItem } from '@/utils/store'
import LogoutButton from './LogoutButton'



export default function Profile() {

  const { profileData, setProfileData } = useContext(ProfileContext)
  const [formData, setFormData] = useState<GenericObject>({})
  const selectedImage = useRef<ImagePicker.ImagePickerAsset | undefined>()
  const { width } = useWindowDimensions()

  useEffect(() => {
    setFormData(profileData)
  }, [profileData])

  const reset = () => {
    setFormData(Object.assign({}, profileData))
  }

  const selectImage = async () => {
    const request = await ImagePicker.launchImageLibraryAsync({
      aspect: [1, 1]
    })
    if (!request.canceled) {
      selectedImage.current = request.assets[0]
      setFormData({...formData, imageurl: selectedImage.current.uri})
    }
  }

  const save = async () => {
    try {
      const data = new FormData()

      if (selectedImage.current) {
        if (Platform.OS == 'web') {
          const blob = await (await fetch(selectedImage.current.uri)).blob()
          data.append('image', blob)
        }
        else {
          data.append('image', { uri: selectedImage.current.uri, type: selectedImage.current.mimeType, name: selectedImage.current.fileName } as any)
        }
      }
      
      data.append('details', JSON.stringify({...formData, imageurl: undefined}))

      const response = await axios.post('/profile/edit', data, {
        headers: {
          'authorization': getItem('authtoken') || '',
          'content-type': 'multipart/form-data'
        }
      })

      if (response.data.imageurl) {
        setProfileData({...formData, imageurl: response.data.imageurl})
      }
      else {
        setProfileData({...formData})
      }

      selectedImage.current = undefined
    }
    catch (err) {
      if (err instanceof AxiosError) {
        console.log(err)
      }
      else {
        console.log(err)
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={width > WIDTH_THRESHOLD? stylesheet.paddedcontainer: stylesheet.container}>
      <View style={stylesheet.view}>
        <Pressable style={stylesheet.imageselector} onPress={selectImage}>
          <Image style={stylesheet.image} source={{uri: formData.imageurl || defaultprofilepicture}} />
        </Pressable>
        <Text style={stylesheet.fullname}>{profileData.fullname}</Text>
        <Text style={stylesheet.email}>{profileData.email}</Text>
      </View>
      <DetailForm formData={formData} setFormData={setFormData}/>
      <View style={stylesheet.buttonview}>
        <Pressable style={[stylesheet.button, {backgroundColor: COLORS.primary}]} onPress={save}>
          <Text style={stylesheet.buttontext}>Save</Text>
        </Pressable>
        <Pressable onPress={reset} style={[stylesheet.button, {backgroundColor: COLORS.highlight2}]}>
          <Text style={stylesheet.buttontext}>Reset</Text>
        </Pressable>
      </View>
      <LogoutButton/>
    </ScrollView>
  )
}


const stylesheet = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20
  },
  paddedcontainer: {
    display: 'flex',
    paddingHorizontal: 40,
    paddingVertical: 20
  },
  view: {
    display: 'flex'
  },
  fullname: {
    color: COLORS.highlight2,
    fontFamily: FONTS.defaultBold
  },
  email: {
    color: COLORS.highlight2,
    fontFamily: FONTS.default,
    marginBottom: 30
  },
  imageselector: {
    alignSelf: 'flex-start'
  },
  image: {
    width: 128,
    aspectRatio: 1,
    borderRadius: 128,
    marginBottom: 20
  },
  buttonview: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  button: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttontext: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.bg
  }
})
