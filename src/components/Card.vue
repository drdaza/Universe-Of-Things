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
        <img class="image-cards" :src="image" :alt="`Foto de ${name}`">
        <div class="heroe-name">
            <p>{{name}}</p>
        </div>
        <div class="heroe-info">
            <p>Nombre real: {{realName}}</p>
            <p>Alineamiento: {{alignment}}</p>
            <div class="heroe-stats">
                <p>Características: {{powerStats}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/scss/main' as *;

.card {
    border: $TertiaryColor solid;
    width: 100%;
    height: 100%;
    border-radius: 1.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $QuinaryColor;
    font-size: x-large;
    font-weight: bold;

    .image-cards {
        width: 80%;
        height: 50%;
        margin-top: 5%;
    }

    .heroe-name {
        width: 81%;
        display: flex;
        align-items: flex-start;
        margin-top: 3%;
           
        
    }

    .heroe-info {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: left;
        background-color: $SecondaryColor;
        color: $QuaternaryColor;
        font-weight: bold;
        font-size: medium;
        border-radius: 5%;
        margin-top: 10%;
        .heroe-stats {
            width: 90%;
            margin-top: 5%;
            font-size: small;
        
        }
    }

}


</style>