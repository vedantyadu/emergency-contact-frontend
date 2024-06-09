import { ParamList, screens } from '@/utils/utils'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SearchProvider } from '@/context/SearchContext'
import NavLayout from '@screens/utils/Navbar/NavLayout'
import Login from '@screens/Account/Login'
import Search from '@screens/Search'
import QR from '@screens/QR'
import Profile from '@screens/Profile'
import Protected from '@screens/utils/Protected/Protected'
import Signup from '@screens/Account/Signup'
import ProfileProvider from '@/context/ProfileContext'


const options = {
  headerShown: false,
  unmountOnBlur: true
}

const screenOptions = {
  headerShown: false,
  tabBarStyle: {display: 'none'},
  title: 'Emergency Contact'
} as BottomTabNavigationOptions


export const Tab = createBottomTabNavigator<ParamList>()


export default function Tabs() {
  return (
    <ProfileProvider>
      <SearchProvider>
        <Tab.Navigator initialRouteName={screens.PROFILE} backBehavior='history' screenOptions={screenOptions}>
          <Tab.Screen name={screens.LOGIN} children={() => <Login/>} options={options}/>
          <Tab.Screen name={screens.SIGNUP} children={() => <Signup/>} options={options}/>
          <Tab.Screen name={screens.QR} children={() => <NavLayout><Protected><QR/></Protected></NavLayout>} options={options} />
          <Tab.Screen name={screens.SEARCH} children={() => <NavLayout><Search/></NavLayout>} options={options} />
          <Tab.Screen name={screens.PROFILE} children={() => <NavLayout><Protected><Profile/></Protected></NavLayout>} options={options} />
        </Tab.Navigator>
      </SearchProvider>
    </ProfileProvider>
  )
}
