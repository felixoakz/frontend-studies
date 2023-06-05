import React from "react";
import { View, Text, TextInput } from "react-native";

const App = () => (
  <View
    style={{ flex: 1, justifyContent: "center", backgroundColor: "#ecf0f1" }}
  ></View>
);

const InputWithLabel = (props) => {
  const { label, placeholder, value, onChangeText } = props;

  return (
    <View>
      <Text>{Label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default App;
