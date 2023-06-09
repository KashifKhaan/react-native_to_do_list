import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>To-Do List</Text>
    </View>
  );
};

export default Title;
