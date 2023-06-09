import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#1111',
    padding: 20,
    alignItems: 'center',
    maxWidth: '70%',
    marginHorizontal: 'auto',
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: '#1E90FF',
    color: '#fff',
    padding: 10,
    textAlign: 'center',
    borderRadius: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  addButton: {
    backgroundColor: '#1E90FF',
    borderRadius: 4,
    padding: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  task: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#fff',
  },
  removeButton: {
    backgroundColor: '#FF0000',
    borderRadius: 4,
    padding: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
