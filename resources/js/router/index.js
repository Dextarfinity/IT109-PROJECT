import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/auth.vue";
import Landing from "@/views/landing.vue";
import Home from "@/views/HomeSection.vue";
import Faq from "@/views/FAQsSection.vue";
import Setting from "@/views/SettingsSection.vue";
import Profile from "@/views/ProfileSection.vue";
import Administrator from "@/views/Admin.vue";

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
        path: "/homesec",
        name: "home",
        component: Home,
        meta: { requiresAuth: true },
    },
    {
        path: "/faqssec",
        name: "faqs",
        component: Faq,
        meta: { requiresAuth: true },
    },
    {
        path: "/settingsec",
        name: "setting",
        component: Setting,
        meta: { requiresAuth: true },
    },
    {
        path: "/profilesec",
        name: "profile",
        component: Profile,
        meta: { requiresAuth: true },
    },
    {
        path: "/adminsection",
        name: "admin",
        component: Administrator,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("access_token");
    const isAuthenticated = token !== null;

    // Optionally, validate the token against Supabase's session
    if (to.meta.requiresAuth && !isAuthenticated) {
        console.log("Not authenticated - Redirecting to /auth");
        next("/auth");
    } else if (!to.meta.requiresAuth && isAuthenticated) {
        console.log("Authenticated - Redirecting to /homesec");
        next("/homesec");
    } else {
        console.log("Allowing navigation to:", to.path);
        next();
    }
});

router.afterEach((to, from) => {
    const token = localStorage.getItem("access_token"); // Check token in localStorage
    const isAuthenticated = token !== null;
    console.log("Token:", localStorage.getItem("access_token"));
    console.log("Is Authenticated:", isAuthenticated);

    // Only reload the landing page if the user is authenticated
    if (to.path === "/" && isAuthenticated) {
        // Reload only if the user is authenticated and trying to navigate to the landing page
        // You can also trigger a manual session refresh here if necessary
        setTimeout(() => {
            window.location.reload(); // Trigger a page reload to reset the app's state
        }, 100); // Small delay to ensure session state is updated
    }
});

export default router;
