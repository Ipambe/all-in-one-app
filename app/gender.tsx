import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface GenderResponse {
  count: number
  name: string
  gender: 'male' | 'female'
  probability: number
}

export default function Gender() {
  const [name, setName] = useState('')
  const [result, setResult] = useState<GenderResponse | null>(null)
  const [loading, setLoading] = useState(false)

  const predictGender = async () => {
    if (!name.trim()) return

    setLoading(true)
    try {
      const response = await fetch(
        `https://api.genderize.io/?name=${name.trim()}`
      )
      const data = await response.json()

      if (data.gender) {
        setResult(data)
      } else {
        Alert.alert(
          'Sin resultados',
          'No se pudo determinar el género para este nombre'
        )
        setResult(null)
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servicio')
    } finally {
      setLoading(false)
    }
  }

  const getGenderColor = () => {
    if (!result) return '#6B7280'
    return result.gender === 'male' ? '#3B82F6' : '#EC4899'
  }

  const getGenderIcon = () => {
    if (!result) return 'person'
    return result.gender === 'male' ? 'man' : 'woman'
  }

  const getGenderText = () => {
    if (!result) return ''
    return result.gender === 'male' ? 'Masculino' : 'Femenino'
  }

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
            onSubmitEditing={predictGender}
            placeholder='Ej: María, Juan, etc.'
            className='rounded-lg border border-gray-300 bg-white p-4 text-lg'
          />
        </View>
        <TouchableOpacity
          onPress={predictGender}
          disabled={loading}
          className='items-center rounded-lg p-4'
          style={{
            backgroundColor: loading ? '#9CA3AF' : getGenderColor()
          }}
        >
          <Text className='text-lg font-semibold text-white'>
            {loading ? 'Pensando...' : 'Predecir Género'}
          </Text>
        </TouchableOpacity>
      </View>

      {result && (
        <View className='mt-6 rounded-lg border border-gray-200 bg-white p-6'>
          <View className='items-center'>
            <View
              className='mb-4 rounded-full p-4'
              style={{ backgroundColor: getGenderColor() }}
            >
              <Ionicons
                name={getGenderIcon()}
                size={50}
                color='white'
              />
            </View>

            <Text className='mb-2 text-2xl font-bold text-gray-800'>
              {result.name}
            </Text>

            <Text
              className='mb-4 text-xl font-semibold'
              style={{ color: getGenderColor() }}
            >
              {getGenderText()}
            </Text>

            <View className='space-y-2'>
              <Text className='text-center text-gray-600'>
                Probabilidad: {(result.probability * 100).toFixed(1)}%
              </Text>
              <Text className='text-center text-gray-600'>
                Basado en {result.count.toLocaleString()} registros
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  )
}
