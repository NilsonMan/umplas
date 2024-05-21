<template>  
  <div class="artists-gallery">  
    <div class="artist-card" v-for="artist in artists" :key="artist.username">
      <!-- Aquí crea un elemento <div> con la clase artist-card para cada elemento del arreglo artists. El atributo v-for itera sobre la colección de datos. El atributo :key asigna un valor único a cada elemento iterado, se usa el username de cada artista como clave. -->
      <img :src="artist.profileImage" :alt="artist.name" class="thumbnail" />
      <!-- Esta parte crea un elemento <img> que muestra la imagen de perfil de cada artista -->
      <h3>{{ artist.name }}</h3> <!-- Esta parte crea un encabezado de nivel 3 con el nombre de cada artista -->
      <router-link :to="'/artists/' + artist.username" class="nav-button">Ver más</router-link>
      <!-- Esta parte crea un elemento router-link que permite navegar a otra ruta de la aplicación. -->
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'; // Importa el módulo axios

export default {
  name: 'ArtistsGallery',
  data() {
    return {
      artists: [], // Esta propiedad define un arreglo vacío artists que se usará para almacenar la información de los artistas que se obtengan de la API de Unsplash
    };
  },
  mounted() {
    this.fetchArtistsInfo();
  },
  methods: {
    async fetchArtistsInfo() { // Se define una función asíncrona fetchArtistsInfo que se encarga de obtener la información de los artistas de la API
      const artistURLs = [ // Es un arreglo que contiene las URLs de la API para obtener la información de cada artista
        'https://api.unsplash.com/users/girlwithredhat/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/neom/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/robertarnar/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/zonalsublime/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/ilona_a/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/stephanlouis/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/grievek1610begur/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/mak_jp/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
        'https://api.unsplash.com/users/alexandravutof/?client_id=y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
      ];

      try {
        const promises = artistURLs.map(async (url) => { // Contiene las promesas resultantes de aplicar una función asíncrona a cada elemento del arreglo artistURLs
          const response = await axios.get(url);
          const artist = response.data; // Es el objeto que contiene la información del artista que se obtiene de la propiedad data del objeto response

          this.artists.push({
            username: artist.username, // Asigna el valor de la propiedad username del objeto artist a la propiedad username del objeto que se agrega al arreglo this.artists
            name: artist.name, // Asigna el valor de la propiedad name del objeto artist a la propiedad name del objeto que se agrega al arreglo this.artists
            profileImage: artist.profile_image.large, // profile_image es un objeto que contiene las URLs de las imágenes de perfil del artista en diferentes tamaños
          });
        });

        await Promise.all(promises); // Esta línea espera a que se resuelvan todas las promesas que contiene el arreglo promises
      } catch (error) { // Inicia un bloque catch, que se usa para manejar una excepción que se pueda lanzar en el bloque try
        console.error('Error fetching artist info', error);
      }
    },
  },
};
</script>
  
<style scoped>
/* Estilos para las tarjetas de los artistas */
.artists-gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-bottom: 100px;
 

  /* Agregado para dejar espacio en la parte inferior */
}

.artist-card {
  width: 200px;
  margin: 10px;
  text-align: center;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.3s;
  border: 3px solid black;
}

.artist-card:hover .thumbnail {
  transform: scale(1.1);
 
}

.artists-gallery.loaded {
  opacity: 1;
  
}</style>