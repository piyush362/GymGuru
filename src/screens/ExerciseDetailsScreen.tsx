import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Exercise } from './ExerciseScreen';
import { Images } from '../utils/images';
import Animated, { FadeInDown } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

const initialAnimationDelay = 100

const ExerciseDetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params as { item: Exercise }

  console.log(JSON.stringify(item, null, 2))
  return (
    <>
      <ScrollView style={styles.container}>
        <Animated.View
          entering={FadeInDown.delay(initialAnimationDelay * 1).springify()}
          style={styles.imageContainer}>
          <Image
            source={{
              uri: item?.gifUrl
            }}
            style={styles.mainImage} />
          <LinearGradient
            colors={['transparent', 'rgba(255, 215, 94, .5)']}
            style={styles.itemHeadingContainer}
          >
            <Animated.Text style={styles.heading}>
              {`${item?.name}`}
            </Animated.Text>
          </LinearGradient>
        </Animated.View>
        <View>

          <Animated.Text
            entering={FadeInDown.delay(initialAnimationDelay * 2).springify()}
            style={{ paddingVertical: 5 }}>
            <Text style={styles.itemTitle}>Equipment:</Text>
            <Text style={styles.itemDetails}>{` ${item?.equipment}`}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(initialAnimationDelay * 3).springify()}
            style={{ paddingVertical: 5 }}>
            <Text style={styles.itemTitle}>SecondaryMuscles:</Text>
            <Text style={styles.itemDetails}>{` ${item?.secondaryMuscles}`}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(initialAnimationDelay * 4).springify()}
            style={{ paddingVertical: 5 }}>
            <Text style={styles.itemTitle}>Target:</Text>
            <Text style={styles.itemDetails}>{` ${item?.target}`}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.delay(initialAnimationDelay * 5).springify()}
            style={{ paddingVertical: 5 }}>
            <Text style={styles.itemTitle}>Instructions:</Text>
          </Animated.Text>

          {item?.instructions.map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.delay(initialAnimationDelay * 5 + (index * 100)).springify()}
                key={index}
                style={[styles.itemDetails, { paddingBottom: 5 }]}
              >{`🟡 ${instruction}`}</Animated.Text>
            )
          })}

        </View>
        <View style={{ height: 50 }} />
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={Images.back_btn} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </>
  )
}

export default ExerciseDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 1,
    borderTopLeftRadius: 1,
    borderColor: '#000',
    borderWidth: 1,
    paddingBottom: 40,
    marginBottom: 15,
    zIndex: 10
  },
  mainImage: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  backButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    zIndex: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
    top: 20,
    left: 20
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    textTransform: 'capitalize',
    paddingBottom: 5
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
  itemTitle: {
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 10
  },
  itemDetails: {
    fontSize: 16,
    paddingVertical: 10
  }
})