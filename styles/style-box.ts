import { StyleSheet } from "react-native"

const styleBox = StyleSheet.create({
    container: {
        flex: 1,
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    alignContentCenter: {
        alignContent: 'center'
    },
    alignItemsCenter: {
        alignItems: 'center'
    },
    alignContentSpaceBetween: {
        alignContent: 'space-between'
    },
    alignContentSpaceAround: {
        alignContent: 'space-around'
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    justifyContentSpaceAround: {
        justifyContent: 'space-around',
    },
    justifyContentSpaceEvenly: {
        justifyContent: 'space-evenly',
    },
    justifyContentFlexEnd: {
        justifyContent: 'flex-end',
    },
    justifyContentFlexStart: {
        justifyContent: 'flex-start',
    },
})

export default styleBox