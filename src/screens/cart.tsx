import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
export default function Cart() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../assets/images/home/home1.png")}
        resizeMode="cover"
        style={styles.image1}
      />
      <View style={styles.title1}>
        <Image
          source={require("../../assets/images/home/title1.png")}
          resizeMode="cover"
        />
      </View>
      <View style={styles.comboText}>
        <Text style={styles.text}>
          Aqui você encontra produtos para deixar seu ambiente mais limpo e
          confortável.
        </Text>
        <Text style={styles.text}>Alta qualidade e preço justo.</Text>
        <View>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
        </View>
        <View style={styles.title1}>
          <Image
            source={require("../../assets/images/home/title2.png")}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
          <Text>Product</Text>
        </View>
      </View>
      <Image
        source={require("../../assets/images/home/home2.png")}
        resizeMode="cover"
        style={styles.image1}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image1: {
    width: "100%",
  },
  title1: {
    display: "flex",
    alignItems: "center",
  },
  comboText: {
    display: "flex",
    alignItems: "center",
    padding: 40,
  },
  text: {
    display: "flex",
    textAlign: "center",
    padding: 10,
    color: "#002967",
  },
});
