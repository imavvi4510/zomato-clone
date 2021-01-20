import React from 'react';

//import all the components we are going to use
import {SafeAreaView, StyleSheet, View, TextInput, Image} from 'react-native';

const Textin = () => {
  return (
    <SafeAreaView style={{}}>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Image
            source={{
              uri:
                'https://png.pngtree.com/png-vector/20190618/ourmid/pngtree-location-glyph-black-icon-png-image_1503424.jpg',
            }}
            style={styles.imageStyle}
          />
          {/* <TextInput
            style={{flex: 1, borderRadius: 100}}
            placeholder="Enter Your Loction Here"
            // underlineColorAndroid="transparent"
          /> */}
          <TextInput
            style={{
              height: 40,
              width: 350,
              borderColor: 'gray',
              borderWidth: 0,
              borderRadius: 0,
            }}
            // onChangeText={(text) => onChangeText(text)}
            placeholder="for restaurants and hit enter..."
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#cccacf',
    height: 40,
    borderRadius: 200,
    margin: 10,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    borderRadius: 100,
  },
});

export default Textin;
