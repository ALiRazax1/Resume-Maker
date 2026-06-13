import React from 'react';

export default function CreativeTemplate({ data, accentColor, fontConfig, showPhoto }) {
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
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              Summary
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line font-medium">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b-2 pb-1" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px] relative pl-4 border-l" style={{ borderColor: `${accentColor}40` }}>
                  {/* Bullet Dot */}
                  <div className="w-2.5 h-2.5 rounded-full absolute -left-[5px] top-[3px]" style={{ backgroundColor: accentColor }} />
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{exp.position}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-indigo-600 font-semibold mb-1">
                    {exp.company} &bull; {exp.location}
                  </div>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b-2 pb-1" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px] relative pl-4 border-l" style={{ borderColor: `${accentColor}40` }}>
                  <div className="w-2.5 h-2.5 rounded-full absolute -left-[5px] top-[3px]" style={{ backgroundColor: accentColor }} />
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {edu.startDate} &ndash; {edu.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-indigo-600 font-semibold mb-1">
                    {edu.institution} &bull; {edu.location}
                  </div>
                  {edu.gpa && <div className="text-[10px] text-slate-500">GPA: {edu.gpa}</div>}
                  {edu.description && <p className="text-slate-600 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b-2 pb-1" style={{ borderColor: `${accentColor}30`, color: accentColor }}>
              Projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px] relative pl-4 border-l" style={{ borderColor: `${accentColor}40` }}>
                  <div className="w-2.5 h-2.5 rounded-full absolute -left-[5px] top-[3px]" style={{ backgroundColor: accentColor }} />
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{proj.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {proj.startDate} &ndash; {proj.endDate}
                    </span>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 block mb-0.5 hover:underline">
                      {proj.link}
                    </a>
                  )}
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] mb-1">
                      Focus: {proj.technologies}
                    </div>
                  )}
                  <p className="text-slate-600 leading-relaxed">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ borderColor: `${accentColor}40`, color: isSidebar ? '#ffffff' : accentColor }}>
              Skills & Power
            </h3>
            <div className="flex flex-wrap gap-2 text-[10px]">
              {skills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-2.5 py-1 rounded-full font-semibold border transition-all text-white"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    borderColor: `${accentColor}50`,
                    color: '#ffffff'
                  }}
                >
                  {skill.name} ({skill.level}%)
                </span>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ borderColor: `${accentColor}40`, color: isSidebar ? '#ffffff' : accentColor }}>
              Certificates
            </h3>
            <div className="space-y-2 text-[10px] text-slate-300">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-slate-900/30 p-2.5 rounded border border-slate-700/30">
                  <div className="font-bold text-white leading-tight">{cert.name}</div>
                  <div className="opacity-80 text-[9px] mt-0.5">{cert.issuer}</div>
                  {cert.date && <div className="text-[9px] opacity-65 mt-0.5">{cert.date}</div>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ borderColor: `${accentColor}40`, color: isSidebar ? '#ffffff' : accentColor }}>
              Languages
            </h3>
            <div className="space-y-2 text-[10px]">
              {languages.map((lang) => (
                <div key={lang.id} className="space-y-0.5">
                  <div className="flex justify-between font-medium">
                    <span className="text-white">{lang.language}</span>
                    <span className="text-slate-300">{lang.proficiency}</span>
                  </div>
                  {/* Visual Bar Indicator */}
                  <div className="w-full h-1 bg-slate-200/20 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width:
                          lang.proficiency === 'Native'
                            ? '100%'
                            : lang.proficiency === 'Fluent'
                            ? '85%'
                            : lang.proficiency === 'Professional'
                            ? '70%'
                            : '50%',
                        backgroundColor: accentColor,
                      }}
                    />
                  </div>
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
    <div className="w-full h-full text-slate-700 min-h-[297mm] flex flex-col" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Decorative Header Block with custom gradient based on accentColor */}
      <div
        className="p-8 text-white flex justify-between items-center"
        style={{
          background: `linear-gradient(135deg, ${accentColor} 0%, #1e1b4b 100%)`,
        }}
      >
        <div>
          <h1 className="text-3xl font-black tracking-tight" style={{ fontFamily: fontConfig?.cssHeading }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <p className="text-xs font-bold tracking-widest uppercase mt-1 opacity-90">
              {personal.title}
            </p>
          )}
        </div>

        {showPhoto && personal.photo && (
          <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/50 shadow-lg">
            <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
          </div>
        )}
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-1/3 bg-slate-800 text-slate-100 p-6" style={{ backgroundColor: '#111827' }}>
          {/* Contact Details */}
          <div className="mb-6 space-y-2 text-[10px] break-all border-b border-slate-700/50 pb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              Connect
            </h3>
            {personal.email && (
              <div>
                <span className="text-slate-400 block font-semibold">Email</span>
                <span>{personal.email}</span>
              </div>
            )}
            {personal.phone && (
              <div>
                <span className="text-slate-400 block font-semibold">Phone</span>
                <span>{personal.phone}</span>
              </div>
            )}
            {personal.location && (
              <div>
                <span className="text-slate-400 block font-semibold">Location</span>
                <span>{personal.location}</span>
              </div>
            )}
            {personal.website && (
              <div>
                <span className="text-slate-400 block font-semibold">Website</span>
                <span>{personal.website}</span>
              </div>
            )}
            {personal.linkedin && (
              <div>
                <span className="text-slate-400 block font-semibold">LinkedIn</span>
                <span>{personal.linkedin}</span>
              </div>
            )}
            {personal.github && (
              <div>
                <span className="text-slate-400 block font-semibold">GitHub</span>
                <span>{personal.github}</span>
              </div>
            )}
          </div>

          {orderedSidebar.map((sectionId) => renderSection(sectionId, true))}
        </div>

        {/* Content */}
        <div className="w-2/3 bg-white p-8">
          {orderedMain.map((sectionId) => renderSection(sectionId, false))}
        </div>
      </div>
    </div>
  );
}
