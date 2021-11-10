import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import Confirmation from '../screens/Confirmation';
import OnBroading from '../screens/OnBroading';
import Recovery from '../screens/Recovery';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function NavigatorApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBroading'>
        <Stack.Screen name={"SignUp"} component={SignUp} />
        <Stack.Screen name={"SignIn"} component={SignIn} />
        <Stack.Screen name={"Recovery"} component={Recovery} />
        <Stack.Screen name={"Confirmation"} component={Confirmation} />
        <Stack.Screen name={"OnBroading"} component={OnBroading} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
