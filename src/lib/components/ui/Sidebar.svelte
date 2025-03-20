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