<template>
  <div
    class="min-h-screen bg-cover bg-center bg-fixed relative"
    style="
      background: linear-gradient(
        135deg,
        var(--sporty-blue-600) 0%,
        var(--sporty-blue-200) 50%,
        var(--sporty-blue-500) 100%
      );
    "
  >
    <div class="absolute inset-0 bg-white/10"></div>
    <div class="relative">
      <slot />
    </div>
  </div>
</template>

<script setup>
// Default layout for the application
</script>
