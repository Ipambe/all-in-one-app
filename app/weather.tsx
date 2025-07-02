import { useWeather } from '@/hooks/useWeather'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Weather() {
  const { fetchWeather, lastUpdate, loading, weather } = useWeather()

  const getWeatherIcon = () => {
    if (!weather) return 'partly-sunny'

    const condition = weather.weather[0].main.toLowerCase()
    if (condition.includes('rain')) return 'rainy'
    if (condition.includes('cloud')) return 'cloudy'
    if (condition.includes('clear')) return 'sunny'
    return 'partly-sunny'
  }

  const getTemperatureColor = () => {
    if (!weather) return '#6B7280'

    const temp = weather.main.temp
    if (temp >= 30) return '#EF4444'
    if (temp >= 25) return '#F59E0B'
    if (temp >= 20) return '#10B981'
    return '#3B82F6'
  }

  return (
    <ScrollView className='flex-1 gap-6 p-6'>
      {weather && (
        <View className='gap-6'>
          <View className='rounded-lg border border-gray-200 bg-white p-4'>
            <View className='items-center'>
              <Text className='mb-2 text-xl font-bold text-gray-800'>
                {weather.name}
              </Text>
              <View className='mb-4 items-center'>
                <Ionicons
                  name={getWeatherIcon()}
                  size={80}
                  color={getTemperatureColor()}
                />
                <Text
                  className='mt-2 text-5xl font-bold'
                  style={{ color: getTemperatureColor() }}
                >
                  {Math.round(weather.main.temp)}°C
                </Text>
                <Text className='text-lg text-gray-600'>
                  {weather.weather[0].description}
                </Text>
                <Text className='text-gray-500'>
                  Sensación térmica: {Math.round(weather.main.feels_like)}°C
                </Text>
              </View>
            </View>
          </View>

          <View className='rounded-lg border border-gray-200 bg-white p-4'>
            <Text className='mb-4 text-lg font-bold text-gray-800'>
              Detalles del clima:
            </Text>

            <View className='gap-2'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Ionicons
                    name='water'
                    size={20}
                    color='#3B82F6'
                  />
                  <Text className='ml-2 text-gray-700'>Humedad</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {weather.main.humidity}%
                </Text>
              </View>

              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Ionicons
                    name='leaf'
                    size={20}
                    color='#10B981'
                  />
                  <Text className='ml-2 text-gray-700'>Viento</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {weather.wind.speed} m/s {weather.wind.deg}°
                </Text>
              </View>

              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Ionicons
                    name='speedometer'
                    size={20}
                    color='#8B5CF6'
                  />
                  <Text className='ml-2 text-gray-700'>Presión</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {weather.main.pressure} hPa
                </Text>
              </View>

              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Ionicons
                    name='eye'
                    size={20}
                    color='#6B7280'
                  />
                  <Text className='ml-2 text-gray-700'>Visibilidad</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {(weather.visibility || 0) / 1000} km
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
      <TouchableOpacity
        onPress={fetchWeather}
        disabled={loading}
        className={`my-4 items-center rounded-lg p-4 ${
          loading ? 'bg-gray-400' : 'bg-blue-500'
        }`}
      >
        <View className='flex-row items-center'>
          <Ionicons
            name='refresh'
            size={20}
            color='white'
          />
          <Text className='ml-2 text-lg font-semibold text-white'>
            {loading ? 'Actualizando...' : 'Actualizar Clima'}
          </Text>
        </View>
      </TouchableOpacity>
      {lastUpdate && (
        <View className='rounded-lg bg-gray-100 p-4'>
          <Text className='text-center text-gray-600'>
            Última actualización: {lastUpdate}
          </Text>
        </View>
      )}
    </ScrollView>
  )
}
