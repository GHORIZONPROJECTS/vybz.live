import { StyleSheet } from "react-native"
import { COLORS, SIZES} from '../../constants/theme'
const styles = StyleSheet.create({

    container:{
        flex: 1,
    },
    category:{
        borderRadius:30,
        backgroundColor:COLORS.lightgray,
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        width: 80,
        height:100,
        margin: 10, 
       },
       categorySelected:{
        borderRadius:30,
        backgroundColor:COLORS.primary,
        justifyContent:'center',
        alignItems:'center',
        padding: 5,
        width: 80,
        height:100,
        margin: 10 
       },
       categoryText:{
        color: COLORS.white,
        fontSize:SIZES.h6,
        
       },
       inactiveText:{
        color: COLORS.black,
        fontSize:SIZES.h6,
       },
       headerText:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        // backgroundColor:COLORS.white,          
        paddingBottom:5, 
        marginTop:20
       },
       loadingContainer: {
        flex: 1,
        justifyContent: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      },

      receivedOrder : {
        marginHorizontal:3, 
        marginBottom:5, 
        paddingLeft:5, 
        paddingRight:5, 
        height:30,  
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5, 
        border:1, 
        borderColor:'green',
        backgroundColor:COLORS.primary
      },
    
      processingOrder : {
        marginHorizontal:3, 
        marginBottom:5, 
        paddingLeft:5, 
        paddingRight:5, 
        height:30,  
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5, 
        border:1, 
        borderColor:'green',
        backgroundColor:COLORS.blue
      },
    
      deliveringOrder : {
        marginHorizontal:3, 
        marginBottom:5, 
        paddingLeft:5, 
        paddingRight:5, 
        height:30,  
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5, 
        border:1, 
        borderColor:'green',
        backgroundColor:COLORS.orange
      }
    
})

export default styles