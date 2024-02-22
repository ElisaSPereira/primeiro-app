import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "./assets/logo-instagram.png";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './src/components/Header';


export default function App() {
  return (
    <View style={{ marginVertical: 32, marginHorizontal: 16, flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={{
        gap: 8, 
        height:100
        }} 
        horizontal style={{flexDirection:"row"}}
        showsHorizontalScrollIndicator={false}>
        
      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
        }}>
        </Image>
      </TouchableOpacity>
        
      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
        }}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
        }}>
        </Image>
      </TouchableOpacity>
        
      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
        }}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
        }}>
        </Image>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
        style={{width: 100, height: 100, borderRadius: 50}}
        source={{
          uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
        }}>
        </Image>
      </TouchableOpacity>
        

      </ScrollView>
    </View>

    
  );
}

