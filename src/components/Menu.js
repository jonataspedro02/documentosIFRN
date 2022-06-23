import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, Linking, } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://google.com.br');
            }}>


            DOCUMENTOS IFRN
          </Text>
          <Text>
        {'\n'}
          <Text>
      nnnnnnn
          </Text>
        </Text>
        {'\n'}
          <Text>
       pppppppp
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#7FFFD4',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginLeft: 60,
    marginRight: 56,
    width: 433,
    padding: 20,
  },
  textStyle: {
    fontSize: 15,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
});

export default App;
