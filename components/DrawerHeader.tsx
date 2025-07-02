import { Ionicons } from '@expo/vector-icons'
import { DrawerItemList } from '@react-navigation/drawer'
import { Text, View } from 'react-native'

export const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View className='bg-blue-600 p-6 pb-4 pt-12'>
        <View className='items-center'>
          <View className='mb-3 rounded-full bg-white p-3'>
            <Ionicons
              name='construct'
              size={30}
              color='#2563eb'
            />
          </View>
          <Text className='text-xl font-bold text-white'>All in One App</Text>
          <Text className='mt-1 text-sm text-blue-200'>
            La aplicación multiusos
          </Text>
        </View>
      </View>

      <View className='mt-4 flex-1 gap-2 px-2'>
        <DrawerItemList {...props} />
      </View>
    </View>
  )
}
