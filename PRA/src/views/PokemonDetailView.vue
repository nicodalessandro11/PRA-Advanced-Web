<template>
    <div class="pokemon-detail">
        <img :src="pokemon.sprite" :alt="pokemon.name" />
        <h2>{{ pokemon.name }}</h2>
        <p>{{ pokemon.description }}</p>
        <!-- Add more Pokémon details here -->
    </div>
</template>

<script setup>

const props = defineProps({
    pokemon: Object
});
</script>

<style scoped>
/* Add styles here */
</style>
