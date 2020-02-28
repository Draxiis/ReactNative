import * as React from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScene from './scenes/homeScene'
import LoginScene from './scenes/login'
import RegisterScene from './scenes/registerScene'
import ProfilScene from './scenes/profilScene'
import GalleryScene from './scenes/galleryScene';

function HomeTMPScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Go to Gallery"
        onPress={() => navigation.navigate('Gallery')}
      />
      <Button
        title="Go to Profil"
        onPress={() => navigation.navigate('Profil')}
      />
      <Button
        title="Go to RealHome"
        onPress={() => navigation.navigate('realHome')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TMPHome">
        <Stack.Screen name="TMPHome" component={HomeTMPScreen} />
        <Stack.Screen name="realHome" component={HomeScene} />
        <Stack.Screen name="Login" component={LoginScene} />
        <Stack.Screen name="Register" component={RegisterScene} />
        <Stack.Screen name="Gallery" component={GalleryScene} />
        <Stack.Screen name="Profil" component={ProfilScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },


  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});

export default App;