# 📱 App Herramientas Multiusos

Esta aplicación móvil fue desarrollada como parte de una tarea académica. Está construida utilizando **Expo** y ofrece múltiples funcionalidades, integrando distintas APIs públicas. Su propósito es demostrar habilidades de consumo de APIs, diseño de interfaces móviles y estructuración de proyectos.

## 🔧 Funcionalidades principales

### 1. Vista de Bienvenida

- Muestra una imagen de una caja de herramientas, representando que la aplicación ofrece múltiples utilidades.

### 2. Predicción de Género

- Solicita el **nombre de una persona**.
- Usa la API: [`genderize.io`](https://api.genderize.io/?name=irma)
- Según el género detectado:
  - Muestra un color **azul** para masculino.
  - Muestra un color **rosado** para femenino.

### 3. Estimación de Edad

- Solicita un **nombre**.
- Usa la API: [`agify.io`](https://api.agify.io/?name=meelad)
- Muestra:
  - La **edad estimada**.
  - Una imagen representativa según la edad:
    - Joven: < 18 años
    - Adulto: 18 a 59 años
    - Anciano: 60+ años

### 4. Búsqueda de Universidades

- Permite ingresar el **nombre de un país** (en inglés).
- Usa la API: [`Hipolabs`](http://universities.hipolabs.com/search?country=Dominican+Republic)
- Muestra:
  - Nombre de cada universidad.
  - Dominio web.
  - Enlace al sitio oficial.

### 5. Clima en República Dominicana

- Visualiza el **estado actual del clima** en la República Dominicana en tiempo real.

### 6. Información de Pokémon

- Solicita el **nombre de un Pokémon**.
- Usa la API: [`PokeAPI`](https://pokeapi.co/api/v2/pokemon/pikachu)
- Muestra:
  - Foto del Pokémon.
  - Experiencia base.
  - Habilidades.
  - Sonido característico.

### 7. Noticias desde WordPress

- Usa la API: [`TED blog`](https://blog.ted.com/wp-json/wp/v2/posts)
- Muestra el **logo** de un sitio hecho con WordPress.
- Utiliza la API de WordPress REST.
- Muestra los **titulares y resúmenes** de las 3 últimas publicaciones.
- Cada noticia incluye un enlace para acceder al artículo original.

### 8. Acerca de

- Una sección personal que incluye:
  - Foto del desarrollador.
  - Nombre completo.
  - Datos de contacto profesional para futuras oportunidades laborales.
