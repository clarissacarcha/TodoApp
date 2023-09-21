import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TodoList } from "@/screens";

export type RootProps = {
  TodoList: undefined;
};

const Stack = createStackNavigator<RootProps>();

export const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="TodoList">
      <Stack.Screen name="TodoList" component={TodoList} />
    </Stack.Navigator>
  );
};
