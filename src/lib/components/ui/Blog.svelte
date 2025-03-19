<script lang="ts">
    import { onMount } from 'svelte';
    
    // Animation variables
    let isVisible = false;
    let cards = [
      { title: "AI Advancements", description: "Exploring the latest breakthroughs in artificial intelligence and their implications.", date: "Coming Soon" },
      { title: "Web Development Trends", description: "A deep dive into modern web development practices and technologies.", date: "Coming Soon" },
      { title: "Machine Learning Projects", description: "Showcasing innovative ML projects and their real-world applications.", date: "Coming Soon" }
    ];
    
    // Blueprint lines animation
    let blueprintLines = Array(20).fill(null).map(() => ({
      length: Math.random() * 80 + 20,
      position: Math.random() * 100,
      delay: Math.random() * 3
    }));
    
    // Text animation
    let titleText = "Blog Coming Soon";
    let displayedTitle = "";
    let titleIndex = 0;
    let subtitleText = "Building something amazing for you";
    let displayedSubtitle = "";
    let subtitleIndex = 0;
    
    function animateTitle() {
      if (titleIndex < titleText.length) {
        displayedTitle += titleText[titleIndex];
        titleIndex++;
        setTimeout(animateTitle, 100);
      } else {
        setTimeout(animateSubtitle, 300);
      }
    }
    
    function animateSubtitle() {
      if (subtitleIndex < subtitleText.length) {
        displayedSubtitle += subtitleText[subtitleIndex];
        subtitleIndex++;
        setTimeout(animateSubtitle, 50);
      } else {
        setTimeout(() => {
          isVisible = true;
        }, 500);
      }
    }
    
    onMount(() => {
      setTimeout(() => {
        animateTitle();
      }, 800);
    });
  </script>
  
  <style>
    /* Main container */
    .blog-section {
      padding: 4rem 1.5rem;
      background-color: #f9fafb;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    
    /* Blueprint design background */
    .blueprint-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.07;
      z-index: 0;
    }
    
    .blueprint-grid {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(to right, #3b82f6 1px, transparent 1px),
        linear-gradient(to bottom, #3b82f6 1px, transparent 1px);
      background-size: 20px 20px;
    }
    
    .blueprint-line {
      position: absolute;
      height: 1px;
      background-color: #3b82f6;
      transform-origin: left center;
    }
    
    /* Content container */
    .content-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      z-index: 1;
    }
    
    /* Header styling */
    .blog-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .blog-title {
      font-size: 3rem;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
    }
    
    .blog-subtitle {
      font-size: 1.25rem;
      color: #4b5563;
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Construction elements */
    .construction-indicator {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 2rem;
    }
    
    .progress-bar {
      width: 150px;
      height: 6px;
      background-color: #e5e7eb;
      border-radius: 3px;
      overflow: hidden;
      margin: 0 1rem;
    }
    
    .progress-fill {
      height: 100%;
      width: 65%;
      background-color: #3b82f6;
      border-radius: 3px;
      animation: pulse 2s infinite;
    }
    
    .progress-text {
      font-size: 1rem;
      color: #6b7280;
      font-weight: 500;
    }
    
    /* Card container */
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
    }
    
    .blog-card {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
    }
    
    .blog-card.visible {
      opacity: 1;
      transform: translateY(0);
    }
    
    .blog-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    
    .card-image {
      height: 160px;
      background: linear-gradient(135deg, #a5b4fc, #3b82f6);
      position: relative;
      overflow: hidden;
    }
    
    .card-image::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: repeating-linear-gradient(
        0deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0.1) 2px,
        transparent 2px,
        transparent 4px
      );
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }
    
    .card-description {
      font-size: 1rem;
      color: #4b5563;
      margin-bottom: 1rem;
    }
    
    .card-date {
      font-size: 0.875rem;
      color: #6b7280;
      font-style: italic;
    }
    
    .card-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: rgba(59, 130, 246, 0.9);
      color: white;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
    }
    
    /* Animations */
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.6;
      }
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    
    @keyframes drawLine {
      from {
        transform: scaleX(0);
      }
      to {
        transform: scaleX(1);
      }
    }
    
    .cursor {
      display: inline-block;
      width: 2px;
      height: 1.2em;
      background-color: #1f2937;
      margin-left: 4px;
      animation: pulse 1s infinite;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .blog-title {
        font-size: 2.5rem;
      }
      
      .blog-subtitle {
        font-size: 1.125rem;
      }
      
      .card-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
  
  <section class="blog-section">
    <!-- Blueprint background -->
    <div class="blueprint-background">
      <div class="blueprint-grid"></div>
      {#each blueprintLines as line, i}
        <div 
          class="blueprint-line" 
          style="
            width: {line.length}%;
            top: {line.position}%;
            left: {Math.random() * 20}%;
            animation: drawLine 2s ease-out {line.delay}s forwards;
          "
        ></div>
      {/each}
    </div>
    
    <div class="content-container">
      <!-- Header -->
      <div class="blog-header">
        <h2 class="blog-title">
          {displayedTitle}
          {#if displayedTitle.length < titleText.length}
            <span class="cursor"></span>
          {/if}
        </h2>
        <p class="blog-subtitle">
          {displayedSubtitle}
          {#if displayedTitle.length === titleText.length && displayedSubtitle.length < subtitleText.length}
            <span class="cursor"></span>
          {/if}
        </p>
      </div>
      
      <!-- Construction indicator -->
      <div class="construction-indicator">
        <span class="progress-text">65% Complete</span>
        <div class="progress-bar">
          <div class="progress-fill"></div>
        </div>
        <span class="progress-text">Coming Soon</span>
      </div>
      
      <!-- Blog cards -->
      <div class="card-container">
        {#each cards as card, i}
          <div class="blog-card" class:visible={isVisible} style="transition-delay: {i * 0.2}s">
            <div class="card-image">
              <span class="card-badge">Coming Soon</span>
            </div>
            <div class="card-content">
              <h3 class="card-title">{card.title}</h3>
              <p class="card-description">{card.description}</p>
              <p class="card-date">{card.date}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>