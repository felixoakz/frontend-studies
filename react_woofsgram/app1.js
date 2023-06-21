import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [confPasswd, setConfPasswd] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [breed, setBreed] = useState("");
  const [toy, setToy] = useState("");

  const confirmPasswordsMatch = (props) => {
    const {
      nativeEvent: { text },
    } = props;

    if (text !== passwd) {
      alert("Passwords do not match!");
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1" }}
    >
      <InputWithLabel
        label="Email"
        placeholder="Type your email here"
        value={email}
        onChangeText={setEmail}
      />
      <InputWithLabel
        label="Password"
        placeholder="Type your password here"
        value={passwd}
        onChangeText={setPasswd}
        secureTextEntry
      />
      <InputWithLabel
        label="Confirm Password"
        placeholder="Confirm your password here"
        value={confPasswd}
        onChangeText={setConfPasswd}
        secureTextEntry
        onSubmitEditing={confirmPasswordsMatch}
      />
      <InputWithLabel
        label="pets name"
        placeholder="Type your email here"
        value={name}
        onChangeText={setName}
      />
      <InputWithLabel
        label="pets date of birth"
        placeholder="Type your email here"
        value={dob}
        onChangeText={setDob}
      />
      <InputWithLabel
        label="Breed"
        placeholder="Type your email here"
        value={breed}
        onChangeText={setBreed}
      />
      <InputWithLabel
        label="favorite toy"
        placeholder="Type your email here"
        value={toy}
        onChangeText={setToy}
      />
    </ScrollView>
  );
};

const InputWithLabel = (props) => {
  const {
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    onSubmitEditing,
  } = props;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ padding: 8, fontSize: 18 }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
        style={{ padding: 8, fontSize: 18 }}
      />
    </View>
  );
};

export default App;
