import React from 'react'
import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native'
import styleComponent from '../styles/style-component'

export default function Container(
    props: {
        children?: React.ReactNode
    }
) {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                behavior="padding"
                style={[
                    {
                        backgroundColor: 'white',
                    },
                    styleComponent.box.container,
                ]}>
                {
                    props.children
                }
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}
