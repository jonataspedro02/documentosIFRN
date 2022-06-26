import * as React from 'react';
import { Text, View, StyleSheet, Button, ScrollView , Linking, } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


  
  export default props =>  {
       return (
         
      
          <View>
           <Text style={styles.documento}>
            <ScrollView style={{padding: 15}}>
             
           
      <Button color="orange" title="Download"
            onPress={() => {
              Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-de-graduacao/tecnologia/tecnologia-em-sistemas-para-internet/at_download/coursePlan');
            }}>
         
         } }
       >

      </Button>
     
      
     

      
    </ScrollView>
    </Text>  
      </View>
      );
}
 

const styles = StyleSheet.create({
  documento: {
    margin: -20,
    fontSize: 18,
   fontWeight: 'bold',
   textAlign: 'center',
  }
  });
  
  
  
  
   