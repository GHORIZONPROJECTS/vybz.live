import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RootClientTabs from './clientTabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {COLORS, SIZES} from '../constants/theme'


const Drawer =  createDrawerNavigator()
const DrawerNavigator = () => {
  return (
  <Drawer.Navigator>
    <Drawer.Screen 
        name='rootClientTabs' 
        component={RootClientTabs}
        option={{
          title:'profile',
          drawerIcon:({focused, size}) =>(
            <
              MaterialCommunityIcons
              name='profile'
              color={focused?COLORS.primary:COLORS.grayInactive}
              />
          )
        }}    
    />
  </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})