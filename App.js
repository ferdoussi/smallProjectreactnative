import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import Test from './src/screens/test'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Todo from './src/screens/todo';
import Antypo from '@expo/vector-icons/Entypo';
import Crud from './src/screens/crud';
import AAntDesign from '@expo/vector-icons/AntDesign';



const Stack = createStackNavigator();
const Tab= createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen options={{
          tabBarIcon:()=><AntDesign name="home" size={24} color="blue" />
        }} name='Home' component={Home}/>
        <Tab.Screen name='Test' component={Test}
        options={{
          tabBarIcon:()=><Entypo name="login" size={24} color="blue" />
        }}
        />
        <Tab.Screen name='TodoList' component={Todo}
        options={{
          tabBarIcon:()=><Antypo name="add-to-list" size={24} color="blue" />
        }}
        />
        <Tab.Screen name='Crud' component={Crud}
        options={{
          tabBarIcon:()=><AAntDesign name="idcard" size={24} color="blue" />
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
