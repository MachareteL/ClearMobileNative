import { StyleSheet, Text, View } from "react-native";
import backgroud from "../../images/background1.png";
import { Image } from "react-native";
import Logo from "../../components/logo";
import ButtonC from "../../components/ButtonC";
import { Pressable } from "react-native";

const Start = () => {
  return (
    <View style={styles.container}>
      <Image source={backgroud} style={styles.background} />
      <Logo />
      <Text style={styles.text}>
        Aqui você acha os seus produtos de limpeza
      </Text>
      <View style={styles.containerButton}>
        <ButtonC placeholder={"Cadastrar"} solid={true} />
        <ButtonC placeholder={"Entrar"} solid={false} />
      </View>
      <Pressable style={styles.arrowUp}>
        <Text>^</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  containerButton: {
    width: "100%",
    paddingHorizontal: 80,
    display: "flex",
    justifyContent: "space-evenly",
    gap: 10,
  },
  text: {
    color: "#003E9A",
  },
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
  },
  arrowUp: {
    position: "absolute",
    bottom: 20,
  },
});
export default Start;
