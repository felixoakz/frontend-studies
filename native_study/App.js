import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>heyy</Text>
      <Button style={styles.Button} title="ClickMe" />
      <TouchableOpacity title="PressMe" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Button: {
    margin: 10,
  },
});
