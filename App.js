import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
