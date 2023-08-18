import { View, Text, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/theme'
import SignInScreen from '../screens/logIn'
import SignUpScreen from '../screens/signUp'
import ForgotPwdScreen from '../screens/forgotPwd'
import RootClientTabs from './clientTabs'
import { createStackNavigator } from '@react-navigation/stack';
import Ionicon from '@expo/vector-icons/Ionicons'

const auth = createStackNavigator();

const CartIcon = () => {

  const [count, setCount] = useState(1)
  return(
   <View >
      {/* <Ionicon
            style={{ position:'relative'}}
            name= {Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
            size={30} color= '#ffffff'
      /> */}
      <Ionicon style={{ position:'relative'}} name="ios-notifications-outline" size={30} color="black" />
      {count > 0 && 
      
      <View
            style={{
               position:'absolute', top:-5, right:-5, width:16, height:16, backgroundColor:'red', borderRadius:8, alignItems:'center',
               justifyContent:'center'
               
            }}   
      >
        <Text style={{fontSize:8, color:'white', fontWeight:'bold'}}>1</Text>
      </View>
      
      
      }
     
   </View>
      
  )
}

const MenuIcon = () => {

  return(
  
   <View >
      <Ionicon 
            style={{ position:'relative'}}
            name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
            size={30} color= '#ffffff'
      />
   
     
   </View>
      
  )
}



const AuthStack = ({route, navigation}) =>{
    return(
            <auth.Navigator initialRouteName='signIn'>
                <auth.Screen 
                    name='signIn' component={SignInScreen}
                    options={{headerShown:false}}
                />
                <auth.Screen 
                    name='signUp' component={SignUpScreen}
                    options={{headerShown:false}}
                />

                <auth.Screen 
                    name='forgotPwd' component={ForgotPwdScreen}
                    options={{
                        headerTitle:"Back",
                        headerBackTitle:'back',
                        headerBackTitleStyle:{
                            fontWeight:'bold'
                        },
                        headerTintColor: COLORS.white,
                        headerStyle:{
                            backgroundColor:COLORS.primary
                        }

                    }}
                />
                  <auth.Screen 
                    name='rootClientTabs' component={RootClientTabs}
                    options={{
                        headerShown:false,
                        headerTitle:'vybz.live',
                        headerTintColor: COLORS.white,
                        headerStyle:{
                            backgroundColor:COLORS.primary,
                        }, 
                        headerTitleAlign:'center',
                        headerLeft: (props) => (
                          <MenuIcon
                            {...props}
                              onPress={() => {
                              navigation.navigate('search')
                            }}
                          />
                         

                          /*   <TouchableOpacity
                              android_ripple={{
                                color: '#ffffff',
                                foreground: true,
                                borderless: true,
                                
                              }}
                              onPress={() => {navigation.openDrawer()}}>
                              <Ionicon
                                style={{marginLeft: 10}}
                                name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
                                size={30} color= '#ffffff'
                              />
                              
                            </TouchableOpacity> */
                            // <Button
                            //   onPress={() => alert('This is a button!')}
                            //   title="Info"
                            //   color="#000"
                            // >
                            //   <cartBadge/>
                            // </Button>
                            
                          ),
                          headerRight: (props) => (

                            <CartIcon
                            {...props}
                            onPress={() => {
                              // Do something
                            }}
                            
                          />

                            /*  <TouchableOpacity
                              android_ripple={{
                                color: '#ffffff',
                                foreground: true,
                                borderless: true,
                                
                              }}
                              onPress={() => {navigation.openDrawer()}}>
                            <Ionicon
                                style={{marginLeft: 10}}
                                name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
                                size={30} color= '#ffffff'
                              /> 

                              <IconBadge
                                  MainElement={
                                      <Ionicons
                                          name={iconName}
                                          size={30}
                                          style={{ marginBottom: -3 }}
                                          color={focused ? Colors.tabIconSelected : 
                                                Colors.tabIconDefault}
                                        />
                                  }
                                  badgeNumber={count}
                              /> 
                            </TouchableOpacity> */
                          )
                       

                    }}
                />
            </auth.Navigator>
    )
}

export default AuthStack