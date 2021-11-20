import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ visible, onPressAddGoal, onPressCancelGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleChangeText = (text) => {
    setEnteredGoal(text);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="enter goal"
          style={styles.input}
          value={enteredGoal}
          onChangeText={handleChangeText}
        />
        <View style={styles.buttonsContainer}>
          <Button
            title="Add"
            color="black"
            onPress={() => onPressAddGoal(enteredGoal)}
          />
          <Button title="Cancel" color="red" onPress={onPressCancelGoal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 30,
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GoalInput;
