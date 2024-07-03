import { Dimensions, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Images } from '../utils/images';
import MySlider from '../components/mySlider.component';
import { bodyParts } from '../constants/bodypart';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

interface handleExerciseNavigationProps {
  id: number;
  name: string;
  bodyPart: string;
  image: any;
}

const width = Dimensions.get('window').width;

export const HomeScreen = () => {

  const navigation = useNavigation();

  const handleExerciseNavigation = (item: handleExerciseNavigationProps) => {
    console.log(item.bodyPart)
    navigation.navigate({
      name: 'ExerciseScreen',
      params: {
        name: item.name,
        bodyPart: item.bodyPart,
        bodyPartImage: item.image
      },
    } as never);
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#ffd75e'} />
      {/* HEADER */}
      <LinearGradient
        colors={['#ffd75e', 'transparent']}
      >
        <View style={styles.headerContainer}>
          <View>
            <Animated.Text entering={FadeInDown.delay(300).springify()} style={styles.title}>
              Welcome to
            </Animated.Text>
            <Animated.Text entering={FadeInDown.delay(400).springify()} style={styles.title}>
              Gym <Text style={[styles.title, styles.title2]}>Guru 🙏</Text>
            </Animated.Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('SettingScreen' as never)}
            style={{ padding: 10 }}>
            <Animated.Image entering={FadeInDown.delay(400).springify()} source={Images.gear} style={styles.gearIcon} />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* CREOSOL  */}
      <View>
        <View style={{ height: width / 1.5, }}>
          <MySlider />
        </View>

        <View style={styles.headingContainer}>
          <Animated.Text entering={FadeInDown.delay(500).springify()} style={[styles.title, styles.title2, { fontSize: 30 }]}>Exercise</Animated.Text>
        </View>

        {/* Body Part List  */}
        <View style={styles.listContainer}>
          {bodyParts.map((item, index) => (
            <Animated.View
              entering={FadeInDown.delay(400 + (index * 200)).springify()}
              key={index}
              style={styles.itemContainer}
            >
              <TouchableOpacity onPress={() => handleExerciseNavigation(item)}>
                <Image
                  source={item.image}
                  style={styles.itemCardImage} />
                <LinearGradient
                  colors={['transparent', 'rgba(255, 215, 94, .5)']}
                  style={styles.itemHeadingContainer}
                >
                  <Text style={styles.itemHeading}>{item.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </Animated.View>
          ))}
        </View>
      </View>

      <LinearGradient
        colors={['transparent', '#ffd75e']}
        style={styles.footerContainer}
      >
        <Text style={styles.footerTitle1}>STAY
          <Text style={styles.footerTitle2}>STRONG</Text>
        </Text>
        <Text>© Gym Guru 2024</Text>
        <Text>All Right Reserved</Text>

      </LinearGradient>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  itemContainer: {
    width: '45%',
    marginVertical: 8,
    borderRadius: 20
  },
  itemCardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 20
  },
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(52, 52, 52, 0)'
  },
  title: {
    fontSize: 40,
    color: '#000',
    fontWeight: 'bold'
  },
  title2: {
    color: '#fc5242',
  },
  gearIcon: {
    width: 30,
    height: 30,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  },
  itemHeadingContainer: {
    width: '100%',
    height: 70,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'flex-end',
    bottom: 0,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  itemHeading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10
  },
  footerContainer: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerTitle1: {
    fontSize: 30,
    fontWeight: '700'
  },
  footerTitle2: {
    fontSize: 30,
    fontWeight: '700',
    color: '#fc5242'
  },
})