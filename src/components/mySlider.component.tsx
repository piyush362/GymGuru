import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const imagesData = [
  require('../assets/slide1.jpg'),
  require('../assets/slide2.jpg'),
  require('../assets/slide3.jpg'),
  require('../assets/slide4.jpeg'),
  require('../assets/slide5.jpg'),
]

const gymQuotes = [
  "No pain, no gain.",
  "Sweat now, shine later.",
  "Stronger every day.",
  "Mind over matter.",
  "Earned, not given."
];


const width = Dimensions.get('window').width;

function MySlider() {
  return (
    <Animated.View entering={FadeInDown.delay(500).springify()} style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={imagesData}
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
                source={item}
                style={styles.itemImage}
              />
              <LinearGradient
                colors={['transparent', '#f76b5e']}
                style={styles.itemHeadingContainer}
              >
                <Animated.Text style={styles.heading}>
                  {`${gymQuotes[index]}`}
                </Animated.Text>
              </LinearGradient>
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
  },
  itemHeadingContainer: {
    width: '100%',
    height: 150,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 0,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingBottom: 10,
    color: '#fff'
  },
})

export default MySlider;