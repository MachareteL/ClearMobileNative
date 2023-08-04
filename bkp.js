import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";


const teste = {"_dispatchInstances": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 6.1595380157232285, "actualStartTime": 79894499.32053, "alternate": [FiberNode], "child": [Circular], "childLanes": 0, "deletions": null, "dependencies": [Object], "elementType": [Function MapMarker], "flags": 1, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 5.966076999902725, "sibling": null, "stateNode": [MapMarker], "subtreeFlags": 4, "tag": 1, "treeBaseDuration": 6.085537999868393, "type": [Function MapMarker], "updateQueue": [Object]}, "_debugSource": undefined, "actualDuration": 0.16107600927352905, "actualStartTime": 79894505.307684, "alternate": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.284154012799263, "actualStartTime": 79895951.8473, "alternate": [Circular], "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": [Object], "return": [FiberNode], "selfBaseDuration": 0.13576900959014893, "sibling": null, "stateNode": [ReactNativeFiberHostComponent], "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.13576900959014893, "type": "AIRMapMarker", "updateQueue": null}, "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": {"coordinate": [Object], "description": "description", "draggable": true, "icon": undefined, "image": undefined, "onDragEnd": [Function onDragEnd], "onPress": [Function onPress], "pinColor": "purple", "style": [Array], "title": 
"title"}, "memoizedState": null, "mode": 2, "pendingProps": {"coordinate": [Object], "description": "description", "draggable": true, "icon": undefined, "image": undefined, "onDragEnd": [Function onDragEnd], "onPress": [Function onPress], "pinColor": "purple", "style": [Array], "title": "title"}, "ref": {"current": [ReactNativeFiberHostComponent]}, "return": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 6.1595380157232285, "actualStartTime": 79894499.32053, "alternate": [FiberNode], "child": [Circular], "childLanes": 0, "deletions": null, "dependencies": [Object], "elementType": [Function MapMarker], "flags": 1, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 5.966076999902725, "sibling": null, "stateNode": [MapMarker], "subtreeFlags": 4, "tag": 1, "treeBaseDuration": 6.085537999868393, "type": [Function MapMarker], "updateQueue": [Object]}, "selfBaseDuration": 0.11946099996566772, "sibling": null, "stateNode": {"_children": [Array], "_internalFiberInstanceHandleDEV": [Circular], "_nativeTag": 17, "viewConfig": [Object]}, "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.11946099996566772, "type": "AIRMapMarker", "updateQueue": null}, "_dispatchListeners": [Function onDragEnd], "_targetInst": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 6.1595380157232285, "actualStartTime": 79894499.32053, "alternate": [FiberNode], "child": [Circular], "childLanes": 0, "deletions": null, "dependencies": [Object], "elementType": [Function MapMarker], "flags": 1, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 5.966076999902725, "sibling": null, "stateNode": [MapMarker], "subtreeFlags": 4, "tag": 1, "treeBaseDuration": 6.085537999868393, "type": [Function MapMarker], "updateQueue": [Object]}, "_debugSource": undefined, "actualDuration": 0.16107600927352905, "actualStartTime": 79894505.307684, "alternate": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.284154012799263, "actualStartTime": 79895951.8473, "alternate": [Circular], "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": [Object], "return": [FiberNode], "selfBaseDuration": 0.13576900959014893, "sibling": null, "stateNode": [ReactNativeFiberHostComponent], "subtreeFlags": 
0, "tag": 5, "treeBaseDuration": 0.13576900959014893, "type": "AIRMapMarker", "updateQueue": null}, "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 
0, "key": null, "lanes": 0, "memoizedProps": {"coordinate": [Object], "description": "description", "draggable": true, "icon": undefined, "image": undefined, "onDragEnd": [Function onDragEnd], "onPress": [Function onPress], "pinColor": "purple", "style": [Array], "title": "title"}, "memoizedState": null, "mode": 2, "pendingProps": {"coordinate": [Object], "description": "description", "draggable": true, "icon": undefined, "image": undefined, "onDragEnd": [Function onDragEnd], "onPress": [Function onPress], "pinColor": "purple", "style": [Array], "title": "title"}, "ref": {"current": [ReactNativeFiberHostComponent]}, "return": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 6.1595380157232285, "actualStartTime": 79894499.32053, "alternate": [FiberNode], "child": [Circular], "childLanes": 0, "deletions": null, 
"dependencies": [Object], "elementType": [Function MapMarker], "flags": 1, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": null, "return": [FiberNode], "selfBaseDuration": 5.966076999902725, "sibling": null, "stateNode": [MapMarker], "subtreeFlags": 4, "tag": 1, "treeBaseDuration": 6.085537999868393, "type": [Function MapMarker], "updateQueue": [Object]}, "selfBaseDuration": 0.11946099996566772, "sibling": null, "stateNode": {"_children": [Array], "_internalFiberInstanceHandleDEV": [Circular], "_nativeTag": 17, "viewConfig": [Object]}, "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.11946099996566772, "type": "AIRMapMarker", "updateQueue": null}, "bubbles": undefined, "cancelable": undefined, "currentTarget": {"_children": [], "_internalFiberInstanceHandleDEV": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.16107600927352905, "actualStartTime": 79894505.307684, "alternate": [FiberNode], "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": [Object], "return": [FiberNode], "selfBaseDuration": 0.11946099996566772, "sibling": null, "stateNode": [Circular], "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.11946099996566772, "type": "AIRMapMarker", "updateQueue": null}, "_nativeTag": 17, "viewConfig": {"NativeProps": [Object], "bubblingEventTypes": [Object], "directEventTypes": [Object], "uiViewClassName": "AIRMapMarker", "validAttributes": [Object]}}, "defaultPrevented": undefined, "dispatchConfig": {"registrationName": "onDragEnd"}, "eventPhase": undefined, "isDefaultPrevented": [Function functionThatReturnsFalse], "isPropagationStopped": [Function functionThatReturnsFalse], "isTrusted": undefined, "nativeEvent": {"coordinate": {"latitude": 37.01591217647242, "longitude": -120.74506424367428}, "position": {"x": 704, "y": 1953}}, "target": {"_children": [], "_internalFiberInstanceHandleDEV": {"_debugHookTypes": null, "_debugNeedsRemount": false, "_debugOwner": [FiberNode], "_debugSource": undefined, "actualDuration": 0.16107600927352905, "actualStartTime": 79894505.307684, "alternate": [FiberNode], "child": null, "childLanes": 0, "deletions": null, "dependencies": null, "elementType": "AIRMapMarker", "flags": 4, "index": 0, "key": null, "lanes": 0, "memoizedProps": [Object], "memoizedState": null, "mode": 2, "pendingProps": [Object], "ref": [Object], "return": [FiberNode], "selfBaseDuration": 0.11946099996566772, "sibling": null, "stateNode": [Circular], "subtreeFlags": 0, "tag": 5, "treeBaseDuration": 0.11946099996566772, "type": "AIRMapMarker", "updateQueue": null}, "_nativeTag": 17, "viewConfig": {"NativeProps": [Object], "bubblingEventTypes": [Object], "directEventTypes": [Object], "uiViewClassName": "AIRMapMarker", "validAttributes": [Object]}}, "timeStamp": 1691169900102, "type": undefined}

//-22.798559738406553, -47.206842793709164 
export default function App() {
  const [location, setLocation] = useState({
    latitude: 0,
    // latitudeDelta: 0,
    longitude: 0,
    // longitudeDelta: 0,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
    })();
  }, []);

  useEffect(() => {
    console.log(location.coords);
  }, [location]);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} >
        <Marker coordinate={location}/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
