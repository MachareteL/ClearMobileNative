import { Text, View } from "react-native";
import { Image } from "expo-image";

export default function Product({
  name,
  price,
  image: uri,
  description,
}: ProductProps) {
  return (
    <View style={{ backgroundColor: "#fdd", display: "flex" }}>
      <Image source={uri} style={{ width: 100, height: 100 }} />
      <Text>{name}</Text>
    </View>
  );
}
