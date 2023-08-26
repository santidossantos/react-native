import React, {FC} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {PostImage as PostImageType} from '../../types'; // Reutilizamos el typo de TS que usamos en el componente TodaysImages
import PostImage from '../PostImage';

// Recibe un arreglo de objetos que cumplen con PostImage
const LastFiveDaysImages: FC<{postImages?: PostImageType[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;
