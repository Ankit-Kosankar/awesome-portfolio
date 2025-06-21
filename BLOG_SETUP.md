# Medium Blog Integration Setup

This guide explains how to integrate your Medium blog posts into your portfolio website.

## How It Works

The blog section automatically fetches your Medium posts using the RSS feed and displays them with:
- **Images**: Automatically extracted from your Medium posts
- **Titles**: From your Medium post titles
- **Descriptions**: Excerpts from your post content
- **Dates**: Publication dates
- **Read times**: Estimated reading time
- **Author information**: Your name from Medium

## Setup Instructions

### 1. Update Your Medium Username

Edit the file `src/lib/config/blog.ts` and replace `@your-username` with your actual Medium username:

```typescript
export const blogConfig = {
  // Replace with your actual Medium username
  mediumUsername: '@your-actual-username',
  // ... rest of config
};
```

**Example:**
- If your Medium profile is `https://medium.com/@john-doe`, use `mediumUsername: '@john-doe'`
- If your Medium profile is `https://medium.com/@johndoe123`, use `mediumUsername: '@johndoe123'`

### 2. Customize Fallback Posts (Optional)

If the RSS feed fails to load, the blog will show fallback posts. You can customize these in the same config file:

```typescript
fallbackPosts: [
  {
    title: "Your Blog Post Title",
    description: "Your blog post description...",
    date: "Dec 15, 2024",
    url: "https://medium.com/@your-username/your-post-slug",
    image: "https://picsum.photos/400/200?random=1",
    author: "Your Name",
    readTime: "5 min read"
  },
  // ... more posts
]
```

### 3. Adjust Number of Posts

You can change how many posts to display by modifying the `maxPosts` value:

```typescript
maxPosts: 6, // Change this number
```

## Features

### Automatic Image Display
- **Yes, Medium images will be displayed automatically!** The system extracts images from your Medium posts
- If no image is found in a post, it uses a placeholder gradient image
- Images are optimized and responsive

### RSS Feed Integration
- Uses Medium's built-in RSS feed: `https://medium.com/feed/@your-username`
- Automatically fetches latest posts
- Handles CORS issues with a proxy service

### Fallback System
- If RSS feed fails, shows custom fallback posts
- Ensures your blog section always has content
- Easy to customize fallback content

### Responsive Design
- Cards adapt to different screen sizes
- Images scale properly on mobile
- Hover effects and animations

## Troubleshooting

### RSS Feed Not Loading
1. Verify your Medium username is correct
2. Check that your Medium profile is public
3. Ensure you have published posts on Medium
4. The system will show fallback posts if RSS fails

### Images Not Showing
1. Make sure your Medium posts have featured images
2. Check that your posts are publicly accessible
3. The system will use placeholder images if needed

### Customization
- Edit `src/lib/config/blog.ts` for configuration changes
- Modify `src/lib/components/ui/Blog.svelte` for styling changes
- Update the fallback posts to match your actual blog content

## Technical Details

- **RSS Parser**: Uses browser's built-in DOMParser
- **CORS Proxy**: Uses `api.allorigins.win` to bypass CORS restrictions
- **Image Extraction**: Regex-based extraction from Medium's content
- **Error Handling**: Graceful fallback to sample content
- **TypeScript**: Fully typed for better development experience

## Next Steps

1. Update your Medium username in the config file
2. Test the integration by running your development server
3. Customize the fallback posts if needed
4. Deploy your updated portfolio!

The blog section will now automatically display your latest Medium posts with their images and all the details! 