<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: null,
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
            type: Array,
            default: null,
        },
        image: {
            type: String,
            default: null,
        }
    })  
</script>
<template>
    <div>
        <p>{{name}}</p>
        <p>{{realName}}</p>
        <p>{{alignment}}</p>
        <p>{{powerStats}}</p>
    </div>
</template>
<style lang="">
    
</style>