import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

const RootLayout = () => {
  useEffect(() => {
    // Prevent the splash screen from hiding automatically
    SplashScreen.preventAutoHideAsync();

    // Simulate loading for a moment (1 seconds here) before hiding the splash screen
    setTimeout(() => {
      SplashScreen.hideAsync(); // Hide the splash screen after the timeout
    }, 1000);
  }, []);

  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack
          screenOptions={{        
            animation: 'none',
          }}
        >
          <Stack.Screen name="index" options={{
            headerShown: false
          }} />
          <Stack.Screen name="register" options={{ headerShown: false}} />
          <Stack.Screen name="recover" options={{headerShown: false}} />
          <Stack.Screen name="dashboard" 
            options={{ 
              title: 'Dashboard', 
              headerShown: false
            }} 
          />
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default RootLayout;