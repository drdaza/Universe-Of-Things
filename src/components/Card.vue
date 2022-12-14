<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        realName: {
            type: String,
            default: null,
        },
        alignment: {
            type: String,
            default: null,
        },
        powerStats: {
            type: Object,
            default: null,
        },
        image: {
            type: String,
            default: null,
        }
    })  
</script>
<template>
    <div class="card">
        <img :src="image" alt="">
        <p>{{name}}</p>
        <p>{{realName}}</p>
        <p>{{alignment}}</p>
        <p>{{powerStats}}</p>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;

</style>