import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

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
    flex: 1
  },
});
