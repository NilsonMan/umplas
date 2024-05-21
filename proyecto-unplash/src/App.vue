<template>
  <!-- Contenedor principal de la aplicación con posibilidad de clase 'darkMode' -->
  <div id="app" :class="{ darkMode: isDarkMode }">
    <!-- Botón para cambiar entre Modo Claro y Modo Oscuro -->
    <button class="dark-mode-button" @click="toggleDarkMode">Modo Oscuro</button>
    <!-- Sección de subtítulo  y descripción -->
    <div class="subtitle">
      <!-- mostrar el logotipo -->
      <svg>
        <!-- Texto centralizado vertical y horizontalmente -->
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">LE PETIT LOUVRE</text>
      </svg>
      <!-- Título adicional de la galería de arte -->
      <h2>GALERIA DE ARTE</h2>
    </div>
    <!-- Componente de barra de navegación -->
    <NavBarComponent />
    <!-- Contenedor para mostrar las vistas de la aplicación según la ruta -->
    <router-view />
  </div>
</template>

<script>
// Importa el componente de la barra de navegación
import NavBarComponent from './components/NavBarComponent.vue';

export default {
  // Nombre del componente
  name: 'App',
  components: {
    NavBarComponent,
  },
  data() {
    return {
      // Variable para rastrear el estado del Modo Oscuro

      isDarkMode: false,
    };
  },
  // Métodos locales del componente
  methods: {
    // Método para alternar entre el Modo Claro y el Modo Oscuro
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style>
#app.dark-mode {
  background-color: var(--oscuro);
  /* Cambiar a color oscuro en modo oscuro */
  color: var(--blanco);
  /* Cambiar a texto blanco en modo oscuro */
}

.dark-mode-button {
  background-color: var(--secundario);
  /* Color del botón en modo claro */
  color: var(--blanco);
  /* Color del texto del botón en modo claro */
}

.dark-mode-button:hover {
  background-color: var(--secundario-darker);
  /* Cambiar el color al pasar el ratón sobre el botón en modo claro */
}

#app.dark-mode .dark-mode-button {
  background-color: var(--secundario-darker);
  color: var(--grisclaro); /* Cambiar el color del texto del botón en modo oscuro */
}

#app.dark-mode .dark-mode-button:hover {
  background-color: var(--secundario-darker);
  color: var(--grisclaro); /* Mantener el color del texto al pasar el ratón sobre el botón en modo oscuro */
}

@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

:root {
  --blanco: #ffffff;
  --oscuro: #212121;
  --primario: #ffc107;
  --secundario: #0097a7;
  --gris: #9a2c2c;
  --grisclaro: #dfe9f3;

}

html {
  box-sizing: border-box;
  /* Esto hace que el border y el padding no afecten el ancho de nuestros elementos */
  font-size: 62.5%;
  /* Esto hace que 1rem = 10px */
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

svg {
  /* font-family: "Russo One", sans-serif; */
  font-family: "Dancing Script", sans-serif;
  width: 100%;
  height: 100%;
}

svg text {
  animation: stroke 5s infinite alternate;
  stroke-width: 2;
  stroke: black;
  font-size: 40px;
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 2;
  }

  70% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgba(54, 95, 160, 1);
  }

  80% {
    fill: rgba(72, 138, 204, 0);
    stroke: rgba(54, 95, 160, 1);
    stroke-width: 3;
  }

  100% {
    fill: rgba(72, 138, 204, 1);
    stroke: rgba(54, 95, 160, 0);
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.subtitle {
  background-color: rgba(97, 255, 250, 0.142);
  /* Fondo del subtítulo */
  padding: 10px;
}

.subtitle h2 {
  margin: 0;
}

body {
  background-color: rgba(97, 255, 250, 0.208);
  /* Fondo */
  background-image: url("./assets/36343-pinturas.jpg");
}

.nav-button {
  background-color: rgb(255, 111, 97);
  /* Fondo del botón */
  color: #FFFFFF;
  /* Color del texto en el botón */
}

.nav-button:hover {
  background-color: rgb(255, 78, 58);
  /* Cambiar el color al pasar el ratón sobre el botón */
}</style>