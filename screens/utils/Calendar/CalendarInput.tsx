import { DateData, Theme } from 'react-native-calendars/src/types'
import { COLORS, FONTS } from '@/styles'
import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Calendar } from 'react-native-calendars'
import CalendarNav from '@screens/utils/Calendar/CalendarNav'
import MonthTab from '@screens/utils/Calendar/MonthTab'
import YearTab from '@screens/utils/Calendar/YearTab'
import { Tabs } from '@screens/utils/Calendar/utils'


export default function CalendarInput({date, setDate, setOpen}: {date: string, setDate: (value: string) => void, setOpen: (open: boolean) => void}) {

  const [tab, setTab] = useState<Tabs>(Tabs.year)
  
  const changeDate = (day: DateData) => {
    setDate(day.dateString)
    setOpen(false)
  }

  return (
    <View style={stylesheet.view}>
      <CalendarNav tab={tab} setTab={setTab}/>
      {tab == Tabs.year && <YearTab date={date} setDate={setDate} setTab={setTab}/>}
      {tab == Tabs.month && <MonthTab date={date} setDate={setDate} setTab={setTab}/>}
      {tab == Tabs.day && <Calendar initialDate={date} markedDates={{[date]: {selected: true}}} onDayPress={changeDate} style={stylesheet.calender} theme={calenderTheme}/>}
    </View>
  )
}


const calenderTheme: Theme = {
  selectedDayBackgroundColor: COLORS.primary,
  textDayFontSize: 14,
  todayTextColor: COLORS.text,
  textDayHeaderFontSize: 10,
  arrowColor: COLORS.primary,
  dayTextColor: COLORS.text,
  textDayFontFamily: FONTS.default,
  textMonthFontFamily: FONTS.default,
  textDayHeaderFontFamily: FONTS.default,
  calendarBackground: 'transparent',
  textDisabledColor: COLORS.highlight1,
  monthTextColor: COLORS.text
}

const stylesheet = StyleSheet.create({
  calender: {
    backgroundColor: COLORS.highlight1,
    padding: 10,
    paddingBottom: 15,
    paddingTop: 0
  },
  view: {
    display: 'flex',
    backgroundColor: COLORS.highlight1,
    overflow: 'hidden'
  }
})
