<!-- src/routes/+layout.svelte -->
<script lang="ts">
    // Import the components you already have
    // import Header from '../components/Header.svelte';
    // import Sidebar from '../components/Sidebar.svelte';
    // import Footer from '../components/Footer.svelte';
    
    import Header from '../ui/Header.svelte';
    import Footer from '../ui/Footer.svelte';
    import Sidebar from '../ui/Sidebar.svelte';
    import Skills from '../ui/Skills.svelte';
    import Projects from '../ui/Projects.svelte';
    import Hero from '../ui/Hero.svelte';
    import Blog from '../ui/Blog.svelte';
    

    // State for controlling sidebar visibility
    let sidebarVisible = true;
    
    // Toggle sidebar visibility
    function toggleSidebar() {
      sidebarVisible = !sidebarVisible;
    }

    let sidebarExpanded = false; // New state for mobile dropdown functionality
     // Toggle sidebar expansion on mobile
     function toggleSidebarExpansion() {
      sidebarExpanded = !sidebarExpanded;
    }

  </script>
  
  <div class="app-container" class:sidebar-hidden={!sidebarVisible}>
    <div class="header">
      <!-- Your existing header component goes here -->
      <!-- <Header on:toggleSidebar={toggleSidebar} /> -->
       <Header></Header>
      <!-- <slot name="header"></slot> -->
    </div>
    
      <!-- Mobile sidebar toggle button -->
  <button 
  class="sidebar-toggle-btn" 
  on:click={toggleSidebarExpansion} 
  aria-label="Toggle sidebar"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
    class:rotated={sidebarExpanded}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
</button>

    <div class="sidebar" class:expanded={sidebarExpanded}>
      <!-- Your existing sidebar component goes here -->
      <Sidebar />
      <!-- <slot name="sidebar"></slot> -->
    </div>
    
    <div class="main-content">
        <div>
        <Hero></Hero>
            </div>
            
            <div>
                <Blog></Blog>
            </div>
            
            <div>
                <Projects></Projects>
            </div>
            
            <div>
                <Skills></Skills>
            </div>
            
        <!-- Page content from routes -->
      <!-- <slot></slot> -->
    </div>
    
    <div class="footer">
      <!-- Your existing footer component goes here -->
      <Footer />
      <!-- <slot name="footer"></slot> -->
    </div>
  </div>
  
  <style>
    /* Main layout container */
    .app-container {
      display: grid;
      grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      transition: all 0.3s ease;
    }
    
    /* When sidebar is hidden */
    .sidebar-hidden {
      grid-template-areas:
        "header header"
        "main main"
        "footer footer";
      grid-template-columns: 0 1fr;
    }
    
    /* Area assignments */
    .header {
      grid-area: header;
      position: sticky;
      top: 0;
      z-index: 10;
    }
    
    .sidebar {
      grid-area: sidebar;
      overflow-y: auto;
      transition: all 0.3s ease;
      /* width: 250px; */
      width: 70%;
      background-color: aquamarine;
      height: 9%;
    }
    
    .main-content {
      grid-area: main;
      padding: 20px;
      overflow-y: auto;
    }
    
    .footer {
      grid-area: footer;
    }
    
    /* Hide toggle button by default (desktop) */
  .sidebar-toggle-btn {
    display: none;
  }

    /* Media query for mobile */
    @media (max-width: 768px) {
      .app-container {
        grid-template-areas:
          "header"
          "main"
          "footer";
        grid-template-columns: 1fr;
      }
      
      /* Mobile sidebar positioning */
      .sidebar {
        position: fixed;
        left: -3%;
        top: 15%;
        /* height: 100vh; */
        z-index: 20;
        transform: translateX(0);
        width: 15%;
        /* height: 50%; */

        height: 0; /* Start with height 0 when collapsed */
      overflow: hidden; /* Hide content when collapsed */
      transition: height 0.4s ease, opacity 0.3s ease;
      opacity: 0;
        /* box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2); */
      }
      
      /* When sidebar is expanded */
    .sidebar.expanded {
      height: 50%; /* Expand to full height */
      opacity: 1;
    }
      /* Hide sidebar with transform when not visible */
      .sidebar-hidden .sidebar {
        transform: translateX(-100%);
      }


      /* Show toggle button on mobile */
    .sidebar-toggle-btn {
      display: flex;
      position: fixed;
      left: 4.5%; /* Center relative to sidebar width */
      transform: translateX(-50%);
      top: 10%; /* Just above the sidebar */
      z-index: 30;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: linear-gradient(145deg, #2dd4bf, #0891b2);
      border: none;
      box-shadow: 0 0 15px rgba(45, 212, 191, 0.7), 
                  0 0 5px rgba(8, 145, 178, 0.5);
      color: white;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s infinite;
    }
    
    .sidebar-toggle-btn:hover {
      box-shadow: 0 0 20px rgba(45, 212, 191, 0.9), 
                  0 0 10px rgba(8, 145, 178, 0.7);
    }
    
    .sidebar-toggle-btn svg {
      width: 24px;
      height: 24px;
      transition: transform 0.3s ease;
    }
    
    .sidebar-toggle-btn svg.rotated {
      transform: rotate(180deg);
    }
    
    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.7);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(45, 212, 191, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(45, 212, 191, 0);
      }
    }


    }
  </style>