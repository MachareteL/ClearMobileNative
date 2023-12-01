import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
export default function Register() {
  const { navigate } = useNavigation();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  function signUp() {
    if (credentials.password != credentials.rePassword) {
      return alert("Suas senhas não coincidem");
    }
    createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    )
      .then(() => {
        alert(
          "Conta criada com sucesso, você sera redirecionado para fazer login."
        );
          navigate("Login");
      })

      .catch((err) => {
        alert(err);
      });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.upperContainer}>
          <Image
            source={require("../../assets/images/iconBlue.png")}
            resizeMode="contain"
          />
          <Text style={styles.facaLogin}>Faça login</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ImageBackground
            source={require("../../assets/images/background2.png")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.placeholder}
                placeholder="Email"
                onChangeText={(email) => {
                  setCredentials({ ...credentials, email });
                }}
              />
              <TextInput
                style={styles.placeholder}
                placeholder="Senha"
                onChangeText={(password) => {
                  setCredentials({ ...credentials, password });
                }}
              />
              <TextInput
                style={styles.placeholder}
                placeholder="Confirme sua senha"
                onChangeText={(rePassword) => {
                  setCredentials({ ...credentials, rePassword });
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  signUp();
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 36,
                    paddingVertical: 12,
                    backgroundColor: "rgba(0,62,154,1)",
                    borderRadius: 16,
                    color: "#FFF",
                  }}
                >
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ paddingBottom: 96 }}
              onPress={() => {
                navigate("Login");
              }}
            >
              <Text style={{ color: "#FFF" }}>
                Já possui uma conta? Faça Login
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomContainer: {
    flex: 1,
    width: "100%",
  },
  entrar: {
    color: "#121212",
    marginTop: 136,
    marginLeft: 241,
  },
  entrar1: {
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
    fontSize: 16,
    marginTop: 143,
    marginLeft: 155,
  },
  facaLogin: {
    color: "rgba(0,62,154,1)",
  },
  placeholder: {
    color: "#121212",
    width: 239,
    borderWidth: 1,
    borderColor: "rgba(0,62,154,1)",
    borderRadius: 16,
    letterSpacing: 1,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  inputContainer: {
    alignItems: "center",
    gap: 24,
  },
});
