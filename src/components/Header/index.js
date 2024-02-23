import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Logo from "../../assets/logo-instagram.png";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View
        style={styles.container}>
        <Image style={{ width: 200, height: 60 }} source={Logo} />

        <View style={styles.icons}>
          <TouchableOpacity>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons style={styles.icon} name="facebook-messenger" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

    )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between"
  },
  icons: {flexDirection: "row"}, 
  icon: {marginLeft: 8}
})