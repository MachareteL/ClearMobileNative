import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { supabase } from "../lib/supabaseconfig";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { navigate } = useNavigation();
  async function authenticate() {
    const { data, error } = await supabase.auth.signInWithPassword(credentials);
    console.log(data);
    
    navigate("Register");
  }

  return (
    <View style={styles.container}>
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
            <TouchableOpacity
              onPress={() => {
                authenticate();
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
          <TouchableOpacity style={{ paddingBottom: 96 }}>
            <Text style={{ color: "#FFF" }}>
              Não possui uma conta? Registre-se
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
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
