import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

function HomeScreen({navigation}){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to details'
        onPress={() => navigation.navigate('Detail', {
          itemId: 86, 
          otherParam: 'anything you want here'
        })}      
      />
    </View>
  )
}

function DetailScreen({route}){

  // const {itemId, otherParam} = route.params;

  useFocusEffect(
    React.useCallback(() => {
      
      console.log('detail screen foucs');
        return () => {
      console.log('detail screen unfocus')
      }
    })
  )

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>Detail Screen for {itemId}</Text>
      <Text>{otherParam}</Text> */}

      <Text>Detail Screen </Text>
      
    </View>
  )
}


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} 
//           options={{title: 'My Home'}}
//         />
//         <Stack.Screen name='Detail' component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name='Home' component={HomeScreen} 
        
//           options={{
//             tabBarLabel: 'My Home',
//             tabBarIcon: ({color, size}) => (
//               <FontAwesome5 name="home" size={24} color={color} />
//             )
//         }} />
//         <Tab.Screen name='Detail' component={DetailScreen}
        
//           options={{
//             tabBarLabel: 'My Settings',
//             tabBarIcon: ({color, size}) => (
//               <Ionicons name="settings" size={24} color={color} />
//             )
//        }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Detail" component={DetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
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
