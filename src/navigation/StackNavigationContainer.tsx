import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { ExerciseScreen, HomeScreen } from '../screens';
import WelcomeScreen from '../screens/WelcomeScreen';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import { Easing } from 'react-native';

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
    duration: 200,
    easing: Easing.linear
  },
};

export default function RootStackContainer() {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'vertical',
        transitionSpec: {
          open: config,
          close: CloseConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}