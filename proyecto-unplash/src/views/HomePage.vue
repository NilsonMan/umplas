
<template>
  <div>
    <div class="contenedor"><!--contenedor principal  la pagina principal-->
      <main>
        <h1>EXPOSICIÓN GENERAL</h1>
        <div class="divPrincipal">
          <div v-for="artist in artists" :key="artist.id" class="foto">
            <!--se crea un v for para que carguen los artistas y vaya mostranto la imagen de cada artista-->
            <router-link
              :to="`/artists/${artist.id}`"><!--con router link se van cargando la información de cada artista-->
              <img :src="artist.image" width="250" height="250"
                alt="Obra del artista" /><!--cada imagen que se vaya cargando tendra aplicada configuración de la imagen-->
            </router-link>
            <div class="descripcion">
              <h1>{{ artist.name }}</h1><!--se carga el nombre de artista-->
              <p>{{ artist.description }}</p><!--se carga la descripción de artista-->
              <p><strong>Especificaciones:</strong> {{ artist.specifications }}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
    <UnsplashImages @unsplash-images-loaded="handleUnsplashImagesLoaded" />
    <!--conecta al componente donde esta la api para que cargue las imagenes-->
  </div>
</template>

<script>

import UnsplashImages from '@/components/UnsplashImages.vue';/*se importa el componente en donde esta la api para que se pueda ejecutar lo anterior */

export default {
  name: 'HomePage',
  components: {/*exportamos para que sea usado luego en algun otro lado */

    UnsplashImages,
  },
  data() {/*importando lista de artistas vacia  */
    return {
      artists: [],

    };
  },
  methods: {

    handleUnsplashImagesLoaded(images) {
      // Actualiza la lista de artistas con las imágenes simuladas siempre y cuando se ejecute el unsplash-images-loaded 
      this.artists = images.map((image, index) => ({
        id: index + 1,//Se utiliza el método map para que vaya iterando sobre el array de imágenes y transforme cada elemento del array
        name: `Artist ${index + 1}`,//se coloca +1 para qie vaya colocan los artistas1 artsta2.......
        image: image.urls.regular,
        description: 'Descripción del artista...',
        specifications: 'Especificaciones del artista...',
      }));
    },
  },
};
</script>

<style scoped>
/*se inyectan los estilos a la pagina   */


@media (min-width: 768px) {

  /*se aplican  mq para que se ajuste a las pantallas correctamente */
  .divPrincipal {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (min-width: 992px) {
  .divPrincipal {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
}</style>
