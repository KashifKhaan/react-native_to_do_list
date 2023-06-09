import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text } from 'react-native';
import { styles } from './styles';
import Title from './Title';
import TaskItem from './TaskItem';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const renderTask = ({ item, index }) => (
    <TaskItem
      item={item}
      index={index}
      removeTask={removeTask}
      getRandomColor={getRandomColor}
    />
  );

  const getRandomColor = () => {
    const colors = ['#FF738C', '#FFC07F', '#FFDD78', '#6DD3CE', '#C6D8AF', '#D2C6E0'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

export default App;
