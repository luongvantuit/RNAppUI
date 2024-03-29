import React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

export default function IcoLock(
    { color = '#31385C', width = 32, height = 32 }: {} & SvgProps
) {
    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M5.49585 13.1543C5.49585 12.0497 6.39128 11.1543 7.49585 11.1543H23.4958C24.6004 11.1543 25.4958 12.0497 25.4958 13.1543V27.5179C25.4958 28.6225 24.6004 29.5179 23.4958 29.5179H7.49585C6.39128 29.5179 5.49585 28.6225 5.49585 27.5179V13.1543ZM23.4958 13.1543L7.49585 13.1543V27.5179H23.4958V13.1543Z" fill={color} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M10.8576 6.21122C11.9634 4.62722 13.5877 3.51794 15.4959 3.51794C17.4042 3.51794 19.0285 4.62722 20.1343 6.21122C21.2424 7.79857 21.8959 9.93794 21.8959 12.2535H19.8959C19.8959 10.2968 19.3407 8.56839 18.4944 7.35603C17.6457 6.14033 16.57 5.51794 15.4959 5.51794C14.4219 5.51794 13.3462 6.14033 12.4975 7.35603C11.6512 8.56839 11.0959 10.2968 11.0959 12.2535H9.09595C9.09595 9.93794 9.74951 7.79857 10.8576 6.21122Z" fill={color} />
            <Path fillRule="evenodd" clipRule="evenodd" d="M12.4189 20.3681C12.4189 18.5658 13.88 17.1047 15.6823 17.1047C17.4845 17.1047 18.9456 18.5658 18.9456 20.3681V20.7047C18.9456 22.507 17.4845 23.9681 15.6823 23.9681C13.88 23.9681 12.4189 22.507 12.4189 20.7047V20.3681ZM15.6823 19.1047C14.9846 19.1047 14.4189 19.6703 14.4189 20.3681V20.7047C14.4189 21.4024 14.9846 21.9681 15.6823 21.9681C16.38 21.9681 16.9456 21.4024 16.9456 20.7047V20.3681C16.9456 19.6703 16.38 19.1047 15.6823 19.1047Z" fill={color} />
        </Svg>
    )
}
