
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Images from "./stories/image";
import whatsapp from "./stories/whatsappStatus";
import React from "react";

//hey??GIT SET AKI THERAM hmmm BAKI NJN NOKTE NALLE LOGIC PARANJU THERAM NOKEET  o k



const Stack = createStackNavigator()


function MyStack(){
  return(
      <Stack.Navigator>
          <Stack.Screen
          name='whatsapp'
          component={whatsapp}
          options={{headerShown:false}} >

          </Stack.Screen>
          <Stack.Screen
          name='Images'
          component={Images}
          options={{headerShown:false}}>

       </Stack.Screen>
          
      </Stack.Navigator>
  )
}

export default function App(){
  return(
      <NavigationContainer>
          <MyStack>

          </MyStack>
      </NavigationContainer>
  )
}