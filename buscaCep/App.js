import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const App = () => {
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
  },
  mainPage: {},
});

export default App;
