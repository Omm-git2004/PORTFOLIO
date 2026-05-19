import { useEffect, useRef } from 'react'

const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Utkal University, Vani Vihar',
    period: '2024 – 2026',
    gpa: '9.50 / 10',
    status: 'Ongoing',
    icon: '🎓',
    gradient: 'from-blue-500 to-purple-600',
    glow: 'rgba(139,92,246,0.35)',
    tags: ['Full Stack Dev', 'AI & ML', 'Data Structures', 'Cloud Computing'],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Utkal University',
    period: '2021 – 2024',
    gpa: '9.45 / 10',
    status: 'Completed',
    icon: '🏛️',
    gradient: 'from-purple-500 to-pink-600',
    glow: 'rgba(236,72,153,0.3)',
    tags: ['Web Development', 'Database', 'OOP', 'Networking'],
  },
  {
    degree: 'Associate Degree — Science',
    institution: 'Sulagna Junior College, Balasore',
    period: '2020 – 2021',
    gpa: null,
    status: 'Completed',
    icon: '🔬',
    gradient: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.3)',
    tags: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    degree: 'Matriculation — General Stream',
    institution: 'S.C High School, Balasore',
    period: '2018 – 2019',
    gpa: null,
    status: 'Completed',
    icon: '📚',
    gradient: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.3)',
    tags: ['Science', 'Mathematics', 'English'],
  },
]

const Education = () => {
  const sectionRef = useRef(null)
  const lineRef    = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        e.target.classList.toggle('visible', e.isIntersecting)
      }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Timeline line observer
    const lineObs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) lineRef.current?.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    if (lineRef.current) lineObs.observe(lineRef.current)

    return () => { observer.disconnect(); lineObs.disconnect() }
  }, [])

  return (
    <section id="education" className="py-28 px-6 bg-[#030712] relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="reveal mb-20 text-center">
          <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">Academic Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-5 mx-auto" />
          <p className="text-gray-500 mt-5 max-w-lg mx-auto text-sm leading-relaxed">
            A strong academic foundation combined with hands-on project experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden">
            <div ref={lineRef} className="timeline-line" />
          </div>

          <div className="space-y-12 md:space-y-0">
            {EDUCATION.map((edu, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={edu.degree}
                  className={`reveal md:flex md:items-center md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  style={{ transitionDelay: `${i * 0.15}s`, marginBottom: i < EDUCATION.length - 1 ? '3rem' : 0 }}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className="group relative glass-card rounded-2xl p-7 overflow-hidden cursor-default"
                      style={{ '--glow': edu.glow }}
                    >
                      {/* Gradient top accent */}
                      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${edu.gradient}`} />

                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                        style={{ boxShadow: `inset 0 0 40px ${edu.glow}` }}
                      />

                      <div className={`flex items-start gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center text-xl shadow-lg`}
                          style={{ boxShadow: `0 8px 20px ${edu.glow}` }}>
                          {edu.icon}
                        </div>

                        <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                          <div className="flex items-center gap-2 flex-wrap mb-1 justify-start md:justify-start">
                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                              edu.status === 'Ongoing'
                                ? 'bg-green-500/15 text-green-400 border border-green-500/25'
                                : 'bg-gray-500/15 text-gray-400 border border-gray-500/25'
                            }`}>
                              {edu.status === 'Ongoing' && (
                                <span className="inline-block w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse" />
                              )}
                              {edu.status}
                            </span>
                            <span className="text-gray-500 text-xs">{edu.period}</span>
                          </div>
                          <h3 className="text-white font-bold text-base md:text-lg leading-snug mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-purple-400 text-sm font-medium">{edu.institution}</p>
                        </div>
                      </div>

                      {/* GPA */}
                      {edu.gpa && (
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-lg">
                            <span className="text-yellow-400 text-sm">⭐</span>
                            <span className="text-yellow-300 text-sm font-bold">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      )}

                      {/* Tags */}
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                        {edu.tags.map(tag => (
                          <span key={tag}
                            className="bg-white/5 border border-white/8 text-gray-400 text-xs px-2.5 py-1 rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div className="hidden md:flex flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-4 border-[#030712] z-10 shadow-lg"
                    style={{ boxShadow: `0 0 15px ${edu.glow}` }} />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
