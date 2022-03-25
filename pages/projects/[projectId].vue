<template>
  <div>
    <div class="flex m-4 justify-between">
      <div class="flex">
        <h3 class="text-white mr-4">Project {{ $route.params.projectId }}</h3>
      </div>
      <div
        class="text-white font-sm text-underlined hidden md:flex items-center underline"
      >
        <svg
          class="h-4 fill-current text-white cursor-pointer mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z"
          />
        </svg>
        Show menu
      </div>
    </div>
    <div class="flex px-4 pb-8 items-start overflow-x-scroll">
      <trello-column v-for="column of columns" :key="column.id">
        <trello-card
          v-for="card of column.cards"
          :key="card.id"
          :title="card.title"
        ></trello-card>
      </trello-column>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Card {
  id: string;
  title: string;
}
interface Column {
  id: string;
  title: string;
  cards: Card[];
}
const columns = ref<Column[]>([
  {
    id: "1",
    title: "To do",
    cards: [
      {
        id: "1",
        title: "lorem ipsum",
      },
    ],
  },
  {
    id: "2",
    title: "In progress",
    cards: [
      {
        id: "2",
        title: "Check the responsive layout on all devices",
      },
      {
        id: "2",
        title: "lorem ipsum 2",
      },
    ],
  },
  {
    id: "3",
    title: "Done",
    cards: [],
  },
]);
</script>
