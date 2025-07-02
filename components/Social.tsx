import { Ionicons } from '@expo/vector-icons'
import { Linking, Text, TouchableOpacity } from 'react-native'

interface SocialProps {
  icon: any
  text: string
  url: string
}

export const Social = ({ icon, text, url }: SocialProps) => {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(url)}
      className='flex-row items-center rounded-lg bg-gray-50 p-3'
    >
      <Ionicons
        name={icon}
        size={20}
        color='#0A66C2'
      />
      <Text className='ml-3 flex-1 text-lg text-gray-700'>{text}</Text>
      <Ionicons
        name='open'
        size={16}
        color='#3B82F6'
      />
    </TouchableOpacity>
  )
}
