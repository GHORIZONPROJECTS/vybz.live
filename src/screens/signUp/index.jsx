import React, { useState} from 'react'
import { ScrollView, View, Text, ImageBackground,TextInput, Image, TouchableOpacity, StatusBar, Button as RNButton } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import styles from './styles'
import {serverTimestamp, setDoc, doc } from "firebase/firestore";
import { auth, db} from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Button, InputField, ErrorMessage} from '../../components/authComponent'


const SignUpScreen = ({navigation}) => {
   
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [signupError, setSignupError] = useState('');

    
    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
    };

    const onHandleSignup = async ({navigation}) => {
        try {

            if (fullname !== '' && email !== '' && password !== '') {

                const res = await createUserWithEmailAndPassword(auth, email, password);
                    await setDoc(doc(db, "accounts", res.user.uid), {
                        fullname: fullname,
                        email: email,
                        password: password,
                        // address : '',
                        // img : "images/user.png",
                        // telephone : "",
                        // username : "",
                        timeStamp: serverTimestamp(),
                    
                        }
                    );

                    //  setDoc(doc(db, "customersWithPlan", res.user.uid), {
                    //     fullname: fullname,
                    //     email: email,
                    //     price : 0,
                    //     user : res.user.uid,
                    //     timeStamp: serverTimestamp(),


                    
                    //     }
                    // )
                
            }
                    
            navigation.navigate('signIn')
          
        } catch (error) {

          setSignupError(error.message);

        }
    };

    
    
      
    return (
        < ScrollView style={styles.container}>
            <StatusBar translucent={true} backgroundColor='transparent'  barStyle="light-content" />
      

                        <View>
                        
                            <View style={{width:SIZES.width}}>   
                            <ImageBackground 
                                source={require('../../../assets/images/signIn/topbackground.png')}
                                style={styles.back}
                                resizeMode='cover'
                            >
                            
                                <View style={styles.topContainer }>
                                <View style={{alignItems:'center',  paddingVertical:2, height:120}}>
                                    <Image 
                                        source={require("../../../assets/logo.png")}
                                        style={{width:400, height:100}}
                                        resizeMode="contain"
                                    />
                                     <Text style={styles.subtitle}>Sign up to continue </Text>
                                 </View>
                                    
                                   
                                </View>
                                </ImageBackground>
                            </View>
                            

                            <View style={styles.dataContainer}>
                            
                            <InputField
                                inputStyle={{
                                fontSize: 16
                                }}
                                containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                                }}
                                leftIcon=''
                                placeholder='Enter Name'
                                autoCapitalize='none'
                                autoFocus={true}
                                value={fullname}
                                onChangeText={text => setFullname(text)}
                            />


                            <InputField
                                inputStyle={{
                                fontSize: 16
                                }}
                                containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20,
                                alignItems:'center'
                                }}
                                leftIcon='email'
                                placeholder='Enter email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={false}
                                value={email}
                                onChangeText={text => setEmail(text)}
                            />
                            <InputField
                                inputStyle={{
                                fontSize: 16
                                }}
                                containerStyle={{
                                backgroundColor: '#fff',
                                marginBottom: 20
                                }}
                                leftIcon='lock'
                                placeholder='Enter password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={passwordVisibility}
                                textContentType='password'
                                rightIcon={rightIcon}
                                value={password}
                                onChangeText={text => setPassword(text)}
                                handlePasswordVisibility={handlePasswordVisibility}
                            />


                            {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
                            <Button
                                onPress={onHandleSignup}
                                backgroundColor={COLORS.primary}
                                title='SIGN UP'
                                tileColor='#fff'
                                titleSize={16}
                                containerStyle={{
                                marginBottom: 24
                                }}
                            />

                            
                            </View>
                    
                            <View style={styles.btnContainer}>
                            
                            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between', marginHorizontal:30}}>
                                <View style={{width:100, height:1, backgroundColor:COLORS.grayInactive, }}/>
                                <Text>Or Sign up with</Text>
                                <View style={{width:100, height:1, borderColor:'black', backgroundColor:COLORS.grayInactive}}/>
                            </View> 
                            <View style={{flexDirection:'row', justifyContent:'center'}}>
                            <TouchableOpacity   onPress={() => {}}>
                                <View style={styles.button2}>
                                    <Image source={require('../../../assets/images/signIn/google.png')} resizeMode='contain' style={{width:30, height:30}}/>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity   onPress={() => {}}>
                                <View style={styles.button2}>
                                    <Image source={require('../../../assets/images/signIn/facebook.png')} resizeMode='contain' style={{width:30, height:30}}/>
                                </View>
                            </TouchableOpacity>
                            </View>
                            
                            <View style={styles.btnSignout}>
                                <TouchableOpacity onPress={() => navigation.navigate('signIn')}>
                                    <Text style={styles.text2}>Already have an account? | Sign In</Text>
                                </TouchableOpacity>
                            </View>
                            </View>

                          
                        </View>
                   
            
        </ ScrollView>
    )
}

export default SignUpScreen;

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#e93b81',
//       paddingTop: 50,
//       paddingHorizontal: 12
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: '600',
//       color: '#fff',
//       alignSelf: 'center',
//       paddingBottom: 24
//     }
//   });