import React from 'react'
import { View, TextInput } from 'react-native'
import { TextInputFormProps } from '../types/TextInputFormProps'

export default function TextInputForm(props: TextInputFormProps) {
    return (
        <View {...props.containerProps}>
            {
                props.prefix
            }
            <TextInput {...props} />
            {
                props.suffix
            }
        </View>
    )
}
