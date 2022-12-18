<template>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide><Card
        :name="'prueba'"
        :alignment="'good'"
        :real-name="'prueba real'"
        :power-stats="'hola'"
        /></swiper-slide>
      <swiper-slide><div>hola</div></swiper-slide>
      <swiper-slide><div>hola</div></swiper-slide>
      <swiper-slide><div>hola</div></swiper-slide>
      <swiper-slide><div>hola</div></swiper-slide>
      <swiper-slide><div>hola</div></swiper-slide>
      
      ...
    </swiper>
  </template>
  <script>
    // import Swiper core and required modules
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
  
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import Card from '../Card.vue';
  
    // Import Swiper styles
    import 'swiper/scss';
    import 'swiper/scss/navigation';
    import 'swiper/scss/pagination';
    import 'swiper/scss/scrollbar';

  
    // Import Swiper styles
    export default {
      components: {
    Swiper,
    SwiperSlide,
    Card
},
      setup() {
        const onSwiper = (swiper) => {
          console.log(swiper);
        };
        const onSlideChange = () => {
          console.log('slide change');
        };
        return {
          onSwiper,
          onSlideChange,
          modules: [Navigation, Pagination, Scrollbar, A11y],
        };
      },
    };
  </script>
  <style lang="scss" scoped>
  div{
    height: 50vh;
  }
    
  </style>