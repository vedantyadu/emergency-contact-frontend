import { useContext, useEffect } from 'react'
import { BarCodeScanningResult, Camera } from 'expo-camera'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { COLORS, FONTS } from '@/styles'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { ParamList, screens } from '@/utils/utils'
import { SearchContext } from '@/context/SearchContext'



export default function Scanner() {

  const [permission, requestPermission] = Camera.useCameraPermissions()
  const navigation = useNavigation<NavigationProp<ParamList>>()
  const { id, setId } = useContext(SearchContext)

  useEffect(() => {
    requestPermission()
  }, [])

  const search = (result: BarCodeScanningResult) => {
    try {
      const data = result.data
      const url = new URL(data)
      const QRid = url.pathname.replace('/search/', '')
      if (id != QRid) {
        navigation.navigate(screens.SEARCH, QRid? {id: QRid}: undefined)
        setId(QRid)
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  if (permission) {
    if (permission?.granted) {
      return (
        <Camera
          onBarCodeScanned={search}
          barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}
          ratio='1:1'
          style={stylesheet.scannerCamera}
        />
      )
    }
    else {
      return (
        <View style={stylesheet.scannerBox}>
          <Text style={stylesheet.scannerText}>Allow camera access to scan QR code</Text>
        </View>
      )
    }
  }
  return (
    <View style={stylesheet.scannerBox}></View>
  )
}


const stylesheet = StyleSheet.create({
  scannerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.highlight1
  },
  scannerText: {
    textAlign: 'center',
    color: COLORS.primary,
    fontFamily: FONTS.defaultBold
  },
  scannerCamera: {
    flex: 1
  }
})
