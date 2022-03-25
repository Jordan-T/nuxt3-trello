<template>
  <div class="flex p-2 bg-blue-700 dark:bg-blue-900 items-center">
    <div class="hidden md:flex justify-start">
      <button
        class="bg-blue-300 dark:bg-blue-500 rounded p-2 font-bold text-white text-sm mr-2 flex"
      >
        <svg
          class="fill-current text-white h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path
            d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"
          />
        </svg>
        Pannels
      </button>
      <input type="text" class="bg-blue-300 dark:bg-blue-500 rounded p-2" />
    </div>

    <div class="mx-0 md:mx-auto">
      <h1 class="text-blue-200 text-xl flex items-center font-sans italic">
        <svg
          class="fill-current h-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path
            d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"
          />
        </svg>
        Trello
      </h1>
    </div>

    <div class="flex items-center ml-auto">
      <client-only>
        {{ $colorMode.value }} | {{ isDark }} |
        <span v-if="isDark">YEAH</span>
        <span v-else>FAIl</span>
        <button
          type="button"
          class="bg-blue-400 dark:bg-blue-600 rounded h-8 w-8 font-bold text-white text-sm mr-2"
          @click="toggleColorMode"
        >
          <svg
            v-if="isDark"
            key="dark"
            class="w-5 h-5 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            v-else
            key="light"
            class="w-5 h-5 mx-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </client-only>

      <button
        class="bg-blue-300 dark:bg-blue-500 rounded h-8 w-8 font-bold text-white text-sm mr-2"
      >
        +
      </button>
      <button
        class="bg-blue-300 dark:bg-blue-500 rounded h-8 w-8 font-bold text-white text-sm mr-2"
      >
        i
      </button>
      <button
        class="bg-red-400 rounded h-8 w-8 font-bold text-white text-sm mr-2"
      >
        <svg
          class="h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2c-.8 0-1.5.7-1.5 1.5v.688C7.344 4.87 5 7.62 5 11v4.5l-2 2.313V19h18v-1.188L19 15.5V11c0-3.379-2.344-6.129-5.5-6.813V3.5c0-.8-.7-1.5-1.5-1.5zm-2 18c0 1.102.898 2 2 2 1.102 0 2-.898 2-2z"
          />
        </svg>
      </button>
      <img src="https://i.imgur.com/OZaT7jl.png" class="rounded-full" alt="" />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const toggleColorMode = () => {
  const newValue = colorMode.value === "light" ? "dark" : "light";
  colorMode.value = newValue;
  colorMode.preference = newValue;
};
</script>
