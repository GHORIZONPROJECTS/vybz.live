import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import styles from './styles'
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../firebase'
import { Button, InputField, ErrorMessage} from '../../components/authComponent'


const SignInScreen = ({navigation}) => {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye');
    const [signInError, setSignInError] = useState('');


    const handlePasswordVisibility = () => {
        if (rightIcon === 'eye') {
          setRightIcon('eye-off');
          setPasswordVisibility(!passwordVisibility);
        } else if (rightIcon === 'eye-off') {
          setRightIcon('eye');
          setPasswordVisibility(!passwordVisibility);
        }
    };

    const onLogin = async () => {
        try {
          if (email !== '' && password !== '') {


            await signInWithEmailAndPassword(auth, email, password)
         
            }else{

                setSignInError("Email or Password cannot be empty")

            }
          
        } catch (error) {
          setSignInError('something went wrong');
        }
    };
    
    return (

    
        <ScrollView style={styles.container}>
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
                                     <Text style={styles.titlewelcome}>Welcome Back</Text>
                                    <Text style={styles.subtitle}>Sign in to continue </Text>
                                 </View>
                                    
                                   
                                </View>
                        </ImageBackground>
                    </View>



                    <View style={styles.dataContainer}>
                        {/* <TextInput style={styles.textInput}  placeholder={'Email'} placeholderTextColor={COLORS.grayInactive}/>
                        <TextInput style={styles.textInput} secureTextEntry={true} placeholder={'Password'} placeholderTextColor={COLORS.grayInactive}/>
                        <TouchableOpacity onPress={() => navigation.navigate('forgotPwd')}>
                            <Text style={styles.text1}>Forgot password?</Text>
                        </TouchableOpacity> */}

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
                                marginBottom: 5,
                                alignItems:'center'
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
                            <TouchableOpacity onPress={() => navigation.navigate('forgotPwd')}>
                                 <Text style={styles.text1}>Forgot password?</Text>
                            </TouchableOpacity>


                            {signInError ? <ErrorMessage error={signInError} visible={true} /> : null}
                            <Button
                                onPress={onLogin}
                                backgroundColor={COLORS.primary}
                                title='SIGN IN'
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
                            <Text>Or Sign in with</Text>
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
                            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                                <Text style={styles.text2}>Don't have an account? | Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                   
            {/* </ImageBackground> */}
            
        </ScrollView>
    )
}

export default SignInScreen;