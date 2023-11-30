import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";

import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function Cart() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView style={styles.container1}>
        <View style={styles.productCard}>
          <Image source="https://via.placeholder.com/150" style={{ width: 100, height: 100 }} />
          <View style={styles.textCard}>
            <View>
              <Text style={{ fontSize: 16 }}>aaaaaa</Text>
              <Text style={{ color: "gray" }}>descrição descrição descrição descrição descrição descrição descrição</Text>
            </View>
            <Text style={{ fontSize: 20 }}>R$ 00,00</Text>
          </View>
        </View>
        <View style={{ height: 300 }}>

        </View>
      </ScrollView>

      <LinearGradient
        style={styles.rodape}
        start={{ x: 0, y: .3 }}
        end={{ x: 0, y: 0 }}
        colors={['rgba(255,255,255,1)', 'rgba(255,255,255,0)']}>
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
  productCard: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC"
  },
  textCard: {
    maxWidth: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end"
  },
  rodape: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "30%",
    paddingTop: 50,
    gap: 20,
    display: "flex",
    justifyContent: "space-evenly"
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
    alignItems: "center"
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
    borderRadius: 100
  },
  // :{},
});
