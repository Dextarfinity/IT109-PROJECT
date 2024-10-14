<template>
  <Navbar />
  <section
    id="faqs"
    class="gradient h-screen bg-cover bg-center relative flex items-center justify-center"
  >
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
      <!-- Title -->
      <h2
        class="text-4xl font-extrabold text-center mt-6 mb-4 animate-fade-in-down text-white"
      >
        Frequently Asked Questions
      </h2>

      <!-- FAQs Container -->
      <div class="space-y-6">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl animate-fade-in"
          :style="{ animationDelay: `${index * 150}ms` }"
        >
          <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ faq.question }}</h3>
          <p class="text-gray-600">{{ faq.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: "How do I request a ride?",
    answer:
      "To request a ride, select your location from the dropdown menu, provide a specific location if necessary, and click the 'Call Driver' button on the home screen.",
  },
  {
    question: "How long does it usually take for a driver to arrive?",
    answer:
      "Driver arrival times can vary depending on your location and driver availability. Typically, you can expect a driver to arrive within 5-15 minutes of your request.",
  },
  {
    question: "Is Hatid Kita available 24/7?",
    answer:
      "Hatid Kita operates during school hours and for a set period before and after school. Please check the app for the exact operating hours in your area.",
  },
];
</script>

<script>
import Navbar from "@/components/body.vue";
export default {
  name: "FAQsSection",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
}

/* Fade-in and Slide animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animations */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

.animate-fade-in-down {
  animation: fadeInDown 1s ease-in-out forwards;
}
</style>
