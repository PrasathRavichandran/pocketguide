import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { colors } from "../themes/colors";

const CustomHeader = ({ data, toggleActiveHeader, active }: any) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 46,
        paddingVertical: 14,
      }}
    >
      {data?.map((item: any) => (
        <TouchableOpacity
          key={item?.id}
          style={{ paddingTop: 10 }}
          onPress={() => toggleActiveHeader(item)}
        >
          <Text
            style={[
              styles.headerTitle,
              active?.id === item?.id
                ? { color: colors.black, transform: [{ scale: 1.08 }] }
                : {
                    color: colors.gray,
                    marginBottom: 13,
                    transform: [{ scale: 1 }],
                  },
            ]}
          >
            {item?.title}
          </Text>
          {active?.id === item?.id && <View style={styles.activeIndicator} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  activeIndicator: {
    width: 26,
    height: 5,
    backgroundColor: colors.red,
    borderRadius: 10,
    marginTop: 8,
    alignSelf: "center",
  },
});
