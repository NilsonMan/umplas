<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="submitForm">

      <!-- Entrada del nombre -->
      <label for="name">Nombre:</label>
      <input type="text" id="name" v-model="formData.name" required>

      <!-- Entrada de los apellidos -->
      <label for="lastName">Apellidos:</label>
      <input type="text" id="lastName" v-model="formData.lastName" required>

      <!-- Entrada del correo electrónico -->
      <label for="email">Correo Electrónico:</label>
      <input type="email" id="email" v-model="formData.email" required>

      <!-- Entrada del número de celular -->
      <label for="phone">Número de Celular:</label>
      <input type="tel" id="phone" v-model="formData.phone" required>

      <!-- Boton de envío de formulario -->
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>
  
<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {

      // Datos de entrada del formulario
      formData: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
      },
    };
  },

  // Metodos, el metodo maneja el envio de formularios
  methods: {
    submitForm() {
      // Lógica para enviar el formulario
      console.log('Formulario enviado:', this.formData);
      // Puedes enviar los datos al servidor aquí
    },
  },
};
</script>
  
<style scoped>
/* Estilos específicos de Register aquí */

/* Estilo del encabezado */
h1 {
  text-align: center;
  color: #fff;
}

/* Estilo del formulario */
form {
  max-width: 400px;
  margin: 0 auto;
  background-color: #ffffff78;
  padding: 20px;
  border-radius: 10px;
}

/* Estilo del label */
label {
  display: block;
  margin-bottom: 5px;
}

/* Estilo del input */
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
}

/* Estilo del botón */
button {
  background-color: #3498db;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Estilo del botón cuando se pone el mouse sobre el */
button:hover {
  background-color: #2980b9;
}
</style>
  