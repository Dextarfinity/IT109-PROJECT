<template>
  <Navbar />
  <section
    id="settings"
    class="min-h-screen bg-gradient-to-r from-[#4a0e0e] via-[#3d2617] to-[#5e4d1f] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
  >
    <div class="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden lg:mt-5">
      <div class="bg-gray-100 p-8 relative">
        <div class="absolute inset-0 bg-opacity-50 bg-gray-200">
          <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="10" cy="10" r="1.6" fill="#a0aec0" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div class="relative z-2">
          <h2 class="text-3xl sm:text-2xl font-bold text-gray-800 mb-6 text-center">
            Settings
          </h2>
          <div class="flex flex-col md:flex-row md:items-center mb-6">
            <div class="mb-4 md:mb-0 md:mr-6 self-center md:self-start">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-black shadow-lg bg-white relative"
              >
                <img
                  :src="avatarUrl || '/placeholder.svg?height=128&width=128'"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ user.name }}</h3>
              <p class="text-gray-600 mb-4">Student</p>
              <div class="space-y-3">
                <div
                  class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow justify-center md:justify-start"
                >
                  <MailIcon class="w-5 h-5 text-black" />
                  <p class="text-gray-700">{{ user.email }}</p>
                </div>
                <div
                  class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow justify-center md:justify-start"
                >
                  <PhoneIcon class="w-5 h-5 text-black" />
                  <p class="text-gray-700">{{ user.phone }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Avatar Selector -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-800 mb-2">Choose an Avatar</h4>
            <div class="grid grid-cols-3 sm:grid-cols-4 gap-4">
              <div v-for="(avatar, index) in avatars" :key="index" class="relative">
                <img
                  :src="avatar"
                  @click="selectAvatar(avatar)"
                  :class="{ 'border-4 border-orange-600': avatar === avatarUrl }"
                  class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-6 sm:p-8">
        <form @submit.prevent="updatePassword" class="space-y-6">
          <h4 class="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <LockIcon class="w-6 h-6 text-black mr-2" />
            Change Password
          </h4>
          <div class="space-y-4">
            <div class="relative">
              <input
                v-model="currentPassword"
                type="password"
                id="current-password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <label
                for="current-password"
                class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Current Password
              </label>
            </div>
            <div class="relative">
              <input
                v-model="newPassword"
                type="password"
                id="new-password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <label
                for="new-password"
                class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                New Password
              </label>
            </div>
            <div class="relative">
              <input
                v-model="confirmNewPassword"
                type="password"
                id="confirm-new-password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <label
                for="confirm-new-password"
                class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600"
              >
                Confirm New Password
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="w-full py-2 px-4 bg-black hover:bg-orange-950 rounded-md shadow-lg text-white font-semibold transition duration-200"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { MailIcon, PhoneIcon, LockIcon } from "lucide-vue-next";
import Navbar from "@/components/body.vue";

// Directly importing avatar images
import avatar1 from "./images/avatars/avatar1.png";
import avatar2 from "./images/avatars/avatar2.png";
import avatar3 from "./images/avatars/avatar3.png";
import avatar4 from "./images/avatars/avatar4.png";
import avatar5 from "./images/avatars/avatar5.png";
import avatar6 from "./images/avatars/avatar6.png";
import avatar7 from "./images/avatars/avatar7.png";
import avatar8 from "./images/avatars/avatar8.png";
import avatar9 from "./images/avatars/avatar9.png";

// User data
const user = ref({
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 8900",
});

// Avatar URLs, using imported images
const avatars = ref([
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
]);

// Default avatar selection
const avatarUrl = ref(null);

// Password fields
const currentPassword = ref("");
const newPassword = ref("");
const confirmNewPassword = ref("");

// Avatar selection handler
const selectAvatar = (avatar) => {
  console.log("Selected avatar:", avatar); // Debugging log to check which avatar is selected
  avatarUrl.value = avatar; // Update the selected avatar
};

// Password update handler
const updatePassword = () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert("New passwords do not match.");
    return;
  }
  console.log("Password updated");

  // Clear password fields after update
  currentPassword.value = "";
  newPassword.value = "";
  confirmNewPassword.value = "";
};
</script>
