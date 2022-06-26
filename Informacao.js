import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView , Linking, Iframe} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 export default props =>  {
   return (
   <View style={styles.container}>
         <ScrollView style={{padding: 15}}>
     <Text style={styles.sobre}>SOBRE O APP</Text>
 
     <Text>XXXXXXXXXXXXXXXXX</Text>
     <Text>DEVS:</Text>
   <Text>JONATAS PEDRO DA SILVA</Text>

   <Text>CURSO: Sitemas para Internet, 5° Período.</Text>
   <Text style={styles.botao}> 
   <Button color="blue" title="github de jonatas"
            onPress={() => {
              Linking.openURL('https://github.com/jonataspedro02');
            }}>
         
         } }
       >

      </Button>
   
   <Text>
   {'\n'}  
    </Text>
   </Text>

    <Text style={styles.botao}>
    <Button color="blue" title="LINKEDIN"
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/jonatas-pedro-58643410b/');
            }}>
         
         } }
       >

      </Button>
   
   
   
   </Text>

 


   <Text>NAYONARA GALVÃO DA SILVA</Text>

   <Text>CURSO: Sistemas para internet - 5º período </Text>
    <Text style={styles.botao}>
   <Button color="blue" title="GITHUB"
            onPress={() => {
              Linking.openURL('#');
            }}>
         
         } }
       >

      </Button>
   
   </Text>
   <Text> 
   <Button color="blue" title="LINKEDIN:"
            onPress={() => {
              Linking.openURL('#');
            }}>
         
         } }
       >

      </Button>

   </Text>

   <Text>LAURA KAUANNE DA SILVA</Text>

   <Text>CURSO:Sistemas para internet - 5º período</Text>
   <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>
    </ScrollView>
   </View>
   )
};




 const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'arial',
    textAlign: 'center',
    marginVertical: 90,
  },
  botao : {
    paddingBottom: 5,
  }
  });
   
  