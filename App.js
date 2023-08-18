// import 'react-native-gesture-handler';
import { Image, StatusBar, StyleSheet, Text, View, ImageBackground } from 'react-native';
import React, { useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SIZES, COLORS } from './src/constants/theme';
import { Ionicons } from '@expo/vector-icons';
// import AuthNavigation from './src/navigations/authNavigation';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Navigation from './src/navigation/rootNavigation';
// import Styles from './styles.jsx'
import { AuthenticatedUserProvider } from './src/config/AuthContext';
// import { CartContextProvider } from './src/config/CartContext';


const slides = [
  {
    id:1,
    title:'Always connected Anywhere \n Anytime!!',
    description:'By using the vybz.live platform you can always be connected anywhere anytime.',
   image:require('./assets/images/onboarding/messages.png') 
  },
  {
    id:2,
    title:'Fast like a scream!!',
    description:'Enjoy your surfing experience on vybz.live with your new friends from all over the world ',
   image:require('./assets/images/onboarding/chats.png') 
  },
  {
    id:3,
    title:'Discover Interesting things, \n everyday',
    description:'You can get new and interesting things everyday even every second when you start scrolling',
   image:require('./assets/images/onboarding/posts.png')    
  },
  {
    id:4,
    title:'Creating new blogs on your account, \n with our blog builder platform',
    description:'connect the world to your blog sell your products on your blog page ',
    image:require('./assets/images/onboarding/blogs.png')    
  }
]

export default function App() {

  StatusBar.setBarStyle('light-content', true);
  const [showHomePage, setShowHomePage] = useState(false);

  const buttonLabel = (label)=>{
    return(
      <View style={{padding:12}}>
         <Text style={{color:COLORS.title, fontSize:SIZES.h4, fontWeight:'600'}}>{label}</Text>
      </View>
    )
    
  }

  const startLabel = () => {
    return(
      <View style={{width:50, height:50, backgroundColor:COLORS.main, alignItems:'center', justifyContent:'center', borderRadius:25}}>
            <Ionicons name="ios-arrow-forward-sharp" size={30} color={COLORS.white} />
          
      </View>
    )
    
  }

  if(!showHomePage){

    return (
     <AppIntroSlider 
        data={slides} 
        renderItem={({item}) => {
          return(
           <View style={{flex:1, alignItems:"center", paddingTop:70}} key={item.id}>

              <ImageBackground 
                 source={require("./assets/images/onboarding/background.png")}
                 style={{
                  width: "100%",
                  height: 250,
                  // padding: 20,
                  // paddingVertical: 40,
                  position: 'absolute',
                  bottom:0
                }}
                imageStyle={{
                  resizeMode: 'cover',
                  alignSelf: "flex-end"
                }}
              />

              <Image 
                source={item.image}
                style={{width:SIZES.width-10, height:350}}
                resizeMode="contain"
              />
              <View style={{marginTop:20, paddingHorizontal:30}}>
              <Text style={{fontSize:18, fontWeight:"bold", lineHeight: 25, color:COLORS.main, textAlign:'center'}}>{item.title}</Text>
              
              <Text style={{fontWeight:'600', marginVertical:20, fontSize:16, textAlign:'center', paddingTop:5, color:"black"}}>{item.description}</Text>
             </View>
            </View>
          )
        }}
        showSkipButton
        activeDotStyle={{backgroundColor:COLORS.main, width:30}}
        renderNextButton={()=> buttonLabel("Next")}
        renderSkipButton={()=> buttonLabel("Skip")}
        renderDoneButton={()=> startLabel()}
        onDone={()=>{
          setShowHomePage(true)
        }}
     />
    );

  }

  return (

    // <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //   {/* <OtpAuth/> */}
    //   {/* <TelephonAuth/> */}
    //   {/* <CreateAccount/> */}
    //   {/* <Dob/> */}
    //   {/* <Gender/> */}
    //   {/* <AuthNavigation/> */}

      
    //   <Text>Home</Text>
    // </View>

    <AuthenticatedUserProvider>
      {/* <CartContextProvider> */}
         <Navigation/>
      {/* </CartContextProvider> */}
    </AuthenticatedUserProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

