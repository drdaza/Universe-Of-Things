<script setup>

function moveElements(){
  const node = document.getElementById("homeView");
  const clone = node.cloneNode(true);
  const copied = document.getElementById("copied");
  copied.appendChild(clone);
}
  
</script>

<template>
  <div id="component-button"></div>
    <div>
      <button v-on:click="moveElements">Mueve un parrafo con texto.</button>
</div>
</template>