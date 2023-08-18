import React from 'react'
import RootClientTabs from './clientTabs';
import { createStackNavigator } from '@react-navigation/stack'
// import DetailsScreen from '../screens/details';
// import CartScreen from '../screens/cart';
// import OrderStatusScreen from '../screens/orderStatus';
// import ReviewsScreen from '../screens/reviews';
// import AddressScreen from '../screens/address';
// import TimeScreen from '../screens/time';
// import CreditCardScreen from '../screens/creditCard';
// import NotificationScreen from '../screens/notification';
// import AccountScreen from '../screens/account';
// import ProfileScreen from '../screens/profile';
// import OrderHistoryScreen from '../screens/orderHistory';
// import SettingsScreen from '../screens/settings';
// import AboutUsScreen from '../screens/aboutUs';
// import SupportCenterScreen from '../screens/supportCenter';
// import AddNewCardScreen from '../screens/addNewCard';
// import HelpScreen from '../screens/help';
// import FoodPlanDetailScreen from '../screens/foodPlanDetail';
// import ConfirmCheckOutScreen from '../screens/confirmCheckOut';
// import CompleteOrderScreen from '../screens/completeOrder';
// import CompletePlanSuccessScreen from '../screens/completePlanSuccess';
// import WalletScreen from '../screens/wallet';
// import CompletePlanScreen from '../screens/completePlan';

const loggedInStack = createStackNavigator()

const LoggedInNavigation = () => {

    return(

        <loggedInStack.Navigator>
                 <loggedInStack.Screen 
                    name='bottomTab' 
                    component={RootClientTabs}
                    options={
                        {
                            headerShown:false
                        }
                    } 
                />
                {/* <loggedInStack.Screen 
                    name="details" 
                    component={DetailsScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                <loggedInStack.Screen 
                    name="confirmCheckout" 
                    component={ConfirmCheckOutScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="orderStatus" 
                    component={OrderStatusScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="reviews" 
                    component={ReviewsScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="address" 
                    component={AddressScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="completeOrder" 
                    component={CompleteOrderScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="time" 
                    component={TimeScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="creditCard" 
                    component={CreditCardScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="notification" 
                    component={NotificationScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                
                <loggedInStack.Screen 
                    name="account" 
                    component={AccountScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="help" 
                    component={HelpScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="profile" 
                    component={ProfileScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                
                <loggedInStack.Screen 
                    name="orderHistory" 
                    component={OrderHistoryScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                <loggedInStack.Screen 
                    name="settings" 
                    component={SettingsScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                <loggedInStack.Screen 
                    name="aboutUs" 
                    component={AboutUsScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                   <loggedInStack.Screen 
                    name="supportCenter" 
                    component={SupportCenterScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                    <loggedInStack.Screen 
                    name="addNewCard" 
                    component={AddNewCardScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="foodPlanDetail" 
                    component={FoodPlanDetailScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />
                  <loggedInStack.Screen 
                    name="complete" 
                    component={CompletePlanScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="completePlanSuccess" 
                    component={CompletePlanSuccessScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                />

                <loggedInStack.Screen 
                    name="wallet" 
                    component={WalletScreen}
                    options={
                        {
                            headerShown:false
                        }
                    }    
                /> */}
                                   
        </loggedInStack.Navigator>

    )
}

export default LoggedInNavigation

