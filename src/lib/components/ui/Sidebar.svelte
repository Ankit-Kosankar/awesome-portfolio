<script>
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
  
  // Using different icons for a more unique look
  import { RocketSolid } from 'flowbite-svelte-icons'; // For AI Framework Developer
  import { PenNibSolid } from 'flowbite-svelte-icons'; // For Content Writing
  import { CodeForkSolid } from 'flowbite-svelte-icons'; // For Full Stack Developer

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
    width: 70px !important; /* Mobile width (icons only) */
    transition: width 0.3s ease-in-out;
    background-color: #f8fafc !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
    overflow: hidden;
  }

  /* Icon container styles */
  :global(.sidebar-item) {
    margin: 8px 0 !important;
    border-radius: 12px !important;
    transition: background-color 0.3s, transform 0.2s !important;
    overflow: hidden !important;
  }

  :global(.sidebar-item:hover) {
    background-color: #f0f9ff !important;
    transform: translateY(-2px) !important;
  }

  /* Icon styles with unique colors */
  :global(.ai-icon) {
    width: 28px !important;
    height: 28px !important;
    color: #6366f1 !important; /* Indigo for AI */
    transition: transform 0.3s ease, color 0.3s !important;
  }

  :global(.content-icon) {
    width: 28px !important;
    height: 28px !important;
    color: #ec4899 !important; /* Pink for Content */
    transition: transform 0.3s ease, color 0.3s !important;
  }

  :global(.dev-icon) {
    width: 28px !important;
    height: 28px !important;
    color: #10b981 !important; /* Green for Development */
    transition: transform 0.3s ease, color 0.3s !important;
  }

  /* Icon animation on hover */
  :global(.sidebar-item:hover .ai-icon),
  :global(.sidebar-item:hover .content-icon),
  :global(.sidebar-item:hover .dev-icon) {
    transform: scale(1.15) rotate(5deg) !important;
  }

  /* Text label styles - corrected to ensure visibility on desktop */
  :global(.sidebar-label) {
    /* display: none !important; Hidden by default (mobile) */
    margin-left: 16px !important;
    white-space: nowrap !important;
    font-weight: 600 !important;
    font-size: 0.95rem !important;
    color: #1e293b !important;
    /* opacity: 0 !important;
     */
    transition: opacity 0.3s !important;
  }

  /* Desktop styles - stronger selectors to ensure these are applied */
  @media (min-width: 768px) {
    :global(.sidebar-label) {
    visibility: visible !important;
    opacity: 1 !important;
    /* max-width: 200px !important; Allow space for text */
    overflow: visible !important;
    display: inline-block !important;
  }

    :global(.sidebar-label) {
      display: inline-block !important; /* Show text on desktop */
      opacity: 1 !important;
    }
    
    :global(.sidebar-item) {
      padding: 12px !important; /* More padding on desktop */
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
          <RocketSolid class="ai-icon" />
        </svelte:fragment>
        <span class="sidebar-label">AI Framework Developer</span>
      </SidebarItem>
      
      <SidebarItem class="sidebar-item">
        <svelte:fragment slot="icon">
          <PenNibSolid class="content-icon" />
        </svelte:fragment>
        <span class="sidebar-label">Content Writing</span>
      </SidebarItem>
      
      <SidebarItem class="sidebar-item">
        <svelte:fragment slot="icon">
          <CodeForkSolid class="dev-icon" />
        </svelte:fragment>
        <span class="sidebar-label">Full Stack Developer</span>
      </SidebarItem>
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>