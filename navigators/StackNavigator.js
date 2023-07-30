import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen'
import { NavigationContainer } from '@react-navigation/native';
import HistoryScreen from '../screens/HistoryScreen';
import InformationScreen from '../screens/InformationScreen';


const Stack= createStackNavigator();
function MyStack(){
    return(
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
             name='Welcome' 
            component={WelcomeScreen}/>
            <Stack.Screen
             name='Login' 
            component={LoginScreen}/>
            <Stack.Screen 
            name='Register'
            component={RegisterScreen}/>
            <Stack.Screen
            name='Account'
            component={AccountScreen}/>
            <Stack.Screen
            name='History'
            component={HistoryScreen}/>
            <Stack.Screen
            name='Information'
            component={InformationScreen}/>
        </Stack.Navigator>
    )
}

export default function StackNavigation(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )

}