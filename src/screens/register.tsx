import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Register() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View style={{ backgroundColor: "#000", height: "100%" }}>
          <Text>Register Page!</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
