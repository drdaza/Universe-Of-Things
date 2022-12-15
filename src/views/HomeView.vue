<script setup>
import FavButtonComponent from '../components/FavButtonComponent.vue';
import AboutView from './AboutView.vue';

</script>

<template>
  <main>
    <div id="homeView"><p>Hola Mundo</p></div>
    <div id="copied"></div>
    <FavButtonComponent/>
    <AboutView id="aboutView"/>
  </main>
</template>
