import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.blueText}>Hello, world!</Text>
        <Text style={styles.blueText}>Hello, world!</Text>
        <Text style={styles.blueText}>Hello, world!</Text>
        <Button title={'Good'} />
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.blueText}>Hello, world!</Text>
        <Text style={styles.blueText}>Hello, world!</Text>
        <Text style={styles.blueText}>Hello, world!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey'
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerBottom: {
    alignItems: 'flex-end',
    backgroundColor: 'green',
    justifyContent: 'center'
  },
  blueText: { color: 'blue' }
})
