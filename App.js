import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Register from "./pages/users/register";
import Login from "./pages/users/login";
import ButtonC from "./components/ButtonC";
import backgroud from "./images/background1.png";
import Logo from "./components/logo";

import { Image } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";

const App = () => {
  const [destination, setDestination] = useState({
    latitude: 6.5792,
    longitude: 79.9629,
  });

  const [origin, setOrigin] = useState({
    latitude: 6.9271,
    longitude: 79.8612,
  });

  return (
    // <View style={styles.container}>
    //   <MapView
    //     style={styles.map}
    //     initialRegion={{
    //       latitude: 7.8731,
    //       longitude: 80.7718,
    //       latitudeDelta: 5,
    //       longitudeDelta: 1,
    //     }}
    //   >
    //     <Marker
    //       draggable
    //       onDragEnd={(e) => {
    //         console.log(e.nativeEvent.coordinate);
    //       }}
    //       coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
    //       pinColor={"purple"} // any color
    //       title={"title"}
    //       description={"description"}
    //     />
    //     {/* <MapViewDirections
    //       origin={origin}
    //       destination={destination}
    //       apikey="AIzaSyCdq-7zoPHeMpucfdXHLc1Su5z8NNFco_s"
    //       strokeWidth={4}
    //       strokeColor="red"
    //       mode={'TRANSIT'}
    //     /> */}
    //     {/* <Marker
    //       coordinate={origin}
    //       title="Starting Point"
    //     />
    //     <Marker
    //       coordinate={destination}
    //       title="Destination Point"
    //     /> */}
    //   </MapView>
    // </View>
    <View style={styles.container}>
      {/* <Register /> */}
      {/* <Login /> */}
      <View style={styles.container}>
        <Image source={backgroud} style={styles.background} />
        <Logo />
        <Text style={styles.text}>
          Aqui você acha os seus produtos de limpeza.
        </Text>
        <View style={styles.containerButton}>
          <ButtonC placeholder="Cadastrar" solid={true} />
          <ButtonC placeholder="Entrar" solid={false} />
        </View>
        <Pressable style={styles.arrowUp}>
          <Text>^</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
export default App;
