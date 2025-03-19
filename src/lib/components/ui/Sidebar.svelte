<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';

    // Add this script to help debug the issue
    if (typeof window !== 'undefined') {
      const updateModeIndicator = () => {
        const indicator = document.getElementById('mode-indicator');
        if (indicator) {
          indicator.textContent = window.innerWidth >= 768 ? 'Desktop' : 'Mobile';
        }
      };
      
      window.addEventListener('DOMContentLoaded', updateModeIndicator);
      window.addEventListener('resize', updateModeIndicator);
    }
  
</script>
  
  <style>
    /* Make sure to use :global for all styles to apply them correctly */
    :global(.responsive-sidebar) {
      width: 64px !important; /* Mobile width (icons only) */
      transition: width 0.3s ease;
    }
  
    /* Icon styles */
    :global(.sidebar-icon) {
      width: 24px !important;
      height: 24px !important;
      color: #6b7280 !important;
      transition: color 0.2s;
    }
  
    /* Text label styles - hidden by default */
    :global(.sidebar-label) {
      display: none !important; /* Hidden by default (mobile) */
      margin-left: 12px;
      white-space: nowrap;
      opacity: 0;
      transition: opacity 0.3s;
    }
  
    /* Badge styles - hidden by default */
    :global(.sidebar-badge) {
      display: none !important; /* Hidden by default (mobile) */
      margin-left: 12px;
      font-size: 0.875rem;
    }
  
    /* Dropdown arrow - hidden by default */
    :global(.dropdown-arrow) {
      display: none !important; /* Hidden by default (mobile) */
      width: 12px;
      height: 12px;
      margin-left: 12px;
    }
  
    /* Desktop styles - we'll use a stronger selector to ensure these are applied */
    @media (min-width: 768px) {
      :global(.responsive-sidebar) {
        width: 256px !important; /* Desktop width (with labels) */
      }
  
      :global(.sidebar-label) {
        display: inline-block !important; /* Show text on desktop */
        opacity: 1 !important;
      }
  
      :global(.sidebar-badge) {
        display: inline-flex !important; /* Show badges on desktop */
      }
  
      :global(.dropdown-arrow) {
        display: inline-block !important; /* Show dropdown arrows on desktop */
      }
    }
  </style>
  
  <!-- Add a testing flag to force desktop mode for debugging -->
  <div class="debugging-mode" style="display: none;">
    Current mode: <span id="mode-indicator">Unknown</span>
  </div>
  
  <Sidebar class="responsive-sidebar">
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem>
          <svelte:fragment slot="icon">
            <ChartPieSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Dashboard</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <CartSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">E-commerce</span>
          <svg class="dropdown-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <GridSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Kanban</span>
          <span class="sidebar-badge" style="background-color: #e5e7eb; color: #1f2937; padding: 2px 8px; border-radius: 9999px;">Pro</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <MailBoxSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Inbox</span>
          <span class="sidebar-badge" style="background-color: #dbeafe; color: #2563eb; width: 12px; height: 12px; display: flex; align-items: center; justify-content: center; border-radius: 9999px;">3</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <UserSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Users</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Sign In</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <EditOutline class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Sign Up</span>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
  
  

