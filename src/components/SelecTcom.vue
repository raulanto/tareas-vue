<template>
    <select name="" id="">
        <option value=""></option>
    </select>
</template>

<script>
    const axios = require('axios');

axios.get('https://api.escuelajs.co/api/v1/products')
  .then(response => {
    // Aquí puedes procesar la respuesta recibida
    console.log(response.data);
  })
  .catch(error => {
    // Manejo de errores
    console.error(error);
  });

</script>