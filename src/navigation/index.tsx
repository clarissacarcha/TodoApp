import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, TodoList } from "@/screens";
import { useSelector } from "react-redux";

export type ScreenParamsType = {
  Login: undefined;
  TodoList: undefined;
};

const Stack = createStackNavigator<ScreenParamsType>();

export const Navigation = () => {
  const name = useSelector<any>((state) => state.auth.name);

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          initialRouteName={name !== "" ? "TodoList" : "Login"}
          screenOptions={{ gestureEnabled: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="TodoList" component={TodoList} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};
