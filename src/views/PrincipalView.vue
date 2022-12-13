<script setup>
  import { onBeforeMount, ref } from 'vue';
  import {useHeroStore} from '../stores/PrincipalStore';
  const principalStore = useHeroStore();
  onBeforeMount(()=>{
    getHeroes();
  })
  const getHeroes = async ()=>{
    await principalStore.fetchHeroes()
  }
</script>

<template>
  <main>

  </main>
</template>
