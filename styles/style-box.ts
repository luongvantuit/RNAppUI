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
    }
})

export default styleBox