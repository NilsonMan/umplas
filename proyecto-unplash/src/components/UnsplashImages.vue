<template>
  <!-- Contenedor principal -->
  <div class="unsplash-images">
    <div v-for="artist in artists" :key="artist.id" class="artist-card">
      <!-- Div que almacena la foto y descripción -->
      <div class="foto" @click="showImage(artist)">
        <!--  foto -->
        <img :src="artist.image" :alt="artist.description" class="thumbnail" />
        <!-- breve descripcion de la foto -->
        <div class="descripcion">
          <h1>{{ artist.name }}</h1>
          <p>{{ artist.description }}</p>
        </div>
      </div>
    </div>
    <!-- Muestra una imagen en detalle -->
    <div v-if="selectedImage" class="modal" @click="hideImage">
      <div class="modal-content">
        <!-- Boton para cerrar  -->
        <span class="close" @click="hideImage">&times;</span>
        <!-- Imagen seleccionada -->
        <img :src="selectedImage.image" :alt="selectedImage.description" />
        <!-- Descripcion y boton para ver mas detalles -->
        <div class="descripcion">
          <h1>{{ selectedImage.name }}</h1>
          <p>{{ selectedImage.description }}</p>
          <!-- haremos uso del router-link para poder navegar hacia la nueva pantalla -->
          <router-link :to="{ name: 'UserImages', params: { username: selectedImage.username } }">
            <button>Ver más</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
/*importamos el axios para poder cargar la informacion de la api 
mapeamos el vuex para llevar acabo acciones  */
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  /*Nombre del componente*/
  name: 'UnsplashImages',
  /*Estos son los datos del componente*/
  data() {
    return {
      artists: [], /*lista de artistas fotos extraidas de la pagina de la api*/
      selectedImage: null,/*imagene seccionada para mostrar+*/
    };
  },
  /**
   * este nmetodo se usa para montarlas en la pagina y realizamos la carga de las 
   * imagenes de la pagina unplash
   */
  mounted() {
    this.fetchUnsplashImages();
  },
  /**Metodos del componente */
  methods: {
    ...mapActions('user', ['storeUserInfo']),
    /**Este metodo se usa para la optencion de las imagenes de la pagina  */
    async fetchUnsplashImages() {
      try {
        /**realizamos el llamado a api por medio de axios  */
        const response = await axios.get('https://api.unsplash.com/photos/', {
          params: {
            client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
            per_page: 50,
          },
        });
        /**Mapeamos la respues de la api para poder covertirla en un  componente */
        this.artists = response.data.map((photo) => ({
          id: photo.id,
          name: `Foto Usuario: ${photo.user.name}`,
          image: photo.urls.regular,
          description: photo.alt_description,
          username: photo.user.username,
        }));
      } catch (error) {
        console.error('Error fetching Unsplash images', error);
      }
    },
    // Muestra la imagen en detalle (Se hace grande ) al realizar un click
    showImage(artist) {
      this.selectedImage = artist;
    },
    //De la misma manera oculta la imagen cuando se quita el click de la misma 
    hideImage() {
      this.selectedImage = null;
    },
    /*Metodo para obtener la informacion del usuario desde la api al igual que usa 
    la informacion del usuario para la navegacion de una nueva pantalla */
    async fetchUserInfo(username) {
      try {
        const response = await axios.get(`https://api.unsplash.com/users/${username}`, {
          params: {
            client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
          },
        });

        this.storeUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user info', error);
      }
    },
  },
};
</script>
  
<style scoped>
.unsplash-images {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.artist-card {
  width: 100%;
  max-width: 300px;
}

.foto {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
  border: 4px solid black;
  
}

.foto:hover .thumbnail {
  transform: scale(1.1);
}

.descripcion {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  box-sizing: border-box;
  transition: height 0.5s, bottom 0.5s;
  height: 0;
  overflow: hidden;
}

.foto:hover .descripcion {
  height: 30%;
  bottom: 0;
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
  border-radius: 20px;
  text-align: center;
}

.modal img {
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
</style>