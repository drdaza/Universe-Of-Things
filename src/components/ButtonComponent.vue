<script setup>
import { ref } from 'vue';
let count = ref(0);



</script>

<template>
    <div id="component-button">
      <button v-on:click="count++">Se ha pulsado {{ count }} veces.</button>
</div>
</template>