import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function IcoSelect({ color = "#747993", backgroundColor = "#E5E6EE", width = 16, height = 16 }: { backgroundColor?: string } & SvgProps) {
    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" >
            <Path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill={backgroundColor} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.3536 6.14645C11.5488 6.34171 11.5488 6.6583 11.3536 6.85356L8.35353 9.85354C8.15827 10.0488 7.84169 10.0488 7.64643 9.85353L4.64645 6.85355C4.45118 6.65829 4.45118 6.34171 4.64645 6.14645C4.84171 5.95118 5.15829 5.95118 5.35355 6.14645L7.99998 8.79288L10.6464 6.14644C10.8417 5.95118 11.1583 5.95119 11.3536 6.14645Z" fill={color} />
        </Svg>
    )
}
