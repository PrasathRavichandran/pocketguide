import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from "../themes/colors";

const Layout = ({ children, customStyle }: any) => {
  return (
    <SafeAreaView style={[styles.container, customStyle]}>
      {children}
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
