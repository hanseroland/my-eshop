import { StyleSheet, View,LogBox } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Header from './shared/Header';



//navigators
import Main from './Navigators/Main';


//Screens
//LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <Main/>
      </NavigationContainer>
    </NativeBaseProvider>
   
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
