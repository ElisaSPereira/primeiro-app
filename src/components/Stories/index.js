import { StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Fake1 from "../../assets/foto_idosa.webp";
import Fake2 from "../../assets/foto_mulher.jpg";

export default function Stories() {
    return (
        <ScrollView 
            contentContainerStyle={styles.container} 
            horizontal
            showsHorizontalScrollIndicator={false}>
            
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
            }}>
            </Image>
          </TouchableOpacity>
            
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
            }}>
            </Image>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
            }}>
            </Image>
          </TouchableOpacity>
            
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
            }}>
            </Image>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbuKzXDS-gmu5JFyV7uo_Aiic4Rzdqo7ykc2bOfiPAjjCQdiGEBBv2_Dk0n2T-2oJi-BQ&usqp=CAU"
            }}>
            </Image>
          </TouchableOpacity>
    
          <TouchableOpacity>
            <Image
            style={styles.story}
            source={{
              uri:"https://s2-g1.glbimg.com/qZOlKT0HLmsWpTLuELPuJdJ8qLM=/0x337:1350x1657/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/A/I/K5mkbfTbGraOV6uIJX3Q/11.jpeg"
            }}>
            </Image>
          </TouchableOpacity>
            
    
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      gap: 8, 
      height:100
    },
    story: {width: 100, height: 100, borderRadius: 50}
})