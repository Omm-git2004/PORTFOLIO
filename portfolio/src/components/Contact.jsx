import { useEffect, useRef } from 'react'

const GOOGLE_FORM_URL = 'https://forms.gle/4QwWCj952o7HbVzW8'

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'ompjena02@gmail.com',
    href: 'mailto:ompjena02@gmail.com',
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/25',
    iconColor: 'text-blue-400',
    valueColor: 'text-blue-300',
    desc: 'Drop me a mail anytime',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/Omm-git2004',
    href: 'https://github.com/Omm-git2004',
    color: 'from-gray-500/20 to-slate-600/20',
    border: 'border-gray-500/25',
    iconColor: 'text-gray-300',
    valueColor: 'text-gray-200',
    desc: 'Check out my repositories',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/omprakash1234',
    href: 'https://www.linkedin.com/in/omprakash1234',
    color: 'from-blue-600/20 to-blue-500/20',
    border: 'border-blue-600/25',
    iconColor: 'text-blue-400',
    valueColor: 'text-blue-300',
    desc: "Let's connect professionally",
  },
]

const Contact = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.c-reveal')
    if (!els || els.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('c-visible')
            observer.unobserve(e.target) // fire once, then stop watching
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach(el => observer.observe(el))

    // Safety fallback: if observer never fires within 1.5s, show everything
    const fallback = setTimeout(() => {
      els.forEach(el => el.classList.add('c-visible'))
    }, 1500)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <section
      id="contact"
      className="py-28 bg-[#050b18] px-6 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">

        {/* ── Header — always visible, no animation class ── */}
        <div className="mb-16 text-center">
          <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-5 mx-auto" />
          <p className="text-gray-400 mt-5 max-w-xl mx-auto text-sm leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi?
            Reach me through any of the channels below or fill out the contact form.
          </p>
        </div>

        {/* ── Contact Info Cards ── */}
        <div className="grid sm:grid-cols-3 gap-5 mb-6">
          {CONTACT_INFO.map((info, i) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="c-reveal glass-card group rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-purple-500/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Icon box */}
              <div
                className={`w-14 h-14 bg-gradient-to-br ${info.color} border ${info.border} rounded-2xl flex items-center justify-center ${info.iconColor} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                style={{ boxShadow: '0 8px 24px rgba(139,92,246,0.15)' }}
              >
                {info.icon}
              </div>

              {/* Text */}
              <div>
                <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-1">
                  {info.label}
                </p>
                <p className={`${info.valueColor} text-sm font-semibold break-all leading-snug mb-1.5`}>
                  {info.value}
                </p>
                <p className="text-gray-600 text-xs">{info.desc}</p>
              </div>

              {/* Hover arrow */}
              <div className={`mt-auto flex items-center gap-1 ${info.iconColor} text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <span>Visit</span>
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* ── Bottom row ── */}
        <div className="grid sm:grid-cols-2 gap-5">

          {/* Availability */}
          <div
            className="c-reveal glass-card rounded-2xl p-6 flex items-center gap-5"
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/25 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
            </div>
            <div>
              <p className="text-green-400 text-sm font-bold mb-1">Available for Work</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Open to internships, full-time roles, freelance projects &amp; collaborations.
              </p>
            </div>
          </div>

          {/* Google Form CTA */}
          <div
            className="c-reveal glass-card rounded-2xl p-6 flex flex-col justify-between gap-4"
            style={{ transitionDelay: '0.4s' }}
          >
            <div>
              <p className="text-white font-bold text-sm mb-1">Send a Message</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Fill out the contact form and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 btn-neon text-white font-semibold py-3 px-5 rounded-xl text-sm w-full"
            >
              <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Open Contact Form</span>
              <svg className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
