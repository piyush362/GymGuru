import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { fetchDataByBodyParts } from '../services/api';
import LinearGradient from 'react-native-linear-gradient';
import { Images } from '../utils/images';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LoadingScreen } from '../components';

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
}


export const ExerciseScreen = () => {
  const [exerciseData, setExerciseData] = useState<null | Exercise[]>(null);

  const route = useRoute();
  const navigation = useNavigation();
  const { bodyPart, bodyPartImage, name } = route.params as { bodyPart: string, bodyPartImage: any, name: string };

  const fetchData = async () => {
    const res = await fetchDataByBodyParts(bodyPart)
    if (res) {
      setExerciseData(res);
    }
  }

  const handleNavigation = (item: Exercise) => {
    navigation.navigate({
      name: 'ExerciseDetailsScreen',
      params: {
        item: item
      }
    } as never)
  }

  useEffect(() => {
    if (bodyPart) {
      fetchData();
    }
  }, [bodyPart])


  return (
    <>
      <ScrollView style={styles.container}>
        {/* headerImage */}
        {bodyPartImage &&
          <View>
            <Image
              source={bodyPartImage}
              style={styles.mainImage} />
            <LinearGradient
              colors={['transparent', 'rgba(255, 215, 94, .5)']}
              style={styles.itemHeadingContainer}
            >
              <Text style={styles.itemHeading}>{name ?? ''}</Text>
            </LinearGradient>
          </View>
        }

        {/* Exercise Item card*/}

        {exerciseData ? <View style={styles.listContainer}>
          {exerciseData?.map((item: Exercise, index: any) => (
            <Animated.View
              entering={FadeInDown.delay(400 + (index * 200)).springify()}
              key={index}
              style={styles.itemContainer}
            >
              <TouchableOpacity onPress={() => handleNavigation(item)}>
                <Image
                  source={{ uri: item?.gifUrl }}
                  style={styles.itemCardImage} />
                <View>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View> : <LoadingScreen />}

      </ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={Images.back_btn} style={{ width: 50, height: 50 }} />
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  mainImage: {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  itemHeadingContainer: {
    width: '100%',
    height: 100,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 0,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  itemHeading: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 10
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
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  itemContainer: {
    width: '45%',
    marginVertical: 8,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 1,
    padding: 5,
    paddingVertical: 10
  },
  itemCardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20
  },
})