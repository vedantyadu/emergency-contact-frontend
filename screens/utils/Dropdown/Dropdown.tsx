import { COLORS, FONTS } from '@/styles'
import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import Item from './Item'
import DownArrow from '@assets/svg/downarrow.svg'
import UpArrow from '@assets/svg/uparrow.svg'


export default function Dropdown({title, items, value, onChange}: {title: string, items: string[], value: string, onChange: (val: string) => void}) {
  
  const [open, setOpen] = useState<boolean>(false)

  return (
    <View style={stylesheet.container}>
      <Text style={stylesheet.inputheading}>{title}</Text>
      <View style={stylesheet.view}>
        <Pressable style={stylesheet.inputbutton} onPress={() => setOpen(!open)}>
          <Text style={stylesheet.inputtext}>{value as string}</Text>
          {!open && <DownArrow color={COLORS.highlight2} height={20} width={20}/>}
          {open && <UpArrow color={COLORS.highlight2} height={20} width={20}/>}
        </Pressable>
        {
          open && 
          <View style={stylesheet.dropdownview}>
            {items.map((item) => <Item key={item} value={item} onChange={onChange} closeDropDown={() => setOpen(false)}/>)}
          </View>
        }
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
  dropdownview: {
    display: 'flex',
    backgroundColor: COLORS.highlight1,
    paddingHorizontal: 10
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
