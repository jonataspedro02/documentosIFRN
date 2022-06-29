import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Documento from './Documento';
import Informacao from './Informacao';



function Index ({ navigation}) {
 return(
   <View>
     <Text style={styles.paragraph}>
   O INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA 
   DO RIO GRANDE DO NORTE - CAMPUS CANGUARETAMA, DISPÕE DE DOCUMENTOS OFICIAIS PARA AS MAIS VARIADAS OCASIÕES, AQUI VOCÊ PODERÁ ENCONTRAR UMA BOA PARTE DELES.
     </Text>
       <Button color="#3EA055"
         title="Acesse os documentos"
          onPress={() => navigation.navigate ('Documento')}
           />
    <View style={styles.sobre}>
       <Button 
        color="#3EA055"
        title="SOBRE"
        onPress={() => navigation.navigate ('Informacao')}
        />
   </View>
  </View>  
 );
}
const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Index' screenOptions={{headerShown: true}}>
        <Stack.Screen name="Index" component={Index} options={{title:"IFRN CAMPUS - CANGUARETAMA",
     headerStyle: {
        backgroundColor: '#bbb', 
      }}}/>
    <Stack.Screen name="Documento" component={Documento} options={{title:"DOCUMENTOS",
     headerStyle: {
        backgroundColor: '#bbb', 
      }}}/>
     <Stack.Screen name="Informacao" component={Informacao} options={{title:"INFORMAÇÕES",
     headerStyle: {
        backgroundColor: '#bbb', 
      }}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  paragraph: {
    margin: 54,
    marginLeft: 20,
    marginRight: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sobre: {
    fontWeight: 'bold',
    textAlign: 'center',
    height: '130',
    fontSize: 14,
    marginTop: 310,
  }
});
