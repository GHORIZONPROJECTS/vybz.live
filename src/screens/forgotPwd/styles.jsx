import { StyleSheet } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES} from '../../constants/theme'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingTop:20,
    },
    title:{
        color: COLORS.black,
        fontSize:SIZES.h2,
        fontWeight:'bold',
        marginVertical:10,
    },
    subtitle:{
        color:COLORS.subtitle,
        fontSize:SIZES.h5,

    },
    textInput:{
        borderBottomColor:COLORS.lightgray,
        borderBottomWidth: 1,
        paddingVertical:10,
        fontSize:SIZES.h4,
        marginVertical:20,

    },
    button:{
        backgroundColor: COLORS.primary,
        padding:10,
        borderRadius:10,
        marginTop:50,
        textAlign:'center',
        color:COLORS.white,
    },
    btnText:{
        textAlign:'center',
        color:COLORS.white,
        fontSize:SIZES.h2,
        fontWeight:'bold',
    }
})

export default styles;