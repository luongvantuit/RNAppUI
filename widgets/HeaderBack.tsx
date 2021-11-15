import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import styleComponent from '../styles/style-component';
import IcoArrowLeft from '../svg/IcoArrowLeft';

export default function HeaderBack(props: { navigation: NativeStackNavigationProp<any>, title?: string }) {
    return (
        <View style={[
            styleComponent.position.positionRelative,
            {
                height: 44,
                marginTop: 44,
            }
        ]}>
            <Text style={[
                styleComponent.position.positionAbsolute,
                style.title
            ]}>{props.title}</Text>
            <Pressable style={[
                {
                    height: 28,
                    width: 28,
                    marginLeft: 20
                }
            ]} onPress={() => {
                props.navigation.goBack();
            }}>
                <IcoArrowLeft height={28} width={28} />
            </Pressable>
        </View>
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