import * as React from 'react';
import { StyleSheet, Text, View,  Linking } from 'react-native';

export default props => ( 
  <Text style={estilo.titulo}>{props.titulo}
    <Text>{props.subtitulo}</Text>
   <Text>INFORMAÇÕES</Text>
   <Text>SOBRE O APP</Text>

   <Text>DESENVOLVEDORES</Text>

   <Text>JONATAS PEDRO DA SILVA</Text>

   <Text>CURSO:</Text>
   <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>

   <Text>NAYONARA GALVÃO DA SILVA</Text>

   <Text>CURSO:Sistemas para internet - 5º período </Text>
   <Text>GITHUB: <a href="https://github.com/Nayonara1"></a></Text>
   <Text>LINKEDIN: <a href=""></a></Text>

   <Text>LAURA KAUANNE DA SILVA</Text>

   <Text>CURSO:Sistemas para internet - 5º período</Text>
   <Text>GITHUB:</Text>
   <Text>LINKEDIN:</Text>

    <StatusBar style="auto" />
  </Text>

)


const estilo = StyleSheet.create({
titulo: {
  flex: 0.4,
  backgroundColor: '#7FFFD4',
  textAlign: 'center', 
  width: 1000,  
  fontSize: 30,
  marginTop: 100,

},
});