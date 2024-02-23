import { View } from 'react-native';
import Logo from "./assets/logo-instagram.png";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
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

