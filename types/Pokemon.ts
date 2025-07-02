import { pokemonColors } from "@/constans/pokemonColor"

export interface Pokemon {
  id: number
  name: string
  height: number
  weight: number
  base_experience: number
  sprites: {
    front_default: string
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  abilities: Array<{
    ability: {
      name: string
    }
  }>
  cries?: {
    latest?: string
    legacy?: string
  }
  types: {
    slot: number
    type: {
      url: string
      name: keyof typeof pokemonColors
    }
  }[]
}