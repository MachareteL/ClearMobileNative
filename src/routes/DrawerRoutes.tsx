import { createDrawerNavigator } from '@react-navigation/drawer';
import Produtos from '../screens/produtos';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Produtos" component={Produtos} />
    </Drawer.Navigator>
  );
}