import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect} from 'react'
// import AccountHeader from '../../components/accountComponents/accountHeader'
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../config/AuthContext';
import { db, auth } from '../../firebase'
 import { doc, getDoc } from "firebase/firestore";


const HorizontalLine = () => {
  return(
    <View style={{borderBottomWidth:2, borderBottomColor: '#e0dfdf', height:0.1}}>

    </View>

  )
  
}
const AccountScreen = ({navigation}) => {

   const { user } = useContext(AuthContext)
   const [userData, setUserData] = useState("")


  const getUser = async() => {
    const docRef = doc(db, "accounts", user.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {

        console.log("Document data:", docSnap.data());
        setUserData(docSnap.data())
        
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  }

  useEffect(()=>{
    getUser()
  }, [])


  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {/* <AccountHeader
        onPress={() => navigation.goBack()}
        userData = {userData}
      /> */}
      
      <View style={{paddingHorizontal:20, height:50, flexDirection:'column', justifyContent:'space-around', marginVertical:100}}>
      <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>Profile</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity>
        <HorizontalLine/>
      </View>
      <View style={{paddingHorizontal:20, height:40, flexDirection:'column', justifyContent:'space-around', marginVertical:10}}>
       <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>Payment Method</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity> 
        <HorizontalLine/>
      </View>
      <View style={{paddingHorizontal:20, height:40, flexDirection:'column', justifyContent:'space-around', marginVertical:10}}>
        <TouchableOpacity onPress={() =>navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>All Blogs</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity>
        <HorizontalLine/>
      </View>
      <View style={{paddingHorizontal:20, height:40, flexDirection:'column', justifyContent:'space-around', marginVertical:10}}>
        <TouchableOpacity onPress={() =>navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>All Messages</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity>
        <HorizontalLine/>
      </View>
    
      <View style={{paddingHorizontal:20, height:40, flexDirection:'column', justifyContent:'space-around', marginVertical:10}}>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>About Us</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity>
        <HorizontalLine/>
      </View>
      <View style={{paddingHorizontal:20, height:40, flexDirection:'column', justifyContent:'space-around', marginVertical:10}}>
        <TouchableOpacity onPress={()=> navigation.navigate('')}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>Support Center</Text>
          <AntDesign name="right" size={24} color="#5c5959" />
        </View>
        </TouchableOpacity>
        <HorizontalLine/>
      </View>
      <View style={{paddingHorizontal:20, height:40, marginVertical:5}}>
        <TouchableOpacity onPress={handleSignOut}>
        <View style={{flexDirection:'row',  alignItems:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:16, color:'#5c5959' }}>Log out</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AccountScreen

const styles = StyleSheet.create({})