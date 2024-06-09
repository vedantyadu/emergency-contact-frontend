import { useContext, useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ScrollView, Dimensions, Platform } from 'react-native'
import { COLORS, FONTS } from '@/styles'
import { Image } from 'expo-image'
import { ProfileContext } from '@/context/ProfileContext'
import { captureRef } from 'react-native-view-shot'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'


export default function QR() {

  const { QRURI, profileData } = useContext(ProfileContext)
  const printRef = useRef()

  const webDownload = (dataurl: string, filename: string) => {
    const link = document.createElement('a')
    link.href = dataurl
    link.download = filename
    link.click()
    link.remove()
  }

  const printImage = async () => {
    const data = await captureRef(printRef, {result: 'data-uri', format: 'png'})
    if (Platform.OS == 'web') {
      webDownload(data, `${profileData.id}_QR.png`)
    }
    else {
      try {
        const perm = await MediaLibrary.requestPermissionsAsync()
        if (perm.granted) {
          await FileSystem.writeAsStringAsync(`${FileSystem.documentDirectory}${profileData.id}_QR_new.png`, data.replace('data:image/png;base64,',''), {encoding: FileSystem.EncodingType.Base64})
          const asset = await MediaLibrary.createAssetAsync(`${FileSystem.documentDirectory}${profileData.id}_QR_new.png`)
          const album = await MediaLibrary.getAlbumAsync('Download')
          if (album == null) {
            await MediaLibrary.createAlbumAsync('Download', asset, false)
          } else {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false)
          }
        }
      }
      catch (err) {
        console.log(err)
      }
    }
  }

  return (
    <ScrollView contentContainerStyle={stylesheet.view}>
      <View style={stylesheet.container}>
        <Image source={QRURI} style={stylesheet.image} contentFit='cover'/>
        <Text style={{fontFamily: FONTS.defaultBold, color: COLORS.text, marginBottom: 30}}>{profileData.id}</Text>
        <Pressable style={stylesheet.button} onPress={printImage}>
          <Text numberOfLines={1} style={stylesheet.text}>Download your QR</Text>
        </Pressable>
      </View>
      <View collapsable={false} ref={printRef} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: Dimensions.get('screen').width, padding: 10, backgroundColor: COLORS.bg}}>
        <View style={{borderRadius: 20, overflow: 'hidden', marginBottom: 30}}>
          <Image source={QRURI} style={{width: 300, aspectRatio: 1}} contentFit='cover'/>
        </View>
        <Text style={{fontFamily: FONTS.defaultBold, color: COLORS.primary}}>{profileData.id}</Text>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    width: '100%',
    maxWidth: 400,
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.bg,
    paddingHorizontal: 20
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    marginBottom: 20
  }
})
