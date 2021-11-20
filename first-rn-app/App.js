import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddGoal = (enteredGoal) => {
    setListOfGoals((prev) => [
      ...prev,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setModalVisible(false);
  };

  const handleDeleteGoal = (id) => {
    setListOfGoals((prev) => prev.filter((goal) => goal.key !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setModalVisible(true)} />
      <GoalInput
        visible={modalVisible}
        onPressCancelGoal={() => setModalVisible(false)}
        onPressAddGoal={handleAddGoal}
      />
      <FlatList
        data={listOfGoals}
        renderItem={(item) => (
          <GoalItem goal={item.item} onDeleteGoal={handleDeleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#eeffee",
    justifyContent: "center",
    padding: 60,
  },
});
