import { SearchContext } from '@/context/SearchContext'
import { COLORS, FONTS } from '@/styles'
import { ParamList, screens } from '@/utils/utils'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { useContext, useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import SearchLogo from '@assets/svg/search.svg'

 
export default function SearchBar() {

  const navigation = useNavigation<NavigationProp<ParamList>>()
  const { setId } = useContext(SearchContext)
  const [inputValue, setInputValue] = useState<string | undefined>('')

  const search = () => {
    navigation.navigate(screens.SEARCH, inputValue? {id: inputValue}: undefined)
    setId(inputValue)
    setInputValue('')
  }

  return (
    <View style={stylesheet.searchWrapper}>
      <TextInput style={stylesheet.input} value={inputValue} placeholderTextColor={COLORS.highlight2} placeholder='Search id' onChangeText={newText => setInputValue(newText)} onSubmitEditing={search} />
      <Pressable style={stylesheet.searchButton} onPress={search}>
        <SearchLogo height={20} width={20} fill={COLORS.highlight1}/>
      </Pressable>
    </View>
  )
}


const stylesheet = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    flexDirection: 'row'
  },
  searchButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 10
  },
  input: {
    flex: 1,
    minWidth: 0,
    marginRight: 10,
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 40,
    backgroundColor: COLORS.highlight1,
    color: COLORS.text,
    fontFamily: FONTS.default
  }
})
