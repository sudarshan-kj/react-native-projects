import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const GoalItem = ({ goal, onDeleteGoal }) => (
  <TouchableOpacity activeOpacity={0.6} onPress={() => onDeleteGoal(goal.key)}>
    <View style={styles.itemContainer}>
      <Text>{goal.value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "gray",
    padding: 20,
    margin: 10,
    borderRadius: 4,
  },
});

export default GoalItem;
