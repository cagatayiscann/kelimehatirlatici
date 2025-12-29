import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import WordsView from "@/views/WordsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/words",
    name: "words",
    component: WordsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
