import { useEffect, useRef } from 'react'

const HIGHLIGHTS = [
  { icon: '🚀', title: 'Fast Learner',    desc: 'Quickly adapts to new technologies and frameworks with a 9.50 GPA.' },
  { icon: '🧠', title: 'AI Enthusiast',   desc: 'Passionate about machine learning, NLP, and intelligent systems.' },
  { icon: '💡', title: 'Problem Solver',  desc: 'Loves breaking down complex problems into elegant, clean solutions.' },
  { icon: '🤝', title: 'Team Player',     desc: 'Thrives in collaborative environments and open-source culture.' },
]

const useReveal = (ref) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

const About = () => {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section id="about" className="py-28 px-6 bg-[#050b18] relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16">
          <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-5" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="reveal space-y-6">
            <p className="text-gray-200 text-lg leading-relaxed">
              I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-bold">Omprakash Jena</span>,
              a Full Stack Developer and MCA student at Utkal University, Vani Vihar,
              with a passion for building modern web applications and AI-powered systems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I&apos;ve built projects like <span className="text-white font-semibold">CareerPilot AI</span>,
              an intelligent career guidance platform, <span className="text-white font-semibold">Institute360</span>,
              a MERN-based institute management system, and <span className="text-white font-semibold">ProHub</span>,
              a platform for selling web, app, and AI-based projects.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My goal is to bridge cutting-edge AI research with practical, user-friendly applications.
              I believe great software is both technically sound and delightful to use.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {['Open to Work', 'Remote Friendly', 'Full-time / Internship', 'Freelance'].map(tag => (
                <span key={tag}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a href="https://github.com/Omm-git2004" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/omprakash1234" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 text-sm font-medium px-4 py-2.5 rounded-xl transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 btn-neon text-white font-semibold px-7 py-3.5 rounded-full text-sm mt-2">
              <span>Let&apos;s Talk</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — Cards */}
          <div className="grid grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <div key={item.title} className="reveal glass-card p-5 rounded-2xl"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1.5 text-sm">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
