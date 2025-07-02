import { CustomDrawerContent } from '@/components/DrawerHeader'
import { Ionicons } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2563eb'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          drawerStyle: {
            backgroundColor: '#f9fafb'
          },
          drawerActiveTintColor: '#2563eb',
          drawerInactiveTintColor: '#6b7280'
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Inicio',
            title: 'Herramientas Multiusos',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='home'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='gender'
          options={{
            drawerLabel: 'Predicción de Género',
            title: 'Predicción de Género',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='person'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='age'
          options={{
            drawerLabel: 'Estimación de Edad',
            title: 'Estimación de Edad',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='time'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='universities'
          options={{
            drawerLabel: 'Universidades',
            title: 'Búsqueda de Universidades',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='school'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='weather'
          options={{
            drawerLabel: 'Clima RD',
            title: 'Clima República Dominicana',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='partly-sunny'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='pokemon'
          options={{
            drawerLabel: 'Pokémon',
            title: 'Información Pokémon',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='game-controller'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='news'
          options={{
            drawerLabel: 'Noticias',
            title: 'Noticias WordPress',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='newspaper'
                size={size}
                color={color}
              />
            )
          }}
        />
        <Drawer.Screen
          name='about'
          options={{
            drawerLabel: 'Sobre el Desarrollador',
            title: 'Sobre el Desarrollador',
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name='information-circle'
                size={size}
                color={color}
              />
            )
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}
