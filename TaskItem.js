import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const TaskItem = ({ item, index, removeTask, getRandomColor }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={[styles.task, { backgroundColor: getRandomColor() }]}>
        <Text style={styles.taskText}>{item}</Text>
      </View>
      <TouchableOpacity onPress={() => removeTask(index)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
