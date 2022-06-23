import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default props => ( 
    <Text style={estilo.titulo}>{props.titulo}
      <Text>{props.subtitulo}</Text>
     <Text>LOGO IFRN </Text>
     <Image

source={{
  uri: 'logo.png',
}}
/>
     
    </Text>

  )


const estilo = StyleSheet.create({
 titulo: {
    flex: 0.4,
    backgroundColor: '#7FFFD4',
    textAlign: 'center',   
    fontSize: 30,
    marginTop: 0,
    width: 433,
    padding: 20,
  },
});