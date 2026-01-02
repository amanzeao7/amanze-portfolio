'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, ChevronRight, BarChart3, Code, Database, TrendingUp, Zap, Users } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skills = {
    analytics: ['SQL (MySQL, SQL Server)', 'Python (pandas, numpy)', 'Google Analytics 4', 'Excel', 'Data Visualization', 'Statistical Analysis'],
    development: ['React/Next.js', 'TypeScript', 'C#/.NET', 'Node.js', 'Azure', 'Git'],
    ecommerce: ['Shopify', 'WordPress', 'WooCommerce', 'Payment Integration', 'CMS Development', 'API Integration'],
    creative: ['Copywriting', 'Brand Strategy', 'Content Creation', 'UX Writing', 'Marketing Analytics', 'A/B Testing']
  };

  const projects = [
    {
      title: 'E-Commerce Sales Analytics Dashboard',
      category: 'Data Analysis',
      description: 'Built comprehensive analytics platform tracking 50k+ monthly transactions, customer segmentation, and revenue forecasting. Reduced reporting time by 65% through automated SQL pipelines.',
      tech: ['Python', 'SQL', 'Pandas', 'Matplotlib'],
      metrics: ['65% time saved', '50k+ transactions', '95% accuracy'],
      impact: 'high'
    },
    {
      title: 'Customer Behavior Analysis - Refresh Health Club',
      category: 'Analytics & Web Development',
      description: 'Implemented analytics tracking across 3 locations, analyzed user journeys and optimized conversion funnels. Integrated MindBody API for unified member insights.',
      tech: ['Google Analytics', 'WordPress', 'JavaScript', 'API Integration'],
      metrics: ['28% conversion increase', '3 locations', '1000+ leads tracked'],
      impact: 'high'
    },
    {
      title: 'E-Commerce Analytics - Online Apparel Retailer',
      category: 'E-Commerce Analytics',
      description: 'End-to-end analytics for fashion e-commerce brand. Analyzed customer demographics, purchasing patterns, and campaign effectiveness. Developed data-driven product recommendation engine.',
      tech: ['Shopify', 'Google Analytics', 'Python', 'SQL'],
      metrics: ['22% AOV increase', '40% repeat customers', 'Multi-channel tracking'],
      impact: 'medium'
    },
    {
      title: 'Inventory Optimization System',
      category: 'Data Analysis',
      description: 'Developed predictive analytics model for small business inventory management. Analyzed sales trends, seasonality, and demand patterns to optimize stock levels.',
      tech: ['Python', 'SQL', 'Time Series Analysis', 'Excel'],
      metrics: ['20% cost reduction', '15% fewer stockouts', 'Predictive accuracy 87%'],
      impact: 'medium'
    },
    {
      title: 'Real-Time KPI Dashboard - Amazon',
      category: 'Data Engineering',
      description: 'Built real-time analytics dashboard serving 50+ stakeholders. Optimized SQL queries for large-scale databases, reducing load times by 40%.',
      tech: ['SQL Server', 'C#', '.NET', 'Azure'],
      metrics: ['40% faster queries', '500k+ daily transactions', '50+ users'],
      impact: 'high'
    },
    {
      title: 'Marketing Campaign Performance Tracker',
      category: 'Marketing Analytics',
      description: 'Created automated tracking system for multi-channel marketing campaigns. Generated insights on ROI, customer acquisition cost, and channel performance.',
      tech: ['Google Analytics', 'Python', 'Data Visualization', 'Excel'],
      metrics: ['25% ROI improvement', '5 channels tracked', 'Weekly automated reports'],
      impact: 'medium'
    }
  ];

  const experience = [
    {
      role: 'Freelance Data Analyst & E-Commerce Consultant',
      company: 'Self-Employed',
      period: '2023 - Present',
      location: 'London, UK',
      achievements: [
        'Delivered e-commerce analytics for 5+ clients, driving 20-35% revenue growth',
        'Implemented GA4 tracking systems generating actionable behavioral insights',
        'Optimized conversion rates by 18% through data-driven A/B testing',
        'Built automated SQL reporting dashboards reducing manual work by 65%',
        'Created data visualizations translating complex insights for stakeholders'
      ]
    },
    {
      role: 'Freelance Web Developer',
      company: 'Self-Employed',
      period: '2023 - Present',
      location: 'London, UK',
      achievements: [
        'Developed custom WordPress websites for 8+ small business clients including health clubs, fitness studios, and professional services',
        'Built responsive, mobile-first designs with optimized performance and SEO best practices',
        'Integrated third-party APIs (MindBody, payment gateways, booking systems) for seamless user experiences',
        'Implemented analytics tracking and conversion optimization strategies resulting in 25%+ lead generation improvements',
        'Provided ongoing maintenance, security updates, and technical support across client portfolio'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Amazon',
      period: 'Mar 2022 - Sep 2022',
      location: 'London, UK',
      achievements: [
        'Developed and maintained microservices using C#/.NET handling 500k+ daily e-commerce transactions',
        'Optimized SQL queries for large-scale databases, reducing execution time by 40% and improving system performance',
        'Built real-time analytics dashboards tracking KPIs for 50+ stakeholders across multiple product lines',
        'Led sprint planning and coordinated with cross-functional teams to deliver features on tight deadlines',
        'Managed incident response and root cause analysis, reducing critical system downtime by 30%',
        'Collaborated with product managers to define technical requirements and translate business needs into scalable solutions',
        'Developed Python ETL scripts for automated data extraction and reporting workflows'
      ]
    },
    {
      role: 'Software Developer',
      company: 'Sorce',
      period: '2020 - 2022',
      location: 'London, UK',
      achievements: [
        'Developed enterprise-level applications using C#/.NET and React, serving 10,000+ users across multiple client deployments',
        'Built RESTful APIs and integrated third-party services, ensuring secure and scalable system architecture',
        'Reduced critical system incidents by 45% through proactive monitoring, automated testing, and performance optimization',
        'Designed and implemented SQL-based reporting systems providing real-time visibility into application performance and user behavior',
        'Conducted root cause analysis on production issues, reducing mean time to resolution by 30%',
        'Implemented CI/CD pipelines using Azure DevOps, streamlining deployment processes and reducing release cycle time by 40%',
        'Mentored junior developers on best practices for code quality, testing, and documentation',
        'Created data-driven technical recommendations that resulted in 25% system performance improvements'
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-zinc-950 text-zinc-100' : 'bg-zinc-50 text-zinc-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800' : 'bg-white/80 backdrop-blur-xl border-b border-zinc-200 shadow-sm') : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
              >
                AAA
              </button>
              <div className="hidden md:flex items-center gap-6">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium capitalize transition-colors relative group ${
                      activeSection === section
                        ? 'text-blue-500'
                        : darkMode ? 'text-zinc-400 hover:text-zinc-100' : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    {section}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all ${activeSection === section ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'}`}>
              Available for Opportunities
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
              Data Analyst
            </span>
            <br />
            <span className={darkMode ? 'text-zinc-100' : 'text-zinc-900'}>
              & Creative Problem Solver
            </span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Transforming complex data into actionable insights. Specializing in e-commerce analytics, SQL optimization, and data-driven storytelling.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              View Projects <ChevronRight className="w-5 h-5" />
            </button>
            <a
              href="/Amanze_Anyiam-Osigwe_Data_Analyst_CV.pdf"
              download
              className={`px-8 py-4 rounded-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100' : 'bg-white border-2 border-zinc-300 hover:border-zinc-400 text-zinc-900'}`}
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="mailto:amanzeao7@gmail.com" className={`p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'}`}>
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/amanzeao" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'}`}>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/amanzeao7" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-200'}`}>
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className={`text-lg mb-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                I'm a software developer with deep expertise in data analytics. With 4+ years of experience at companies like Amazon and Sorce, I've built a unique skill set that bridges technical development and analytical problem-solving—creating scalable applications while extracting meaningful insights from complex datasets.
              </p>
              <p className={`text-lg mb-6 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                My approach combines full-stack development capabilities with analytical rigor. I don't just build systems—I optimize them with data-driven insights. Whether developing real-time dashboards, architecting database solutions, or analyzing user behavior patterns, I focus on creating technical solutions that deliver measurable business impact.
              </p>
              <p className={`text-lg ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                Beyond coding and analytics, I'm passionate about streetwear culture, football, and building things that connect with people. I coach youth football and referee matches—both require the same strategic, data-informed approach I bring to software development.
              </p>
            </div>
            <div className="space-y-6">
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">Data Analysis</h3>
                </div>
                <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                  Expert in SQL, Python, and analytics tools. Specialized in e-commerce metrics, customer behavior, and conversion optimization.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Code className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold">Full-Stack Development</h3>
                </div>
                <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                  Proficient in React, TypeScript, C#/.NET, and cloud technologies. Building scalable solutions from data pipelines to user interfaces.
                </p>
              </div>
              <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold">Creative Copywriting</h3>
                </div>
                <p className={darkMode ? 'text-zinc-400' : 'text-zinc-600'}>
                  Translating data insights into compelling narratives. Experience in brand storytelling, content strategy, and data visualization for diverse audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-zinc-900/50' : 'bg-zinc-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-bold">Data Analytics</h3>
              </div>
              <ul className="space-y-2">
                {skills.analytics.map((skill, i) => (
                  <li key={i} className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-purple-500" />
                <h3 className="text-lg font-bold">Development</h3>
              </div>
              <ul className="space-y-2">
                {skills.development.map((skill, i) => (
                  <li key={i} className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-pink-500" />
                <h3 className="text-lg font-bold">E-Commerce</h3>
              </div>
              <ul className="space-y-2">
                {skills.ecommerce.map((skill, i) => (
                  <li key={i} className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>• {skill}</li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-yellow-500" />
                <h3 className="text-lg font-bold">Creative</h3>
              </div>
              <ul className="space-y-2">
                {skills.creative.map((skill, i) => (
                  <li key={i} className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>• {skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      darkMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  {project.impact === 'high' && (
                    <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded-full">High Impact</span>
                  )}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs ${
                        darkMode ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className={`text-center p-2 rounded-lg ${darkMode ? 'bg-zinc-800' : 'bg-zinc-50'}`}>
                      <p className={`text-xs font-medium ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                        {metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-6 ${darkMode ? 'bg-zinc-900/50' : 'bg-zinc-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200'}`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
                      {job.role}
                    </h3>
                    <p className="text-lg font-medium text-blue-500 mb-1">{job.company}</p>
                    <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {job.period} • {job.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className={`flex gap-3 text-sm ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                      <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>
            Let's Work Together
          </h2>
          <p className={`text-lg mb-12 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Interested in collaborating? I'm always open to discussing new opportunities, data challenges, or creative projects.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:amanzeao7@gmail.com"
              className={`p-6 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-lg'}`}
            >
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className={`font-medium mb-1 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>Email</p>
              <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>amanzeao7@gmail.com</p>
            </a>
            <a
              href="tel:07442995271"
              className={`p-6 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-zinc-900 border border-zinc-800 hover:border-zinc-700' : 'bg-white border border-zinc-200 hover:border-zinc-300 shadow-sm hover:shadow-lg'}`}
            >
              <Phone className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <p className={`font-medium mb-1 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>Phone</p>
              <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>07442995271</p>
            </a>
            <div className={`p-6 rounded-xl ${darkMode ? 'bg-zinc-900 border border-zinc-800' : 'bg-white border border-zinc-200 shadow-sm'}`}>
              <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <p className={`font-medium mb-1 ${darkMode ? 'text-zinc-100' : 'text-zinc-900'}`}>Location</p>
              <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>London, UK</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/amanzeao"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            <a
              href="https://github.com/amanzeao7"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-lg font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100' : 'bg-white border-2 border-zinc-300 hover:border-zinc-400 text-zinc-900'}`}
            >
              <Github className="w-5 h-5" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            © 2026 Amanze Alexander Anyiam-Osigwe. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
