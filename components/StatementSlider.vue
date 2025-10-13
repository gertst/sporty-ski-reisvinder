<template>
  <div
    class="w-full bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg border border-white/30"
  >
    <label
      class="block text-slate-800 font-semibold mb-4 text-center md:text-left text-lg"
    >
      {{ label }}
    </label>
    <div class="flex items-center space-x-4">
      <span class="text-xs text-slate-500 w-28 text-right">
        Helemaal niet van toepassing
      </span>
      <input
        type="range"
        min="0"
        max="100"
        :value="value"
        @input="handleChange"
        class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500"
      />
      <span class="text-xs text-slate-500 w-28"> Absoluut van toepassing </span>
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
