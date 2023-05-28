import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'; 
import React, { useMemo, useState } from 'react'; 
import { useNavigation } from '@react-navigation/native'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { SafeAreaView } from 'react-native-safe-area-context'; 

import { selectRestaurant } from '../features/restaurantSlice'; 
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice'; 
import Currency from 'react-currency-formatter'; 

import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

export default function BasketScreen() 
{
  const navigation = useNavigation(); 
  const restaurant = useSelector(selectRestaurant); 
  const items = useSelector(selectBasketItems); 
  const basketTotal = useSelector(selectBasketTotal); 
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]); 
  const dispatch = useDispatch(); 

  useMemo(() => 
  {
    const groupedItems = items.reduce((results, item) => 
    {
      (results[item.id] = results[item.id] || []).push(item); 
      return results; 
    }, {}); 

    setGroupedItemInBasket(groupedItems); 
  }, [items]); 

  return (
    <SafeAreaView className="flex-1 bg-white"> 
      <View className="flex-1 bg-gray-100"> 
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs"> 
          <View> 
            <Text className="text-lg font-bold text-center">Basket</Text> 
            <Text className="text-center text-gray-400">{restaurant.title}</Text> 
          </View> 

          <TouchableOpacity 
            onPress={navigation.goBack} 
            className="rounded-full bg-gray-100 absolute top-3 right-5" 
          > 
            <XCircleIcon color="#00CCBB" size={50} /> 
          </TouchableOpacity> 
        </View> 

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5"> 
          <Image 
            source={{uri: "https://links.papareact.com/wru"}} 
            className="h-7 w-7 bg-gray-300 rounded-full" 
          /> 
          <Text className="flex-1">Delivery in 50-75 mins</Text> 
          <TouchableOpacity> 
            <Text className="text-[#00CCBB]">Change</Text> 
          </TouchableOpacity> 
        </View> 

        <ScrollView className="divide-y divide-gray-200"> 
          {Object.entries(groupedItemInBasket).map(([key, items]) => 
            (
              <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5"> 
                <Text className="text-[#00CCBB]">{items.length} x</Text> 
                <Image 
                  source={{uri: urlFor(items[0]?.image).url()}} 
                  className="h-12 w-12 rounded-full" 
                /> 
                <Text className="flex-1">{items[0]?.name}</Text> 

                <Text className="text-gray-600"> 
                  <Currency quantity={items[0]?.price} currency="MYR" /> 
                </Text> 

                <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}> 
                  <Text className="text-[#00CCBB] text-xs">Remove</Text> 
                </TouchableOpacity> 
              </View> 
            ) 
          )} 
        </ScrollView> 

        <View className="p-5 bg-white mt-5 space-y-4"> 
          <View className="flex-row justify-between"> 
              <Text className="text-gray-400">Subtotal</Text> 
              <Text className="text-gray-400"> 
                <Currency quantity={basketTotal} currency="MYR" /> 
              </Text> 
          </View> 
          
          <View className="flex-row justify-between"> 
              <Text className="text-gray-400">Delivery fee</Text> 
              <Text className="text-gray-400"> 
                <Currency quantity={5.99} currency="MYR" /> 
              </Text> 
          </View> 
          
          <View className="flex-row justify-between"> 
              <Text>Order total</Text> 
              <Text className="font-extrabold"> 
                <Currency quantity={basketTotal + 5.99} currency="MYR" /> 
              </Text> 
          </View> 

          <TouchableOpacity 
            onPress={() => navigation.navigate("PreparingOrder")} // TODO: make navigation a const 
            className="rounded-lg bg-[#00CCBB] p-4" 
          > 
            <Text className="text-center text-white text-lg font-bold">Place Order</Text> 
          </TouchableOpacity> 
        </View> 
      </View> 
    </SafeAreaView> 
  ); 
}; 