import { useEffect, useRef } from 'react'

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(59,130,246,0.25)',
    skills: [
      { name: 'React',       icon: '⚛️' },
      { name: 'JavaScript',  icon: '🟨' },
      { name: 'HTML',        icon: '🌐' },
      { name: 'CSS',         icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-purple-500 to-violet-600',
    glow: 'rgba(139,92,246,0.25)',
    skills: [
      { name: 'Node.js',    icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'MongoDB',    icon: '🍃' },
      { name: 'SQL',        icon: '🗄️' },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    color: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.25)',
    skills: [
      { name: 'Python',         icon: '🐍' },
      { name: 'Machine Learning', icon: '🧠' },
      { name: 'NumPy',          icon: '🔢' },
      { name: 'Scikit-learn',   icon: '📊' },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.25)',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'VS Code',      icon: '💻' },
      { name: 'Postman',      icon: '📮' },
      { name: 'MS Office',    icon: '📄' },
    ],
  },
  {
    category: 'AI Tools',
    icon: '✨',
    color: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.25)',
    skills: [
      { name: 'ChatGPT',    icon: '🤖' },
      { name: 'Gemini',     icon: '♊' },
      { name: 'Claude',     icon: '🌟' },
      { name: 'Kiro',       icon: '🚀' },
      { name: 'Antigravity', icon: '🌌' },
    ],
  },
]

const Skills = () => {
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
    <section id="skills" className="py-28 bg-[#050b18] px-6 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-600/4 rounded-full blur-3xl pointer-events-none" />
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="reveal mb-16 text-center">
          <p className="text-purple-400 text-xs font-bold tracking-[0.25em] uppercase mb-3">What I Know</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-5 mx-auto" />
        </div>

        {/* Category grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, ci) => (
            <div
              key={cat.category}
              className="reveal glass-card rounded-2xl p-6 overflow-hidden group"
              style={{ transitionDelay: `${ci * 0.1}s` }}
            >
              {/* Top accent */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${cat.color} mb-5 rounded-full`} />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg shadow-lg`}
                  style={{ boxShadow: `0 6px 20px ${cat.glow}` }}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-base">{cat.category}</h3>
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <div
                    key={skill.name}
                    className="skill-card flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-default"
                  >
                    <span className="text-base leading-none">{skill.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Extra tech card */}
          <div className="reveal glass-card rounded-2xl p-6 overflow-hidden sm:col-span-2 lg:col-span-1"
            style={{ transitionDelay: '0.5s' }}>
            <div className="h-0.5 w-full bg-gradient-to-r from-slate-500 to-slate-600 mb-5 rounded-full" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-lg">
                🌐
              </div>
              <h3 className="text-white font-bold text-base">Also Familiar With</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'Next.js', 'Firebase', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Redis'].map(tech => (
                <span key={tech}
                  className="bg-white/4 border border-white/8 text-gray-400 hover:text-gray-200 hover:border-purple-500/30 text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
