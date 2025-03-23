<script>
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline } from 'flowbite-svelte-icons';
  $: activeUrl = $page.url.pathname;
  
  // Add data for tooltips
  const menuItems = [
    { label: "Dashboard", href: "/", icon: ChartPieSolid },
    { label: "Accordion", href: "/docs/components/accordion", icon: GridSolid },
    { label: "Alert", href: "/docs/components/alert", icon: MailBoxSolid },
    { label: "Sidebar", href: "/docs/components/sidebar", icon: UserSolid },
    { label: "Badge", href: "/docs/components/badge", icon: ArrowRightToBracketOutline }
  ];
</script>


<aside class="sidebar">
  <div class="icon-container">
    <div class="icon">
      &lt;/&gt;
    </div>
    <span class="tooltip">Content Writing</span>
  </div>
  
  <div class="icon-container">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    </div>
    <span class="tooltip">AI Framework Development</span>
  </div>
  
  <div class="icon-container">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </div>
    <span class="tooltip">Software Development</span>
  </div>
</aside>

<style>

.sidebar {
      grid-area: sidebar;
      background-color: #f3f4f6;
      width: 70px;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 0.3s ease;
    }
    
    /* Icon styles */
    .icon-container {
      position: relative;
      margin-bottom: 1.5rem;
      cursor: pointer;
    }
    
    .icon {
      width: 40px;
      height: 40px;
      background-color: #6366f1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-size: 1.25rem;
      transition: all 0.3s ease;
    }
    
    .icon-container:hover .icon {
      background-color: #4f46e5;
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(99, 102, 241, 0.5);
    }
    
    /* Tooltip styles */
    .tooltip {
      visibility: hidden;
      position: absolute;
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      background-color: #1f2937;
      color: white;
      padding: 0.5rem 0.75rem;
      border-radius: 0.25rem;
      font-size: 0.875rem;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s, visibility 0.3s;
      margin-left: 0.75rem;
      z-index: 10;
    }
    
    .icon-container:hover .tooltip {
      visibility: visible;
      opacity: 1;
    }
    
    /* Add a tooltip arrow */
    .tooltip::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent #1f2937 transparent transparent;
    }
    
    /* Media query for mobile */
    @media (max-width: 768px) {
      /* body {
        grid-template-areas:
          "header"
          "main"
          "footer";
        grid-template-columns: 1fr;
      }
       */
      .sidebar {
        position: fixed;
        left: 0;
        top: 33%;
        transform: translateY(-50%);
        z-index: 100;
        padding: 1rem 0.5rem;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
      }
    }

.tooltip {
  visibility: hidden;
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  margin-left: 8px;
}


/* Media query for mobile devices */
@media (max-width: 768px) {
  :global(.responsive-sidebar) {
    width: 60px !important; /* Narrower sidebar for mobile */
  }
  
  /* Hide the text labels on mobile */
  :global(.sidebar-item span) {
    display: none !important;
  }
  
  /* Center the icons */
  :global(.sidebar-item) {
    justify-content: center !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}
</style>