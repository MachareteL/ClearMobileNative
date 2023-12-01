import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';

export default function Product({
  name,
  price,
  image,
  description,
  add,
  remove,
  quantity,
  addToCart,
  removeFromCart
}: ProductProps & { addToCart?: () => void; removeFromCart?: () => void }) {
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
            {add ? <>
              <TouchableOpacity style={styles.botao}>
                <Text style={{ color: "#fff", fontSize: 18 }}>
                  Add Carrinho
                </Text>
              </TouchableOpacity>
            </>
              : quantity ?
                <View style={styles.quantity}>
                  <TouchableOpacity>
                    <Feather name="minus-circle" size={20} color="gray" />
                  </TouchableOpacity >
                  <View style={styles.quantityText}>
                    <Text style={{ fontSize: 20 }}>3</Text>
                  </View>
                  <TouchableOpacity>
                    <Feather name="plus-circle" size={20} color="gray" />
                  </TouchableOpacity>
                </View> :
                <></>
            }
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
  quantity: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    backgroundColor: "#ECECEC",
    paddingHorizontal: 5,
  }
});
