import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Home',      href: '#home' },
  { label: 'About',     href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills',    href: '#skills' },
  { label: 'Projects',  href: '#projects' },
  { label: 'Contact',   href: '#contact' },
]

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Scroll detection for glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false)
    setActiveSection(href.replace('#', ''))
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030712]/98 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-900/30 py-3'
          : 'bg-[#030712]/90 backdrop-blur-lg border-b border-white/8 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="group flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300">
            OJ
          </div>
          <span className="text-xl font-bold gradient-text tracking-tight">
            Omprakash Jena
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeSection === href.replace('#', '')
            return (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => handleNavClick(href)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group ${
                    isActive
                      ? 'text-white bg-purple-500/20 shadow-sm shadow-purple-500/20'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href="https://www.linkedin.com/in/omprakash1234"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 btn-neon text-white text-sm font-semibold px-5 py-2.5 rounded-full"
        >
          <span>Hire Me</span>
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="mx-4 mt-2 mb-3 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <ul className="flex flex-col p-3 gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={label}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-500/25 to-purple-500/25 text-white border border-purple-500/30'
                        : 'text-gray-200 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />}
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="px-3 pb-3">
            <a
              href="https://www.linkedin.com/in/omprakash1234"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn-neon text-white text-sm font-semibold px-5 py-3 rounded-xl"
            >
              <span>Hire Me</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
