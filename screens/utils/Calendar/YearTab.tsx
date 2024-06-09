import { COLORS, FONTS } from '@/styles'
import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import LeftArrow from '@assets/svg/leftarrow.svg'
import RightArrow from '@assets/svg/rightarrow.svg'
import { Tabs } from './utils'


export default function YearTab({date, setDate, setTab}: {date: string, setDate: (value: string) => void, setTab: (val: Tabs) => void}) {

  const initialBaseYear = useMemo(() => {
    const year = Number(date.slice(0, 4))
    return year - (year % 10)
  }, [])

  const [baseYear, setBaseYear] = useState<number>(initialBaseYear)
  const [curYear, setCurYear] = useState<number>(Number(date.slice(0, 4)))

  const setYear = (year: number) => {
    setCurYear(year)
    setDate(`${year}-01-01`)
    setTab(Tabs.month)
  }

  return (
    <View style={stylesheet.view}>
      <View style={stylesheet.arrowcontainer}>
        <Pressable style={stylesheet.leftarrow} onPress={() => setBaseYear(baseYear - 10)}>
          <LeftArrow color={COLORS.primary} width={20} height={20}/>
        </Pressable>
        <Text style={stylesheet.yearheading}>{`${baseYear} - ${baseYear + 9}`}</Text>
        <Pressable style={stylesheet.rightarrow} onPress={() => setBaseYear(baseYear + 10)}>
          <RightArrow color={COLORS.primary} width={20} height={20}/>
        </Pressable>
      </View>
      <View style={stylesheet.yearcontainer}>
        {
          Array(10).fill(0).map((key, index) => {
            const year = baseYear + index
            return (
              <Pressable onPress={() => setYear(year)} key={year} style={curYear == year? stylesheet.selectedButton: stylesheet.button}>
                <Text style={curYear == year? stylesheet.selectedText: stylesheet.text}>{year}</Text>
              </Pressable>
            )
          })
        }
      </View>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  view: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  yearcontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  arrowcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  leftarrow: {
    height: 20,
    marginRight: 'auto',
    marginLeft: 15
  },
  rightarrow: {
    height: 20,
    marginLeft: 'auto',
    marginRight: 15
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
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.highlight1,
    height: 40,
    borderRadius: 10,
  },
  selectedButton: {
    flex: 1,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    height: 40,
    borderRadius: 10,
  },
  yearheading: {
    fontFamily: FONTS.defaultBold,
    color: COLORS.highlight2
  }
})
