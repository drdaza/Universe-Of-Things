<script setup>
import Carrousel from '../components/carrousel/Carrousel.vue';
</script>
<template>
  <div class="about">

    <Carrousel/>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    
    display: flex;
    align-items: center;
    height: 150vh;
  }
}
</style>
