import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { Images } from '../utils/images'
import { useNavigation } from '@react-navigation/native'

const SettingScreen = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffd75e'} />
      <LinearGradient
        colors={['#ffd75e', 'transparent']}
      >
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image source={Images.back_btn} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>

          <Animated.Text entering={FadeInDown.delay(300).springify()} style={styles.title}>
            Guru's Setting
          </Animated.Text>
        </View>
      </LinearGradient>

      <Animated.View entering={FadeInDown.delay(400).springify()} style={{ padding: 40 }}>
        <Image
          source={Images.thanks}
          style={styles.thanksImage}
        />
      </Animated.View>
    </ScrollView>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0)',
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'right'
  },
  backButton: {
    width: 50,
    height: 50,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    left: 20,
  },
  thanksImage: {
    width: '100%',
    height: 500,
    objectFit: 'contain',
  }
})