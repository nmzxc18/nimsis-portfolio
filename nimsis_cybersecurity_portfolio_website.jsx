export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a22,transparent_40%)] pointer-events-none" />

      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">Nimsis Evangelista</h1>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
            SOC Analyst • Cybersecurity • IT Support
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Nimsis
            <span className="block text-blue-400">Evangelista</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8">
            Cybersecurity-focused IT professional with experience in SOC monitoring, threat analysis, incident response, and enterprise IT support. Passionate about securing systems, solving technical issues, and supporting modern IT infrastructures.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/nimsis-evangelista-90aa85227/"
              target="_blank"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition shadow-lg shadow-blue-500/30"
            >
              LinkedIn
            </a>

            <a
              href="mailto:evangelistanimsis@gmail.com"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-blue-400 hover:text-blue-400 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-blue-500/20 blur-3xl rounded-full" />

          <img
            src="/formal.png"
            alt="Nimsis Evangelista"
            className="relative z-10 w-[360px] rounded-3xl border border-white/10 shadow-2xl shadow-blue-500/20"
          />
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            Computer Engineering graduate with hands-on experience in cybersecurity operations, threat monitoring, and IT infrastructure support. Experienced in investigating security alerts, analyzing logs, troubleshooting enterprise systems, and maintaining secure operational environments. Seeking opportunities in SOC Analysis, Cybersecurity, and advanced IT Support roles.
          </p>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            'Security Operations Center (SOC)',
            'Threat Detection & Analysis',
            'Incident Response',
            'SIEM Fundamentals',
            'Security Monitoring',
            'Log Analysis',
            'Cyber Threat Investigation',
            'Microsoft Azure Fundamentals',
            'IT Infrastructure Support',
            'Access Management',
            'Networking & Troubleshooting',
            'Technical Documentation'
          ].map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold">IT Specialist — INSPECTA</h3>
                <p className="text-blue-400">June 2024 – Present</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Provide end-user IT support and maintain stable IT operations.</li>
              <li>Troubleshoot hardware, software, and network issues.</li>
              <li>Support system configuration and access management.</li>
              <li>Assist in incident documentation and operational support.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-semibold">Research & Development Engineer / SOC Analyst — Red Rock IT Security</h3>
                <p className="text-blue-400">October 2022 – May 2024</p>
              </div>
            </div>

            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Monitored security alerts and investigated cyber threats.</li>
              <li>Performed security log analysis and threat investigations.</li>
              <li>Supported incident response and security monitoring processes.</li>
              <li>Documented security incidents and recommended preventive measures.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">Education</h3>
            <p className="text-gray-300">
              Bachelor of Science in Computer Engineering — Batangas State University (2022)
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold mb-4">Certifications & Training</h3>

            <ul className="space-y-3 text-gray-300 list-disc list-inside">
              <li>Introduction to Cybersecurity and Operations</li>
              <li>Introduction to Microsoft Azure</li>
              <li>Introduction to Machine Learning using WEKA</li>
              <li>Getting Started with Data Science</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-10 text-center">
          <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Open to opportunities in Cybersecurity, SOC Analysis, Threat Intelligence, and IT Support roles in the Philippines, Luxembourg, and the European Union.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:evangelistanimsis@gmail.com"
              className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
            >
              evangelistanimsis@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/nimsis-evangelista-90aa85227/"
              target="_blank"
              className="px-6 py-3 rounded-2xl border border-white/20 hover:border-blue-400 hover:text-blue-400 transition"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Nimsis Evangelista — Cybersecurity & IT Support Portfolio
      </footer>
    </div>
  )
}
