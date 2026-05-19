import { useEffect, useRef } from 'react'

const PROJECTS = [
  {
    title: 'ProHub',
    description:
      'A platform that provides and sells web development, app development, and AI-based projects to students and businesses while generating revenue through project services and customized solutions.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AI'],
    icon: '🏪',
    gradient: 'from-violet-500 to-purple-600',
    gradientBg: 'from-violet-500/15 to-purple-600/15',
    border: 'border-violet-500/30',
    glow: 'rgba(139,92,246,0.3)',
    github: 'https://github.com/Omm-git2004',
    demo: '#',
    featured: true,
  },
  {
    title: 'CareerPilot AI',
    description:
      'An AI-powered career guidance platform that analyzes user profiles, suggests career paths, and provides personalized roadmaps using machine learning algorithms.',
    tags: ['React', 'Node.js', 'Python', 'ML', 'MongoDB'],
    icon: '🚀',
    gradient: 'from-blue-500 to-cyan-500',
    gradientBg: 'from-blue-500/15 to-cyan-500/15',
    border: 'border-blue-500/30',
    glow: 'rgba(59,130,246,0.3)',
    github: 'https://github.com/Omm-git2004',
    demo: '#',
    featured: false,
  },
  {
    title: 'Institute360',
    description:
      'A comprehensive institute management system built on the MERN stack — handling admissions, attendance, results, and communication in one unified platform.',
    tags: ['React', 'Express.js', 'MongoDB', 'Node.js'],
    icon: '🏫',
    gradient: 'from-emerald-500 to-teal-500',
    gradientBg: 'from-emerald-500/15 to-teal-500/15',
    border: 'border-emerald-500/30',
    glow: 'rgba(16,185,129,0.3)',
    github: 'https://github.com/Omm-git2004',
    demo: '#',
    featured: false,
  },
  {
    title: 'AI Resume Analyzer',
    description:
      'An intelligent resume analysis system that scores resumes against job descriptions, highlights skill gaps, and suggests targeted improvements using NLP and ML.',
    tags: ['Python', 'NLP', 'Scikit-learn', 'FastAPI', 'React'],
    icon: '📄',
    gradient: 'from-orange-500 to-pink-500',
    gradientBg: 'from-orange-500/15 to-pink-500/15',
    border: 'border-orange-500/30',
    glow: 'rgba(249,115,22,0.3)',
    github: 'https://github.com/Omm-git2004',
    demo: '#',
    featured: false,
  },
]

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-28 bg-[#030712] px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">What I&apos;ve Built</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="reveal group relative glass-card rounded-2xl overflow-hidden flex flex-col"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} flex-shrink-0`} />

              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ boxShadow: `inset 0 0 60px ${project.glow}` }}
              />

              <div className="p-7 flex flex-col flex-1">
                {/* Icon + title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradientBg} border ${project.border} flex items-center justify-center text-3xl`}
                    style={{ boxShadow: `0 8px 24px ${project.glow}` }}>
                    {project.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300 leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-xs font-medium">Completed</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag}
                      className="bg-white/5 border border-white/8 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <a href={project.demo}
                    className="flex-1 text-center btn-neon text-white text-sm font-semibold py-2.5 rounded-xl">
                    <span>View Project</span>
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 border border-white/10 hover:border-purple-500/40 text-gray-400 hover:text-white rounded-xl transition-all duration-300 text-sm font-medium hover:bg-purple-500/8"
                    aria-label="GitHub">
                    <GitHubIcon />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="reveal text-center mt-12">
          <a href="https://github.com/Omm-git2004" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/10 hover:border-purple-500/40 text-gray-400 hover:text-white font-medium px-7 py-3.5 rounded-full transition-all duration-300 hover:bg-purple-500/8 backdrop-blur-sm text-sm">
            <GitHubIcon />
            View All Projects on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
