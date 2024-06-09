import CalendarInput from '@screens/utils/Calendar/CalendarInput'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useMemo, useState } from 'react'
import { COLORS, FONTS } from '@/styles'
import CalendarIcon from '@assets/svg/calendar.svg'


export default function DateInput({title, date, setDate}: {title: string, date: string, setDate: (value: string) => void}) {
  
  const [open, setOpen] = useState<boolean>(false)

  const defaultDate = useMemo(() => {
    return (new Date().toISOString().slice(0,10))
  }, [])
  
  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.inputheading}>{title}</Text>
      <View style={stylesheet.view}>
        <Pressable style={stylesheet.inputbutton} onPress={() => setOpen(!open)}>
          <Text style={stylesheet.inputtext}>{date}</Text>
          <CalendarIcon height={20} width={20} color={COLORS.highlight2}/>
        </Pressable>
        {open && <CalendarInput setOpen={setOpen} date={date || defaultDate} setDate={setDate}/>}
      </View>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 10
  },
  view: {
    display: 'flex',
    borderRadius: 10,
    overflow: 'hidden'
  },
  inputbutton: {
    backgroundColor: COLORS.highlight1,
    height: 40,
    display: 'flex',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputtext: {
    fontFamily: FONTS.default,
    color: COLORS.text,
    flex: 1
  },
  inputheading: {
    fontFamily: FONTS.default,
    color: COLORS.highlight2,
    fontSize: 12,
    marginBottom: 5
  }
})
