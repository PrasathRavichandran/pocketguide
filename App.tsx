import React from "react";
import { StatusBar } from "expo-status-bar";

import { colors } from "./src/themes/colors";
import RootStackNavigator from "./src/routers/RootNavigation";

export default function App() {
  return (
    <>
      <StatusBar style={'dark'} backgroundColor={colors.orange} />
      <RootStackNavigator />
    </>
  );
}
