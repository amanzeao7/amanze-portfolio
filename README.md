# Amanze Anyiam-Osigwe - Portfolio

Modern, responsive portfolio website showcasing data analytics expertise, development skills, and project work.

## Features

- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 Modern UI with Tailwind CSS
- 📊 Data analytics project showcase
- 💼 Professional experience timeline
- 📧 Contact information and social links

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

### Option 1: Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure deployment
6. Click "Deploy"

### Environment Variables

No environment variables required for this static site.

## Project Structure

```
portfolio/
├── app/
│   ├── page.js          # Main portfolio page
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
├── public/              # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

## Customization

### Update Contact Information

Edit the contact details in `app/page.js`:

```javascript
// Email, phone, location, social links
```

### Add New Projects

Add projects to the `projects` array in `app/page.js`:

```javascript
const projects = [
  {
    title: 'Your Project',
    category: 'Category',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    metrics: ['Metric1', 'Metric2'],
    impact: 'high' // or 'medium'
  }
]
```

### Modify Experience

Update the `experience` array in `app/page.js` with your work history.

## License

© 2026 Amanze Alexander Anyiam-Osigwe. All rights reserved.

## Contact

- **Email**: amanzeao7@gmail.com
- **Phone**: 07442995271
- **LinkedIn**: [amanzeao](https://linkedin.com/in/amanzeao)
- **GitHub**: [amanzeao7](https://github.com/amanzeao7)
