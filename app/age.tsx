import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

interface AgeResponse {
  name: string
  age: number
  count: number
}

export default function Age() {
  const [name, setName] = useState('')
  const [result, setResult] = useState<AgeResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const predictAge = async () => {
    if (!name.trim()) return

    setLoading(true)
    try {
      const response = await fetch(`https://api.agify.io/?name=${name.trim()}`)
      const data = await response.json()

      if (data.age) {
        setResult(data)
      } else {
        Alert.alert(
          'Sin resultados',
          'No se pudo determinar la edad para este nombre'
        )
        setResult(null)
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servicio')
    } finally {
      setLoading(false)
    }
  }

  const getAgeCategory = () => {
    if (!result) return { category: '', color: '#9CA3AF', icon: '' }

    if (result.age < 18) {
      return {
        category: 'Joven',
        color: '#10B981',
        icon: 'happy',
        uri: 'https://m.media-amazon.com/images/S/pv-target-images/a100bb9ae23c704a967fa084fe5af835c670812d4ae7e69d595ba4b23ba75631._SX1080_FMjpg_.jpg'
      }
    } else if (result.age >= 18 && result.age < 60) {
      return {
        category: 'Adulto',
        color: '#3B82F6',
        icon: 'person',
        uri: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg'
      }
    } else {
      return {
        category: 'Anciano',
        color: '#8B5CF6',
        icon: 'man',
        uri: 'https://www.recoleta.edu.pe/blog/wp-content/uploads/2025/04/PORTADA-6.jpg'
      }
    }
  }

  const ageInfo = getAgeCategory()

  return (
    <View className='flex-1 bg-gray-50 p-6'>
      <View className='flex-row items-end justify-between gap-4'>
        <View className='flex-1'>
          <Text className='mb-2 text-lg font-semibold text-gray-500'>
            Nombre:
          </Text>
          <TextInput
            value={name}
            onChangeText={(t) => setName(t.trim())}
            onSubmitEditing={predictAge}
            placeholder='Ej: Carlos, Ana, etc.'
            className='rounded-lg border border-gray-300 bg-white p-4 text-lg'
          />
        </View>

        <TouchableOpacity
          onPress={predictAge}
          disabled={loading}
          className='items-center rounded-lg p-4'
          style={{
            backgroundColor: loading ? '#9CA3AF' : ageInfo.color
          }}
        >
          <Text className='text-lg font-semibold text-white'>
            {loading ? 'Pensando...' : 'Estimar Edad'}
          </Text>
        </TouchableOpacity>
      </View>

      {result && (
        <View className='mt-6 rounded-xl border border-gray-200 bg-white pb-8 pt-2'>
          <Image
            source={{
              uri: ageInfo.uri
            }}
            className='mb-4 aspect-video w-full rounded-lg'
          />

          <View className='items-center'>
            <View className='mb-4 rounded-full bg-purple-500 p-4'>
              <Ionicons
                name={ageInfo.icon as any}
                size={50}
                color='white'
              />
            </View>

            <Text className='mb-2 text-2xl font-bold text-gray-800'>
              {result.name}
            </Text>

            <Text
              className='mb-2 text-4xl font-bold'
              style={{ color: ageInfo.color }}
            >
              {result.age} años
            </Text>

            <Text
              className='mb-4 text-xl font-semibold'
              style={{ color: ageInfo.color }}
            >
              {ageInfo.category}
            </Text>

            <View className='space-y-2'>
              <Text className='text-center text-gray-600'>
                Edad promedio estimada
              </Text>
              <Text className='text-center text-gray-600'>
                Basado en {result.count.toLocaleString()} registros
              </Text>
            </View>

            <View className='mt-4 rounded-lg bg-gray-100 p-4'>
              <Text className='text-center text-gray-700'>
                {result.age < 18 && 'Personas menores de 18 años'}
                {result.age >= 18 &&
                  result.age < 60 &&
                  'Personas entre 18 y 59 años'}
                {result.age >= 60 && 'Personas de 60 años o más'}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
