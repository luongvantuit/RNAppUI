import React from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';
import styleComponent from '../styles/style-component';

export default function SignUp({ navigation }: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={
      [
        {
          backgroundColor: 'white',
        },
        styleComponent.box.container
      ]
    }>
      <KeyboardAvoidingView behavior='position'>
        <SafeAreaView>
          <View style={[
            styleComponent.position.positionRelative,
            {
              height: 44,
            }
          ]}>
            <Text style={[
              styleComponent.position.positionAbsolute,
              {
                top: 0,
                left: 0,
                right: 0,
                textAlign: 'center'
              },
              style.title
            ]}>Let's get started</Text>
            {
              // Back
            }
            <Pressable style={[
              {
                height: 28,
                width: 28,
                marginLeft: 20
              }
            ]} onPress={() => {
              navigation.goBack();
            }}>
              <Text style={[
                {
                  fontFamily: 'Nunito',
                  fontWeight: '600',
                  fontSize: 20,
                  color: '#101840'
                }
              ]}>&#8592;</Text>
            </Pressable>
          </View>
          <View>
            <Text style={[
              {
                textAlign: 'center',
                fontFamily: 'Nunito',
                fontSize: 16,
                fontWeight: '400',
                color: '#31385C',
                marginVertical: 20,
              }
            ]}>Verify your phone number to start</Text>

            <View style={[
              styleComponent.flex.row
            ]}>

            </View>

          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


const style = StyleSheet.create({
  title: {
    fontFamily: 'Nunito',
    fontWeight: '600',
    fontSize: 20,
    color: '#101840'
  }
})