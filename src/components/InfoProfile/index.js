import { View, Image, Text, StyleSheet } from "react-native";

export default function InfoProfile({image, publi, followers, following, description}) {
    return(
    <View style={styles.container}>
        <Image style={{width: 100, height: 100, borderRadius: 50}} source={image}/>
        <View style={{flexDirection:"row"}}>
            <View style={{alignItems: "center"}}>
                <Text style={{fontWeight: "bold"}}>{publi}</Text>
                <Text>Publicações</Text>
            </View>
            <View style={{marginHorizontal: 20, alignItems: "center"}}>
                <Text style={{fontWeight: "bold"}}>{followers}</Text>
                <Text>Seguidores</Text>
            </View>
            <View style={{alignItems: "center"}}>
                <Text style={{fontWeight: "bold"}}>{following}</Text>
                <Text>Seguindo</Text>
            </View>
            
        </View>
        
    </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent:"center",
        justifyContent: "space-between",
        alignItems: "center"
        
    }

})
 

