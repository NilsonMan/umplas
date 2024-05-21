<template>
  <div class="artist-details">
    <div v-if="artist">
      <header>
        <!-- Título que muestra el nombre del artista -->
        <h2>{{ artist.name }} - Fotos</h2>
        <!-- Imagen que muestra la foto de perfil del artista -->
        <img :src="artist.profile_image.large" :alt="artist.name" class="profile-image" />
        <!-- Contenedor de la biografía con fondo blanco transparente -->
        <div class="bio-container">
          <!-- Párrafo que muestra la biografía del artista -->
          <p>{{ artist.bio }}</p>
        </div>
      </header>
      <!-- Fotos del artista -->
      <div class="photo-container">
        <!-- Se repite por cada foto del artista, usando v-for -->
        <div v-for="photo in artist.photos" :key="photo.id" class="photo-card">
          <div class="photo-wrapper" @click="openPhoto(photo)">
            <img :src="photo.urls.regular" :alt="photo.alt_description" class="photo-thumbnail" />
          </div>
        </div>
      </div>
      <div v-if="selectedPhoto" class="modal" @click="closeModal">
        <!-- Esto tiene el contenido del modal -->
        <div class="modal-content">
          <!-- Botón de cerrar el modal -->
          <span class="close" @click="closeModal">&times;</span>
          <!-- Muestra la foto seleccionada en el modal -->
          <img :src="selectedPhoto.urls.regular" :alt="selectedPhoto.alt_description" class="modal-photo" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'; // Importa el módulo axios

export default {
  name: 'ArtistDetails',
  data() {
    return { // Define la función que devuelve los datos del componente, que se pueden usar en el template data
      artist: null, // Define la variable artist, que almacena la información del artista
      selectedPhoto: null, // Define la variable selectedPhoto, que almacena la foto seleccionada por el usuario
    };
  }, // Define el ciclo de vida del componente, que se ejecuta cuando el componente se monta en el DOM
  mounted() {
    this.fetchArtistDetails(); // Llama a la función que obtiene los detalles del artista
  },
  methods: { // Define los métodos del componente, que se pueden usar en el template o en el script
    async fetchArtistDetails() { // Define la función asíncrona que obtiene los detalles del artista, usando la librería axios async
      try { // Usa un bloque try-catch para manejar posibles errores
        const response = await axios.get(`https://api.unsplash.com/users/${this.$route.params.username}`, {
          params: {
            client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
            per_page: 30,
          },
        });

        this.artist = response.data; // Asigna el valor de la propiedad data de la respuesta a la variable artist
      } catch (error) {
        console.error('Error fetching artist details', error);
      }
    },
    openPhoto(photo) { // Define la función que abre la foto seleccionada por el usuario
      this.selectedPhoto = photo;
    },
    closeModal() { // Define la función que cierra el modal de la foto seleccionada
      this.selectedPhoto = null;
    },
  },
};
</script>

<style scoped> /* Estilo que se aplica solo al componente actual, usando el atributo scoped  */
 .artist-details {
   max-width: 800px;
   margin: 0 auto;
 }

 header {
   text-align: center;
 }

 .profile-image {
   width: 150px;
   height: 150px;
   border-radius: 50%;
   margin-top: 10px;
   margin-bottom: 10px;
 }

 h2 {
   font-size: 2rem;
   margin-bottom: 20px;
 }

 .photo-container {
   display: flex;
   flex-wrap: nowrap;

 }

 .photo-card {
   flex: 0 0 auto;
   width: 33.33%;
   margin-right: 30px;
 }

 .photo-card:last-child {
   margin-right: 0;
 }

 .photo-wrapper {
   cursor: pointer;
 }

 .photo-thumbnail {
   max-width: 100%;
   height: auto;
   border-radius: 8px;
   transition: transform 0.3s;
 }

 .photo-thumbnail:hover {
   transform: scale(1.1);
 }

 .modal {
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.7);
 }

 .modal-content {
   position: relative;
   background: white;
   padding: 20px;
   border-radius: 10px;
   text-align: center;
 }

 .modal-photo {
   width: 100%;
   max-height: 80vh;
   object-fit: contain;
 }

 .close {
   position: absolute;
   top: 10px;
   right: 10px;
   font-size: 24px;
   color: white;
   cursor: pointer;
 }
 p {
    font-size: 2.5rem; /* Tamaño del texto de la biografía */
    color: #333; /* Color del texto de la biografía (puedes cambiarlo según tus preferencias) */
    margin-bottom: 20px; /* Espacio inferior */
  }
  
  /* Estilos para el contenedor de la biografía */
  .bio-container {
    background-color: rgba(255, 255, 255, 0.8); /* Blanco con opacidad (ajusta el último valor según necesites) */
    padding: 15px; /* Añade espacio interno para separar del contenido */
    border-radius: 10px; /* Bordes redondeados */
    margin-bottom: 20px; /* Espacio inferior */
  }

  /* Estilos para la biografía dentro del contenedor */
  .bio-container p {
    font-size: 1.7rem;
    color: #333;
    margin: 0; /* Elimina el margen del párrafo para evitar duplicar el espacio inferior */
  }
</style>