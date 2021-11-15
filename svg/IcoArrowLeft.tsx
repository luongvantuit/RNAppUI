import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function IcoArrowLeft({ color = 'black', width = 32, height = 32 }: SvgProps) {
    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M3.29289 16.7071C2.90237 16.3165 2.90237 15.6834 3.29289 15.2928L9.65685 8.92888C10.0474 8.53835 10.6805 8.53835 11.0711 8.92888C11.4616 9.3194 11.4616 9.95257 11.0711 10.3431L6.41421 14.9999L28 14.9999C28.5523 14.9999 29 15.4477 29 15.9999C29 16.5522 28.5523 16.9999 28 16.9999L6.41421 16.9999L11.0711 21.6568C11.4616 22.0473 11.4616 22.6805 11.0711 23.071C10.6805 23.4615 10.0474 23.4615 9.65686 23.071L3.29289 16.7071Z" fill={color} />
        </Svg>
    )
}