<!--
<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
  </script>
  
  <style>
    /* Custom sidebar styles */
    :global(.responsive-sidebar) {
      width: 64px; /* Mobile width (icons only) */
      transition: width 0.3s ease;
    }
  
    /* Icon styles */
    :global(.sidebar-icon) {
      width: 24px;
      height: 24px;
      color: #6b7280; /* gray-500 */
      transition: color 0.2s;
    }
  
    :global(.sidebar-icon:hover) {
      color: #111827; /* gray-900 */
    }
  
    /* Text label styles */
    :global(.sidebar-label) {
      display: none; /* Hidden by default (mobile) */
      margin-left: 12px;
      white-space: nowrap;
      transition: opacity 0.3s;
    }
  
    /* Badge styles */
    :global(.sidebar-badge) {
      display: none; /* Hidden by default (mobile) */
      margin-left: 12px;
      font-size: 0.875rem;
    }
  
    /* Dropdown arrow */
    :global(.dropdown-arrow) {
      display: none; /* Hidden by default (mobile) */
      width: 12px;
      height: 12px;
      margin-left: 12px;
    }
  
    /* Responsive breakpoint (768px = medium screens) */
    @media (min-width: 768px) {
      :global(.responsive-sidebar) {
        width: 256px; /* Desktop width (with labels) */
      }
  
      :global(.sidebar-label),
      :global(.sidebar-badge),
      :global(.dropdown-arrow) {
        display: block; /* Show text and badges on desktop */
      }
    }
  
    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :global(.sidebar-icon) {
        color: #9ca3af; /* gray-400 */
      }
      
      :global(.sidebar-icon:hover) {
        color: #f9fafb; /* gray-50 */
      }
    }
  </style>
  
  <Sidebar class="responsive-sidebar">
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem>
          <svelte:fragment slot="icon">
            <ChartPieSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Dashboard</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <CartSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">E-commerce</span>
          <svg class="dropdown-arrow" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <GridSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Kanban</span>
          <span class="sidebar-badge" style="background-color: #e5e7eb; color: #1f2937; padding: 2px 8px; border-radius: 9999px;">Pro</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <MailBoxSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Inbox</span>
          <span class="sidebar-badge" style="background-color: #dbeafe; color: #2563eb; width: 12px; height: 12px; display: flex; align-items: center; justify-content: center; border-radius: 9999px;">3</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <UserSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Users</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Sign In</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <EditOutline class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Sign Up</span>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
--->

  <!--
<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
    
    // Variable to control sidebar state
    let isMobileView = false;
    let sidebarWidth = "w-64"; // Default sidebar width
  
    // Check if mobile view on component mount and when window resizes
    function checkMobileView() {
      isMobileView = window.innerWidth < 768; // 768px is typical md breakpoint
      sidebarWidth = isMobileView ? "w-16" : "w-64";
    }
  
    // Custom class for labels to hide in mobile view
    let labelClass = "flex-1 ms-3 whitespace-nowrap transition-all duration-300";
    let iconClass = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
  </script>
  
  <svelte:window on:resize={checkMobileView}/>
  
  <svelte:head>
    {#if typeof window !== 'undefined'}
      {checkMobileView()}
    {/if}
  </svelte:head>
  
  <Sidebar class={`transition-all duration-300 ${sidebarWidth}`}>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <ChartPieSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Dashboard</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <CartSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>E-commerce</span>

          <svg class={`w-3 h-3 ms-3 ${isMobileView ? 'hidden' : 'block'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <GridSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Kanban</span>
          
          <span class={`inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 ${isMobileView ? 'hidden' : 'block'}`}>Pro</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <MailBoxSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Inbox</span>
          
          <span class={`inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200 ${isMobileView ? 'hidden' : 'block'}`}>3</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <UserSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Users</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Sign In</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <EditOutline class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Sign Up</span>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
-->
<!--
<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
    let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  </script>
  
  <Sidebar>
    <SidebarWrapper>
      <SidebarGroup>
        <SidebarItem label="Dashboard">
          <svelte:fragment slot="icon">
            <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarDropdownWrapper label="E-commerce">
          <svelte:fragment slot="icon">
            <CartSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <SidebarDropdownItem label="Products" />
          <SidebarDropdownItem label="Billing" />
          <SidebarDropdownItem label="Invoice" />
        </SidebarDropdownWrapper>
        <SidebarItem label="Kanban" {spanClass}>
          <svelte:fragment slot="icon">
            <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Inbox" {spanClass}>
          <svelte:fragment slot="icon">
            <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
          <svelte:fragment slot="subtext">
            <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Users">
          <svelte:fragment slot="icon">
            <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign In">
          <svelte:fragment slot="icon">
            <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
        <SidebarItem label="Sign Up">
          <svelte:fragment slot="icon">
            <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
          </svelte:fragment>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>
-->