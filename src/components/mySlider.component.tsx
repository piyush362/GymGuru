import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { FadeInDown } from 'react-native-reanimated';

const imagesData = [
  require('../assets/slide1.jpg'),
  require('../assets/slide2.jpg')
]

const width = Dimensions.get('window').width;

function MySlider() {
  return (
    <Animated.View entering={FadeInDown.delay(500).springify()} style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={1000}
        mode='parallax'
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

              }}
            >
              <Image
                source={imagesData[index]}
                style={styles.itemImage}
              />
              <Text style={styles.itemText}>NO GAIN, NO PAIN</Text>
            </View>
          )
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  itemImage: {
    width: width,
    height: width / 1.5,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 2,
  },
  itemText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 30,
    bottom: 25,
    fontWeight: '800'
  }
})

export default MySlider;