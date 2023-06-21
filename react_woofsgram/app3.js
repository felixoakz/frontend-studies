import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// --- Main screens ---
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Home screen</Text>
    </View>
  );
};

const FeedScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>feed screen</Text>
    </View>
  );
};

const CatalogScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Catalog screen</Text>
    </View>
  );
};

const AcountScreen = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Account screen</Text>
    </View>
  );
};

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Catalog" component={CatalogScreen} />
      <Tab.Screen name="Account" component={AcountScreen} />
    </Tab.Navigator>
  );
};

// --- Onboarding screens ---
const Stack = createStackNavigator();

const SignIn = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign in Screen</Text>
      <Button
        title="SignUp"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Sign Up Screen</Text>
      <Button title="Continue" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};

// --- App ---
const App = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
