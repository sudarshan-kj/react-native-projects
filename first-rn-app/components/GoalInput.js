import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = ({ enteredGoal, onPressAddGoal, onGoalTextChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="enter goal"
      style={styles.input}
      value={enteredGoal}
      onChangeText={onGoalTextChange}
    />
    <Button title="Add" color="black" onPress={onPressAddGoal} />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    padding: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 40,
    color: "black",
    flex: 1,
    marginRight: 30,
  },
});

export default GoalInput;
