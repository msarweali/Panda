import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileScreen from '../src/Screens/ProfileScreen';
import Cart from '../src/Screens/Cart';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default MyTabs;