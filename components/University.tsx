import { University as UniversityType } from '@/types/University'
import { Ionicons } from '@expo/vector-icons'
import { Alert, Linking, Text, TouchableOpacity, View } from 'react-native'

export const University = ({ item }: { item: UniversityType }) => (
  <View className='mb-4 rounded-lg border border-gray-200 bg-white p-4'>
    <Text className='mb-2 text-lg font-bold text-gray-800'>{item.name}</Text>

    {item['state-province'] && (
      <Text className='mb-2 text-gray-600'>
        📍 {item['state-province']}, {item.country}
      </Text>
    )}

    <View className='space-y-2'>
      <View>
        <Text className='font-semibold text-gray-700'>Dominio:</Text>
        <Text className='text-gray-600'>{item.domains[0]}</Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          Linking.openURL(item.web_pages[0]).catch(() => {
            Alert.alert('Error', 'No se pudo abrir el enlace')
          })
        }
        className='mt-3 items-center rounded-lg bg-indigo-500 p-3'
      >
        <View className='flex-row items-center'>
          <Ionicons
            name='link'
            size={16}
            color='white'
          />
          <Text className='ml-2 font-semibold text-white'>
            Visitar sitio web
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
)
