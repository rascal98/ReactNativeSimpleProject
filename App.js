import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/modules/login/login';
import DashboardPage from './src/modules/dashboard/dashboard';
import { UserProvider } from './src/modules/context/userContext';
import { SatisFaturaPage } from './src/modules/satisfaturasi/satisfaturasi';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Giriş Ekranı" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="Ana Sayfa" component={DashboardPage} options={{ headerShown: false }} />
          <Stack.Screen name="satisFatura" component={SatisFaturaPage} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}



export default App;

