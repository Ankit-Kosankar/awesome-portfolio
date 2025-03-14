<script>
    import { page } from '$app/stores';
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    $: activeUrl = $page.url.pathname;
    let activeClass = 'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
    let nonActiveClass = 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
  </script>
  
  <Navbar>
    <NavBrand href="/">
      <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl {activeUrl} {activeClass} {nonActiveClass}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/docs/components/accordion">Accordion</NavLi>
      <NavLi href="/docs/components/alert">Alert</NavLi>
      <NavLi href="/docs/components/avatar">Avatar</NavLi>
    </NavUl>
  </Navbar>
<!--
<script lang="ts">

	// import '../../styles/navbar.css';
    // import '../../styles/sidebar.scss';
    // import '../../styles/layout.css';
    // import '../../app.css';
    // import '../styles/header.css';
	

	let activePage = 'home';

	const navigate = (page: string) => {
		activePage = page;
	
	};

	let isNavbarActive = false;

	const toggleNavbar = () => {
		isNavbarActive = !isNavbarActive;
		const navBar = document.querySelector('.nav-bar');
		if (navBar) {
			navBar.classList.toggle('active', isNavbarActive);
		}
	};

  let isMenuOpen = false;
  
  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

</script>


<header class=nav-bar>
    <div class="logo">Ankit.</div>
    <div class="hamburger" class:active={isMenuOpen} on:click={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="nav-bar-menu" class:active={isMenuOpen}>
        <li>
            <a
                class="nav-link {activePage === 'home' ? 'active' : ''}"
                href="/"
                on:click={() => navigate('home')}
            >
                <i class="fa-solid fa-house"></i> Home
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'about' ? 'active' : ''}"
                href="/about"
                on:click={() => navigate('about')}
            >
                <i class="fa-solid fa-user"></i> About
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'blog' ? 'active' : ''}"
                href="/blog"
                on:click={() => navigate('blog')}
            >
                <i class="fa-solid fa-blog"></i> Blog
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'projects' ? 'active' : ''}"
                href="/projects"
                on:click={() => navigate('projects')}
            >
                <i class="fa-solid fa-briefcase"></i> Projects
            </a>
        </li>
        <li>
            <a
                class="nav-link {activePage === 'contactme' ? 'active' : ''}"
                href="/contactme"
                on:click|preventDefault={() => navigate('contactme')}
            >
                <i class="fa-solid fa-envelope"></i> Inquire Now
            </a>
        </li>
    </nav>
  </header>
  -->