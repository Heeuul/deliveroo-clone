import { View, Text, Image } from 'react-native'; 
import React, { useEffect } from 'react'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

import * as Animatable from 'react-native-animatable'; 
import * as Progress from 'react-native-progress'; 
import { useNavigation } from '@react-navigation/native';

export default function PreparingOrderScreen() 
{
  const navigation = useNavigation(); 
  useEffect(() => 
  {
    setTimeout(() => 
    {
      navigation.navigate("Delivery"); 
    }, 3000); 
  }, []); 

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center"> 
      <Animatable.Image 
        source={require("../assets/orderLoading.gif")} 
        animation={"slideInUp"} 
        iterationCount={1} 
        style={{width: 250, height: 250}} 
      /> 
      <Animatable.Text 
        animation={"slideInUp"} 
        iterationCount={1} 
        className="text-lg my-10 text-white font-bold text-center" 
      >
        Preparing your order... 
      </Animatable.Text> 

      <Progress.Circle size={60} indeterminate={true} color="white" /> 
    </SafeAreaView> 
  ); 
}; 