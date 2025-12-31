import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/quizView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
