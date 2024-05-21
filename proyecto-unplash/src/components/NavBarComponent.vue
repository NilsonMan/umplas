<template>
  <!--se crea el template en donde estará la barra navegación-->
  <div class="navbar"><!--este es el contenedor principal de la barra de navegación -->
    <router-link to="/"
      class="nav-button">Inicio</router-link><!--se crea las diferentes botones que tendra la barra de navegación-->
    <router-link to="/artists"
      class="nav-button">Artista</router-link><!--se hace uso del router link para que conecte a vue router-->
      <router-link to="/colaboradores" class="nav-button">Colaboradores</router-link>
      <router-link to="/register" class="nav-button">Registro</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBarComponent',
};
</script><!--se exporta el el objeto de barra de navegación para usarlo despues-->

<style scoped>
/*Inyectamos los estilos directamente  */
.navbar {
  display: flex;
  /*se aplica un display flex en la barra para que los elementos esten organizados */
  justify-content: space-around;
  background-color: transparent;
  padding: 10px;
}

/*se aplican estilos  a la barra de navegación  */

.nav-button {
  /*se aplican los estilos a todos los botones */
  text-decoration: none;
  color: #ffffff;
  padding: 10px 20px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.nav-button:hover {
  /*Se aplican estilos para que al pasar el cursor cambie de color los botones */
  background-color: #ffffff;
  color: #000000;
  border-color: #000000;
}</style>