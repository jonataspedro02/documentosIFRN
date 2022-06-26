import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Documento from './Documento';
import Informacao from './Informacao';



function Index ({ navigation}) {
 return(
   <View style={styles.container}>
     <Text style={styles.paragraph}>
    ESCREVER UM PEQUENO TEXTO INICIAL
     </Text>
     <Button color="green"
     title="Acesse os documentos"
     onPress={() => navigation.navigate ('Documento')}
   />
    <Text style={styles.sobre}>
   
    <Button 
    color="black" 
     title="Informacao"
     onPress={() => navigation.navigate ('Informacao')}
   />
   </Text>
   </View>

   
 );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{headerShown: true}}>
        <Stack.Screen name="Index" component={Index} options={{title:"IFRN CAMPUS CANGUARETAMA",
      headerStyle: {
        backgroundColor: '#bbb', 
      }}}/>
    <Stack.Screen name="Documento" component={Documento} />
     <Stack.Screen name="Informacao" component={Informacao} options={{ title: 'Devs'}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 12,
    backgroundColor: '#ecf0f1',
    padding: -20,
    marginTop: -230,
  },
  paragraph: {
    margin: 74,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sobre: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
