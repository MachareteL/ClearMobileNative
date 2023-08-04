import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

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
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 7.8731,
          longitude: 80.7718,
          latitudeDelta: 5,
          longitudeDelta: 1,
        }}
      >
        <Marker
          draggable
          onDragEnd={(e) => {
            console.log(e.nativeEvent.coordinate);
          }}
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          pinColor={"purple"} // any color
          title={"title"}
          description={"description"}
        />
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey="AIzaSyCdq-7zoPHeMpucfdXHLc1Su5z8NNFco_s"
          strokeWidth={4}
          strokeColor="red"
          mode={'TRANSIT'}
        /> */}
        {/* <Marker
          coordinate={origin}
          title="Starting Point"
        />
        <Marker
          coordinate={destination}
          title="Destination Point"
        /> */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;
