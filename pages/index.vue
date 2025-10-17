<template>
  <main class="container mx-auto min-h-full py-6 px-4 sm:px-6">
    <!-- Compact Header -->
    <header class="text-center mb-6">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        <span class="block">Vind de perfecte</span>
        <span class="block text-sky-300">Sporty Ski-reis voor jouw gezin!</span>
      </h1>
      <p class="mt-2 max-w-xl mx-auto text-sm sm:text-base text-slate-200">
        Beantwoord de stellingen en zie direct welke bestemming het beste bij jullie past.
      </p>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Statements Section -->
      <div class="lg:col-span-2 space-y-4">
        <h2 class="text-xl font-bold text-white mb-4">Jouw voorkeuren</h2>
        <StatementSlider
          v-for="statement in STATEMENTS"
          :key="statement.id"
          :label="statement.text"
          :value="answers[statement.id]"
          @change="(value) => handleSliderChange(statement.id, value)"
        />
      </div>

      <!-- Dynamic Scores Section -->
      <div class="lg:col-span-1">
        <div class="sticky top-6">
          <h2 class="text-xl font-bold text-white mb-4">Live resultaten</h2>
          
          <!-- Dynamic Trip Scores -->
          <div class="space-y-3 mb-6">
            <div
              v-for="(trip, tripName) in TRIPS"
              :key="tripName"
              class="bg-white/80 backdrop-blur-sm rounded-lg p-4 transition-all duration-300"
              :class="{
                'ring-2 ring-sky-400 bg-sky-50/90 scale-105': tripName === topTrip,
                'opacity-75': tripName !== topTrip && topTrip
              }"
            >
              <div class="flex justify-between items-start mb-2">
                <h3
                  class="font-bold text-sm"
                  :class="{
                    'text-sky-700': tripName === topTrip,
                    'text-slate-700': tripName !== topTrip
                  }"
                >
                  {{ trip.name }}
                </h3>
                <span
                  class="text-xs font-mono px-2 py-1 rounded"
                  :class="{
                    'bg-sky-200 text-sky-800': tripName === topTrip,
                    'bg-slate-200 text-slate-600': tripName !== topTrip
                  }"
                >
                                  <span class="text-lg font-bold text-slate-800">
                  {{ Math.round(Math.max(0, Math.min(100, currentScores[tripName] || 0))) }}%
                </span>
                </span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div
                  class="h-2 rounded-full transition-all duration-500 ease-out"
                  :class="{
                    'bg-gradient-to-r from-sky-400 to-sky-600': tripName === topTrip,
                    'bg-slate-400': tripName !== topTrip
                  }"
                  :style="{ width: `${Math.max(5, (currentScores[tripName] || 0))}%` }"
                ></div>
              </div>
              <p class="text-xs text-slate-600 mt-1">{{ trip.location }}</p>
            </div>
          </div>

          <!-- Final Result Button -->
          <button
            v-if="!result"
            @click="calculateResult"
            class="w-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
            :disabled="!hasSignificantScore"
            :class="{
              'opacity-50 cursor-not-allowed': !hasSignificantScore
            }"
          >
            {{ hasSignificantScore ? 'Toon gedetailleerde match!' : 'Beantwoord meer vragen' }}
          </button>

          <!-- Reset Button when result is shown -->
          <button
            v-if="result"
            @click="handleReset"
            class="w-full bg-slate-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-600 transition duration-300"
          >
            Opnieuw proberen
          </button>
        </div>
      </div>
    </div>

    <!-- Detailed Result Card -->
    <div v-if="result" class="mt-8" data-result-card>
      <ResultCard :trip="result" @reset="handleReset" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
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

// Computed properties for dynamic scoring
const currentScores = computed(() => {
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

  // Normalize scores to percentages based on maximum possible score for each trip
  const maxScores = {
    [TripName.Cervinia]: 0,
    [TripName.Nassfeld]: 0,
    [TripName.LittleKidsWeek]: 0,
  };

  STATEMENTS.forEach((statement) => {
    statement.associatedTrips.forEach(({ trip, weight }) => {
      maxScores[trip] += weight;
    });
  });

  const percentageScores = {
    [TripName.Cervinia]: Math.max(0, Math.min(100, maxScores[TripName.Cervinia] > 0 ? (scores[TripName.Cervinia] / maxScores[TripName.Cervinia]) * 100 : 0)),
    [TripName.Nassfeld]: Math.max(0, Math.min(100, maxScores[TripName.Nassfeld] > 0 ? (scores[TripName.Nassfeld] / maxScores[TripName.Nassfeld]) * 100 : 0)),
    [TripName.LittleKidsWeek]: Math.max(0, Math.min(100, maxScores[TripName.LittleKidsWeek] > 0 ? (scores[TripName.LittleKidsWeek] / maxScores[TripName.LittleKidsWeek]) * 100 : 0)),
  };

  return percentageScores;
});

const topTrip = computed(() => {
  const scores = currentScores.value;
  return Object.keys(scores).reduce((a, b) =>
    scores[a as TripName] > scores[b as TripName] ? a : b
  ) as TripName;
});

const hasSignificantScore = computed(() => {
  const scores = currentScores.value;
  const maxScore = Math.max(...(Object.values(scores) as number[]));
  return maxScore > 20; // At least 20% match to enable detailed result
});

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

  // Normalize scores to percentages and clamp between 0-100
  const maxScores = {
    [TripName.Cervinia]: 0,
    [TripName.Nassfeld]: 0,
    [TripName.LittleKidsWeek]: 0,
  };

  STATEMENTS.forEach((statement) => {
    statement.associatedTrips.forEach(({ trip, weight }) => {
      maxScores[trip] += weight;
    });
  });

  const normalizedScores = {
    [TripName.Cervinia]: Math.max(0, Math.min(100, maxScores[TripName.Cervinia] > 0 ? (scores[TripName.Cervinia] / maxScores[TripName.Cervinia]) * 100 : 0)),
    [TripName.Nassfeld]: Math.max(0, Math.min(100, maxScores[TripName.Nassfeld] > 0 ? (scores[TripName.Nassfeld] / maxScores[TripName.Nassfeld]) * 100 : 0)),
    [TripName.LittleKidsWeek]: Math.max(0, Math.min(100, maxScores[TripName.LittleKidsWeek] > 0 ? (scores[TripName.LittleKidsWeek] / maxScores[TripName.LittleKidsWeek]) * 100 : 0)),
  };

  const bestTrip = Object.keys(normalizedScores).reduce((a, b) =>
    normalizedScores[a as TripName] > normalizedScores[b as TripName] ? a : b
  ) as TripName;

  result.value = TRIPS[bestTrip];

  // Scroll to result with smooth behavior
  if (typeof window !== "undefined") {
    setTimeout(() => {
      const resultElement = document.querySelector('[data-result-card]');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
};

const handleReset = () => {
  result.value = null;
  answers.value = { ...initialAnswers };
};
</script>
