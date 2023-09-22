import React, { createContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomNumbers } from "@/helpers";
import { useNavigation } from "@react-navigation/native";
import { addTodoAction, updateTodoAction } from "@/store/slices/todoSlice";
import { clearNameAction } from "@/store/slices/authSlice";

export const VerifyContext = createContext(null);
const { Provider } = VerifyContext;

export const VerifyContextProvider = ({ children, navigation }) => {
  const dispatch = useDispatch();
  const taskList = useSelector<any>((state) => state.todo.taskList);
  const name = useSelector<any>((state) => state.auth.name);
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState<any>({
    title: "",
    description: "",
  });

  //THIS FUNCTION TRIGGERS THE LOGOUT
  const onPressLogout = () => {
    dispatch(clearNameAction());
    navigation.navigate("Login");
  };

  //THIS FUNCTION TRIGGERS THE HIDE AND SHOW OF ADDING/UPDATING TASK MODAL
  const showHideModal = () => setShowAddTask((prev) => !prev);

  //THIS FUNCTION IS FOR CLEARING THE STATE
  const clearState = () => {
    setTask({
      title: "",
      description: "",
    });
  };

  // THIS FUNCTION IS FOR CHANGING THE VALUE OF THE STATE
  const onChangeText = (key: string, value: string) => {
    setTask((prev: Object) => ({ ...prev, [key]: value }));
  };

  //THIS FUNCTION TRIGGERS THE ADDING OF TASk
  const onPressAddTodo = () => {
    const data = { ...task, id: generateRandomNumbers(0, 1000) };
    dispatch(addTodoAction({ name, data }));
    showHideModal();
    clearState();
  };

  //THIS FUNCTION TRIGGERS THE UPDATING OF TASk
  const onPressUpdateTodo = () => {
    dispatch(updateTodoAction({ name, data: task }));
    showHideModal();
    clearState();
  };

  return (
    <Provider
      value={{
        onPressLogout,
        taskList,
        showAddTask,
        setShowAddTask,
        task,
        setTask,
        showHideModal,
        clearState,
        onChangeText,
        onPressAddTodo,
        onPressUpdateTodo,
        name,
      }}
    >
      {children}
    </Provider>
  );
};
