import { University as UniversityCard } from '@/components/University'
import { University as UniversityType } from '@/types/University'
import { useState } from 'react'
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function Universities() {
  const [country, setCountry] = useState('')
  const [universities, setUniversities] = useState<UniversityType[]>([])
  const [loading, setLoading] = useState(false)

  const searchUniversities = async () => {
    if (!country.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre de un país en inglés')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        `http://universities.hipolabs.com/search?country=${encodeURIComponent(country.trim())}`
      )
      const data = await response.json()

      if (data.length > 0) {
        setUniversities(data)
      } else {
        Alert.alert(
          'Sin resultados',
          'No se encontraron universidades para este país'
        )
        setUniversities([])
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servicio')
    } finally {
      setLoading(false)
    }
  }

  return (
    <View className='flex-1 gap-10 bg-gray-50 p-6'>
      <View className='flex-row items-end justify-between gap-4'>
        <View className='flex-1'>
          <Text className='mb-2 text-lg font-semibold text-gray-700'>
            País (en inglés):
          </Text>
          <TextInput
            value={country}
            onChangeText={setCountry}
            onSubmitEditing={searchUniversities}
            placeholder='Ej: Dominican Republic, Spain, etc.'
            className='rounded-lg border border-gray-300 bg-white p-4 text-lg'
          />
        </View>

        <TouchableOpacity
          onPress={searchUniversities}
          disabled={loading}
          className={`items-center rounded-lg p-4 ${
            loading ? 'bg-gray-400' : 'bg-indigo-500'
          }`}
        >
          <Text className='text-lg font-semibold text-white'>
            {loading ? 'Buscando...' : 'Buscar Universidades'}
          </Text>
        </TouchableOpacity>
      </View>

      {universities.length > 0 && (
        <View className='flex-1'>
          <Text className='mb-2 text-xl font-semibold text-gray-700'>
            Resultados ({universities.length} universidades):
          </Text>

          <FlatList
            data={universities}
            renderItem={UniversityCard}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            showsVerticalScrollIndicator={false}
            style={{ flex: 1 }}
          />
        </View>
      )}
    </View>
  )
}
