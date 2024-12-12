import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/auth.vue";
import Landing from "@/views/landing.vue";
import Home from "@/views/HomeSection.vue";
import Faq from "@/views/FAQsSection.vue";
import Setting from "@/views/SettingsSection.vue";
import Profile from "@/views/ProfileSection.vue";
import Administrator from "@/views/Admin.vue";
import ForgotPass from "@/views/ForgotPass.vue";
import UpdatePass from "@/views/UpdatePass.vue";
const routes = [
    {
        path: "/",
        name: "Landing",
        component: Landing,
    },
    {
        path: "/auth",
        name: "Auth",
        component: Authentication,
    },
    {
        path: "/forgotpass",
        name: "Forgotpass",
        component: ForgotPass,
    },
    {
        path: "/updatepass",
        name: "Updatepass",
        component: UpdatePass,
    },

    {
        path: "/homesec",
        name: "home",
        component: Home,
        meta: { requiresAuth: true }
    },
    {
        path: "/faqssec",
        name: "faqs",
        component: Faq,
        meta: { requiresAuth: true }
    },
    {
        path: "/settingsec",
        name: "setting",
        component: Setting,
        meta: { requiresAuth: true }
    },
    {
        path: "/profilesec",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true }
    },    {
        path: "/adminsection",
        name: "admin",
        component: Administrator,
        meta: { requiresAuth: true }
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("access_token");
    const isAuthenticated = token !== null;

    console.log("Navigating to:", to.path);
    console.log("Is Authenticated:", isAuthenticated);

    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log("Not authenticated - Redirecting to /auth");
        next("/auth"); // Redirect to login if not authenticated
    } else if (!to.meta.requiresAuth && isAuthenticated) {
        console.log("Authenticated - Redirecting to /homesec");
        next("/homesec"); // Redirect to home if already authenticated
    } else {
        console.log("Allowing navigation to:", to.path);
        next(); // Allow navigation
    }
});
export default router;
