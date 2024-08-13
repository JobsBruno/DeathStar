import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View,FlatList, ScrollView, ImageBackground } from 'react-native';
import bckImg from './assets/starships.png'

  const request = async(Callback) =>{
    const response = await fetch ('https://swapi.dev/api/people/');
    // trazendo a api e transfoirmando em linguagem JSON 
    const parsed = await response.json();
    Callback(parsed.results);
  };

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect (() =>{
    request(setRegistros);
  },[]);
  
  return (
   
    <ScrollView>
    
<View style={styles.container}>
<ImageBackground 
      source={bckImg}
    >
      <Text style={styles.title}>Star Wars</Text>
     <FlatList 
      data={registros}
      keyExtractor={(item)=>item.name.toString()}
      //toda informação de string, deve se usar {} ao inves de ""
      renderItem={({item})=>
      
        <Text style={styles.texts}>

        <Text style={styles.texto}>
          Nome: {item.name}</Text>
        <Text style={styles.texto}>
          height: {item.height}
          </Text>
        <Text style={styles.texto}>
          skin_color: {item.skin_color}
          </Text>

        </Text>
      }
     />
     
     <StatusBar style='auto'/>
     </ImageBackground>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column' ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black",
  },
  texts:{
    fontSize: 22,
    backgroundColor: 'gray',
    padding: 10,
    margin: 8,
    borderRadius:15,
      },
      title:{
        fontSize: 30,
        marginVertical: 50,
        marginBottom: 10,
        color: 'white',
        marginLeft: 120,
      },
});
