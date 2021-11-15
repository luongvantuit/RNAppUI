import React, { useState } from 'react';
import { TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, StyleSheet, View, Text, Pressable, SafeAreaView, Image, TextInput } from 'react-native';
import styleComponent from '../styles/style-component';
import IcoArrowLeft from '../svg/IcoArrowLeft';
import IcoSelect from '../svg/IcoSelect';

export default function SignUp({ navigation }: any) {

  const [inputNumberPhone, setInputNumberPhone] = useState<string>('')

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView behavior='padding' style={
        [
          {
            backgroundColor: 'white',
          },
          styleComponent.box.container
        ]
      }>
        <SafeAreaView >
          <View style={[
            styleComponent.position.positionRelative,
            {
              height: 44,
            }
          ]}>
            <Text style={[
              styleComponent.position.positionAbsolute,
              style.title
            ]}>Let's get started</Text>
            <Pressable style={[
              {
                height: 28,
                width: 28,
                marginLeft: 20
              }
            ]} onPress={() => {
              navigation.goBack();
            }}>
              <IcoArrowLeft height={28} width={28} />
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
              styleComponent.flex.row,
              {
                marginHorizontal: 58,
              },
              styleComponent.box.alignItemsCenter
            ]}>
              <Text style={[
                style.colorViolet,
                style.text,
                {
                  fontSize: 24,
                  fontWeight: '600',
                  width: 44,
                  height: 30,
                  lineHeight: 30,
                }
              ]}>+84</Text>
              <Pressable style={
                {
                  marginLeft: 6,
                  width: 16,
                  height: 16,
                }
              }>
                <IcoSelect width={16} height={16} />
              </Pressable>
              <TextInput placeholder='you phone number' placeholderTextColor={'#D8DAE5'} style={{
                fontWeight: inputNumberPhone.length > 0 ? '600' : '400',
                fontSize: inputNumberPhone.length > 0 ? 24 : 20,
                letterSpacing: 1.5,
                color: '#31385C',
                paddingHorizontal: 20,
                flexGrow: 0,
                
              }} onChangeText={(text: string) => {
                setInputNumberPhone(text)
              }} keyboardType='phone-pad' />
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
    color: '#101840',
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  text: {
    fontFamily: 'Nunito',
  },
  colorViolet: {
    color: '#833DB4'
  }
})