import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Images } from '../utils/images';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.headerContainer}>
        <View>
          <Animated.Text entering={FadeInDown.delay(300).springify()} style={styles.title}>
            Welcome to
          </Animated.Text>
          <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
            Gym <Text style={[styles.title, styles.title2]}>Guru</Text>
          </Animated.Text>
        </View>
        <Pressable style={{ padding: 10 }}>
          <Animated.Image entering={FadeInDown.delay(400).springify()} source={Images.gear} style={styles.gearIcon} />
        </Pressable>
      </View>

      {/* CREOSOL  */}
      <View></View>

      {/* Body Part List  */}
      <ScrollView></ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  headerContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold'
  },
  title2: {
    color: '#c2820c',
  },
  gearIcon: {
    width: 30,
    height: 30,
  }
})