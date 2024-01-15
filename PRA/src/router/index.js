import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import PokemonDetailView from "../views/PokemonDetailView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/profile", component: ProfileView },
  { path: "/detail", component: PokemonDetailView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
