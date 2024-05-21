// Importa las funciones necesarias de vue-router para configurar el enrutador
import { createRouter, createWebHistory } from 'vue-router';

// Importgamos los componetes de las vistas de las paginas 
import HomePage from '../views/HomePage.vue';
import RegisterView from '../views/RegisterForm.vue';
import ArtistsGallery from '../views/ArtistsGallery.vue';
import UserImages from '../views/UserImages.vue';
import ArtistDetails from '../views/ArtistDetail.vue';
import VistaColaboradores from '../views/VistaColaboradores.vue';


//Definimos las rutas
const routes = [{
        path: '/',
        name: 'HomePage', //Este es el nombre de la ruta
        component: HomePage, //componente de la ruta 
    },
    {
        path: '/register',
        name: 'RegisterView',
        component: RegisterView,
    },
    {
        path: '/artists',
        name: 'ArtistsGallery',
        component: ArtistsGallery,
    },
    {
        path: '/artists/:username/images',
        name: 'UserImages',
        component: UserImages,
    },

    {
        path: '/artists/:username',
        name: 'ArtistDetails',
        component: ArtistDetails,
    },
    {
        path: '/colaboradores',
        name: 'VistaColaboradores',
        component: VistaColaboradores,
    },
];
// Crea una instancia de enrutador con la configuración proporcionada
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), //historial de navegacion 
    routes,
});
//exporta la instancia del enrutador de la pagina pricipal 
export default router;