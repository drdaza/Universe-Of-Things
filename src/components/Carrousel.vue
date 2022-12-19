<template>
    <swiper
      :modules="[Navigation, Scrollbar, A11y]"
      :slides-per-view="4"
      :space-between="50"
      navigation
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="heroe in principalStore.Heroes"><Card
        :name="heroe.name"
        :realName="heroe.biography.fullName"
        :alignment="heroe.biography.alignment"
        :powerStats="heroe.powerstats"
        :image="heroe.images.sm"
        /></swiper-slide>
    </swiper>
  </template>
  <script setup>
    // import Swiper core and required modules
    import { Navigation, Scrollbar, A11y } from 'swiper';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // import card
    import Card from './Card.vue';
    import { onBeforeMount, ref } from 'vue';
  
    // Import Swiper styles
    import 'swiper/scss';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
    import 'swiper/scss/scrollbar';

    // store import
    import { usePrincipalStore } from '../stores/PrincipalStore';
    // variable
    const principalStore = usePrincipalStore();
    onBeforeMount(()=>{
    getHeroes();
    })
    const getHeroes = async ()=>{
    await principalStore.fetchHeroes()
  }
    //methods
    const onSwiper = (swiper) => {
        console.log(swiper);
      };
    const onSlideChange = () => {
        console.log('slide change');
    };
    
  </script>
  <style lang="scss" scoped>
  
    
  </style>