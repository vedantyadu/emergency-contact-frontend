import { View, Text, StyleSheet } from 'react-native'
import Scanner from '@screens/Search/Scanner'
import { COLORS, FONTS } from '@/styles'


export default function ScanView() {
  return (
    <View style={stylesheet.view}>
      <View style={stylesheet.scannerWrapper}>  
        <Scanner/>
      </View>
      <Text style={stylesheet.scannerText}>Scan a QR code</Text>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  },
  scannerWrapper: {
    overflow: 'hidden',
    backgroundColor: COLORS.highlight1,
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: COLORS.highlight1,
    width: '100%',
    maxWidth: 400,
    aspectRatio: 1
  },
  scannerText: {
    fontFamily: FONTS.defaultBold,
    marginTop: 20,
    color: COLORS.text
  }
})
