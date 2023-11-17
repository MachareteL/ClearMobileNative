import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";

export default function Products() {
  return (
    <SafeAreaView>
      <Text>LUCAS</Text>
      <Product />
    </SafeAreaView>
  );
}
