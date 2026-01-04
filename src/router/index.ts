import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import QuizView from "@/views/quizView.vue";
import ErrorView from "@/views/ErrorView.vue";

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
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: ErrorView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
