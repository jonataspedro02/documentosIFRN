import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Cabecalho from './src/components/Cabecalho'
import Menu from './src/components/Menu'
import Rodape from './src/components/Rodape'



export default function App() {
  return (
  <SafeAreaView style={styles.container}>
    
    <Cabecalho>

    </Cabecalho>
    <Menu>
  
      </Menu>   
    <Rodape></Rodape> 
    <Text>{'\n'}</Text>  
    </SafeAreaView>
    

  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});