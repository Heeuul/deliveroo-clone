import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'; 
import React, { useLayoutEffect, useEffect } from 'react'; 
import { useNavigation, useRoute } from '@react-navigation/native'; 
import { useDispatch } from 'react-redux'; 

import { urlFor } from '../sanity'; 
import DishRow from '../components/DishRow'; 
import { setRestaurant } from '../features/restaurantSlice';

import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, StarIcon } from 'react-native-heroicons/solid'; 
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline'; 
import BasketIcon from '../components/BasketIcon'; 

export default function RestaurantScreen() 
{
  const {params: {id, imgURI, title, rating, genre, address, short_desc, dishes, lat, long}, } = useRoute(); 
  const navigation = useNavigation(); 
  const dispatch = useDispatch(); 
  
  useEffect(() => 
  {
    dispatch(setRestaurant({id, imgURI, title, rating, genre, address, short_desc, dishes, lat, long})); 
  }, []); 
  

  useLayoutEffect(() => 
  {
    navigation.setOptions({headerShown: false,}); 
  }, []); 

  return (
    <> 
    <BasketIcon /> 

    <ScrollView> 
      <View className="relative"> 
        <Image 
          source={{uri: urlFor(imgURI).url()}} 
          className="w-full h-56 bg-gray-300 p-4" 
        /> 
        <TouchableOpacity 
          className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" 
          onPress={navigation.goBack} 
        > 
          <ArrowLeftIcon size={20} color="#00CCBB" /> 
        </TouchableOpacity> 
      </View> 

      <View className="bg-white"> 
        <View className="px-4 pt-4"> 
          <Text className="text-3xl font-bold">{title}</Text> 
          <View className="flex-row space-x-2 my-1"> 
            <View className="flex-row items-center space-x-1"> 
              <StarIcon color={"green"} opacity={0.5} size={22} /> 
              <Text className="text-xs text-gray-500"> 
                <Text className="text-green-500">{rating}</Text> . {genre} 
              </Text> 
            </View> 

            <View className="flex-row items-center space-x-1"> 
              <MapPinIcon color={"gray"} opacity={0.4} size={22} /> 
              <Text className="text-xs text-gray-500"> 
                <Text className="text-gray-500">Nearby {address}</Text> 
              </Text> 
            </View> 
          </View> 

          <Text className="text-gray-500 mt-2 pb-4">{short_desc}</Text> 
        </View> 

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300"> 
          <QuestionMarkCircleIcon color={"gray"} opacity={0.6} size={20} /> 
          <Text className="pl-2 flex-1 text-md font-bold"> 
            Have a food allergy? 
          </Text> 
          <ChevronRightIcon color="#00CCBB" /> 
        </TouchableOpacity> 
      </View> 

      <View className="pb-36"> 
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text> 
        
        {/* Dish Rows */} 
        {dishes.map((dish) => (
          <DishRow 
            key={dish._id} 
            id={dish._id} 
            name={dish.name} 
            desc={dish.short_desc} 
            price={dish.price} 
            image={dish.image} 
          /> 
        ))}
      </View> 
    </ScrollView> 
    </> 
  )
}