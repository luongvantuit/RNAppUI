import React from "react";
import { TextInputProps, ViewProps } from "react-native";


export interface TextInputFormProps extends TextInputProps {
    suffix?: React.ReactNode
    prefix?: React.ReactNode
    containerProps?: ViewProps
}