import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function Todo() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) {
      Alert.alert('Validation Error', 'Task cannot be empty');
      return;
    }
    setTasks([...tasks, { key: Math.random().toString(), value: task }]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TextInput
        placeholder="Enter task"
        style={styles.input}
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask}/>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item.value}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:10
  },
  task: {
    padding: 5,
    marginTop: 5,
    width: '100%',
    fontSize:25
  },
});
