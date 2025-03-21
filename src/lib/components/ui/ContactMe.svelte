<script lang="ts">
    // State for form fields
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let formSubmitted = false;
    let formError = false;
    
    // Form validation
    function validateEmail(email:any) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
    
    // Handle form submission
    function handleSubmit() {
      if (!name || !email || !validateEmail(email) || !message) {
        formError = true;
        return;
      }
      
      // In a real app, you would send the form data to your backend here
      console.log({ name, email, subject, message });
      
      // Reset form and show success message
      formError = false;
      formSubmitted = true;
      
      // Reset form after success
      setTimeout(() => {
        name = '';
        email = '';
        subject = '';
        message = '';
        formSubmitted = false;
      }, 5000);
    }
  </script>
  
  <section class="contact-section">
    <div class="contact-content">
      <h1 class="contact-heading">Get In Touch</h1>
      <p class="contact-text">
        Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
      </p>
      
      {#if formSubmitted}
        <div class="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" class="success-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 class="success-title">Message Sent Successfully!</h3>
          <p class="success-text">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      {:else}
        <form on:submit|preventDefault={handleSubmit} class="contact-form">
          {#if formError}
            <div class="error-message">
              <p>Please fill out all required fields correctly.</p>
            </div>
          {/if}
          
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name <span class="required">*</span></label>
              <input
                type="text"
                id="name"
                bind:value={name}
                placeholder="Your Name"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input
                type="email"
                id="email"
                bind:value={email}
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input
              type="text"
              id="subject"
              bind:value={subject}
              placeholder="Subject"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Message <span class="required">*</span></label>
            <textarea
              id="message"
              bind:value={message}
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          
          <div class="button-container">
            <button type="submit" class="btn primary-btn">Send Message</button>
          </div>
        </form>
      {/if}
      
      <div class="contact-info">
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3>Email</h3>
          <p>hello@example.com</p>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3>Location</h3>
          <p>San Francisco, CA</p>
        </div>
        
        <div class="info-card">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3>Social</h3>
          <div class="social-links">
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Background shapes for visual interest, matching your Hero component -->
    <div class="contact-background">
      <div class="bg-shape bg-shape-1"></div>
      <div class="bg-shape bg-shape-2"></div>
    </div>
  </section>
  
  <style>
    /* Main container styling */
    .contact-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 1.5rem;
      min-height: 100vh;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
      background-color: white;
    }
    
    /* Content text styling */
    .contact-content {
      width: 100%;
      max-width: 800px;
      z-index: 1;
    }
    
    .contact-heading {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      color: #333;
      text-align: center;
    }
    
    .contact-text {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      color: #555;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    
    /* Form styling */
    .contact-form {
      background-color: white;
      padding: 2rem;
      border-radius: 0.75rem;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      margin-bottom: 3rem;
    }
    
    .form-row {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .form-group {
      margin-bottom: 1.5rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #333;
    }
    
    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #d1d5db;
      border-radius: 0.375rem;
      font-size: 1rem;
      transition: all 0.3s ease;
    }
    
    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
    }
    
    .required {
      color: #ef4444;
    }
    
    .error-message {
      background-color: #fee2e2;
      border: 1px solid #ef4444;
      border-radius: 0.375rem;
      padding: 1rem;
      margin-bottom: 1.5rem;
      color: #b91c1c;
    }
    
    /* Success message styling */
    .success-message {
      background-color: #ecfdf5;
      border: 1px solid #10b981;
      border-radius: 0.75rem;
      padding: 2rem;
      text-align: center;
      margin-bottom: 3rem;
      animation: fadeIn 0.5s ease-in-out;
    }
    
    .success-icon {
      width: 4rem;
      height: 4rem;
      color: #10b981;
      margin: 0 auto 1rem;
    }
    
    .success-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #047857;
      margin-bottom: 0.5rem;
    }
    
    .success-text {
      color: #064e3b;
    }
    
    /* Contact info section */
    .contact-info {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .info-card {
      background-color: white;
      padding: 1.5rem;
      border-radius: 0.75rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .info-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    
    .info-icon {
      width: 3rem;
      height: 3rem;
      background-color: #eef2ff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
    }
    
    .info-icon svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #3b82f6;
    }
    
    .info-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }
    
    .info-card p {
      color: #3b82f6;
      font-weight: 500;
    }
    
    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 0.5rem;
    }
    
    .social-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: #6b7280;
      transition: color 0.3s ease;
    }
    
    .social-icon:hover {
      color: #3b82f6;
    }
    
    /* Button styling - matching your Hero component */
    .button-container {
      display: flex;
      justify-content: center;
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
      border: none;
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
    
    /* Background elements styling - matching your Hero component */
    .contact-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
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
    
    /* Animation for fade in */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Responsive styles */
    @media (min-width: 768px) {
      .contact-heading {
        font-size: 3rem;
      }
      
      .form-row {
        flex-direction: row;
      }
      
      .form-row .form-group {
        flex: 1;
      }
      
      .contact-info {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  </style>