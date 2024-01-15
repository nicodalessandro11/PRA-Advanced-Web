<template>
    <header class="header">
        <div class="left">
            <img src="../assets/uoc-logo.png" alt="Pokedex Logo" class="logo">
            <h1 class="app-name">Pokedex</h1>
        </div>
        <div class="right">
            <router-link to="/" class="user">Home</router-link>
            <router-link v-if="userStore.isLogged" to="/profile" class="user">{{ userStore.getName }}</router-link>
            <button v-if="userStore.isLogged" @click="logout" class="logout-button">Logout</button>
            <button class="login-button">Login</button>
        </div>
    </header>
</template>

<script setup>
import { useUserStore } from '../stores/useStore.js';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = () => {
    userStore.logoutUser();
    router.push('/');
};
</script>

<style scoped>
.header {
    padding: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    justify-content: space-between;
}

.header .left {
    display: flex;
    align-items: center;
}

.header .right {
    display: flex;
    align-items: center;
}

.header .logo {
    max-height: 50px;
}

.header .app-name {
    margin-left: 25px;
    font-weight: bold;
    font-size: 20px;
}

.header .user {
    display: flex;
    color: #2c3e50;
    font-weight: bold;
    text-decoration: none;
}

.header .login-button,
.header .logout-button {
    background: #2c3e50;
    color: #fff;
    border: 0;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 15px;
}
</style>