import * as React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Linking,
  
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('/Documentos');
            }}>
              SOBRE
          </Text>
          
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7FFFD4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 225,
    width: 433,
    padding: 1,  
    fontSize: 30,
  },
  textStyle: {
    fontSize: 20,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});

export default App;