import React, { useState, useCallback } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import "intl";
import "intl/locale-data/jsonp/en";
import { TimePickerModal } from "react-native-paper-dates";
import { DatePickerModal } from "react-native-paper-dates";
import { EvilIcons } from "@expo/vector-icons";
import { format, compareAsc } from "date-fns";

const SecondScreen = () => {
  const [name, setName] = useState(" ");
  const [question, setQuestion] = useState("");
  const [date, setDate] = useState(Date | (undefined > undefined));
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState({ hours: null, minutes: null });
  const [val, setval] = useState("");

  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      setTime({ hours: hours, minutes: minutes });
      console.log(time);
    },
    [setVisible]
  );

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
      console.log(format(date, "MM/dd/yyyy"));
    },
    [setOpen, setDate]
  );

  const createThreeButtonAlert = () =>
    Alert.alert("Successfully Poll Created", `${question}`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View>
      <Text style={styles.text}> Poll name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        placeholder="Name of the Poll"
        autoCapitalize="none"
      >
        {" "}
      </TextInput>
      <Text style={[styles.text, { paddingTop: "10%" }]}> Question </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write down your poll"
        autoCapitalize="none"
        autoCompleteType="off"
        onChangeText={setQuestion}
      >
        {" "}
      </TextInput>
      <Text style={[styles.text, { paddingTop: "10%" }]}> Deadline </Text>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <EvilIcons name="clock" size={40} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 23 }}>
          {" "}
          {time.hours} : {time.minutes}{" "}
        </Text>

        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
        />
      </View>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <EvilIcons name="calendar" size={40} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 23 }}> {format(date, "dd/MM/yyyy")} </Text>
        <DatePickerModal
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
      <Text style={[styles.text, { paddingTop: "10%" }]}> Choices </Text>
      <TextInput
        style={[styles.textInput, { paddingTop: "1%", paddingBottom: "2%" }]}
        onChangeText={setName}
        placeholder="Choice 1"
        autoCapitalize="none"
      ></TextInput>
      <TextInput
        style={[styles.textInput, { paddingTop: "1%" }]}
        onChangeText={setName}
        placeholder="Choice 1"
        autoCapitalize="none"
      ></TextInput>
      <View style={{ padding: 30 }}>
        <Button title="Create " onPress={createThreeButtonAlert} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "300",
    paddingTop: "5%",
  },
  textInput: {
    height: 30,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    fontSize: 20,
  },
  icon: {
    height: 50,
    paddingTop: "3%",
    paddingBottom: "1%",
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: "90%",
  },
});

export default SecondScreen;
