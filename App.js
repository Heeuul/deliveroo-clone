import React from 'react'; 
import { TailwindProvider } from 'tailwindcss-react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import 'react-native-url-polyfill/auto'; 
import { Provider } from 'react-redux'; 
import store from './store'; 

import HomeScreen from './screens/HomeScreen'; 
import RestaurantScreen from './screens/RestaurantScreen'; 
import BasketScreen from './screens/BasketScreen'; 
import PreparingOrderScreen from './screens/PreparingOrderScreen'; 
import DeliveryScreen from './screens/DeliveryScreen'; 

/* 
Additional Components: 
> Sanity 
> Tailwind CSS 
> Navigation 
> Redux 
> Currency formatter 
> Animatable 
> Progress Bar 
> Maps 
*/ 

// TODO: Corporate payment 
// TODO: Push changes to a database 
// TODO: Drive rep 
// TODO: Restaurant app 
// TODO: Accept payment 
// TODO: Driver app 
// TODO: Clear basket upon choosing food on other shop 

const Stack = createNativeStackNavigator();

export default function App() 
{
  return (
    <NavigationContainer> 
      <Provider store={store}> 
        <TailwindProvider> 
          <Stack.Navigator> 
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Restaurant" component={RestaurantScreen} /> 
            <Stack.Screen 
              name="Basket" 
              component={BasketScreen} 
              options={{presentation: "modal", headerShown: false}} 
            /> 
            <Stack.Screen 
              name="PreparingOrder" 
              component={PreparingOrderScreen} 
              options={{presentation: "fullScreenModal", headerShown: false}} 
            /> 
            <Stack.Screen 
              name="Delivery" 
              component={DeliveryScreen} 
              options={{presentation: "fullScreenModal", headerShown: false}} 
            /> 
          </Stack.Navigator> 
        </TailwindProvider> 
      </Provider> 
    </NavigationContainer> 
  ); 
}; 