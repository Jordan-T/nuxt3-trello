<template>
  <div
    class="rounded bg-gray-200 dark:bg-gray-600 flex-no-shrink w-64 p-2 mr-3"
  >
    <div class="flex justify-between py-1">
      <h3 class="text-sm">{{ title }}</h3>
      <svg
        class="h-4 fill-current text-gray-700 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
        />
      </svg>
    </div>
    <div class="text-sm mt-2">
      <slot />

      <p class="mt-3 text-gray-700">Add a card...</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "Do more cards",
  },
});
</script>
