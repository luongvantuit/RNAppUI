import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function HeaderBase(props: { title?: string }) {
    return (
        <Text style={[
            style.title,
            {
                height: 44,
                marginTop: 44,
            }
        ]}>{props.title}</Text>
    )
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
})