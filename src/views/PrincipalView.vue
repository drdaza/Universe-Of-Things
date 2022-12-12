<script setup>
  import { use } from 'chai';
import { get } from 'http';
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
