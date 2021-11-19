import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ goalName }) => (
  <View style={styles.itemContainer}>
    <Text>{goalName}</Text>
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "greenyellow",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
});

export default GoalItem;
