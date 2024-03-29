import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import {
    View,
    Text,
    TextInput,
    Pressable,
    StyleSheet,
} from 'react-native';
import styleComponent from '../styles/style-component';
import ButtonForm from '../widgets/ButtonForm';
import Container from '../widgets/Container';
import HeaderBack from '../widgets/HeaderBack';

export default function Confirmation(props: {
    route: RouteProp<any>;
    navigation: NativeStackNavigationProp<any>;
}) {

    const [inputCode, setInputCode] = useState<string>('');
    const [inputCodeFocus, setInputCodeFocus] = useState<boolean>(false);

    return (
        <Container>
            <HeaderBack
                navigation={props.navigation}
                title="Confirmation"
            />
            <Text
                style={[
                    {
                        textAlign: 'center',
                        fontFamily: 'Nunito',
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#31385C',
                        marginVertical: 20,
                    },
                ]}>
                Enter a verification code we've sent to
            </Text>
            <Text
                style={[
                    styleComponent.text.primary,
                    styleComponent.text.textAlignCenter,
                    {
                        marginTop: 8,
                        color: '#833DB4',
                        fontWeight: '600',
                        fontSize: 20,
                    },
                ]}>
                {`+84 ${props.route.params?.numberPhone}`}
            </Text>
            <TextInput
                placeholder={"000000"}
                placeholderTextColor={'#D8DAE5'}
                maxLength={6}
                keyboardType='number-pad'
                onChangeText={(code: string) => {
                    setInputCode(code)
                }}
                onBlur={() => {
                    setInputCodeFocus(false)
                }}
                onFocus={() => {
                    setInputCodeFocus(true)
                }}
                style={[
                    {
                        letterSpacing: 3.2,
                        marginHorizontal: 20,
                        marginTop: 28.5,
                        height: 50,
                        fontSize: 40,
                        fontWeight: '600',
                        color: '#31385C',
                        display: 'flex',
                    },
                    styleComponent.text.primary,
                    styleComponent.text.textAlignCenter
                ]}
            />
            <View
                style={[
                    styleComponent.box.justifyContentFlexEnd,
                    styleComponent.box.container,
                    styleComponent.display.flex
                ]}
            >
                <View
                    style={[
                        {
                            marginTop: 20,
                        },
                        styleComponent.flex.row,
                        styleComponent.box.justifyContentCenter,
                    ]}
                >
                    <Text
                        style={[
                            style.text,
                            styleComponent.text.primary,
                            {
                                marginRight: 4
                            }
                        ]}
                    >
                        Did't get a code?
                    </Text>
                    <Pressable
                        onPress={() => {

                        }}
                    >
                        <Text
                            style={[
                                style.text,
                                {
                                    color: '#833DB4'
                                },
                                styleComponent.text.primary
                            ]}
                        >
                            Resend code
                        </Text>
                    </Pressable>
                </View>
                <ButtonForm
                    style={[
                        {
                            marginHorizontal: 20,
                            backgroundColor: inputCode.length >= 6 ? '#833DB4' : '#E5E6EE',
                            height: 40,
                            borderRadius: 40,
                            marginBottom: inputCodeFocus ? 15.5 : 97.5,
                            marginTop: 36,
                        }
                    ]}
                    onPress={() => {
                        Keyboard.dismiss();
                        if (inputCode.length >= 6)
                            props.navigation.navigate('CreatePassword');
                    }}
                    content='VERIFY'
                    contentProps={{
                        style: [
                            {
                                lineHeight: 40,
                                color: inputCode.length >= 6 ? 'white' : '#9599AE',
                                fontSize: 16,
                                fontWeight: '600'
                            },
                            styleComponent.text.textAlignCenter,
                            styleComponent.text.primary,
                        ]
                    }}
                />
            </View>
        </Container>
    );
}


const style = StyleSheet.create({
    text: {
        color: '#31385C',
        fontWeight: '600',
        fontSize: 14,
        textAlign: 'center',
    }
})