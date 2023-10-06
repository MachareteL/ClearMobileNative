import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

export default function Start() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../../assets/images/background1.png")}
          resizeMode="cover"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.image2Stack}>
            <Image
              source={require("../../assets/images/iconBlue.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.text}>Limpeza Profunda, Resultado Clear!</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate("Register");
          }}
        >
          <Text style={styles.cadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigate("Login");
          }}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  image_imageStyle: {},
  image2: {
    top: 0,
    left: 0,
    width: 200,
    height: 200,
  },
  text: {
    color: "rgba(0,62,154,1)",
    left: 0,
    top: 183,
  },
  image2Stack: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStack: {
    width: "100%",
    height: 600,
  },
  button: {
    width: 240,
    height: 54,
    backgroundColor: "rgba(0,62,154,1)",
    borderRadius: 16,
  },
  cadastrar: {
    color: "rgba(255,255,255,1)",
    marginTop: 18,
    marginLeft: 90,
  },
  button2: {
    width: 240,
    height: 32,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(0,62,154,1)",
    borderRadius: 16,
    borderStyle: "solid",
  },
  button3: {
    width: 240,
    height: 32,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(0,62,154,1)",
    borderRadius: 16,
    borderStyle: "solid",
  },
  login: {
    color: "rgba(0,62,154,1)",
    marginTop: 4,
    marginLeft: 103,
  },
  buttonContainer: {
    width: "100%",
    height: 300,
    justifyContent: "center",
    gap: 24,
    alignItems: "center",
  },
});
