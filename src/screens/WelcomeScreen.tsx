import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../utils/images'
import { ButtonComponent } from '../components';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';


const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.welcome}
        style={styles.background}
      >
        <LinearGradient
          colors={['transparent', '#000']}
          style={styles.gradient}
        >
          <Animated.Text entering={FadeInDown.delay(300).springify()} style={styles.title}>
            Welcome to
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
            Gym <Text style={[styles.title, styles.title2]}>Guru</Text>
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(500).springify()} style={styles.title}>
            💪
          </Animated.Text>
          <Animated.View entering={FadeInDown.delay(600).springify()} style={styles.buttonContainer}>
            <ButtonComponent
              label='Get Started'
              onPress={() => navigation.navigate('HomeScreen' as never)}
            />
          </Animated.View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  gradient: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100
  },
  title: {
    fontSize: 55,
    color: 'white',
    fontWeight: 'bold'
  },
  title2: {
    color: 'yellow'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 40
  }
})