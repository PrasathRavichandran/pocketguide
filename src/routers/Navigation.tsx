import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GettingStartedScreen from "../screens/GettingStarted";
import Home from "../screens/Home";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={'home'} screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="gettingStarted"
          component={GettingStartedScreen}
        />
        <RootStack.Screen name="home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
