import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../scenes/login';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;