import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../features/splash/Splash';
import routes from '../routes/routes';
import Home from '../features/home/Home';

export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Splash">
        <Stack.Screen name="Home" component={Home} options={{title: ''}} />
        <Stack.Screen
          name={routes.Splash}
          component={Splash}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
