import { pokemonColors } from '@/constans/pokemonColor'
import { usePokemon } from '@/hooks/usePokemon'
import { Ionicons } from '@expo/vector-icons'
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

export default function Pokemon() {
  const {
    getTypeColor,
    loading,
    playPokemonSound,
    pokemon,
    pokemonName,
    searchPokemon,
    setPokemonName
  } = usePokemon()
  return (
    <ScrollView className='flex-1 bg-gray-50 p-6'>
      <View className='mb-4 flex-row items-end justify-between gap-4'>
        <View className='flex-1'>
          <Text className='mb-2 text-lg font-semibold text-gray-700'>
            Nombre del Pokémon:
          </Text>
          <TextInput
            value={pokemonName}
            onChangeText={setPokemonName}
            onSubmitEditing={searchPokemon}
            placeholder='Ej: pikachu, charizard, etc.'
            className='rounded-lg border border-gray-300 bg-white p-4 text-lg'
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          onPress={searchPokemon}
          disabled={loading}
          className='items-center rounded-lg p-4'
          style={{ backgroundColor: loading ? '#9ca3af' : getTypeColor() }}
        >
          <Text className='text-lg font-semibold text-white'>
            {loading ? 'Buscando...' : 'Buscar Pokémon'}
          </Text>
        </TouchableOpacity>
      </View>

      {pokemon && (
        <View className='gap-4'>
          <View className='rounded-lg border border-gray-200 bg-white p-6'>
            <View className='items-center'>
              <View
                className='mb-4 aspect-square size-14 items-center justify-center rounded-full p-2'
                style={{ backgroundColor: getTypeColor() }}
              >
                <Text className='text-lg font-bold text-white'>
                  #{pokemon.id}
                </Text>
              </View>

              <Text className='mb-4 text-2xl font-bold capitalize text-gray-800'>
                {pokemon.name}
              </Text>

              <Image
                source={{
                  uri:
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites.front_default
                }}
                style={{ width: 200, height: 200 }}
                className='mb-4'
              />

              <TouchableOpacity
                onPress={playPokemonSound}
                className='mb-4 items-center rounded-lg p-3'
                style={{ backgroundColor: getTypeColor() }}
              >
                <View className='flex-row items-center'>
                  <Ionicons
                    name='volume-high'
                    size={20}
                    color='white'
                  />
                  <Text className='ml-2 font-semibold text-white'>
                    Escuchar sonido
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View className='rounded-lg border border-gray-200 bg-white p-6'>
            <Text className='mb-4 text-lg font-bold text-gray-800'>
              Estadísticas
            </Text>

            <View className='gap-2'>
              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Text className='ml-2 text-gray-700'>Experiencia Base</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {pokemon.base_experience} XP
                </Text>
              </View>

              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Text className='ml-2 text-gray-700'>Altura</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {(pokemon.height / 10).toFixed(1)} m
                </Text>
              </View>

              <View className='flex-row items-center justify-between'>
                <View className='flex-row items-center'>
                  <Text className='ml-2 text-gray-700'>Peso</Text>
                </View>
                <Text className='font-semibold text-gray-800'>
                  {(pokemon.weight / 10).toFixed(1)} kg
                </Text>
              </View>
            </View>
          </View>

          <View className='rounded-lg border border-gray-200 bg-white p-6'>
            <Text className='mb-4 text-lg font-bold text-gray-800'>Tipos</Text>
            <View className='flex-row flex-wrap gap-2'>
              {pokemon.types.map((type, index) => (
                <View
                  key={index}
                  className='rounded-full px-3 py-2'
                  style={{
                    backgroundColor: pokemonColors[type.type.name] + '20'
                  }}
                >
                  <Text
                    className='font-semibold capitalize'
                    style={{ color: pokemonColors[type.type.name] }}
                  >
                    {type.type.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View className='rounded-lg border border-gray-200 bg-white p-6'>
            <Text className='mb-4 text-lg font-bold text-gray-800'>
              Habilidades
            </Text>

            <View className='flex-row flex-wrap gap-2'>
              {pokemon.abilities.map((ability, index) => (
                <View
                  key={index}
                  className='rounded-full px-3 py-2'
                  style={{ backgroundColor: getTypeColor() + '20' }}
                >
                  <Text
                    className='font-semibold capitalize'
                    style={{ color: getTypeColor() }}
                  >
                    {ability.ability.name.replace('-', ' ')}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  )
}
