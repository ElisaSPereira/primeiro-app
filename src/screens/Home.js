import { ScrollView, View } from 'react-native';
import Header from '../components/Header';
import Stories from '../components/Stories';
import Post from '../components/Post'
import Perfil from '../assets/foto_mulher.jpg'


export default function Home() {

  return (
    <ScrollView style={{ marginVertical: 32, marginHorizontal: 16 }}>
      <Header />
      <Stories />
      <Post
        profileImage={Perfil}
        postImage={Perfil}
        profileName="Fulana da Silva"
        description="lorem lorem lorem, lorem lorem lorem, lorem lorem lorem, lorem lorem lorem"
      />

      <Post
        profileImage={Perfil}
        postImage={Perfil}
        profileName="Fulana da Silva"
        description="lorem lorem lorem, lorem lorem lorem, lorem lorem lorem, lorem lorem lorem"
      />

      <Post
        profileImage={Perfil}
        postImage={Perfil}
        profileName="Fulana da Silva"
        description="lorem lorem lorem, lorem lorem lorem, lorem lorem lorem, lorem lorem lorem"
      />

    </ScrollView>


  );
}
