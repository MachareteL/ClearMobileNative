import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function Product({
  name,
  price,
  image,
  description,
  add,
  remove,
  quantity,
}: ProductProps) {
  return (
    <>
      <View style={styles.productCard}>
        <Image source={image} style={{ width: 100, height: 100 }} />
        <View style={styles.textCard}>
          <View>
            <View style={styles.container}>
              <Text style={{ fontSize: 16 }}>{name}</Text>
              {remove && (
                <TouchableOpacity style={styles.botaoTrash}>
                  <Octicons name="trash" size={18} color="gray" />
                </TouchableOpacity>
              )}
            </View>
            <Text style={{ color: "gray" }}>{description}</Text>
          </View>
          <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>R$ {price}</Text>
            {add && (
              <TouchableOpacity style={styles.botao}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                  Add Carrinho
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  productCard: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
  },
  textCard: {
    maxWidth: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  botao: {
    backgroundColor: "#002967",
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
  botaoTrash: {
    display: "flex",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});
