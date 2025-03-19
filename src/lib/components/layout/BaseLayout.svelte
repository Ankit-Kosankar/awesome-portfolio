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
  </script>
  
  <div class="app-container" class:sidebar-hidden={!sidebarVisible}>
    <div class="header">
      <!-- Your existing header component goes here -->
      <!-- <Header on:toggleSidebar={toggleSidebar} /> -->
       <Header></Header>
      <!-- <slot name="header"></slot> -->
    </div>
    
    <div class="sidebar">
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
      width: 250px;
    }
    
    .main-content {
      grid-area: main;
      padding: 20px;
      overflow-y: auto;
    }
    
    .footer {
      grid-area: footer;
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
        left: 0;
        top: 0;
        height: 100vh;
        z-index: 20;
        transform: translateX(0);
        /* box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2); */
      }
      
      /* Hide sidebar with transform when not visible */
      .sidebar-hidden .sidebar {
        transform: translateX(-100%);
      }
    }
  </style>