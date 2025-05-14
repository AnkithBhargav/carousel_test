import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Carousel from '../components/Carousel/Carousel';

const imageData = [
  { id: '1', uri: 'https://via.placeholder.com/300/0000FF/FFFFFF?Text=Image+1' },
  { id: '2', uri: 'https://via.placeholder.com/300/FF0000/FFFFFF?Text=Image+2' },
  { id: '3', uri: 'https://via.placeholder.com/300/00FF00/FFFFFF?Text=Image+3' },
  { id: '4', uri: 'https://via.placeholder.com/300/FFFF00/000000?Text=Image+4' },
];

const renderImageItem = ({ item }) => (
  <View style={styles.imageItem}>
    <Image source={{ uri: item.uri }} style={styles.image} resizeMode="cover" />
    <Text style={styles.imageLabel}>{item.id}</Text>
  </View>
);

const HomeScreen = () => {
  const handleIndexChanged = (index) => {
    console.log('Current index:', index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Carousel Example</Text>
      <Carousel
        data={imageData}
        renderItem={renderImageItem}
        itemWidth={300} // Optional: Set a custom item width
        containerStyle={styles.carouselContainer} // Optional: Custom container styles
        itemContainerStyle={styles.carouselItemContainer} // Optional: Custom item container styles
        onIndexChanged={handleIndexChanged} // Optional: Callback for index change
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  carouselItemContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageItem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageLabel: {
    position: 'absolute',
    bottom: 10,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;