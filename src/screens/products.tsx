import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Product from "../components/Product";
import { StatusBar } from "expo-status-bar";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export default function Products() {
  const [products, setProducts] = useState<ProductProps[]>();
  useEffect(() => {
    getDocs(collection(db, "produtos"))
      .then(({ docs }) => {
        const produtos: ProductProps[] = [];
        docs.map((doc) => {
          produtos.push(doc.data() as ProductProps);
          // setProducts([...(products ?? []), doc.data()]);
        });
        return produtos;
      })
      .then((prod) => {
        setProducts(prod);
      });
  }, []);
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <View style={styles.containerTitle}>
        <Text style={{ color: "#002967", fontSize: 25 }}>
          Todos os produtos
        </Text>
        <View style={styles.icon}>
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
          <FontAwesome name="square" size={8} color="gray" />
        </View>
      </View>
      {products?.map(({ name, image, price, description }) => (
        <Product
          name={name}
          image={image}
          description={description}
          price={price}
          quantity={1}
          // remove={true}
          add={true}
        />
      ))}
      {/* <TouchableOpacity
        onPress={() => {
          console.log(products);
        }}
      >
        <Text>Dom</Text>
      </TouchableOpacity> */}
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
    marginTop: 6,
  },
  containerTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
});
