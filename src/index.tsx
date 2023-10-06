import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./routes/StackRoutes";

export default function Routes() {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
}
