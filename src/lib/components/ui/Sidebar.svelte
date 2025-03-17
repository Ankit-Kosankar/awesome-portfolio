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
          <!-- Dropdown indicator only visible in desktop view -->
          <svg class={`w-3 h-3 ms-3 ${isMobileView ? 'hidden' : 'block'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
          </svg>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <GridSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Kanban</span>
          <!-- Badge only visible in desktop view -->
          <span class={`inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300 ${isMobileView ? 'hidden' : 'block'}`}>Pro</span>
        </SidebarItem>
        
        <SidebarItem>
          <svelte:fragment slot="icon">
            <MailBoxSolid class={iconClass} />
          </svelte:fragment>
          <span class={`${labelClass} ${isMobileView ? 'hidden' : 'block'}`}>Inbox</span>
          <!-- Badge only visible in desktop view -->
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