import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, View } from 'react-native'
import styleComponent from '../styles/style-component'
import IcoEyeOpen from '../svg/IcoEyeOpen'
import IcoLock from '../svg/IcoLock'
import ButtonForm from '../widgets/ButtonForm'
import Container from '../widgets/Container'
import HeaderBase from '../widgets/HeaderBase'
import TextInputForm from '../widgets/TextInputForm'

export default function CreatePassword() {

    const [inputPassword, setInputPassword] = useState<string>('')
    const [inputRetypePassword, setInputRetypePassword] = useState<string>('')

    const [inputPasswordFocus, setInputPasswordFocus] = useState<boolean>(false)
    const [inputRetypePasswordFocus, setInputRetypePasswordFocus] = useState<boolean>(false)

    return (
        <Container>
            <HeaderBase title='Create password' />
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
            >
                Verify your phone number to start
            </Text>
            <TextInputForm
                onBlur={() => {
                    setInputPasswordFocus(false)
                }}
                onFocus={() => {
                    setInputPasswordFocus(true)
                }}
                placeholder='Enter your password'
                onChangeText={(password: string) => {
                    setInputPassword(password)
                }}
                prefix={
                    <IcoLock color={'#833DB4'} />
                }
                containerProps={
                    {
                        style: [
                            styleComponent.flex.row,
                            style.inputContainer,
                            styleComponent.box.alignItemsCenter
                        ]
                    }
                }
                suffix={
                    <IcoEyeOpen color={'#747993'} />
                }
                style={[
                    styleComponent.box.container,
                    styleComponent.text.primary,
                    style.input
                ]}
                secureTextEntry={true}
                textContentType='password'
                keyboardType='visible-password'
            />
            <TextInputForm
                onBlur={() => {
                    setInputRetypePasswordFocus(false)
                }}
                onFocus={() => {
                    setInputRetypePasswordFocus(true)
                }}
                placeholder='Retype your password'
                onChangeText={(password: string) => {
                    setInputRetypePassword(password)
                }}
                prefix={
                    <IcoLock color={'#833DB4'} />
                }
                containerProps={
                    {
                        style: [
                            styleComponent.flex.row,
                            style.inputContainer,
                            styleComponent.box.alignItemsCenter
                        ]
                    }
                }
                suffix={
                    <IcoEyeOpen color={'#747993'} />
                }
                style={[
                    styleComponent.box.container,
                    styleComponent.text.primary,
                    style.input
                ]}
                secureTextEntry={true}
                textContentType='password'
                keyboardType='visible-password'
            />
            <View
                style={[
                    styleComponent.box.container,
                    styleComponent.flex.flex,
                    styleComponent.box.justifyContentFlexEnd
                ]}
            >
                <ButtonForm
                    content='DONE'
                    style={[
                        {
                            marginHorizontal: 20,
                            backgroundColor: inputPassword.length > 0 && inputRetypePassword.length > 0 ? '#833DB4' : '#E5E6EE',
                            height: 40,
                            borderRadius: 40,
                            marginBottom: inputPasswordFocus || inputRetypePasswordFocus ? 15.5 : 97.5,
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
                                color: inputPassword.length > 0 && inputRetypePassword.length > 0 ? 'white' : '#9599AE',
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
    )
}


const style = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 28,
        paddingVertical: 21,
    },
    input: {
        fontSize: 16,
        fontWeight: '400',
        textAlignVertical: 'center',
        marginHorizontal: 20
    }

})