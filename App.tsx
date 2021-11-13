import React from "react";
import { StatusBar } from "expo-status-bar";

import Navigation from "./src/routers/Navigation";
import { colors } from "./src/themes/colors";

export default function App() {
  return (
    <>
      <StatusBar style={'dark'} backgroundColor={colors.orange} />
      <Navigation />
    </>
  );
}
