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
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const CARD_DIMENSION = Dimensions.get('window').width / 5;

const ImageCard = () => {
  return (
    <View
      style={{
        alignSelf: 'flex-start',
        margin: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 15,
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 0.1,
      }}>
      <Image
        source={{
          uri:
            'https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg',
        }}
        style={{
          height: CARD_DIMENSION,
          width: CARD_DIMENSION,
          borderRadius: 15,
        }}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.6)']}
        style={{
          position: 'absolute',
          height: 30,
          bottom: 0,
          left: 0,
          right: 0,
          borderBottomRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <Text style={{textAlign: 'center', color: 'white'}}>Foods</Text>
      </LinearGradient>
    </View>
  );
};

export default ImageCard;
