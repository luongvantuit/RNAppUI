import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styleComponent from '../styles/style-component';


export default function OnBroading() {
  return (
    <View style={
      [
        styleComponent.box.container,
        styleComponent.box.alignSelfCenter,
        styleComponent.display.flex
      ]}
    >
      
    </View>
  );
}

