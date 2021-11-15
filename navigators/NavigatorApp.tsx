import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';
import Confirmation from '../screens/Confirmation';
import CreatePassword from '../screens/CreatePassword';
import NewPassword from '../screens/NewPassword';
import OnBroading from '../screens/OnBroading';
import Recovery from '../screens/Recovery';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

export default function NavigatorApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='OnBroading'>
                <Stack.Screen name={"SignUp"} component={SignUp} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"SignIn"} component={SignIn} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"Recovery"} component={Recovery} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"Confirmation"} component={Confirmation} options={{
                    headerShown: false
                }} />
                <Stack.Screen name={"OnBroading"} component={OnBroading} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={"CreatePassword"} component={CreatePassword} options={{
                    headerShown: false,
                }} />
                <Stack.Screen name={"NewPassword"} component={NewPassword} options={{
                    headerShown: false,
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
