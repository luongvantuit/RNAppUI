import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function IcoEyeOpen({ color = "#31385C", height = 32, width = 32 }: {} & SvgProps) {
    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M26.9804 15.9782C23.481 20.2072 19.6627 22.1845 16.0134 22.1845C12.365 22.1845 8.61843 20.2079 5.26346 15.9781C8.61685 11.7798 12.3629 9.81579 16.0134 9.8158C19.6647 9.8158 23.4825 11.7804 26.9804 15.9782ZM16.0134 7.8158C11.3723 7.81579 6.91533 10.4387 3.20094 15.3748C2.93371 15.7299 2.93292 16.2188 3.19901 16.5748C6.91217 21.5423 11.3694 24.1845 16.0134 24.1845C20.6518 24.1845 25.1842 21.5482 29.0531 16.5913C29.3361 16.2287 29.3353 15.7199 29.0511 15.3582C25.1811 10.4329 20.6489 7.8158 16.0134 7.8158Z" fill={color} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.1025 13.416C14.5664 13.416 13.3817 14.6094 13.3817 16.0082C13.3817 17.4069 14.5664 18.6003 16.1025 18.6003C17.6386 18.6003 18.8233 17.4069 18.8233 16.0082C18.8233 14.6094 17.6386 13.416 16.1025 13.416ZM11.3817 16.0082C11.3817 13.4391 13.5287 11.416 16.1025 11.416C18.6763 11.416 20.8233 13.4391 20.8233 16.0082C20.8233 18.5772 18.6763 20.6003 16.1025 20.6003C13.5287 20.6003 11.3817 18.5772 11.3817 16.0082Z" fill={color} />
        </Svg>
    )
}