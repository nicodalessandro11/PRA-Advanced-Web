<template>
    <div class="profile">
        <img :src="userInfo.avatar" :alt="userInfo.name">
        <h2>{{ userInfo.name }}</h2>
        <p>{{ userInfo.email }}</p>
        <!-- Add more user info fields here -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUserInfo } from '../services/apiService.js';

const userInfo =

    ref({});

onMounted(async () => {
    const token = 'your-token'; // Replace with actual token from authentication state
    const response = await getUserInfo(token);
    if (!response.error) {
        userInfo.value = response.data;
    }
});
</script>
<style scoped>
.profile__info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
}

.profile__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 50px;
}

.profile__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.profile__data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.profile__name {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
}

.profile__city,
.profile__country,
.profile__email,
.profile__phone,
.profile__address {
    font-size: 20px;
    margin-bottom: 10px;
}
</style>