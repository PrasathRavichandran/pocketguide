import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GettingStartedScreen from "./src/screens/GettingStarted";
import { colors } from "./src/themes/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor={colors.orange} />
      <GettingStartedScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, // this will be removed when navigation introduced
  },
});
