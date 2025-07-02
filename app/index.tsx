import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import '../global.css'

export default function Index() {
  return (
    <View className='flex-1 gap-4 bg-gray-50 p-4'>
      <Image
        className='h-72 w-full rounded-lg'
        source={{
          uri: 'https://img.freepik.com/fotos-premium/caja-herramientas-bien-organizada-llena-herramientas-esenciales_950002-214759.jpg'
        }}
      />
      <View className='justify-center gap-4'>
        <View className='flex-row gap-4 space-x-4'>
          <Link
            href='/gender'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-pink-600 p-4'>
              <Ionicons
                name='person'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Predicción de Género
              </Text>
            </TouchableOpacity>
          </Link>

          <Link
            href='/age'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-purple-600 p-4'>
              <Ionicons
                name='time'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Estimación de Edad
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className='flex-row gap-4 space-x-4'>
          <Link
            href='/universities'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-indigo-600 p-4'>
              <Ionicons
                name='school'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Universidades
              </Text>
            </TouchableOpacity>
          </Link>

          <Link
            href='/weather'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-blue-600 p-4'>
              <Ionicons
                name='partly-sunny'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Clima RD
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View className='flex-row gap-4 space-x-4'>
          <Link
            href='/pokemon'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-orange-600 p-4'>
              <Ionicons
                name='game-controller'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Pokémon
              </Text>
            </TouchableOpacity>
          </Link>

          <Link
            href='/news'
            asChild
            className='flex-1'
          >
            <TouchableOpacity className='items-center gap-2 rounded-lg bg-green-600 p-4'>
              <Ionicons
                name='newspaper'
                size={30}
                color='white'
              />
              <Text className='text-center text-xl font-semibold text-white'>
                Noticias
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Link
          href='/about'
          asChild
        >
          <TouchableOpacity className='items-center gap-2 rounded-lg bg-gray-600 p-4'>
            <Ionicons
              name='information-circle'
              size={30}
              color='white'
            />
            <Text className=' font-semibold text-white'>
              Acerca del Desarrollador
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}
