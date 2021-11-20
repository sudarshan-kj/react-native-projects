import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button, Modal } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [listOfGoals, setListOfGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [viewGoalsModalVisible, setViewGoalsModalVisible] = useState(false);

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
      <View style={styles.actionButton}>
        <Button
          title="Add new goal"
          color="gray"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View style={styles.actionButton}>
        <Button
          title="View Goals"
          color="gray"
          onPress={() => setViewGoalsModalVisible(true)}
        />
      </View>
      <GoalInput
        visible={modalVisible}
        onPressCancelGoal={() => setModalVisible(false)}
        onPressAddGoal={handleAddGoal}
      />
      <Modal visible={viewGoalsModalVisible} animationType="slide">
        <View style={styles.goalItemsContainer}>
          <FlatList
            data={listOfGoals}
            renderItem={(item) => (
              <GoalItem goal={item.item} onDeleteGoal={handleDeleteGoal} />
            )}
          />
          <Button
            onPress={() => setViewGoalsModalVisible(false)}
            title="Close"
            color="red"
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    padding: 60,
  },
  actionButton: {
    margin: 10,
  },
  goalItemsContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 40,
  },
});
