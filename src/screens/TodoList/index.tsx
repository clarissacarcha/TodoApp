import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button, FAB } from "react-native-paper";
import {
  AddUpdateTaskModal,
  TaskList,
  VerifyContext,
  VerifyContextProvider,
} from "./Components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Logout = ({ onPressLogout }) => (
  <Button mode="text" icon="logout" onPress={onPressLogout}>
    Logout
  </Button>
);

const MainComponent = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const { taskList, showHideModal, onPressLogout } = useContext(VerifyContext);

  // SET HEADER
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "My Todos",
      headerLeft: () => (
        <Image source={require("@/assets/icon.png")} style={styles.icon} />
      ),
      headerRight: () => <Logout onPressLogout={onPressLogout} />,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TaskList taskList={taskList} />
      <AddUpdateTaskModal />
      <FAB
        icon="plus"
        style={[styles.fab, { bottom: insets.bottom }]}
        onPress={showHideModal}
      />
    </View>
  );
};

export const TodoList = ({ navigation }) => {
  return (
    <VerifyContextProvider navigation={navigation}>
      <MainComponent navigation={navigation} />
    </VerifyContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 30,
    right: 0,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    margin: 30,
  },
  icon: {
    width: "38%",
    height: "50%",
    resizeMode: "contain",
  },
});
