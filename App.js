import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Messages from './pages/Messages';

const Stack = createNativeStackNavigator();

const App = () => {

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='LoginPage' component={Login}></Stack.Screen>
        <Stack.Screen name='SignUpPage' component={SignUp}></Stack.Screen>
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MessagesPage" component={Messages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;