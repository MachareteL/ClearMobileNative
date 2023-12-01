import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";

export default function Products() {
  // fazer a lista com todos os produtos
  return (
    <SafeAreaView>
      <Text>//Terminar a lista com todos os produtos</Text>
      <Product
        name="Sabão de piso"
        image="https://via.placeholder.com/150"
        price="25"
        quantity={1}
      />
    </SafeAreaView>
  );
}
