import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import styleComponent from '../styles/style-component';


export default function OnBroading({ navigation }: any) {
  return (
    <View style={
      [
        styleComponent.box.container,
        styleComponent.display.flex,
        {
          justifyContent: 'flex-end'
        }
      ]
    }>
      <Pressable onPress={() => {
        navigation.navigate("SignUp")
      }} style={[
        {
          backgroundColor: "#833DB4",
          marginHorizontal: 20,
          marginTop: 16,
          borderRadius: 40,
          height: 40,
        },
        styleComponent.box.alignItemsCenter,
        styleComponent.box.justifyContentCenter,
      ]} >
        <Text style={[
          {
            fontSize: 16,
            fontFamily: 'Nunito',
            fontWeight: '600',
            textAlign: 'center',
            color: 'white'
          }
        ]}>Let's get started</Text>
      </Pressable>
      <View style={[
        styleComponent.flex.row,
        styleComponent.box.justifyContentCenter,
        styleComponent.box.alignItemsCenter,
        {
          marginBottom: 74,
          marginTop: 28,
        }
      ]}>
        <Text style={
          [
            {
              color: "rgba(0, 0, 0, 0.5)",
              marginHorizontal: 2,
              fontFamily: 'Nunito',
              fontSize: 14,
              fontWeight: '600'
            }
          ]
        }>Already have an account?</Text>
        <Pressable onPress={() => {
          navigation.navigate("SignIn")
        }} style={{
          marginRight: 2,
        }}>
          <Text style={[{
            fontFamily: 'Nunito',
            fontSize: 14,
            color: 'black',
            fontWeight: '600',
          }]}>Sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

