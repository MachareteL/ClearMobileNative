import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "../lib/cartContext";

export default function Teste() {
  //   useEffect(() => {
  //     getDocs(collection(db, "produtos")).then(({ docs }) => {
  //       docs.map((doc) => {
  //         console.log(doc.data());
  //       });
  //     });
  //   }, []);
  const carrinho = useContext(CartContext);
  
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Text>adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
