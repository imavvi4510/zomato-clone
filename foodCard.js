import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    margin: 0,
    backgroundColor: '#fff',
    width: 400,
    height: 280,

    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  tinyLogo: {
    width: 400,
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  offer: {
    backgroundColor: '#6780bf',
  },
  time: {
    backgroundColor: '#c4c0c0',
  },
});

const DisplayAnImage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg',
        }}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          bottom: 50,
        }}>
        <View>
          <Text style={styles.offer}> 20% OFF </Text>
        </View>
        <View>
          <Text style={styles.time}> 20 mins </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View>
          <Text style={{fontWeight: '500'}}> Aha! Baangali </Text>
          <Text style={{color: 'gray'}}> Pizza </Text>
        </View>
        <View style={{}}>
          <Text style={{alignSelf: 'flex-end'}}>
            {' '}
            <Text style={{color: 'red', fontSize: 18}}>★</Text> 4.1/5{' '}
          </Text>
          <Text> ₹250 for one </Text>
        </View>
      </View>
    </View>
  );
};

export default DisplayAnImage;
