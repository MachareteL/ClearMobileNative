import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";

export default function Products() {
  return (
    <SafeAreaView>
      <Product
        name="Sabão de piso"
        image="https://via.placeholder.com/150"
        price="25"
      />
    </SafeAreaView>
  );
}
