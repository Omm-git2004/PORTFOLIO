import { useEffect, useState, useMemo } from 'react'

const ROLES = ['Full Stack Developer', 'MERN Stack Developer', 'ML Enthusiast', 'Problem Solver']

// Stable particles — generated once
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top:  `${(i * 53 + 7)  % 100}%`,
  size: i % 3 === 0 ? 'w-1.5 h-1.5' : 'w-1 h-1',
  color: i % 3 === 0 ? 'bg-blue-400/40' : i % 3 === 1 ? 'bg-purple-400/30' : 'bg-pink-400/20',
  duration: `${3.5 + (i % 5)}s`,
  delay: `${(i * 0.3) % 4}s`,
}))

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [typing,     setTyping]     = useState(true)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let t
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
      } else {
        t = setTimeout(() => setTyping(false), 2000)
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 40)
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(t)
  }, [displayed, typing, roleIndex])

  const stats = useMemo(() => [
    { value: '10+', label: 'Projects Built' },
    { value: '4+',  label: 'Years of Learning' },
    { value: '9.5', label: 'GPA (MCA)' },
  ], [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">

      {/* ── Background Orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-blue-600/12 rounded-full blur-3xl"
          style={{ animation: 'orb-pulse 6s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          style={{ animation: 'orb-pulse 8s ease-in-out infinite 2s' }} />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 bg-pink-600/8 rounded-full blur-3xl"
          style={{ animation: 'orb-pulse 7s ease-in-out infinite 4s' }} />
      </div>

      {/* ── Grid ── */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Particles ── */}
      <div className="absolute inset-0 pointer-events-none">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className={`absolute ${p.size} ${p.color} rounded-full`}
            style={{
              left: p.left,
              top: p.top,
              animation: `particle-float ${p.duration} ease-in-out infinite ${p.delay}`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-purple-500/25 text-purple-300 text-sm font-medium px-5 py-2.5 rounded-full mb-8 animate-fadeInUp backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Available for Internship &amp; Full-time Roles
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-5 animate-fadeInUp delay-100 leading-[1.05] tracking-tight">
          Hi, I&apos;m{' '}
          <span className="gradient-text block sm:inline">Omprakash Jena</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6 animate-fadeInUp delay-200">
          <span className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300">
            I&apos;m a{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 cursor-blink">
              {displayed}
            </span>
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-300">
          MCA student at Utkal University with a 9.50 GPA, passionate about building
          modern web applications and AI-powered systems that solve real-world problems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-400">
          <a href="#projects" className="btn-neon text-white font-semibold px-8 py-4 rounded-full text-sm w-full sm:w-auto">
            <span className="flex items-center justify-center gap-2">
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>

          <a
            href="https://github.com/Omm-git2004"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-white/15 hover:border-purple-500/50 text-gray-300 hover:text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:bg-purple-500/8 backdrop-blur-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub Profile
          </a>

          <a
            href="https://www.linkedin.com/in/omprakash1234"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border border-blue-500/30 hover:border-blue-400/60 text-blue-400 hover:text-white font-semibold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:bg-blue-500/10 backdrop-blur-sm w-full sm:w-auto"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fadeInUp delay-500">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs md:text-sm tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-600 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-5 h-9 border-2 border-gray-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}

export default Hero
