# Content Team Guide: Posting to the Blog 🛰️✍️

Welcome to the Train Matricx intelligence feed! This guide will show you how to write, image, and publish articles to the `/blog` section.

## 1. Create a Post
All blog posts are kept in the `content/blog` folder.

1.  Create a new file with a `.md` extension (e.g., `my-new-article.md`).
2.  Paste this **Frontmatter** at the very top of your file:

```markdown
---
title: "Your Catchy Stealth Title"
date: "2026-02-14"
category: "Intelligence"
author: "Your Name"
coverImage: "/blog/assets/cover.png"
excerpt: "A 2-line summary for the card feed."
---
```

## 2. Writing Content
Below the frontmatter, write your article using standard **Markdown**.
- Use `##` for headings.
- Use `**` for bold text.
- Use `-` for bullet points.

## 3. Adding Pictures 📸
1.  **Upload:** Drop your image files into `public/blog/assets/`.
2.  **Link:** Inside your article text, use this code:
    `![Description of image](/blog/assets/your-photo.jpg)`

## 4. Publishing
Simply commit and push your new `.md` file and image assets to the **GitHub repository**. The website will automatically detect the new file and publish it to the `/blog` page instantly!

---
**Tip:** Keep your slugs (filenames) short and SEO-friendly, like `sports-ai-automation.md`.
