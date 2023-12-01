import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Product({
  name,
  price,
  image,
  description,
}: ProductProps) {
  return (
    <>
      <View style={styles.productCard}>
        <Image
          source={image}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.textCard}>
          <View>
            <Text style={{ fontSize: 16 }}>{name}</Text>
            <Text style={{ color: "gray" }}>
              {description}
            </Text>
          </View>
          <Text style={{ fontSize: 20 }}>R$ {price}</Text>
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
    alignItems: "flex-end",
  },
});
