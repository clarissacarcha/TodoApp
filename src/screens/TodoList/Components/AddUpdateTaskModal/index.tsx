import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Modal, Portal, TextInput, Text } from "react-native-paper";
import { VerifyContext } from "../VerifyContextProvider";

export const AddUpdateTaskModal = () => {
  const {
    showHideModal,
    showAddTask,
    task,
    onChangeText,
    onPressAddTodo,
    onPressUpdateTodo,
    clearState,
  } = useContext(VerifyContext);

  return (
    <Portal>
      <Modal
        visible={showAddTask}
        onDismiss={() => {
          showHideModal();
          clearState();
        }}
        contentContainerStyle={styles.modalContainer}
      >
        <Text variant="titleLarge">
          {task?.id ? "Update Todo" : "Add Todo"}
        </Text>
        <TextInput
          label="Title"
          value={task.title}
          onChangeText={(value) => onChangeText("title", value)}
          maxLength={10}
          style={{ marginTop: 20 }}
        />
        <TextInput
          label="Description"
          value={task.description}
          onChangeText={(value) => onChangeText("description", value)}
          maxLength={100}
          style={{ marginTop: 20 }}
        />
        <Button
          disabled={!task.title || !task.description}
          mode="contained"
          onPress={() => {
            task?.id ? onPressUpdateTodo() : onPressAddTodo();
          }}
          style={{ marginTop: 50 }}
        >
          {task?.id ? "Update" : "Add"}
        </Button>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    margin: 30,
  },
});
