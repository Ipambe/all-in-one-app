import { pokemonColors } from '@/constans/pokemonColor'
import { Pokemon } from '@/types/Pokemon'
import { createAudioPlayer } from 'expo-audio'
import { useState } from 'react'
import { Alert } from 'react-native'

export function usePokemon() {
  const [pokemonName, setPokemonName] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)
  const [loading, setLoading] = useState(false)

  const searchPokemon = async () => {
    if (!pokemonName.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre de un Pokémon')
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase().trim()}`
      )

      if (!response.ok) throw new Error('Pokémon no encontrado')

      const data = await response.json()
      setPokemon(data)
    } catch {
      Alert.alert(
        'Error',
        'No se encontró el Pokémon. Verifica el nombre e intenta de nuevo.'
      )
      setPokemon(null)
    } finally {
      setLoading(false)
    }
  }

  const playPokemonSound = async () => {
    if (!pokemon?.cries?.latest) {
      Alert.alert(
        'Audio no disponible',
        'No hay sonido disponible para este Pokémon'
      )
      return
    }

    try {
      const player = createAudioPlayer({
        uri: pokemon.cries.latest || pokemon.cries.legacy
      })
      player.play()
    } catch {
      Alert.alert('Error', 'No se pudo abrir el sonido')
    }
  }

  const getTypeColor = () =>
    pokemon ? pokemonColors[pokemon.types[0].type.name] : '#6B7280'

  return {
    pokemonName,
    setPokemonName,
    pokemon,
    loading,
    searchPokemon,
    playPokemonSound,
    getTypeColor
  }
}
