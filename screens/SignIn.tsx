import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, Pressable, Keyboard, StyleSheet } from 'react-native';
import styleComponent from '../styles/style-component';
import IcoFace from '../svg/IcoFace';
import IcoFinger from '../svg/IcoFinger';
import IcoLock from '../svg/IcoLock';
import IcoSelect from '../svg/IcoSelect';
import ButtonForm from '../widgets/ButtonForm';
import Container from '../widgets/Container';
import HeaderBase from '../widgets/HeaderBase';
import TextInputForm from '../widgets/TextInputForm';

export default function SignIn(props: { navigation: NativeStackNavigationProp<any> }) {
    const [inputNumberPhone, setInputNumberPhone] = useState<string>('')
    const [inputNumberPhoneFocus, setInputNumberPhoneFocus] = useState<boolean>(false)

    const [inputPassword, setInputPassword] = useState<string>('')
    const [inputPaswordFocus, setInputPasswordFocus] = useState<boolean>(false)

    return (
        <Container>
            <HeaderBase
                title={inputPassword.length > 0 && inputNumberPhone.length > 0 ? 'Welcome back' : 'Good morning !'}
            />
            <TextInputForm
                prefix={<View
                    style={[
                        styleComponent.flex.row,
                        styleComponent.box.alignItemsCenter,
                        styleComponent.box.justifyContentFlexEnd,
                        {
                            width: 88,
                            height: 30,
                        }
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
                        } onPress={() => {
                        }}>
                        <IcoSelect width={16} height={16} />
                    </Pressable>
                </View>}
                placeholder='you phone number'
                placeholderTextColor={'#D8DAE5'}
                style={[
                    {
                        fontWeight: inputNumberPhone.length > 0 ? '600' : '400',
                        fontSize: inputNumberPhone.length > 0 ? 24 : 20,
                        color: '#31385C',
                        paddingLeft: 16,
                        textAlignVertical: 'center',
                    },
                    styleComponent.box.container,
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
                containerProps={{
                    style: [
                        styleComponent.flex.row,
                        {
                            paddingHorizontal: 28,
                            paddingTop: 52,
                        },
                        styleComponent.box.alignItemsCenter
                    ]
                }}
            />
            <TextInputForm
                onBlur={() => {
                    setInputPasswordFocus(false)
                }}
                onFocus={() => {
                    setInputPasswordFocus(true)
                }}
                placeholder='you password'
                placeholderTextColor={'#D8DAE5'}
                onChangeText={(password: string) => {
                    setInputPassword(password)
                }}
                prefix={
                    <View style={[
                        styleComponent.flex.row,
                        styleComponent.box.alignItemsCenter,
                        styleComponent.box.justifyContentFlexEnd,
                        {
                            width: 88,
                            height: 30,
                        }
                    ]}>
                        <IcoLock color={'#833DB4'} />
                    </View>
                }
                containerProps={
                    {
                        style: [
                            styleComponent.flex.row,
                            styleComponent.box.alignItemsCenter,
                            {
                                paddingHorizontal: 28,
                                paddingTop: 44,
                            }
                        ]
                    }
                }
                style={[
                    styleComponent.box.container,
                    styleComponent.text.primary,
                    {
                        fontWeight: inputPassword.length > 0 ? '600' : '400',
                        fontSize: inputPassword.length > 0 ? 24 : 20,
                        color: '#31385C',
                        paddingLeft: 16,
                        textAlignVertical: 'center',
                    }
                ]}
                secureTextEntry={true}
                textContentType='password'
            />

            <View
                style={[
                    styleComponent.flex.row,
                    styleComponent.box.justifyContentCenter
                ]}
            >
                <Pressable
                    style={[
                        {
                            margin: 20,
                        }
                    ]}
                >
                    <IcoFinger width={40} height={40} />
                </Pressable>
                <Pressable
                    style={[
                        {
                            margin: 20,
                        }
                    ]}
                >
                    <IcoFace width={40} height={40} />
                </Pressable>
            </View>
            <View
                style={[
                    styleComponent.flex.row,
                    styleComponent.box.justifyContentCenter
                ]}
            >
                <Pressable
                    onPress={() => {
                        props.navigation.navigate("Recovery")
                    }}
                >
                    <Text
                        style={[
                            styleComponent.text.primary,
                            {
                                color: '#833DB4',
                                fontSize: 14,
                                fontWeight: '600'
                            }
                        ]}
                    >Forget password</Text>
                </Pressable>
            </View>


            {
                /// Footer
            }
            <View
                style={[
                    styleComponent.box.container,
                    styleComponent.display.flex,
                    styleComponent.box.justifyContentFlexEnd,

                ]}
            >
                <ButtonForm
                    content='SIGN IN'
                    style={[
                        {
                            marginHorizontal: 20,
                            backgroundColor: inputPassword.length > 0 && inputNumberPhone.length > 0 ? '#833DB4' : '#E5E6EE',
                            height: 40,
                            borderRadius: 40,
                            marginBottom: inputNumberPhoneFocus || inputNumberPhoneFocus ? 15.5 : 36,
                            marginTop: 36,
                        }
                    ]}
                    onPress={() => {
                        Keyboard.dismiss();
                        // if (inputCode.length >= 6)
                        //     props.navigation.navigate('CreatePassword');
                    }}
                    contentProps={{
                        style: [
                            {
                                lineHeight: 40,
                                color: inputPassword.length > 0 && inputNumberPhone.length > 0 ? 'white' : '#9599AE',
                                fontSize: 16,
                                fontWeight: '600'
                            },
                            styleComponent.text.textAlignCenter,
                            styleComponent.text.primary,
                        ]
                    }}
                />
                <View
                    style={[
                        styleComponent.flex.row,
                        styleComponent.box.justifyContentCenter,
                        styleComponent.box.alignItemsCenter,
                        {
                            marginBottom: 102,
                            marginTop: 28,
                            display: inputNumberPhoneFocus || inputPaswordFocus ? 'none' : 'flex'
                        }
                    ]}
                >
                    <Text
                        style={
                            [
                                {
                                    color: "rgba(0, 0, 0, 0.5)",
                                    marginHorizontal: 2,
                                    fontFamily: 'Nunito',
                                    fontSize: 14,
                                    fontWeight: '600'
                                }
                            ]
                        }
                    >Don't have an account?</Text>
                    <Pressable
                        onPress={() => {
                            props.navigation.navigate("SignUp")
                        }}
                        style={{
                            marginRight: 2,
                        }}
                    >
                        <Text
                            style={[{
                                fontFamily: 'Nunito',
                                fontSize: 14,
                                color: 'black',
                                fontWeight: '600',
                            }]}
                        >Sign up</Text>
                    </Pressable>
                </View>
            </View>
        </Container>
    );
}
