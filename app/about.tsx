import { Social } from '@/components/Social'
import { Image, ScrollView, Text, View } from 'react-native'

export default function About() {
  return (
    <ScrollView className='flex-1 bg-gray-50 p-6'>
      <View className='gap-4'>
        <View className='items-center rounded-lg border border-gray-200 bg-white p-6'>
          <View className='mb-4 size-52 items-center justify-center rounded-full border-2 border-blue-500 p-1'>
            <Image
              source={{
                uri: 'https://media.discordapp.net/attachments/1084938229662355558/1387643065434378323/1750910277541.jpg?ex=6865570f&is=6864058f&hm=93aabd3ffb20c17d4299cc9ce68f9c53e7934562d8e4155259f5c58c6f8fe11e&=&format=webp&width=828&height=828'
              }}
              className='h-full w-full rounded-full'
            />
          </View>
          <Text className='text-2xl font-bold text-gray-800'>
            Rafael Adolfo Rosa
          </Text>
          <Text className='text-lg italic text-gray-600'>
            Desarrollador Móvil, Web, y Backend
          </Text>
        </View>

        <View className='rounded-lg border border-gray-200 bg-white p-6'>
          <Text className='mb-4 text-xl font-bold text-gray-800'>
            Sobre mí:
          </Text>
          <View className='gap-2'>
            <Text className='text-lg text-gray-700'>
              Soy un estudiante de termino de la carrera de Desarrollo de
              Software y estudiante autodidacta, con un marcado interés en el
              desarrollo web.
            </Text>
            <Text className='text-lg text-gray-700'>
              Suelo hacer Side-Projects enfocados en tecnologías que me gustaría
              aprender y me enfoco mucho en seguir buenas prácticas, por lo que
              mi experiencia es bastante práctica.
            </Text>
          </View>
        </View>

        <View className='rounded-lg border border-gray-200 bg-white p-6'>
          <Text className='mb-4 text-xl font-bold text-gray-800'>
            Contáctame:
          </Text>

          <View className='flex-col gap-4'>
            <Social
              icon='mail'
              text='adolforosa.dev@gmail.com'
              url='mailto:adolforosa.dev@gmail.com'
            />
            <Social
              icon='logo-linkedin'
              text='LinkedIn'
              url='https://www.linkedin.com/in/adolfo-rosa/'
            />
            <Social
              icon='logo-github'
              text='GitHub'
              url='https://github.com/Ipambe'
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
