import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView , Linking} from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


 export default props =>  {
   return (
     <View style={styles.container}>
         <ScrollView style={{padding: 15}}>
          <Text style={styles.sobre}>SOBRE O APP
         <Text>
          {'\n'}  
         </Text>
         <Text>
          {'\n'}  
         </Text>
        <Text>Desenvolvido para facilitar o acesso a documentos para discentes 
        e docentes.</Text>
        </Text>
        <Text>
        {'\n'}  
       </Text>
       <Text> DEVS: </Text>
       <Text>
       {'\n'}  
       </Text>
       <Text style={styles.devs}> 
       <Text>JONATAS PEDRO DA SILVA
       <Text>
       {'\n'}  
       </Text>
      CURSO: Sitemas para Internet - 5° Período.</Text>
   </Text>
    <Text style={styles.botao}> 
    <Button color="#3EA055" title="github"
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
    <Button color="#3EA055" title="LINKEDIN"
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/jonatas-pedro-58643410b/');
            }}> 
         } }
       >
      </Button>
   </Text>
 <Text style={styles.devs}> 
   <Text>NAYONARA GALVÃO DA SILVA</Text>
    <Text>
   {'\n'}  
    </Text>
   <Text>CURSO: Sistemas para internet - 5º período. </Text>
   </Text>
    <Text style={styles.botao}>
   <Button color="#3EA055" title="GITHUB"
            onPress={() => {
              Linking.openURL('https://github.com/Nayonara1');
            }}>
         } }
       >
      </Button>
   </Text>
    <Text style={styles.botao}>
   <Button color="#3EA055" title="LINKEDIN"
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/nayonara-galvao');
            }}>   
         } }
       >
      </Button>
   </Text>
    <Text style={styles.devs}> 
   <Text>LAURA KAUANNE DA SILVA</Text>
    <Text>
   {'\n'}  
    </Text>
   <Text>CURSO:Sistemas para internet - 5º período.</Text>
   </Text>
      <Text style={styles.botao}>
      <Button color="#3EA055" title="GITHUB"
            onPress={() => {
              Linking.openURL('https://github.com/Laura-kauanny');
            }}>  
         } }
       >
      </Button>
   </Text>
        <Text style={styles.botao}>
      <Button color="#3EA055" title="LINKEDIN"
            onPress={() => {
              Linking.openURL('https://www.linkedin.com/in/31laura-kauanne-da-silva-822622220/');
            }}>
         } }
       >

      </Button>
   </Text>
   
    
    </ScrollView>
   </View>
   )
};




 const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    
    fontWeight: 'arial',
    textAlign: 'left',
    marginVertical: 90,
    font: 'bold',
  },
  botao : {
    paddingBottom: 5,
     fontSize: 10,
  }, 
  sobre : {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 2,
     marginBottom: -10,
  }, 
  devs : {
    marginBottom: 5,
  }
  });