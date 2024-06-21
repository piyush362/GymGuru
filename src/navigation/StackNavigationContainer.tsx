import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();



export default function RootStackContainer() {
  return (
    <Stack.Navigator initialRouteName='WelcomeScreen'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}