import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "@/front/src/view/Home.js";

function DetailsScreen({ route, navigation }) {
  const { firstname, name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Firstname: {firstname}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        options={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Overview",
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
