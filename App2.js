import { View } from 'react-native';
import Header from './src/components/Header';
import Stories from './src/components/Stories';


export default function App() {
  return (
    <View 
    style={{ 
      marginVertical: 32,
      marginHorizontal: 16, 
      flex: 1 }}>
      <Header />
      <Stories />

      
    </View>

    
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
