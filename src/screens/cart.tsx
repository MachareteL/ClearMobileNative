import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Product from "../components/Product";

export default function Cart() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar style="auto" />

        <ScrollView style={styles.container1}>
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Product
              name="Sabão de Piso"
              image="https://via.placeholder.com/150"
              price="25,00"
              quantity={1}
              description="Um sabão muito bom para limpeza em geral, roupas e comodos limpos e bla bla bla"
            />
          ))}
        </ScrollView>
        <LinearGradient
          style={styles.rodape}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0, y: 0 }}
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,0)"]}
        >
          <View style={styles.precoRodape}>
            <Text style={{ color: "#002967", fontSize: 25 }}>TOTAL</Text>
            <Text style={{ color: "#002967", fontSize: 25 }}>R$ 00,00</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    backgroundColor: "#ffd",
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
