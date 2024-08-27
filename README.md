# Learning Next Js by building Project


## Day 1: Understanding the File & Folder Structure in Next.js

### Overview
In this Next.js project, I started by exploring the basic file and folder structure. Below is what I learned on Day 1:

### Folder Structure
In Next.js, the application is organized into folders, each representing a route or section of the site. Here's a basic understanding of how these folders work:

1. **Each folder typically contains two key files:**
   - `layout.tsx`: This file defines the layout for that particular route or section. It's like a wrapper that provides common elements (e.g., headers, footers, sidebars) around the page content.
   - `page.tsx`: This file contains the main content for that route or page. It represents what the user sees and interacts with.

2. **Relationship Between `layout.tsx` and `page.tsx`:**
   - Whatever is returned in the `page.tsx` file is rendered as a child of the `layout.tsx` file.
   - This allows for consistent layouts across different pages while maintaining unique content for each page.

### Example Folder Structure
```plaintext
app/
  |-- docs/
      |-- layout.tsx
      |-- page.tsx
  |-- dashboard/
      |-- layout.tsx
      |-- page.tsx
