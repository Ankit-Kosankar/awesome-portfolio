<script lang="ts">
    import { onMount } from 'svelte';
    import { blogConfig } from '$lib/config/blog';
    
    // Animation variables
    let isVisible = false;
    let loading = true;
    let error = false;
    
    // Blog posts from Medium RSS feed
    let blogPosts: Array<{
      title: string;
      description: string;
      date: string;
      url: string;
      image: string;
      author: string;
      readTime?: string;
    }> = [];
    
    // Blueprint lines animation
    let blueprintLines = Array(20).fill(null).map(() => ({
      length: Math.random() * 80 + 20,
      position: Math.random() * 100,
      delay: Math.random() * 3
    }));
    
    // Text animation
    let titleText = "My Blog";
    let displayedTitle = "";
    let titleIndex = 0;
    let subtitleText = "Thoughts on technology, development, and innovation";
    let displayedSubtitle = "";
    let subtitleIndex = 0;
    
    // Function to parse RSS feed and extract blog posts
    async function fetchMediumPosts() {
      try {
        // Use RSS feed URL from config
        const rssUrl = blogConfig.rssUrl;
        
        // Use CORS proxy from config
        const response = await fetch(blogConfig.corsProxy + encodeURIComponent(rssUrl));
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const items = xmlDoc.querySelectorAll('item');
        const posts: Array<{
          title: string;
          description: string;
          date: string;
          url: string;
          image: string;
          author: string;
          readTime?: string;
        }> = [];
        
        items.forEach((item, index) => {
          if (index < blogConfig.maxPosts) { // Use max posts from config
            const title = item.querySelector('title')?.textContent || '';
            const description = item.querySelector('description')?.textContent || '';
            const pubDate = item.querySelector('pubDate')?.textContent || '';
            const link = item.querySelector('link')?.textContent || '';
            const author = item.querySelector('dc\\:creator')?.textContent || 
                          item.querySelector('author')?.textContent || 'Unknown';
            
            // Extract image from content or use default
            let image = '';
            const content = item.querySelector('content\\:encoded')?.textContent || '';
            const imgMatch = content.match(/<img[^>]+src="([^"]+)"/);
            if (imgMatch) {
              image = imgMatch[1];
            } else {
              // Use technology-themed Unsplash images as fallback
              const techImages = [
                'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center', // Code
                'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center', // AI/ML
                'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center', // Development
                'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center', // Technology
                'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&crop=center', // Data Science
                'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=center'  // Web Development
              ];
              image = techImages[index % techImages.length];
            }
            
            // Format date
            const date = new Date(pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            });
            
            // Extract read time from description or estimate
            const readTimeMatch = description.match(/(\d+)\s*min\s*read/i);
            const readTime = readTimeMatch ? `${readTimeMatch[1]} min read` : '5 min read';
            
            posts.push({
              title,
              description: description.replace(/<[^>]*>/g, '').substring(0, 120) + '...',
              date,
              url: link,
              image,
              author,
              readTime
            });
          }
        });
        
        blogPosts = posts;
        loading = false;
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        error = true;
        loading = false;
        
        // Use fallback posts from config
        blogPosts = blogConfig.fallbackPosts;
      }
    }
    
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
      
      // Fetch blog posts
      fetchMediumPosts();
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
    
    /* Loading and error states */
    .loading-container, .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 3rem 0;
      text-align: center;
    }
    
    .loading-spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #e5e7eb;
      border-top: 4px solid #3b82f6;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin-bottom: 1rem;
    }
    
    .loading-text, .error-text {
      font-size: 1rem;
      color: #6b7280;
    }
    
    .error-text {
      color: #ef4444;
    }
    
    /* Card container */
    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
    }
    
    .blog-card-link {
      text-decoration: none;
      color: inherit;
      display: block;
    }
    
    .blog-card {
      background-color: white;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      opacity: 0;
      transform: translateY(20px);
      height: 100%;
      display: flex;
      flex-direction: column;
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
      position: relative;
      overflow: hidden;
    }
    
    .card-image-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
    
    .blog-card:hover .card-image-img {
      transform: scale(1.05);
    }
    
    .card-overlay {
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 0.5rem 0.75rem;
      border-bottom-left-radius: 0.5rem;
    }
    
    .read-time {
      font-size: 0.75rem;
      font-weight: 500;
    }
    
    .card-content {
      padding: 1.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    
    .card-description {
      font-size: 1rem;
      color: #4b5563;
      margin-bottom: 1rem;
      flex-grow: 1;
      line-height: 1.5;
    }
    
    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    .card-date {
      font-size: 0.875rem;
      color: #6b7280;
      font-style: italic;
    }
    
    .card-author {
      font-size: 0.875rem;
      color: #3b82f6;
      font-weight: 500;
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
    
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
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
      
      <!-- Loading state -->
      {#if loading}
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p class="loading-text">Loading blog posts...</p>
        </div>
      {:else if error}
        <div class="error-container">
          <p class="error-text">Unable to load blog posts. Showing sample content.</p>
        </div>
      {/if}
      
      <!-- Blog cards -->
      <div class="card-container">
        {#each blogPosts as post, i}
          <a href={post.url} target="_blank" rel="noopener noreferrer" class="blog-card-link">
            <div class="blog-card" class:visible={isVisible} style="transition-delay: {i * 0.2}s">
              <div class="card-image">
                <img src={post.image} alt={post.title} class="card-image-img" />
                <div class="card-overlay">
                  <span class="read-time">{post.readTime}</span>
                </div>
              </div>
              <div class="card-content">
                <h3 class="card-title">{post.title}</h3>
                <p class="card-description">{post.description}</p>
                <div class="card-meta">
                  <p class="card-date">{post.date}</p>
                  <p class="card-author">by {post.author}</p>
                </div>
              </div>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>