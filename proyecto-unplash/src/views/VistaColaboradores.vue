<template>
  <!-- Vista que muestra los colaboradores del proyecto -->
  <div>
    <h2>Colaboradores del Proyecto</h2>
    <!-- Contenedor para mostrar las tarjetas de colaboradores -->
    <div class="colaboradores-container">
      <!-- Utiliza el componente Colaborador para cada colaborador en la lista -->
      <Colaborador v-for="colaborador in colaboradores" :key="colaborador.id" :colaborador="colaborador" />
    </div>
  </div>
</template>

<script>
import Colaborador from '../components/ColaboradorProyect.vue';

export default {
  // Importa el componente Colaborador
  components: {
    Colaborador,
  },
  // Datos de ejemplo de colaboradores
  data() {
    return {
      colaboradores: [
        { id: 1, nombre: 'Nilson Manuel Novelo Ek', foto: require('@/assets/Nilson.jpg'), informacion: 'Desarollador' },
        { id: 2, nombre: 'David Manuel Soberanis Gómez', foto: require('@/assets/David.jpg'), informacion: 'Desarollador' },
        { id: 3, nombre: 'Francisco Jesús Pérez García', foto: require('@/assets/Francisco.jpg'), informacion: 'Desarollador' },
        { id: 4, nombre: 'Samuel Pastrana Camarillo', foto: require('@/assets/Samuel.jpg'), informacion: 'Desarollador' },
        { id: 5, nombre: 'Alexis Santos Fernandez', foto: require('@/assets/Alexis.jpg'), informacion: 'Desarollador' },
        { id: 6, nombre: 'Jorge Salomon Cua Ek', foto: require('@/assets/Cua.jpg'), informacion: 'Desarollador' },
        { id: 7, nombre: 'Eduardo Jose Interian Parra', foto: require('@/assets/Eduardo.jpg'), informacion: 'Desarollador' },
        // Agrega los demás colaboradores aquí
      ],
    };
  },
};
</script>

<style scoped>
.colaboradores-container {
  /* Estilos para el contenedor de colaboradores */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
  /* Muestra los colaboradores en filas y distribuye el espacio alrededor */
}
</style>
