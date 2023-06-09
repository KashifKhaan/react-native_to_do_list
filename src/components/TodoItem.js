import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default TodoItem;
