import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native'; // Para tomar los parametros de la ruta anterior
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../types';
import Header from '../../components/Header';

const Detail = () => {
  const {
    params: {title, url, explanation, date},
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{uri: url}} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 20,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 16,
    borderColor: 'white',
    borderWidth: 1,
    marginBottom: 15,
  },
  date: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 15,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  explanation: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Detail;
