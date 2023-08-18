import { Text, View, StatusBar, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import styles from './styles'
import {COLORS, SIZES} from '../../constants/theme'
// import DishList from '../../components/homeComponents/dishList/DishList';
import { Ionicons } from '@expo/vector-icons';
// import { db } from '../../firebase'
// import { collection, onSnapshot, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { AuthContext } from '../../config/AuthContext'
import { AntDesign } from '@expo/vector-icons';
// import { doc, getDoc } from "firebase/firestore";
// import { CartContext } from '../../config/CartContext'



const HomeScreen = ({navigation}) => {

  // const [indexCheck, setIndexCheck] = useState("0")

  // const [ data, setData ] = useState([])
  const [isLoading, setIsLoading ] = useState(true)
  const [userData, setUserData] = useState([])
  // const [userPlan, setUserPlan] = useState("")
  // const [userOrders, setUserOrders] = useState([])
  const { user } = useContext(AuthContext)
  // const { totalQty } = useContext(CartContext)
  // console.log(user.uid)

  // const { cart } = useContext(CartContext)
  // console.log(cart)

  const getUser = async() => {
    const docRef = doc(db, "usersAccounts", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {

        // console.log("Document data:", docSnap.data());
        setUserData(docSnap.data())
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }

  useEffect(()=>{
    getUser()
  }, [])

  // const getUserOrderList = async() => {
   

  //   const q = query(collection(db, "order"), where("userId", "==", user.uid));

  //   const querySnapshot = await getDocs(q);

  //   querySnapshot.forEach((doc) => {

  //     setUserOrders(doc.data())
  //   });

      
  // }

  // useEffect(()=>{
  //   getUserOrderList()
  // }, [])


  // console.log(userOrders.status);



  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar translucent={true} backgroundColor={COLORS.primary}  barStyle="light-content" />
   
      <View style={{width:SIZES.width, height:100, backgroundColor:COLORS.primary, alignItems:'center', justifyContent:'space-around', flexDirection:'row', paddingTop:20}}> 
      <TouchableOpacity onPress={() =>navigation.navigate('notification')}>
      <Ionicons name="ios-notifications-outline" size={24} color="white"  /> 
      </TouchableOpacity> 
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center', width: 200}}>
        <Text style={{fontSize:16, color:COLORS.white}}>Welcome</Text><Text style={{color:'white', fontSize:16, marginLeft:5}}>{userData.fullname} </Text> 
      </View>
      
      <TouchableOpacity onPress={() => (navigation.navigate('cart'))}>
          <View>
            {/* <Ionicons name="ios-" size={24} color="white" /> */}
            <AntDesign name="message1" size={24} color="white" />
            <View style={{position:'absolute', right:-8, top:-8, width:16, height:16, borderRadius:8, backgroundColor:'red', alignItems:'center', justifyContent:'center' }}><Text style={{color:'white', fontSize:10, fontWeight:'bold'}}>2</Text></View>
          </View>
      </TouchableOpacity>
        
      
      </View> 

    <View style={{height:50, borderRadius:10, borderColor:'#000000',flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginHorizontal:10, height:80, backgroundColor:'#ffffff', paddingHorizontal:20, marginTop:10}}>
       <View>
        <Text style={{fontSize:SIZES.h4, color:'#999999', fontWeight:'bold', marginBottom:5}}>
          My Blogs
        </Text>
       
       </View>
       <View  style={{paddingBottom:0, marginBottom:0, flexDirection:'row', alignItems:'center'}}>
      <TouchableOpacity onPress={()=>{navigation.navigate()}} style={{width:80, height:30, backgroundColor:COLORS.primary, justifyContent:'center', alignItems:'center', borderRadius:10,}}>
        <Text style={{fontWeight:'bold', fontSize:SIZES.h4, marginRight:5, color:'#ffffff'}}>+ Blog</Text>
      </TouchableOpacity>  
      </View>
      </View>

     
      </SafeAreaView>
  
  
  )
}


export default HomeScreen

