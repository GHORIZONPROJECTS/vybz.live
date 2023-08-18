import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginBottom:20,
    },
    back:{
        // position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,  
        width: SIZES.width,
        height:250
    },

    // logo:{
    //     width: 300,
    //     height: 100,

    // },
    topContainer:{
        alignItems:'center',
        marginTop:60
        
    },
    // title:{
    //     color:'white',
    //     fontSize:30,
    //     fontWeight:'bold',
    //     marginBottom:20
    // },
    
    titlewelcome:{
        color:'white',
        fontSize:24,
        fontWeight:'bold'

    },
    subtitle:{
        color: COLORS.primary,
        fontSize:18,
        fontWeight:"400"
        
    },
    dataContainer:{
        marginTop:50,
        marginHorizontal:30
    },
    
     overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
    }, 
    textInput:{
        position: "relative",
        color: COLORS.gray,
        fontSize:SIZES.h3,
        borderBottomColor:COLORS.lightgray,
        borderBottomWidth:1,
        paddingVertical:10,

    },
    btnContainer:{
        marginTop:  50,
    },

    button1:{
        backgroundColor: COLORS.primary,
        padding: 15,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText:{
        color:COLORS.white,
        fontWeight:'bold',
        fontSize:SIZES.h4,
    },
    button2:{
        flexDirection:'row',
        backgroundColor:'#ddedf7',
        padding:15,
        marginHorizontal:30,
        marginVertical:10,
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60
        
    },
    text1:{
        color:'green',
        fontSize: SIZES.h5,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 10,
        alignSelf:'flex-end'

    },
    text2:{
        fontSize: SIZES.h4,
        fontWeight:'bold',
        marginTop: 10,
        color:'#1d1a1a'

    },
    btnContainer:{
        marginTop: 10,
    },
    btnSignout:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    }

   
})

export default styles;