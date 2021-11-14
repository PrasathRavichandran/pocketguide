import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GettingStartedScreen from "../screens/GettingStarted";
import TabNavigation from "./TabNavigation";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={"gettingStarted"}
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="gettingStarted"
          component={GettingStartedScreen}
        />
        <RootStack.Screen name="tab" component={TabNavigation} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
