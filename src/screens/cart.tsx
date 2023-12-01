import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import Product from "../components/Product";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../lib/cartContext";

export default function Cart() {
  const products = useContext(CartContext);
  const [totalPrecos, setTotalPrecos] = useState(0);
  function getFullPrice() {
    const novoTotal = products?.reduce(
      (total, produto) => total + (+produto.price || 0),
      0
    );
    setTotalPrecos(novoTotal ?? 0);
  }
  useEffect(() => {
    return () => {
      getFullPrice();
    };
  }, [products]);
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container1}>
        {products?.map(
          ({ name, image, price, quantity, description, add, remove }) => (
            <Product
              name={name}
              image={image}
              price={price}
              quantity={quantity}
              description={description}
              add={add}
              remove={remove}
            />
          )
        )}
      </ScrollView>
      <LinearGradient
        style={styles.rodape}
        start={{ x: 0, y: 0.3 }}
        end={{ x: 0, y: 0 }}
        colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
      >
        <View style={styles.precoRodape}>
          <Text style={{ color: "#002967", fontSize: 25 }}>TOTAL</Text>
          <Text style={{ color: "#002967", fontSize: 25 }}>
            R${totalPrecos}
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.button1}>
            <Text style={{ color: "#002967" }}>Continuar comprando</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={{ color: "#fff" }}>Finalizar Compra</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: "#fff",
    overflow: "scroll",
  },
  rodape: {
    bottom: 0,
    width: "100%",
    height: "30%",
    paddingTop: 50,
    gap: 20,
    display: "flex",
    justifyContent: "space-evenly",
  },
  precoRodape: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
  },
  buttons: {
    gap: 15,
    display: "flex",
    alignItems: "center",
  },
  button1: {
    borderWidth: 2,
    width: "80%",
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#002967",
  },
  button2: {
    color: "#fff",
    backgroundColor: "#002967",
    borderWidth: 1,
    width: "80%",
    height: 36,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
});
