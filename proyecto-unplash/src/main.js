
import { createApp } from 'vue'; // importa la función createApp desde la biblioteca de vue
import App from './App.vue';// se importa al componente app desde el archivo App.vue
import router from './router';// se importa el enrutador desde el archivo router.js
import NavBar from './components/NavBarComponent.vue'; // se importa el componente de barra de navegacion desde el archivo NavBarComponent.vue


createApp(App)// se crea la aplicación utilizando la función createApp
  .use(router)// se configura el uso del enrutador
  .component('NavBarComponent', NavBar) // se establece como componentente la barra de navegacion NavBar para que esté disponible en toda el proyecto
  .mount('#app');// con este se monta la aplicación en el elemento con el id de "app"