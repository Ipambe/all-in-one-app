import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

interface Post {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  link: string
  date: string
}

const WORDPRESS_API_URL = 'https://blog.ted.com/wp-json/wp/v2/posts?per_page=3'
const TED_LOGO_URI =
  'https://1000logos.net/wp-content/uploads/2020/09/TED-Logo.png'

export default function News() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(false)

  const fetchNews = async () => {
    setLoading(true)
    try {
      const response = await fetch(WORDPRESS_API_URL)

      const data = await response.json()
      setPosts(data)
    } catch (error) {
      Alert.alert(
        'Error',
        'Ocurrió un error al cargar las noticias. Por favor, inténtalo de nuevo más tarde.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '').trim()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <ScrollView className='flex-1 bg-gray-50 p-6'>
      <Image
        source={{ uri: TED_LOGO_URI }}
        className='mb-6 aspect-video w-full rounded-lg border border-gray-200'
      />
      <TouchableOpacity
        onPress={fetchNews}
        disabled={loading}
        className={`mb-6 items-center rounded-lg p-4 ${
          loading ? 'bg-gray-400' : 'bg-green-500'
        }`}
      >
        <View className='flex-row items-center'>
          <Ionicons
            name='refresh'
            size={20}
            color='white'
          />
          <Text className='ml-2 text-lg font-semibold text-white'>
            {loading ? 'Cargando...' : 'Actualizar Noticias'}
          </Text>
        </View>
      </TouchableOpacity>

      {posts.length > 0 && (
        <View className='mb-20 gap-6'>
          <Text className='text-lg font-semibold text-gray-700'>
            Últimas 3 publicaciones:
          </Text>

          {posts.map((post) => (
            <View
              key={post.id}
              className='gap-2 rounded-lg border border-gray-200 bg-white p-6'
            >
              <Text className='text-sm text-gray-500'>
                {formatDate(post.date)}
              </Text>

              <Text className='text-xl font-bold text-gray-800'>
                {stripHtml(post.title.rendered)}
              </Text>

              <Text className='leading-6 text-gray-600'>
                {stripHtml(post.excerpt.rendered).substring(0, 200)}...
              </Text>

              <TouchableOpacity
                onPress={() => Linking.openURL(post.link)}
                className='items-center rounded-lg bg-green-500 p-3'
              >
                <View className='flex-row items-center'>
                  <Ionicons
                    name='open'
                    size={16}
                    color='white'
                  />
                  <Text className='ml-2 font-semibold text-white'>
                    Leer artículo completo
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  )
}
