import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Months, Tabs } from '@screens/utils/Calendar/utils'
import { COLORS, FONTS } from '@/styles'


export default function MonthTab({date, setDate, setTab}: {date: string, setDate: (val: string) => void, setTab:(val: Tabs) => void}) {
  
  const curMonth = Number(date.slice(5, 7))

  const selectMonth = (month: number) => {
    const fullmonth = '0' + month
    const lastdigits = fullmonth.slice(fullmonth.length -2, fullmonth.length)
    setDate(`${date.slice(0, 4)}-${lastdigits}-01`)
    setTab(Tabs.day)
  }

  return (
    <View style={stylesheet.view}>
      {
        (Object.keys(Months) as Array<keyof typeof Months>).map((key, index) => {
          const month = index + 1
          return (
            <Pressable onPress={() => selectMonth(month)} key={Months[key]} style={curMonth == month? stylesheet.selectedButton: stylesheet.button}>
              <Text style={curMonth == month? stylesheet.selectedText: stylesheet.text}>{Months[key]}</Text>
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
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center'
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
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.highlight1,
    height: 40,
    borderRadius: 10,
  },
  selectedButton: {
    flex: 1,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 10,
  }
})
