import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styleComponent from '../styles/style-component';
import ButtonForm from '../widgets/ButtonForm';


export default function OnBroading(props: { navigation: NativeStackNavigationProp<any> }) {
    return (
        <View
            style={[
                styleComponent.box.container,
                styleComponent.display.flex,
                styleComponent.box.justifyContentFlexEnd,
                {
                    backgroundColor: 'white',
                }
            ]}
        >
            <ButtonForm
                content="Let's get started"
                onPress={() => {
                    props.navigation.navigate("SignUp")
                }}
                style={[
                    {
                        backgroundColor: "#833DB4",
                        marginHorizontal: 20,
                        marginTop: 16,
                        borderRadius: 40,
                        height: 40,
                    },
                ]}
                contentProps={{
                    style: [
                        {
                            fontSize: 16,
                            fontFamily: 'Nunito',
                            fontWeight: '600',
                            textAlign: 'center',
                            color: 'white',
                            lineHeight: 40,
                        }
                    ]
                }}
            />
            <View
                style={[
                    styleComponent.flex.row,
                    styleComponent.box.justifyContentCenter,
                    styleComponent.box.alignItemsCenter,
                    {
                        marginBottom: 74,
                        marginTop: 28,
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
                >Already have an account?</Text>
                <Pressable
                    onPress={() => {
                        props.navigation.navigate("SignIn")
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
                    >Sign in</Text>
                </Pressable>
            </View>
        </View>
    );
}

