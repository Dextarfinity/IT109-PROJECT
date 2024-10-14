import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/auth.vue";
import Landing from "@/views/landing.vue";
import Home from "@/views/HomeSection.vue";
import Faq from "@/views/FAQsSection.vue";
import Setting from "@/views/SettingsSection.vue";
import Profile from "@/views/ProfileSection.vue";
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
    },
    {
        path: "/faqssec",
        name: "faqs",
        component: Faq,
    },
    {
        path: "/settingsec",
        name: "setting",
        component: Setting,
    },
    {
        path: "/profilesec",
        name: "profile",
        component: Profile,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
