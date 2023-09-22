import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Avatar, Card, IconButton, Text } from "react-native-paper";
import { deleteTodoAction } from "@/store/slices/todoSlice";
import { VerifyContext } from "../VerifyContextProvider";

export const TaskList = ({ taskList }) => {
  const dispatch = useDispatch();
  const { showHideModal, setTask, name } = useContext(VerifyContext);

  // THIS FUNCTION IS FOR DELETING A TASK
  const onPressDelete = (index: number) => {
    dispatch(deleteTodoAction({ name, index }));
  };

  // THIS FUNCTION IS FOR UPDATING A TASK
  const onPressUpdate = (item: object) => {
    setTask(item);
    showHideModal();
  };

  return (
    <FlatList
      data={taskList[name]}
      extraData={taskList[name]}
      renderItem={({ item, index }) => {
        return (
          <Card style={styles.card}>
            <Card.Title
              title={item.title}
              subtitle={item.description}
              subtitleNumberOfLines={5}
              left={(props) => <Avatar.Icon {...props} icon="calendar" />}
              right={(props) => (
                <View style={styles.rightIconsContainer}>
                  <IconButton
                    {...props}
                    icon="pencil"
                    onPress={() => onPressUpdate(item)}
                    containerColor="skyblue"
                    iconColor="white"
                  />
                  <IconButton
                    {...props}
                    icon="delete"
                    onPress={() => onPressDelete(index)}
                    containerColor="red"
                    iconColor="white"
                  />
                </View>
              )}
            />
          </Card>
        );
      }}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
      ListHeaderComponent={() => (
        <Text variant="titleLarge" style={{ marginBottom: 20 }}>
          Hi {name}!
        </Text>
      )}
      ListEmptyComponent={() => (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            variant="titleSmall"
            style={{ marginBottom: 20, textAlign: "center" }}
          >
            You don't have a to-do yet.
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  card: {
    marginBottom: 20,
    paddingVertical: 20,
  },
  rightIconsContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
});
