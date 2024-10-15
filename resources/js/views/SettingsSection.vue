<template>
  <Navbar />
  <section
    id="settings"
    class="min-h-screen bg-gradient-to-r from-[#4a0e0e] via-[#3d2617] to-[#5e4d1f] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
  >
    <div class="max-w-2xl w-full bg-white rounded-xl shadow-2xl overflow-hidden mt-5">
      <div class="bg-gray-100 p-8 relative">
        <div class="absolute inset-0 bg-opacity-50 bg-gray-200">
          <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1.6" fill="#a0aec0" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Settings</h2>
          <div class="flex flex-col md:flex-row items-center mb-6">
            <div class="mb-4 md:mb-0 md:mr-6">
              <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-black shadow-lg bg-white relative">
                <img
                  :src="avatarUrl || '/placeholder.svg?height=128&width=128'"
                  alt=""
                  class="w-full h-full object-cover"
                />
                <label for="avatar-upload" class="absolute bottom-0 right-0 bg-black rounded-full p-2 cursor-pointer hover:bg-orange-950 transition-colors duration-300 me-5">
                  <CameraIcon class="w-5 h-5 text-white" />
                  <input
                    id="avatar-upload"
                    type="file"
                    @change="handleAvatarUpload"
                    class="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
            </div>
            <div class="flex-1 w-full md:w-auto">
              <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ user.name }}</h3>
              <p class="text-gray-600 mb-4">Student</p>
              <div class="space-y-3">
                <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow">
                  <MailIcon class="w-5 h-5 text-black" />
                  <p class="text-gray-700">{{ user.email }}</p>
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-lg p-3 shadow">
                  <PhoneIcon class="w-5 h-5 text-black" />
                  <p class="text-gray-700">{{ user.phone }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-8">
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
              <label for="current-password" class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600">
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
              <label for="new-password" class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600">
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
              <label for="confirm-new-password" class="absolute left-3 -top-2.5 bg-white px-1 text-sm text-gray-600">
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
import { ref } from 'vue';
import { UserIcon, MailIcon, PhoneIcon, LockIcon, CameraIcon } from 'lucide-vue-next';
import Navbar from "@/components/body.vue";

const user = ref({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
});

const avatarUrl = ref(null);
const currentPassword = ref('');
const newPassword = ref('');
const confirmNewPassword = ref('');

const handleAvatarUpload = (event) => {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarUrl.value = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    alert('Please upload a valid image file.');
  }
};

const updatePassword = () => {
  if (newPassword.value !== confirmNewPassword.value) {
    alert('New passwords do not match.');
    return;
  }
  // Implement password update logic here
  console.log('Password updated');
  currentPassword.value = '';
  newPassword.value = '';
  confirmNewPassword.value = '';
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>