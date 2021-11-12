import React from 'react';
import { Text, View } from 'react-native';
import styleComponent from '../styles/style-component';


export default function OnBroading() {
  return (
    <View style={
      [
        styleComponent.box.container,
        styleComponent.display.flex
      ]
    }>
      <Text>Hello</Text>
    </View>
  );
}

