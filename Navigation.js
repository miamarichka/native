import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './Screens/LoginScreen';
import { CommonLayout } from './CommonLayout';
import { PostsScreen } from './Screens/PostsScreen';

export default function Navigation() {
  const MainStack = createStackNavigator();

  return (
        <NavigationContainer>
          <MainStack.Navigator initialRouteName='Registration'>
          <MainStack.Screen name='Registration'>
          {(props) => (
            <CommonLayout>
              <RegistrationScreen {...props} />
            </CommonLayout>
          )}
        </MainStack.Screen>
        <MainStack.Screen name='Login'>
          {(props) => (
            <CommonLayout>
              <LoginScreen {...props} />
            </CommonLayout>
          )}
        </MainStack.Screen>
        <MainStack.Screen name='Posts' component={PostsScreen}/>
          </MainStack.Navigator>
        </NavigationContainer>
  );
}