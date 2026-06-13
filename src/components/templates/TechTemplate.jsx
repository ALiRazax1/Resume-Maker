import React from 'react';

export default function TechTemplate({ data, accentColor, fontConfig }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, sectionOrder } = data;

  const mainSectionKeys = ['summary', 'experience', 'education', 'projects'];
  const sidebarSectionKeys = ['skills', 'languages', 'certifications'];

  const orderedMain = mainSectionKeys.sort((a, b) => sectionOrder.indexOf(a) - sectionOrder.indexOf(b));
  const orderedSidebar = sidebarSectionKeys.sort((a, b) => sectionOrder.indexOf(a) - sectionOrder.indexOf(b));

  const renderSection = (sectionId, isSidebar = false) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6">
            <h3 className="text-xs font-mono font-bold text-slate-800 mb-2 flex items-center gap-1">
              <span style={{ color: accentColor }}>&gt;</span> const profile = () =&gt; &#123;
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 pl-4 border-l font-mono border-slate-200 whitespace-pre-line">
              {summary}
            </p>
            <div className="text-xs font-mono font-bold text-slate-800 mt-1 pl-1">&#125;;</div>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-mono font-bold text-slate-800 mb-3 flex items-center gap-1 border-b pb-1">
              <span style={{ color: accentColor }}>#</span> cd ~/experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px] font-mono">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>
                      <span style={{ color: accentColor }}>$</span> {exp.position}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      [{exp.startDate} - {exp.current ? 'current' : exp.endDate}]
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mb-1 pl-4">
                    {exp.company} // {exp.location}
                  </div>
                  <div className="text-slate-600 pl-4 whitespace-pre-line leading-relaxed">{exp.description}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6">
            <h3 className="text-xs font-mono font-bold text-slate-800 mb-3 flex items-center gap-1 border-b pb-1">
              <span style={{ color: accentColor }}>#</span> cd ~/education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px] font-mono">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>
                      <span style={{ color: accentColor }}>$</span> {edu.degree}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      [{edu.startDate} - {edu.endDate}]
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mb-1 pl-4">
                    {edu.institution} // {edu.location}
                  </div>
                  {edu.gpa && <div className="text-[10px] text-slate-400 pl-4">GPA = {edu.gpa};</div>}
                  {edu.description && <p className="text-slate-600 pl-4 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6">
            <h3 className="text-xs font-mono font-bold text-slate-800 mb-3 flex items-center gap-1 border-b pb-1">
              <span style={{ color: accentColor }}>#</span> cd ~/projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px] font-mono">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>
                      <span style={{ color: accentColor }}>$</span> {proj.name}
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      [{proj.startDate} - {proj.endDate}]
                    </span>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 block pl-4 hover:underline">
                      url = "{proj.link}"
                    </a>
                  )}
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] pl-4">
                      tags = [{proj.technologies.split(',').map(t => `"${t.trim()}"`).join(', ')}]
                    </div>
                  )}
                  <p className="text-slate-600 pl-4 leading-relaxed mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6 font-mono">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b border-slate-700 text-slate-300">
              ./skills.sh
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[9px]">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2 py-0.5 rounded border text-slate-300"
                  style={{
                    backgroundColor: '#111827',
                    borderColor: `${accentColor}40`
                  }}
                >
                  {skill.name} [{skill.level}%]
                </span>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6 font-mono">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b border-slate-700 text-slate-300">
              ./certs.json
            </h3>
            <div className="space-y-2 text-[9px] text-slate-400">
              {certifications.map((cert) => (
                <div key={cert.id} className="pl-2 border-l border-slate-700">
                  <div className="font-bold text-slate-200">{cert.name}</div>
                  <div>by: {cert.issuer}</div>
                  {cert.date && <div className="text-[8px] opacity-65">{cert.date}</div>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6 font-mono">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b border-slate-700 text-slate-300">
              ./languages
            </h3>
            <div className="space-y-1.5 text-[9px] text-slate-300">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between">
                  <span>{lang.language}</span>
                  <span style={{ color: accentColor }}>({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex text-slate-700 min-h-[297mm] bg-white">
      {/* Sidebar: Monospace terminal look */}
      <div className="w-1/3 bg-slate-900 text-slate-200 p-6 flex flex-col justify-between" style={{ backgroundColor: '#0f172a' }}>
        <div>
          {/* Logo Terminal Vibe */}
          <div className="mb-8 font-mono text-xs border-b border-slate-800 pb-4">
            <span className="text-emerald-500">guest@dev:</span>
            <span className="text-indigo-400">~$</span> info
            <div className="text-slate-400 text-[10px] mt-2 space-y-1 break-all">
              {personal.email && <div>email: "{personal.email}"</div>}
              {personal.phone && <div>phone: "{personal.phone}"</div>}
              {personal.location && <div>loc: "{personal.location}"</div>}
              {personal.website && <div>site: "{personal.website}"</div>}
              {personal.linkedin && <div>linkedin: "{personal.linkedin}"</div>}
              {personal.github && <div>github: "{personal.github}"</div>}
            </div>
          </div>

          {orderedSidebar.map((sectionId) => renderSection(sectionId, true))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-2/3 bg-white p-8">
        {/* Header Block */}
        <div className="mb-8 font-mono border-b-2 pb-4" style={{ borderColor: accentColor }}>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <p className="text-xs font-semibold mt-1" style={{ color: accentColor }}>
              // {personal.title}
            </p>
          )}
        </div>

        {/* Ordered Main Sections */}
        {orderedMain.map((sectionId) => renderSection(sectionId, false))}
      </div>
    </div>
  );
}
