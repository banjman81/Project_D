import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todo task daily */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          <Task text={'Task No. 1'}/>
          <Task text={'Task No. 2'}/>
          <Task text={'Task No. 3'}/>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e5e6',
  },
  tasksWrapper: {
    color: 'black',
    padding: 10,
    paddingTop: 50
  },
  sectionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10
  },
  items: {

  }
});
