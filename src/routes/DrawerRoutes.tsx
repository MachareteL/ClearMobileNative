import { createDrawerNavigator } from '@react-navigation/drawer';
import Cart from '../screens/cart';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator initialRouteName='Cart' screenOptions={{ drawerStyle: { backgroundColor: "#000" }, headerStyle: { backgroundColor: "#002967" }, headerTitleStyle: { color: "#fff" } }}>
      <Drawer.Screen name="Cart" component={Cart}
      />
    </Drawer.Navigator>
  );
}