import React from "react";
import { View, Text, StyleSheet } from "react-native";

const app = () => {
  return (
    <View style={styles.safeContainer}>
      <View style={styles.topBar}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    flexDirection: "column",
  },
  topBar: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#0D47A1",
  },
});

export default app;
