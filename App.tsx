import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Config from 'react-native-config';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>ENV_NAME={Config.ENV_NAME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
