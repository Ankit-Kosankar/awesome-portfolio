<script>
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper } from 'flowbite-svelte';
    import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline } from 'flowbite-svelte-icons';
    import { BrainSolid } from 'flowbite-svelte-icons'; 
    import { EditSolid } from 'flowbite-svelte-icons';
    import { CodeBranchSolid } from 'flowbite-svelte-icons';
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
        <SidebarItem class="sidebar-item">
          <svelte:fragment slot="icon">
            <BrainSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">AI Framework Developer</span>
        </SidebarItem>
        
        <SidebarItem class="sidebar-item">
          <svelte:fragment slot="icon">
            <EditSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Content Writing</span>
        </SidebarItem>
        
        <SidebarItem class="sidebar-item">
          <svelte:fragment slot="icon">
            <CodeBranchSolid class="sidebar-icon" />
          </svelte:fragment>
          <span class="sidebar-label">Full Stack Developer</span>
        </SidebarItem>
      </SidebarGroup>
    </SidebarWrapper>
  </Sidebar>