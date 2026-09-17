import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DoctorView from "../views/DoctorView.vue";
import BookingsView from "../views/BookingsView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/doctor/:id", name: "doctor", component: DoctorView, props: true },
    { path: "/bookings", name: "bookings", component: BookingsView },
    { path: "/about", redirect: "/" },
  ],
});

export default router;
