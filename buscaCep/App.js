import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const app = () => {
  const [cep, setCep] = useState("");

  return (
    <View style={styles.safeContainer}>
      <View style={styles.topBar}>
        <Text style={styles.headings}>Buscador de CEP</Text>
      </View>
      <View style={styles.cepContainer}>
        <TextInput
          value={cep}
          onChangeText={(text) => setCep(text)}
          placeholder="CEP"
          style={{ flex: 2, borderColor: "#000000", borderWidth: 1 }}
        />
        <Button title="Consultar" style={{ flex: 1 }} />
      </View>
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
    backgroundColor: "#23648f",
  },
  headings: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    margin: 20,
  },
  cepContainer: {
    flexDirection: "row",
    height: 100,
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: "#ff0000",
  },
});

export default app;
