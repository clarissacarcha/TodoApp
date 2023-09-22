import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { setNameAction } from "@/store/slices/authSlice";

export const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    navigation.setOptions({
      headerLeft: null,
    });
  }, [navigation]);

  const onPressLogin = () => {
    setName("");
    dispatch(setNameAction(name));
    navigation.navigate("TodoList");
  };

  return (
    <View style={{ padding: 20, flex: 1 }}>
      <TextInput
        label="Name"
        value={name}
        onChangeText={(name) => setName(name)}
        maxLength={10}
      />

      <Button
        disabled={!name}
        mode="contained"
        onPress={onPressLogin}
        style={{ marginTop: 50 }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
