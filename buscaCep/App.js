import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { safeAreaProvider } from "react-native-safe-area-context";

const app = () => {
  return (
    <safeAreaProvider style={styles.safeContainer}>
      <Text>VAI TOMAR NO MEU CU PORRA</Text>
    </safeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});

export default app;
