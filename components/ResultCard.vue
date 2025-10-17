<template>
  <div
    class="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
  >
    <div
      class="p-6"
      style="
        background: linear-gradient(
          90deg,
          var(--sporty-blue-500),
          var(--sporty-blue-700)
        );
      "
    >
      <h2 class="text-2xl font-bold text-white">Jullie perfecte match is...</h2>
    </div>
    <div class="md:flex">
      <div class="md:w-1/2">
        <img
          class="h-64 w-full object-cover md:h-full"
          :src="trip.imageUrl"
          :alt="trip.name"
        />
      </div>
      <div class="p-8 md:w-1/2 flex flex-col justify-between">
        <div>
          <div
            class="uppercase tracking-wide text-sm font-semibold text-sporty-blue"
          >
            {{ trip.location }}
          </div>
          <h3
            class="block mt-1 text-2xl leading-tight font-extrabold text-black"
          >
            {{ trip.name }}
          </h3>
          <p class="mt-4 text-gray-600">
            {{ trip.description }}
          </p>
          <p class="mt-4 text-sm text-gray-500">
            <span class="font-semibold">Ideaal voor:</span> {{ trip.idealFor }}
          </p>
          <div class="mt-6">
            <h4 class="font-bold text-gray-800 mb-2">
              Topargumenten voor jullie:
            </h4>
            <ul class="space-y-2">
              <li
                v-for="(pro, index) in trip.pros"
                :key="index"
                class="flex items-center text-gray-700"
              >
                <CheckIcon />
                <span>{{ pro }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="https://sportyski.be/?popup=Bestemmingen#top"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 text-center bg-sporty-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-sporty-blue-600 transition duration-300 shadow-md"
          >
            Meer info & Boeken
          </a>
          <button
            @click="$emit('reset')"
            class="flex-1 text-center bg-sporty-orange text-white font-bold py-3 px-6 rounded-lg hover:bg-sporty-orange-600 transition duration-300"
          >
            Opnieuw proberen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Trip } from "~/types";

interface Props {
  trip: Trip;
}

defineProps<Props>();

defineEmits<{
  reset: [];
}>();
</script>
