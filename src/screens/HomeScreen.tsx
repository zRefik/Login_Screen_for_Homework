// src/screens/HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

// Gelen verinin tipini tanıtıyoruz (TypeScript raconu)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Sayfa açılınca çalışacak kod bloğu
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data); // Veriyi state'e at
      console.log(response.data); // Konsola yazdır (hoca istemiş)
    } catch (error) {
      console.error('Veri çekemedik usta:', error);
    } finally {
      setLoading(false); // Yüklenme bitti
    }
  };

  // Listede gösterilecek her bir elemanın tasarımı
  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      {/* Başlık kalın olacak */}
      <Text style={styles.title}>{item.title}</Text>
      {/* İçerik normal */}
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()} // Her elemana özel kimlik
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold', // Hoca bunu özellikle istemiş
    marginBottom: 5,
    color: '#333'
  },
  body: {
    fontSize: 14,
    color: '#666'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center', // Dikeyde ortalar
    alignItems: 'center',     // Yatayda ortalar
  },

  
});

export default HomeScreen;