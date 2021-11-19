import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);

  const handleTextChange = (text) => {
    setEnteredGoal(text);
  };

  const handleAddGoal = () => {
    setListOfGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  return (
    <View style={styles.screen}>
      <GoalInput
        onGoalTextChange={handleTextChange}
        onPressAddGoal={handleAddGoal}
        enteredGoal={enteredGoal}
      />
      <FlatList
        data={listOfGoals}
        renderItem={(item) => <GoalItem goalName={item.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eeffee",
    justifyContent: "center",
    padding: 30,
  },
});
