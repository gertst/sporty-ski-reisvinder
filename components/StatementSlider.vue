<template>
  <div
    class="w-full bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border border-white/30"
  >
    <label
      class="block text-slate-800 font-semibold mb-3 text-sm md:text-base leading-tight"
    >
      {{ label }}
    </label>
    <div class="flex items-center space-x-3">
      <span class="text-xs text-slate-500 w-20 text-right flex-shrink-0">
        Niet
      </span>
      <div class="flex-1 relative">
        <input
          type="range"
          min="0"
          max="100"
          :value="value"
          @input="handleChange"
          class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
        />
      </div>
      <span class="text-xs text-slate-500 w-20 flex-shrink-0"> Absoluut </span>
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
