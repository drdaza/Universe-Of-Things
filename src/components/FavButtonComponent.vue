<script setup>

function moveElements(){
  const node = document.getElementById("homeView");
  const clone = node.cloneNode(true);
  const copied = document.getElementById("aboutView");
  copied.appendChild(clone);
  const nodecopied = copied.appendChild(clone);
}


</script>

<template>
  <div id="component-button"></div>
    <div>
      <button v-on:click="moveElements">Añadir a Favoritos</button>
</div>
</template>

<style>
a {
  background: none;
  border: none;
}
</style>