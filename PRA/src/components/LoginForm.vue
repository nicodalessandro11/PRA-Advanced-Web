<template>
    <form @submit.prevent="handleLogin">
        <input type="email" v-model="email" placeholder="Email" required>
        <input type="password" v-model="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser } from '../services/apiService.js';

const email = ref('');
const password = ref('');

const handleLogin = async () => {
    const response = await loginUser(email.value, password.value);
    if (!response.error) {
        // Handle successful login
        console.log('Login successful:', response.data);
        // Store token, update user state, redirect, etc.
    } else {
        // Handle login error
        console.error('Login failed:', response.message);
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
