import React from "react";
import { Text, View, StyleSheet, ImageBackground, Button } from "react-native";

const IndexScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={require("../../assets/ModelX.jpeg")}
        style={style.image}
      />

      <Button title="Click Me " onPress={() => navigation.push("Second")} />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
  },
  Button: {
    width: "100%",
    borderRadius: 20,
  },
});

export default IndexScreen;
