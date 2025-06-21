<script lang="ts">
  import { onMount } from 'svelte';
  
  // Sample project data - replace with your actual projects
  let projects = [
    {
      title: "AI Chat Application",
      description: "An Integration of Chat GPT and it uses OpenAI's API to provide natural language processing and chatbot capabilitiesconsole.",
      tags: ["Python", "AI", "Prompting" , "React"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      github: "https://github.com/yourusername/ai-image-gen",
      demo: "https://demo-url.com/ai-gen"
    },
    {
      title: "Spring Boot Microservices",
      description: "A simple Web Services Chat application with group chats and chat rooms.",
      tags: ["Java", "Spring Boot","Spring Data JPA"],
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop&crop=center",
      github: "https://github.com/Ankit-Kosankar/chat-app",
      demo: "N.A"
    },
    // {
    //   title: "Machine Learning API",
    //   description: "RESTful API that provides sentiment analysis and text classification for customer feedback.",
    //   tags: ["Python", "Flask", "scikit-learn"],
    //   image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&crop=center",
    //   github: "https://github.com/yourusername/ml-api",
    //   demo: null
    // },
    // {
    //   title: "E-commerce Platform",
    //   description: "Full-stack e-commerce solution with product management, cart functionality, and payment integration.",
    //   tags: ["React", "Node.js", "MongoDB"],
    //   image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center",
    //   github: "https://github.com/yourusername/ecommerce",
    //   demo: "https://demo-url.com/shop"
    // }
  ];
  
  // Animation control
  let isInView = false;
  let observer:any;
  let projectsElement:any;
  
  // State to control visible projects
  let showAllProjects = false;
  let visibleProjects = projects.slice(0, 2); // Initially show only 2 projects
  
  // Toggle function to show all projects
  function toggleShowAllProjects() {
    showAllProjects = !showAllProjects;
    visibleProjects = showAllProjects ? projects : projects.slice(0, 2);
  }
  
  // GitHub icon SVG
  const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`;
  
  // External link icon SVG
  const externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
  
  // Arrow down/up icon for view more/less button
  const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  
  onMount(() => {
    // Setup intersection observer to trigger animations when in view
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isInView = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    if (projectsElement) {
      observer.observe(projectsElement);
    }
    
    // Cleanup
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  });
</script>

<style>
  /* Main container */
  .projects-section {
    padding: 5rem 1.5rem;
    background-color: #f9fafb;
    position: relative;
    overflow: hidden;
  }
  
  /* Background accent */
  .background-accent {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 197, 253, 0.1));
    top: -250px;
    right: -200px;
    z-index: 0;
  }
  
  .background-accent-2 {
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), rgba(196, 181, 253, 0.05));
    bottom: -200px;
    left: -150px;
    z-index: 0;
  }
  
  /* Content container */
  .content-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  /* Section header */
  .section-header {
    text-align: center;
    margin-bottom: 3.5rem;
    position: relative;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #3b82f6, #93c5fd);
    border-radius: 2px;
  }
  
  .section-subtitle {
    font-size: 1.125rem;
    color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
  }
  
  /* Projects grid */
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  /* Project card */
  .project-card {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(30px);
  }
  
  .project-card.animated {
    animation: fadeInUp 0.6s forwards;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  /* Project image */
  .project-image-container {
    height: 180px;
    overflow: hidden;
    position: relative;
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-card:hover .project-image {
    transform: scale(1.05);
  }
  
  /* Placeholder for missing images */
  .project-image-placeholder {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #a5b4fc, #3b82f6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
  
  /* Project content */
  .project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.75rem;
  }
  
  .project-description {
    font-size: 0.95rem;
    color: #6b7280;
    margin-bottom: 1rem;
    flex-grow: 1;
  }
  
  /* Tags */
  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
  }
  
  .project-tag {
    font-size: 0.75rem;
    color: #4b5563;
    background-color: #f3f4f6;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }
  
  /* Links */
  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }
  
  .project-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem 0.75rem;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
  }
  
  .github-link {
    color: #1f2937;
    background-color: #f3f4f6;
  }
  
  .github-link:hover {
    background-color: #e5e7eb;
  }
  
  .demo-link {
    color: white;
    background-color: #3b82f6;
  }
  
  .demo-link:hover {
    background-color: #2563eb;
  }
  
  /* View more button */
  .view-more-container {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  
  .view-more-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background-color: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  
  .view-more-button:hover {
    background-color: #3b82f6;
    color: white;
    transform: translateY(-2px);
  }
  
  .view-more-button svg {
    transition: transform 0.3s ease;
  }
  
  .view-more-button:hover svg {
    transform: translateY(3px);
  }
  
  /* Toggle animation */
  .rotate-180 {
    transform: rotate(180deg);
  }
  
  /* Animations */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 460px) {
   .project-content {
    padding:10px;
    font-size: small;
   }

   .project-title {
    padding: 0px;
    margin: 0px;
    font-size: medium;
   }

   .project-description{
    padding: 0px;
    margin: 0px;
    font-size: small;
   }

   .project-tags{
    padding-bottom: 5px;
    margin: 0px;
    font-size: small;
   }

   .project-link{
    padding: 1px;
    font-size: small;
   }


   .project-image-container
   {
    height: 100px;
   }
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    .section-subtitle {
      font-size: 1rem;
    }
    
    .projects-grid {
      grid-template-columns: 1fr;
    }
    
    .project-image-container {
      /* height: 160px; */
      height: 100px;
    }
  }
  
  /* For medium screens - 2 columns */
  @media (min-width: 769px) and (max-width: 1024px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

<section class="projects-section" bind:this={projectsElement}>
  <!-- Background accents -->
  <div class="background-accent"></div>
  <div class="background-accent-2"></div>
  
  <div class="content-container">
    <!-- Section header -->
    <div class="section-header">
      <h2 class="section-title">Featured Projects</h2>
      <p class="section-subtitle">A collection of my recent work and open-source contributions</p>
    </div>
    
    <!-- Projects grid -->
    <div class="projects-grid">
      {#each visibleProjects as project, i}
        <div 
          class="project-card" 
          class:animated={isInView} 
          style="animation-delay: {i * 0.15}s"
        >
          <div class="project-image-container">
            {#if project.image}
              <img src={project.image} alt={project.title} class="project-image" />
            {:else}
              <div class="project-image-placeholder">
                {project.title.charAt(0)}{project.title.split(' ')[1]?.charAt(0) || ''}
              </div>
            {/if}
          </div>
          
          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            <p class="project-description">{project.description}</p>
            
            <div class="project-tags">
              {#each project.tags as tag}
                <span class="project-tag">{tag}</span>
              {/each}
            </div>
            
            <div class="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" class="project-link github-link">
                {@html githubIcon}
                <span>GitHub</span>
              </a>
              
              {#if project.demo}
                <a href={project.demo} target="_blank" rel="noopener noreferrer" class="project-link demo-link">
                  {@html externalLinkIcon}
                  <span>Live Demo</span>
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <!-- View More/Less Button -->
    <div class="view-more-container">
      <button on:click={toggleShowAllProjects} class="view-more-button">
        <span>{showAllProjects ? 'View Less' : 'View More'}</span>
        <span class:rotate-180={showAllProjects}>
          {@html arrowIcon}
        </span>
      </button>
    </div>
  </div>
</section>