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
              <Text>Plano de Curso:</Text>
              <Text>Tecnologia em Sistemas para Internet</Text>
              <Text style={styles.botao}>
                <Button color="#3EA055" title="Download"
                  onPress={() => {
              Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-de-graduacao/tecnologia/tecnologia-em-sistemas-para-internet/at_download/coursePlan');
            }}>
         } }
       >
               </Button>
             </Text>
        <Text>Plano de Curso:</Text>
           <Text>Curso Superior de Tecnologia em Gestão de Turismo</Text>
            <Text style={styles.botao}>
             <Button color="#3EA055" title="Download"
              onPress={() => {
              Linking.openURL('https://portal.ifrn.edu.br/campus/canguaretama/publicacoes/ato-de-criacao-do-curso-gestao-de-turismo-campus-canguaretama/at_download/file');
            }}>
         } }
       >
             </Button>
           </Text>
        <Text>Plano de Curso:</Text>
          <Text>Licenciatura em Educação do Campo</Text>
           <Text style={styles.botao}>
             <Button color="#3EA055" title="Download"
              onPress={() => {
              Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-de-graduacao/licenciatura/curso-superior-de-licenciatura-em-educacao-do-campo/at_download/coursePlan');
            }}>
         } }
       >
            </Button>
          </Text>
          <Text>Plano de Curso:</Text>
            <Text>Técnico Subsequente em Mecânica</Text>
              <Text style={styles.botao}>
                <Button color="#3EA055" title="Download"
                onPress={() => {
                Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-subsequente/tecnico-de-nivel-medio-em-mecanica/at_download/coursePlan');
            }}>
         } }
       >
          </Button>
         </Text>
             <Text>Plano de Curso:</Text>
               <Text>Técnico Integrado em Informática </Text>
               <Text style={styles.botao}>
                 <Button color="#3EA055" title="Download"
                  onPress={() => {
                  Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-integrado/tecnico-em-informatica/at_download/coursePlan');
            }}>  
         } }
       >
      </Button>
     </Text>
          <Text>Plano de Curso:</Text>
            <Text>Técnico Integrado em Eventos </Text>
             <Text style={styles.botao}>
              <Button color="#3EA055" title="Download"
              onPress={() => {
              Linking.openURL('https://portal.ifrn.edu.br/ensino/cursos/cursos-tecnicos-de-nivel-medio/tecnico-integrado/tecnico-em-eventos/at_download/coursePlan');
            }}>
         } }
       >
            </Button>
        </Text>
        <Text>Plano de Curso:</Text>
            <Text>Técnico Integrado em Eletromecânica </Text>
              <Text style={styles.botao}>
               <Button color="#3EA055" title="Download"
               onPress={() => {
               Linking.openURL('https://portal.ifrn.edu.br/campus/canguaretama/arquivos/ppc-curso-tecnico-integrado-em-eletromecanica-1');
            }}>
         } }
       >
             </Button>
          </Text>
         </ScrollView>
      </Text>  
      </View>
      );
}
const styles = StyleSheet.create({
  documento: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   botao : {
     paddingBottom: 5,
     fontSize: 10,
  }, 
  });
  
  
  
  
   