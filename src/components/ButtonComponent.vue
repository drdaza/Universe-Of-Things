<script setup>

// import { ref } from 'vue';
// let count = ref(0);
// let add = ref();


// function AddText(){
//   let div = document.querySelector("#component-button");
//   div.innerHTML = `<p>hola mundo</p>`;
// }
function MoveElements(){
  let fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById('hola-mario'));
    document.getElementsByClassName('about').appendChild(fragment); //que la función realice un cambio del div con id hola mario de HOMEVIEW a id about de ABOUTVIEW
}

</script>

<template>
  <div id="component-button"></div>
    <div>
      <!-- <button v-on:click="count++">Se ha pulsado {{ count }} veces.</button> -->
      <!-- <button v-on:click="AddText">Añade un parrado con {{add}}texto.</button> -->
      <button v-on:click="MoveElements">Mueve un parrafo con texto.</button>
</div>
</template>