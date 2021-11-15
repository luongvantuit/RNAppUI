import React from 'react'
import { Text, Pressable } from 'react-native'
import { ButtonFormProps } from '../types/ButtonFormProps'


export default function ButtonForm(props: { content: string } & ButtonFormProps) {
    return (
        <Pressable {...props}>
            <Text
                {
                ...props.contentProps
                }
            >{props.content}</Text>
        </Pressable>
    )
}
