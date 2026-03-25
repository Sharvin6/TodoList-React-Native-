import React from "react";
import { View, Text, StyleSheet } from "react-native";

type StatBoxProps = {
  label: string;
  value: number;
};

export default function StatBox({ label, value }: StatBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={styles.count}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "#f2f2f2",
    borderColor: "#ddd",

  },

  count: {
    fontSize: 20,
    fontWeight: "bold",
  },

  label: {
    marginTop: 5,
    fontSize: 14,
  },
});