<template>
    <div class="view__home">
        <div class="pokemon-list">
            <SearchBarComponent />
            <FilterBarComponent />
            <!-- <PokemonListComponent /> -->
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import SearchBarComponent from '../components/SearchBar.vue';
import FilterBarComponent from '../components/FilterBar.vue';
// import PokemonListComponent from '../components/PokemonList.vue';
import { getPokemonList } from '../services/apiService.js';

const allPokemons = ref([]);
const searchQuery = ref('');
const selectedFilter = ref('');

onMounted(async () => {
    const response = await getPokemonList();
    if (!response.error) {
        allPokemons.value = response.data;
    }
    console.log(allPokemons.value)
});

const filteredPokemons = computed(() => {
    return allPokemons.value.filter(pokemon => {
        return pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase()) &&
            (!selectedFilter.value || pokemon.types.includes(selectedFilter.value));
    });
});

const handleSearch = (query) => {
    searchQuery.value = query;
};

const handleFilter = (filter) => {
    selectedFilter.value = filter;
};
</script>

<style scoped>
/* Add styles here */
</style>
