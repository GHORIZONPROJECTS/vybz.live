import React from 'react'
import { View, Text, TextInput, Image, StatusBar, TouchableOpacity,} from 'react-native'
import { COLORS, SIZES } from '../../constants/theme'
import styles from './styles'


const ForgotPwdScreen = ({navigation}) => {
    return (
        
        <View style={styles.container}>
            
            <StatusBar translucent={true} backgroundColor='transparent'  barStyle="light-content" />
          

                    <View style={styles.container}>
                        <Text style={styles.title}>Forgot Password</Text>
                        <Text style={styles.subtitle}>Enter your email address and we will send you instructions on how to change your password </Text>
                    </View>
                    
                        <View>
                            <TextInput placeholder='Enter your email' style={styles.textInput}/>
                        </View>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={styles.button}>
                                <Text style={styles.btnText}>Send</Text>
                            </View>
                        </TouchableOpacity>
                  
        </View>
        
    )
}

export default ForgotPwdScreen;