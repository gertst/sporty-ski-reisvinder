<template>
  <div
    class="w-full bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border border-white/50 hover:border-sporty-orange hover:shadow-lg"
  >
    <label
      class="block text-gray-800 font-semibold mb-3 text-sm md:text-base leading-tight"
    >
      {{ label }}
    </label>
    <div class="flex items-center space-x-3">
      <span class="text-xs text-gray-500 w-20 text-right flex-shrink-0">
        Nee
      </span>
      <div class="flex-1 relative">
        <input
          type="range"
          min="0"
          max="100"
          :value="value"
          @input="handleChange"
          class="w-full h-3 bg-sporty-blue-50 rounded-lg appearance-none cursor-pointer slider-sporty shadow-inner"
        />
      </div>
      <span class="text-xs text-gray-500 w-20 flex-shrink-0"> Absoluut </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
  value: number;
}

defineProps<Props>();

const emit = defineEmits<{
  change: [value: number];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("change", Number(target.value));
};
</script>
