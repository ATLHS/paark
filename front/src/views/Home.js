import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.push("Details", { firstname: "sofiane", name: "attilah" })
        }
      />
    </View>
  );
};

export default HomeScreen;
