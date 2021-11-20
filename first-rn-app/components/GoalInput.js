import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ visible, onPressAddGoal, onPressCancelGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleOnPressAddGoal = () => {
    onPressAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  const handleOnPressCancelGoal = () => {
    onPressCancelGoal();
    setEnteredGoal("");
  };

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
          <View style={styles.actionButton}>
            <Button title="Add" color="gray" onPress={handleOnPressAddGoal} />
          </View>
          <View style={styles.actionButton}>
            <Button
              title="Cancel"
              color="red"
              onPress={handleOnPressCancelGoal}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
    backgroundColor: "black",
  },
  input: {
    paddingBottom: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    width: "100%",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  actionButton: {
    flex: 1,
    margin: 10,
  },
});

export default GoalInput;
