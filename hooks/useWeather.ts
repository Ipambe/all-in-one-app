import { weatherApi } from '@/constans/weatherApi'
import { Weather as WeatherType } from '@/types/Weather'
import { useEffect, useState } from 'react'
import { Alert } from 'react-native'

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherType | null>(null)
  const [loading, setLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<string>('')

  const fetchWeather = async () => {
    setLoading(true)
    try {
      const response = await fetch(weatherApi)
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API')
      }

      const data = await response.json()
      setWeather(data)
      setLastUpdate(new Date().toLocaleTimeString())
    } catch (error) {
      Alert.alert(
        'Error',
        'No se pudo obtener los datos del clima. Verifique su conexión a internet y que la API key esté configurada correctamente.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [])

  return {
    weather,
    loading,
    lastUpdate,
    fetchWeather
  }
}
