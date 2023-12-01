import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from '@expo/vector-icons';

export default function Products() {
  // fazer a lista com todos os produtos
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.containerTitle}>
        <Text style={{ color: "#002967", fontSize: 25 }}>Todos os produtos</Text>
        <View style={styles.icon}>
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
        </View>
      </View>


      <Product
        name="Sabão de piso"
        image="https://via.placeholder.com/150"
        price="25"
        quantity={1}
        remove={true}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  icon: {
    display: "flex",
    gap: 1,
    flexWrap: "wrap",
    width: 17,
    height: 18,
    marginTop:6
  },
  containerTitle: {
    display:"flex",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20
  }
})