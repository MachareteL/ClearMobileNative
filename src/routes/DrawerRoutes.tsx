import { createDrawerNavigator } from "@react-navigation/drawer";
import Cart from "../screens/cart";
import Home from "../screens/home";
import Products from "../screens/products";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        // drawerStyle: { backgroundColor: "#000" },
        headerStyle: { backgroundColor: "#002967" },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Cart" component={Cart} />
      <Drawer.Screen name="Products" component={Products} />
    </Drawer.Navigator>
  );
}
