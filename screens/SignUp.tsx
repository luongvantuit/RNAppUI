import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Keyboard, StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import styleComponent from '../styles/style-component';
import IcoSelect from '../svg/IcoSelect';
import ButtonForm from '../widgets/ButtonForm';
import Container from '../widgets/Container';
import HeaderBack from '../widgets/HeaderBack';
import TextInputForm from '../widgets/TextInputForm';

export default function SignUp(props: { navigation: NativeStackNavigationProp<any> }) {

    const [inputNumberPhone, setInputNumberPhone] = useState<string>('')
    const [inputNumberPhoneFocus, setInputNumberPhoneFocus] = useState<boolean>(false)

    return (
        <Container>
            <HeaderBack
                title="Let's get started"
                navigation={props.navigation} />
            <Text
                style={[
                    {
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#31385C',
                        marginVertical: 20,
                    },
                    styleComponent.text.primary,
                    styleComponent.text.textAlignCenter
                ]}
            >Verify your phone number to start</Text>
            <TextInputForm
                prefix={
                    <View
                        style={[
                            styleComponent.flex.row,
                            styleComponent.box.alignItemsCenter,
                        ]}
                    >
                        <Text
                            style={[
                                styleComponent.text.primary,
                                {
                                    fontSize: 24,
                                    fontWeight: '600',
                                    width: 44,
                                    height: 30,
                                    lineHeight: 30,
                                    color: '#833DB4'
                                }
                            ]}
                        >+84</Text>
                        <Pressable
                            style={
                                {
                                    marginLeft: 6,
                                    width: 16,
                                    height: 16,
                                }
                            }
                            onPress={() => {
                            }}
                        >
                            <IcoSelect width={16} height={16} />
                        </Pressable>
                    </View>
                }
                containerProps={{
                    style: [
                        styleComponent.flex.row,
                        {
                            paddingHorizontal: 58,
                        },
                        styleComponent.box.alignItemsCenter
                    ]
                }}
                placeholder='you phone number'
                placeholderTextColor={'#D8DAE5'}
                style={[
                    {
                        fontWeight: inputNumberPhone.length > 0 ? '600' : '400',
                        fontSize: inputNumberPhone.length > 0 ? 24 : 20,
                        color: '#31385C',
                        paddingLeft: 20,
                    },
                    styleComponent.box.container
                ]}
                onChangeText={(text: string) => {
                    setInputNumberPhone(text)
                }}
                keyboardType='phone-pad'
                textContentType='telephoneNumber'
                onSubmitEditing={Keyboard.dismiss}
                onBlur={() => {
                    setInputNumberPhoneFocus(false)
                }}
                onFocus={() => {
                    setInputNumberPhoneFocus(true)
                }}

            />

            <View
                style={[
                    styleComponent.box.justifyContentFlexEnd,
                    styleComponent.box.container,
                    styleComponent.display.flex
                ]}
            >
                <View
                    style={{
                        display: inputNumberPhoneFocus ? 'none' : 'flex'
                    }}>
                    <Text
                        style={[{
                            marginTop: 20,
                        },
                        styleComponent.text.primary,
                        style.textDiscription]}
                    >By clicking Sign up, you agree to our</Text>
                    <View
                        style={[
                            styleComponent.flex.row,
                            styleComponent.box.justifyContentCenter,
                            {
                                marginBottom: 36,
                            }
                        ]}
                    >
                        <Text
                            style={[
                                style.textDiscription,
                                styleComponent.text.primary,
                                {
                                    color: '#833DB4'
                                }
                            ]}
                        >Terms of Use</Text>
                        <Text
                            style={[
                                style.textDiscription,
                                styleComponent.text.primary,
                                {
                                    marginHorizontal: 2,
                                }
                            ]}
                        >and</Text>
                        <Text
                            style={[
                                style.textDiscription,
                                styleComponent.text.primary,
                                {
                                    color: '#833DB4'
                                }
                            ]}
                        >Privacy Policy</Text>
                    </View>
                </View>
                <ButtonForm
                    content='SIGN UP'
                    style={
                        [
                            {
                                height: 40,
                                marginHorizontal: 20,
                                borderRadius: 40,
                                marginBottom: inputNumberPhoneFocus ? 15.5 : 97.5,
                                backgroundColor: inputNumberPhone.length > 0 ? '#833DB4' : '#E5E6EE'
                            },
                        ]}
                    onPress={() => {
                        Keyboard.dismiss();
                        if (inputNumberPhone.length > 0)
                            props.navigation.navigate('Confirmation', {
                                numberPhone: inputNumberPhone
                            })
                    }}
                    contentProps={{
                        style: [
                            {
                                lineHeight: 40,
                                textAlign: 'center',
                                fontSize: 16,
                                fontWeight: '600',
                                color: inputNumberPhone.length > 0 ? 'white' : '#9599AE'
                            },
                            styleComponent.text.primary
                        ]
                    }}
                />
            </View>
        </Container>
    );
}


const style = StyleSheet.create({
    textDiscription: {
        color: '#31385C',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    }
})
