import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../themes/colors";

import Explore from "../screens/Explore";
import Home from "../screens/Home";

const TabNavigator = createBottomTabNavigator<TabParamsList>();

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[
              styles.tabBarButton,
              { backgroundColor: isFocused ? colors.purple : "transparent" },
            ]}
            key={index}
          >
            <Text
              style={[
                styles.tabBarButtonText,
                {
                  color: isFocused ? colors.white : colors.gray,
                },
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const TabNavigation = () => {
  return (
    <TabNavigator.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabNavigator.Screen name="Home" component={Home} />
      <TabNavigator.Screen name="Explore" component={Explore} />
      <TabNavigator.Screen name="Trips" component={Explore} />
      <TabNavigator.Screen name="Profile" component={Explore} />
    </TabNavigator.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 80,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  tabBarButton: {
    borderRadius: 10,
    marginBottom: 32,
    marginTop: 14,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  tabBarButtonText: {
    fontSize: 18,
    fontWeight: "400",
  },
});
