<script setup>
  import { onBeforeMount, ref } from 'vue';
  import {usePrincipalStore} from '../stores/PrincipalStore';
  import Card from '../components/Card.vue';
  import Carrousel from '../components/Carrousel.vue';
  const principalStore = usePrincipalStore();
  onBeforeMount(()=>{
    getHeroes();
  })
  const loading = ref(true);
  const getHeroes = async ()=>{
    await principalStore.fetchHeroes()
  }
</script>

<template>
  <main id="principal-main">
    <Carrousel/>
  </main>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;
#principal-main{
  @include displayFlex(100%, auto, row, space-evenly);
  flex-wrap: wrap;
  background-color: $PrincipalColor;
  overflow: auto;
  .card-container{
    @include displayFlex(20%, auto, column, normal);
    margin: 2%;
  }
}
</style>
