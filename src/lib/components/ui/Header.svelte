<script lang="ts">
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  
  let isMenuOpen = false;
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<nav class="px-4 py-3 fixed w-full z-20 top-0 start-0 border-b bg-white dark:bg-gray-800">
  <div class="container mx-auto flex flex-wrap justify-between items-center">
    <!-- Logo/Brand -->
    <a href="/" class="flex items-center">
      <img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-8" alt="Logo" />
      <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    
    <!-- Hamburger button -->
    <button 
      on:click={toggleMenu} 
      type="button" 
      class="inline-flex items-center p-2 ml-3 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-menu" 
      aria-expanded={isMenuOpen}
    >
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
      </svg>
    </button>
    
    <!-- Desktop menu - always visible on md+ screens -->
    <div class="hidden w-full md:block md:w-auto" id="navbar-menu">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
        <li>
          <a href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="/docs/components/navbar" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Navbar</a>
        </li>
        <li>
          <a href="/pricing" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  
  <!-- Mobile menu with transition - now half width -->
  {#if isMenuOpen}
    <div 
      transition:slide={{duration: 300, easing: quintOut}} 
      class="md:hidden w-1/4 absolute top-[102.5%] right-0 bg-white dark:bg-gray-800 border-l border-b border-gray-200 dark:border-gray-700 shadow-lg"
    >
      <ul class="py-2 px-4 space-y-2">
        <li>
          <a href="/" class="block py-2 px-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Home</a>
        </li>
        <li>
          <a href="/about" class="block py-2 px-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">About</a>
        </li>
        <li>
          <a href="/docs/components/navbar" class="block py-2 px-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Navbar</a>
        </li>
        <li>
          <a href="/pricing" class="block py-2 px-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="/contact" class="block py-2 px-3 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>

<!-- Add a spacer to prevent content from being hidden under the fixed navbar -->
<div class="h-16"></div>