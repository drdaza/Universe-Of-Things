<script setup>
  import { onBeforeMount, ref } from 'vue';
  import {useHeroStore} from '../stores/PrincipalStore';
  import Card from '../components/Card.vue';
  const principalStore = useHeroStore();
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
    <div  class="card-container" v-for="heroe in principalStore.Heroes">
    <Card
      :name="heroe.name"
      :realName="heroe.biography.fullName"
      :alignment="heroe.biography.alignment"
      :powerStats="heroe.powerstats"
      :image="heroe.images.sm"
      
    />
    </div>
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
