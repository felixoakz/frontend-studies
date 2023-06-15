import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const app = () => {
  const [cep, setCep] = useState("");

  return (
    <View style={styles.safeContainer}>
      <View style={styles.topBar}>
        <Text style={styles.headings}>Buscador de CEP</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          value={cep}
          onChangeText={(text) => setCep(text)}
          placeholder="CEP"
          style={styles.inputField}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 20, color: "#ffffff" }}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}></View>
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
  container: {
    flexDirection: "row",
    height: 70,
    marginHorizontal: 20,
    marginTop: 20,
  },
  inputField: {
    flex: 2,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: 20,
  },
  button: {
    flex: 1,
    backgroundColor: "#23648f",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 10,
  },
});

export default app;
