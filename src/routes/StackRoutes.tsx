import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/register";
import Start from "../screens/start";
import Login from "../screens/login";
import DrawerRoutes from "./DrawerRoutes";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Home" component={DrawerRoutes} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
