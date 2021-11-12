import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";

import Navigation from "./src/routers/Navigation";
import { colors } from "./src/themes/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style={'dark'} backgroundColor={colors.orange} />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
