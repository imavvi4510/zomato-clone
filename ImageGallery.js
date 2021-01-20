//Image Icon in React Native TextInput
//https://aboutreact.com/image-icon-with-react-native-textinput/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import ImageCard from './imageCardwithText';

const mapper = [0, 1, 2, 3, 4, 5, 6, 7];

const ImageGallery = ({children}) => {
  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        Eat what makes you happy
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}>
        {mapper.map(() => (
          <ImageCard />
        ))}
      </View>
    </View>
  );
};

export default ImageGallery;
