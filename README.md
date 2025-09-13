# MegaBlog - Professional Blogging Platform

A modern, professional blogging platform built with React, Vite, and Appwrite. Create, share, and discover amazing content with a beautiful, responsive design.

![MegaBlog](https://img.shields.io/badge/MegaBlog-Professional%20Blogging-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🎨 Professional Design**: Modern, clean interface with professional typography and color schemes
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **🔐 User Authentication**: Secure login and registration system powered by Appwrite
- **📝 Rich Text Editor**: Create and edit posts with TinyMCE integration
- **🖼️ Image Upload**: Support for featured images with file management
- **🎯 Post Management**: Create, edit, delete, and view posts with ease
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎭 Smooth Animations**: Professional animations and transitions throughout the app
- **🔍 SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: TailwindCSS, Custom CSS Variables
- **State Management**: Redux Toolkit
- **Backend**: Appwrite (BaaS)
- **Rich Text Editor**: TinyMCE
- **Form Handling**: React Hook Form
- **Routing**: React Router DOM
- **Typography**: Inter & Playfair Display fonts

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 12MegaBlog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `.env.sample` to `.env`
   - Configure your Appwrite credentials:
   ```env
   VITE_APPWRITE_URL=your_appwrite_endpoint
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   VITE_APPWRITE_BUCKET_ID=your_bucket_id
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header
│   ├── Footer/         # Site footer
│   ├── Button.jsx      # Professional button component
│   ├── Input.jsx       # Form input component
│   ├── Login.jsx       # Login form
│   ├── Signup.jsx      # Registration form
│   ├── PostCard.jsx    # Blog post card
│   └── ...
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── AllPosts.jsx    # Posts listing
│   ├── AddPost.jsx     # Create new post
│   └── ...
├── appwrite/           # Appwrite service configurations
├── store/              # Redux store and slices
├── conf/               # Configuration files
├── App.jsx             # Main app component
├── index.css           # Professional CSS styles
└── main.jsx            # App entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#0ea5e9 to #0369a1)
- **Neutral**: Grayscale palette for text and backgrounds
- **Accent**: Emerald, Amber, Red, Purple for highlights

### Typography
- **Primary Font**: Inter (body text, UI elements)
- **Display Font**: Playfair Display (headings, titles)

### Components
- Professional button variants (primary, secondary, ghost)
- Consistent form styling with focus states
- Card components with hover effects
- Smooth animations and transitions

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Appwrite](https://appwrite.io/) - Backend as a Service
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [TinyMCE](https://www.tiny.cloud/) - Rich text editor

---

**MegaBlog** - Built with ❤️ for the blogging community
