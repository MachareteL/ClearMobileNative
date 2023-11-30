import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";
import { useContext } from "react";
import { AddCartContext, CartContext } from "../lib/cartContext";

export default function Teste() {
  //   useEffect(() => {
  //     getDocs(collection(db, "produtos")).then(({ docs }) => {
  //       docs.map((doc) => {
  //         console.log(doc.data());
  //       });
  //     });
  //   }, []);
  const carrinho = useContext(CartContext);
  const add = useContext(AddCartContext);
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => {
            add({
              name: "carrinho",
              price: "123",
              image: "https://via.placeholder.com/120",
              description: "This is a placeholder",
              quantity: 1,
            });
          }}
        >
          <Text>adicionar</Text>
        </TouchableOpacity>
        <Text>{JSON.stringify(carrinho)}</Text>
      </View>
    </SafeAreaView>
  );
}
