const Footer = () => {
  const year = new Date().getFullYear()

  const socials = [
    {
      name: 'GitHub',
      href: 'https://github.com/Omm-git2004',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/omprakash1234',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      href: 'mailto:ompjena02@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  const navLinks = [
    { label: 'Home',      href: '#home' },
    { label: 'About',     href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills',    href: '#skills' },
    { label: 'Projects',  href: '#projects' },
    { label: 'Contact',   href: '#contact' },
  ]

  const techStack = ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB']

  return (
    <footer className="bg-[#030712] border-t border-white/5 relative overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
                OJ
              </div>
              <span className="text-xl font-bold gradient-text">Omprakash Jena</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-xs">
              Full Stack Developer &amp; MCA student passionate about building modern web apps
              and AI-powered systems. Open to exciting opportunities.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socials.map(s => (
                <a key={s.name} href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 bg-white/4 hover:bg-purple-500/15 border border-white/8 hover:border-purple-500/40 text-gray-500 hover:text-purple-400 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="mt-5 inline-flex items-center gap-2 bg-green-500/8 border border-green-500/20 px-3.5 py-2 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-green-400 text-xs font-medium">Open to Work — Internship &amp; Full-time</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-gray-500 hover:text-purple-400 text-sm transition-colors duration-200 flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-purple-400 transition-all duration-300 rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-5">Built With</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map(tech => (
                <span key={tech}
                  className="bg-white/4 border border-white/8 text-gray-500 text-xs px-3 py-1.5 rounded-lg">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em] mb-3">Education</h4>
            <div className="space-y-2">
              <div className="text-gray-500 text-xs">
                <span className="text-gray-300 font-medium">MCA</span> — Utkal University (2024–2026)
              </div>
              <div className="text-gray-500 text-xs">
                <span className="text-gray-300 font-medium">BCA</span> — Utkal University (2021–2024)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs">
            © {year} Omprakash Jena. All rights reserved.
          </p>
          {/* <p className="text-gray-700 text-xs flex items-center gap-1">
            Crafted with <span className="text-pink-500 mx-0.5">♥</span> using React &amp; Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
