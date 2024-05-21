<template>
  <div class="user-images"><!--Se declara el nombre de la clase-->
    <h2>{{ username }} - Imágenes</h2> <!-- El titulo que se presentara -->
    <div v-for="image in userImages" :key="image.id" class="image-card">
      <!-- Se crea la llave para solicitar la iamgen respecta a si id   -->
      <img :src="image.urls.regular" :alt="image.alt_description"
        class="thumbnail" /><!--  Se crea un elemento para el uso de la imagen en base ala urls -->
      <div class="description">
        <p>{{ image.alt_description }}</p> <!--   Se usa la descripcion referente a la imagen que se ha seleccionado  -->
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';// Importa el módulo axios

export default {
  name: 'UserImages',
  data() {
    return {
      username: '',
      userImages: [],// Se usa para registar al usuario de la imagen respecto a su nombre
    };
  },
  mounted() {
    // Obtener el nombre de usuario de la ruta
    this.username = this.$route.params.username;
    // Cargar imágenes del usuario
    this.fetchUserImages();
  },
  methods: {
    async fetchUserImages() {
      try {
        const response = await axios.get(`https://api.unsplash.com/users/${this.username}/photos/`, {// Se invoca a la API
          params: {
            client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU', // Reemplaza con tu clave de acceso de Unsplash
            per_page: 10, // Puedes ajustar la cantidad de imágenes
          },
        });

        this.userImages = response.data.map((photo) => ({// Se le asignan propiedades y relacion a las atributos
          id: photo.id,
          alt_description: photo.alt_description,
          urls: photo.urls,
        }));
      } catch (error) {
        console.error('Error fetching user images', error);//  se crea un mensaje por si falla la adquicion de información
      }
    },
  },
};
</script>
  
<style scoped>
/* Estilos específicos de la vista de imágenes del usuario, si es necesario */
</style>
  