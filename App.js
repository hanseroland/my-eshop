import { StyleSheet, View,LogBox } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import ProductContainer from './Screens/Products/ProductContainer';
import Header from './shared/Header';

//Screens
//LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
       
        <ProductContainer/>
      </View>
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
