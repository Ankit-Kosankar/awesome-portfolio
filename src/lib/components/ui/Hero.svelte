<script>
    // import '../styles/home.css'; // Adjust the path as necessary
    // import profileImage from '../lib/assets/images/profile-pic.svg.svg'
  </script>
  
  <style>
    /* Main container styling */
    .hero-section {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 1.5rem;
      min-height: 100vh;
      max-width: 1200px;
      margin: 0 auto;
      gap: 2rem;
    }
  
    /* Content text styling */
    .hero-content {
      max-width: 100%;
      text-align: center;
    }
  
    .hero-heading {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: #333;
    }
  
    .hero-text {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      color: #555;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }
  
    /* Button styling */
    .button-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
      margin-top: 1.5rem;
    }
  
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 0.375rem;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;
    }
  
    .primary-btn {
      background-color: #3b82f6;
      color: white;
      border: 2px solid #3b82f6;
    }
  
    .primary-btn:hover {
      background-color: #2563eb;
      border-color: #2563eb;
      transform: translateY(-3px);
      box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.3);
    }
  
    .secondary-btn {
      background-color: transparent;
      color: #3b82f6;
      border: 2px solid #3b82f6;
    }
  
    .secondary-btn:hover {
      background-color: #eef2ff;
      transform: translateY(-3px);
      box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1);
    }
  
    /* Image container styling */
    .hero-image {
      width: 280px;
      height: 280px;
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
  
    .hero-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  
    /* Background elements styling */
    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;
    }
  
    .bg-shape {
      position: absolute;
      border-radius: 50%;
      opacity: 0.1;
    }
  
    .bg-shape-1 {
      width: 500px;
      height: 500px;
      background-color: #3b82f6;
      top: -250px;
      right: -100px;
    }
  
    .bg-shape-2 {
      width: 300px;
      height: 300px;
      background-color: #8b5cf6;
      bottom: -100px;
      left: -150px;
    }
  
    /* Animation for the shimmer effect on image */
    .shimmer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: shimmer 2s infinite;
    }
  
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }
  
    /* Responsive styles */
    @media (min-width: 768px) {
      .hero-section {
        flex-direction: row;
        text-align: left;
        padding: 4rem 2rem;
      }
  
      .hero-content {
        max-width: 60%;
        text-align: left;
      }
  
      .hero-text {
        margin-left: 0;
      }
  
      .button-container {
        justify-content: flex-start;
      }
  
      .hero-image {
        width: 350px;
        height: 350px;
      }
    }
  
    @media (min-width: 1024px) {
      .hero-heading {
        font-size: 3rem;
      }
  
      .hero-text {
        font-size: 1.25rem;
      }
  
      .hero-image {
        width: 400px;
        height: 400px;
      }
    }
  </style>
  
  <section class="hero-section">
    <div class="hero-content">
      <h1 class="hero-heading">Hi, I'm Ankit Kosankar</h1>
      <p class="hero-text">
        A Software Engineer and AI/ML Enthusiast with a strong background in full stack software development 
        and keen interest in artificial intelligence and machine learning. I thrive on solving 
        complex problems and creating innovative solutions. My experience includes working with 
        various programming languages and AI frameworks.
      </p>
      <div class="button-container">
        <a href="/contact" class="btn primary-btn">Download Resume</a>
        <a href="/projects" class="btn secondary-btn">Talk To Me</a>
      </div>
    </div>
    
    <div class="hero-image">
      <!-- Option 1: Image -->
      <!-- <img src={} alt="Ankit Kosankar" />
      <div class="shimmer"></div> -->
      
      <!-- Option 2: Placeholder for Threlte or another animation -->
       <div id="animation-container"></div> 
    </div>
    
    <!-- Background shapes for visual interest -->
    <div class="hero-background">
      <div class="bg-shape bg-shape-1"></div>
      <div class="bg-shape bg-shape-2"></div>
    </div>
  </section>