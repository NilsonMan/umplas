<template>
  <!-- Este template define la estructura visual de cada tarjeta de colaborador -->
  <div class="colaborador-card">
    <!-- La imagen del colaborador se vincula dinámicamente a través de la propiedad 'foto' -->
    <img :src="colaborador.foto" :alt="colaborador.nombre" class="colaborador-img" />
    <!-- La información textual del colaborador está contenida en 'colaborador-info' -->
    <div class="colaborador-info">
      <!-- El nombre del colaborador -->
      <h3>{{ colaborador.nombre }}</h3>
      <!-- Información adicional del colaborador -->
      <p>{{ colaborador.informacion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // Este componente acepta un prop 'colaborador' que debe ser un objeto y es obligatorio
  props: {
    colaborador: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  /* Estilos específicos para este componente, el modificador 'scoped' limita su alcance */

  .colaborador-card {
    /* Tamaño y estilo general de la tarjeta del colaborador */
    width: 15%;
    margin: 1%;
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
  }

  .colaborador-img {
    /* Estilos para la imagen del colaborador */
    width: 100%;
    border-radius: 50%;
    /* La imagen del colaborador ocupa el 100% del ancho y tiene un borde redondeado */
  }

  .colaborador-info {
    /* Estilos para la información del colaborador */
    margin-top: 15px;
    /* Espacio superior para separar la información del nombre y la imagen */
  }
</style>
