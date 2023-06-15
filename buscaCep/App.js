import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Hello MF</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
