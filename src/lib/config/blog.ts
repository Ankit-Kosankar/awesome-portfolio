// Blog configuration
export const blogConfig = {
  // Replace with your actual Medium username
  mediumUsername: '@kosankarankit',
  
  // Number of posts to display
  maxPosts: 6,
  
  // RSS feed URL (auto-generated from username)
  get rssUrl() {
    return `https://medium.com/feed/${this.mediumUsername}`;
  },
  
  // CORS proxy for fetching RSS feed
  corsProxy: 'https://api.allorigins.win/raw?url=',
  
  // Fallback posts if RSS feed fails
  fallbackPosts: [
    {
      title: "Building Modern Web Applications with Svelte",
      description: "Exploring the benefits of Svelte for building fast, reactive web applications with less code and better performance.",
      date: "Dec 15, 2024",
      url: "https://medium.com/@kosankarankit/building-modern-web-applications-with-svelte",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "5 min read"
    },
    {
      title: "AI and Machine Learning in 2024",
      description: "A comprehensive overview of the latest trends and breakthroughs in artificial intelligence and machine learning.",
      date: "Dec 10, 2024",
      url: "https://medium.com/@kosankarankit/ai-and-machine-learning-in-2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "8 min read"
    },
    {
      title: "The Future of Full-Stack Development",
      description: "How modern technologies are reshaping the landscape of full-stack development and what developers need to know.",
      date: "Dec 5, 2024",
      url: "https://medium.com/@kosankarankit/future-of-full-stack-development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "6 min read"
    },
    {
      title: "Spring Boot Microservices Architecture",
      description: "Deep dive into building scalable microservices using Spring Boot and best practices for enterprise applications.",
      date: "Nov 28, 2024",
      url: "https://medium.com/@kosankarankit/spring-boot-microservices-architecture",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "7 min read"
    },
    {
      title: "Python for Data Science and ML",
      description: "Essential Python libraries and techniques for data science, machine learning, and AI development.",
      date: "Nov 20, 2024",
      url: "https://medium.com/@kosankarankit/python-for-data-science-and-ml",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "9 min read"
    },
    {
      title: "React vs Svelte: A Developer's Perspective",
      description: "Comparing React and Svelte frameworks for modern web development, performance, and developer experience.",
      date: "Nov 15, 2024",
      url: "https://medium.com/@kosankarankit/react-vs-svelte-comparison",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop&crop=center",
      author: "Ankit Kosankar",
      readTime: "6 min read"
    }
  ]
}; 