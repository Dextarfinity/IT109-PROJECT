<template>
  <Navbar />
  <section
    id="settings"
    class="gradient h-screen bg-cover bg-center relative flex items-center justify-center"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50" style="z-index: 1"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" style="z-index: 1">
      <h2
        class="text-4xl font-extrabold text-center mb-12 text-white animate-fade-in-down"
      >
        Settings
      </h2>
      <div class="bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <div class="space-y-2">
          <!-- Notification Settings -->
          <h3 class="text-2xl font-semibold animate-fade-in-late">
            Notification Settings
          </h3>
          <label class="inline-flex items-center animate-fade-in-late">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" />
            <span class="ml-2 text-gray-700">Enable Notifications</span>
          </label>

          <!-- Privacy Settings -->
          <h3 class="text-2xl font-semibold animate-fade-in-later">Privacy Settings</h3>
          <label class="inline-flex items-center animate-fade-in-later">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-green-600" />
            <span class="ml-2 text-gray-700">Share location with drivers</span>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/body.vue";
export default {
  name: "SettingsSection",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}
/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply animations */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-in-out;
}

.animate-fade-in-late {
  animation: fadeIn 1.2s ease-in-out;
}

.animate-fade-in-later {
  animation: fadeIn 1.5s ease-in-out;
}
</style>
