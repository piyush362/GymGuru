import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { ExerciseScreen, HomeScreen } from '../screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { Easing } from 'react-native';
import ExerciseDetailsScreen from '../screens/ExerciseDetailsScreen';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const CloseConfig: TransitionSpec = {
  animation: 'timing',
  config: {
    duration: 300,
    easing: Easing.linear
  },
};

export default function RootStackContainer() {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'
      screenOptions={{
        headerShown: false,
        transitionSpec: {
          open: config,
          close: CloseConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
        }} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
      <Stack.Screen name="ExerciseDetailsScreen" component={ExerciseDetailsScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}