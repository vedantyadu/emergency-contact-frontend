import { COLORS } from '@/styles'
import { ActivityIndicator, StyleSheet, View } from 'react-native'


export default function Loading() {
  return (
    <View style={stylesheet.view}>
      <ActivityIndicator color={COLORS.primary} size={42}/>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    flex: 1,
    display: 'flex',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
})
