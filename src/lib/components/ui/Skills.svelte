<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  // Define your skills here
  const skillCategories = [
    {
      name: "Frontend Technologies",
      skills: [
        { name: "Svelte", icon: "fab fa-svelte" },
        { name: "Next.js", icon: "fab fa-react" },
        { name: "React", icon: "fab fa-react" },
        { name: "JavaScript", icon: "fab fa-js-square" },
        { name: "TypeScript", icon: "fab fa-js" },
        { name: "HTML5", icon: "fab fa-html5" },
        { name: "CSS3", icon: "fab fa-css3-alt" },
        { name: "SCSS", icon: "fas fa-palette" }
      ]
    },
    {
      name: "Backend Technologies",
      skills: [
        { name: "Spring Boot", icon: "fas fa-leaf" },
        { name: "Java", icon: "fab fa-java" },
        { name: "Node.js", icon: "fab fa-node" },
        { name: "Express", icon: "fab fa-node-js" },
        { name: "Server-Side Programming", icon: "fas fa-server" }
      ]
    },
    {
      name: "AI & ML Technologies",
      skills: [
        { name: "Python", icon: "fab fa-python" },
        { name: "TensorFlow", icon: "fas fa-brain" },
        { name: "PyTorch", icon: "fas fa-fire" },
        { name: "LangChain", icon: "fas fa-link" },
        { name: "Agent Development", icon: "fas fa-robot" },
        { name: "ML APIs", icon: "fas fa-plug" }
      ]
    },
    {
      name: "DevOps Tools & Others",
      skills: [
        { name: "Git", icon: "fab fa-git-alt" },
        { name: "Docker", icon: "fab fa-docker" },
        { name: "AWS", icon: "fab fa-aws" },
        { name: "PostgreSQL", icon: "fas fa-database" },
        { name: "Firebase", icon: "fas fa-fire-alt" },
        { name: "VS Code", icon: "fas fa-code" },
        { name: "Figma", icon: "fab fa-figma" }
      ]
    }
  ];

  let visible = false;
  // Track which categories have expanded to show all skills
  let expandedCategories: Record<number, boolean> = {};

  onMount(() => {
    visible = true;
  });

  // Function to get delay for staggered animations
  const getListItemDelay = (categoryIndex: number, itemIndex: number) => {
    return 100 + (categoryIndex * 50) + (itemIndex * 100);
  };

  // Function to toggle expanded state for a specific category
  const toggleCategory = (categoryIndex: number) => {
    expandedCategories[categoryIndex] = !expandedCategories[categoryIndex];
    expandedCategories = {...expandedCategories}; // Trigger reactivity
  };

  // Function to determine if a skill should be visible
  const isSkillVisible = (categoryIndex: number, skillIndex: number) => {
    return skillIndex < 3 || expandedCategories[categoryIndex];
  };
</script>

<svelte:head>
  <!-- Font Awesome for icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</svelte:head>

<div class="skills-container">
  <h3>Skills :</h3>

  {#each skillCategories as category, categoryIndex}
    {#if visible}
      <div 
        class="category-section"
        in:fly={{ y: 20, duration: 500, delay: 200 + (categoryIndex * 150) }}
      >
        <h4>{category.name}</h4>
        <ul>
          {#each category.skills as skill, skillIndex}
            {#if isSkillVisible(categoryIndex, skillIndex)}
              <li style="animation-delay: {getListItemDelay(categoryIndex, skillIndex)}ms">
                <i class="{skill.icon}"></i> 
                <span class="skill-name">{skill.name}</span>
              </li>
            {/if}
          {/each}
          
          {#if category.skills.length > 3}
            <li 
              class="more-button" 
              on:click={() => toggleCategory(categoryIndex)}
              style="animation-delay: {getListItemDelay(categoryIndex, 3)}ms"
            >
              <i class={expandedCategories[categoryIndex] ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
              <span class="skill-name">{expandedCategories[categoryIndex] ? "Less" : "More"}</span>
            </li>
          {/if}
        </ul>
      </div>
    {/if}
  {/each}
</div>

<style>
  .skills-container {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
  }

  h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }

  h3::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #6e48aa, #9d50bb);
  }

  .category-section {
    margin-bottom: 2rem;
  }

  h4 {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
    color: #333;
    letter-spacing: 0.1em;
    border-left: 4px solid #9d50bb;
    padding-left: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1rem;
    letter-spacing: 0.1em;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 12px 16px;
    border-radius: 10px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
    flex: 1 1 calc(25% - 10px);
    min-width: 200px;
    max-width: 300px;
    box-sizing: border-box;
    animation: fadeIn 0.5s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
  }

  li:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 20px rgba(157, 80, 187, 0.1);
    background-color: #fff;
    border-left: 3px solid #9d50bb;
  }

  li i {
    font-size: 1.5rem;
    margin-right: 12px;
    color: #6e48aa;
    transition: all 0.4s ease;
    width: 30px;
    text-align: center;
  }

  li:hover i {
    color: #9d50bb;
    transform: rotate(10deg) scale(1.2);
  }

  .more-button {
    cursor: pointer;
    background: linear-gradient(145deg, #f0f0f0, #e6e6e6);
    border: 1px dashed #9d50bb;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .more-button:hover {
    background: linear-gradient(145deg, #f5f5f5, #fafafa);
    border: 1px solid #9d50bb;
  }

  .more-button i {
    color: #9d50bb;
  }

  .skill-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Keyframes for entrance animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Media queries for responsiveness */
  @media (max-width: 1200px) {
    li {
      flex: 1 1 calc(33.333% - 10px);
    }
  }

  @media (max-width: 900px) {
    li {
      flex: 1 1 calc(50% - 10px);
      min-width: 160px;
    }
  }

  @media (max-width: 600px) {
    .skills-container {
      padding: 1rem;
    }
    
    h3 {
      font-size: medium;
    }
    
    h4 {
      font-size: medium;
    }
    
    ul {
      gap: 8px;
    }
    
    li {
      flex: 1 1 calc(50% - 8px);
      min-width: 0;
      padding: 8px 12px;
      font-size: 0.9rem;
      margin-bottom: 6px;
    }
    
    li i {
      font-size: 1.2rem;
      margin-right: 8px;
    }
  }
  
  /* Extra optimization for very small screens */
  @media (max-width: 400px) {
    li {
        flex: 1 1 calc(50% - 8px);
        padding: 6px 10px;
        font-size: 0.85rem;
        position: relative;
        border-radius: 15px;
        border: 1px solid transparent;
        background: 
            linear-gradient(white, white), 
            linear-gradient(237.49deg, #407bff 14.93%, #264a99 69.46%);
        background-origin: border-box;
        background-clip: padding-box, border-box;
    }
    
    li i {
      font-size: small;
      margin-right: 6px;
    }
    
    .category-section {
      margin-bottom: 1.5rem;
    }
    
    h4 {
      margin: 1rem 0 0.8rem;
    }
  }
</style>