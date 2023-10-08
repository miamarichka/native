import { useState, useEffect } from 'react';
import * as Font from 'expo-font';

export default function useCustomFonts(){
const [fontsLoaded, setFontsLoaded] = useState(false);

 useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          'Roboto-Medium': require('../assets/Roboto/Roboto-Medium.ttf'),
          'Roboto-Bold': require('../assets/Roboto/Roboto-Bold.ttf')
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error('Error loading fonts:', error);
        setFontsLoaded(false);
      }
    };

    loadFonts();
  }, []);

      return [fontsLoaded, setFontsLoaded]
}