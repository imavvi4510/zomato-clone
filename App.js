/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';

import RollList from './RollList';
import Textin from './textinput';
import ImageCard from './imageCardwithText';
import ImageGallery from './ImageGallery';
import DisplayAnImage from './foodCard';

const mapper = [0, 1, 2, 3, 4, 5, 6, 7];

const App = () => {
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#ffffff'}}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          margin: 5,
          // backgroundColor: 'red',
          // borderWidth: 1,
          borderBottomWidth: 1,
          borderBottomColor: '#4e4d4f',
          alignSelf: 'flex-start',
          borderRadius: 5,
          borderBottomStyle: 'dashed',
        }}>
        North Hadapsar ,Hadapsar
      </Text>
      <Textin />
      <RollList />

      <FlatList
        data={mapper}
        renderItem={() => <DisplayAnImage />}
        ItemSeparatorComponent={() => <View style={{padding: 8}}></View>}
        ListHeaderComponent={() => {
          return (
            <>
              <Image
                style={{
                  height: 200,
                  width: 400,
                  borderRadius: 15,
                  marginVertical: 10,
                }}
                source={{
                  uri:
                    'https://cdn.grabon.in/gograbon/images/web-images/uploads/1591771548178/food-coupons.jpg',
                }}
              />
              <ImageGallery />

              <Text
                style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>
                1667 restaurant around you
              </Text>
            </>
          );
        }}
      />
    </View>
  );
};

export default App;
