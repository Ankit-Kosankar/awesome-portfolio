<script lang="ts">
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { onMount } from 'svelte';
    // Remove the slide import
    // import { slide } from 'svelte/transition';
    
    let isOpen = false;
    $: activeUrl = $page.url.pathname;
 
    let activeClass = 'text-white bg-green-700 md:bg-transparent';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
 
    const toggleMenu = () => (isOpen = !isOpen);
   
    // Custom transition that doesn't use height
    function fadeSlide(node:any, { delay = 0, duration = 300 }) {
        return {
            delay,
            duration,
            css: (t: number) => `
                opacity: ${t};
                transform: translateY(${(1-t) * -10}px);
            `
        };
    }
</script>

<Navbar>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger on:click={toggleMenu} />
    
    <!-- Desktop menu (always visible on md screens and up) -->
    <div class="hidden w-full md:block md:w-auto">
        <NavUl
            {activeUrl}
            {activeClass}
            {nonActiveClass}
            ulClass="flex flex-row mt-0 space-x-8 font-medium border-0 bg-white md:space-x-8 dark:bg-gray-900"
        >
            <NavLi href="/">Home</NavLi>
            <NavLi href="/docs/components/navbar">Navbar</NavLi>
            <NavLi href="/docs/components/accordion">Accordion</NavLi>
            <NavLi href="/docs/components/alert">Alert</NavLi>
            <NavLi href="/docs/components/avatar">Avatar</NavLi>
        </NavUl>
    </div>
    
    <!-- Mobile menu with custom transition -->
    {#if isOpen}
        <div transition:fadeSlide={{ delay: 0, duration: 300 }} class="w-full md:hidden">
            <NavUl
                {activeUrl}
                {activeClass}
                {nonActiveClass}
                ulClass="flex flex-col mx-auto w-[70%] p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
            >
                <NavLi href="/">Home</NavLi>
                <NavLi href="/docs/components/navbar">Navbar</NavLi>
                <NavLi href="/docs/components/accordion">Accordion</NavLi>
                <NavLi href="/docs/components/alert">Alert</NavLi>
                <NavLi href="/docs/components/avatar">Avatar</NavLi>
            </NavUl>
        </div>
    {/if}
</Navbar>

<style>
    /* This style might not be needed anymore with the structure above */
    :global(.custom-nav-menu) {
        width: 100%;
    }
   
    @media (min-width: 768px) {
        :global(.custom-nav-menu) {
            width: auto;
        }
    }
</style>