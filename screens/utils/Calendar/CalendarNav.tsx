import { View, Pressable, Text, StyleSheet } from 'react-native'
import { Tabs } from '@screens/utils/Calendar/utils'
import { COLORS, FONTS } from '@/styles'


export default function CalendarNav({tab, setTab}: {tab: Tabs, setTab: (value: Tabs) => void}) {
  return (
    <View style={stylesheet.view}>
      {
        (Object.keys(Tabs) as Array<keyof typeof Tabs>).map((key) => {
          return (
            <Pressable key={Tabs[key]} style={tab == Tabs[key]? stylesheet.selectedButton: stylesheet.button} onPress={() => setTab(Tabs[key])}>
              <Text style={tab == Tabs[key]? stylesheet.selectedText: stylesheet.text}>{Tabs[key]}</Text>
            </Pressable>
          )
        })
      }
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  text: {
    fontFamily: FONTS.default,
    color: COLORS.text
  },
  selectedText: {
    fontFamily: FONTS.default,
    color: COLORS.bg
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.highlight1,
    height: 40,
    borderRadius: 10,
  },
  selectedButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 10,
  }
})
