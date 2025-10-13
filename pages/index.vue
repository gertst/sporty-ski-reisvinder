<template>
  <main
    class="container mx-auto flex flex-col items-center justify-center min-h-full py-12 px-4 sm:px-8"
  >
    <header class="text-center mb-12">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight"
      >
        <span class="block">Vind de perfecte</span>
        <span class="block text-sky-300">Sporty Ski-reis voor jouw gezin!</span>
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-200">
        Beantwoord de stellingen en ontdek welke bestemming het beste bij jullie
        past.
      </p>
    </header>

    <ResultCard v-if="result" :trip="result" @reset="handleReset" />

    <div v-else class="w-full max-w-3xl space-y-6">
      <StatementSlider
        v-for="statement in STATEMENTS"
        :key="statement.id"
        :label="statement.text"
        :value="answers[statement.id]"
        @change="(value) => handleSliderChange(statement.id, value)"
      />

      <div class="pt-6">
        <button
          @click="calculateResult"
          class="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold text-xl py-4 px-8 rounded-xl hover:scale-105 transform transition duration-300 ease-in-out shadow-2xl focus:outline-none focus:ring-4 focus:ring-sky-300"
        >
          Toon mijn ideale reis!
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Trip, Answers } from "~/types";
import { TripName } from "~/types";
import { STATEMENTS, TRIPS } from "~/constants";

// Page metadata
useHead({
  title: "Sporty Ski Reisvinder - Vind de perfecte ski-reis voor jouw gezin",
});

// Reactive state
const result = ref<Trip | null>(null);

// Initialize answers with default values (50 for each statement)
const initialAnswers: Answers = STATEMENTS.reduce((acc, statement) => {
  acc[statement.id] = 50;
  return acc;
}, {} as Answers);

const answers = ref<Answers>({ ...initialAnswers });

// Methods
const handleSliderChange = (id: string, value: number) => {
  answers.value[id] = value;
};

const calculateResult = () => {
  const scores = {
    [TripName.Cervinia]: 0,
    [TripName.Nassfeld]: 0,
    [TripName.LittleKidsWeek]: 0,
  };

  STATEMENTS.forEach((statement) => {
    const value = answers.value[statement.id];
    statement.associatedTrips.forEach(({ trip, weight }) => {
      scores[trip] += (value / 100) * weight;
    });
  });

  const bestTrip = Object.keys(scores).reduce((a, b) =>
    scores[a as TripName] > scores[b as TripName] ? a : b
  ) as TripName;

  result.value = TRIPS[bestTrip];

  // Scroll to top with smooth behavior
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const handleReset = () => {
  result.value = null;
  answers.value = { ...initialAnswers };
};
</script>
