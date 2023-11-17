import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}