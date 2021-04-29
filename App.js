import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import IndexScreen from "./src/screens/IndexScreen";
import SecondScreen from "./src/screens/SecondScreen";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerStyle: { backgroundColor: "#9370DB" } }}
    >
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{ title: "Date Picker" }}
      />
      <Stack.Screen
        name="Second"
        component={SecondScreen}
        options={{ title: "Poll Creation" }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
