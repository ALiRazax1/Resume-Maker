import React from 'react';

export default function ModernTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages, sectionOrder } = data;

  // Filter sections for main and sidebar columns
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
              About Me
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-600 whitespace-pre-line">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1" style={{ borderColor: `${accentColor}20`, color: accentColor }}>
              Work History
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{exp.position}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mb-1">
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
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1" style={{ borderColor: `${accentColor}20`, color: accentColor }}>
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{edu.degree}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 mb-1">
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
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 border-b pb-1" style={{ borderColor: `${accentColor}20`, color: accentColor }}>
              Key Projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{proj.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      {proj.startDate} – {proj.endDate}
                    </span>
                  </div>
                  {proj.link && (
                    <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-[10px] text-indigo-600 block mb-0.5 hover:underline">
                      {proj.link}
                    </a>
                  )}
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] mb-1">
                      Tech: {proj.technologies}
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
              Skills
            </h3>
            <div className="space-y-2 text-[10px]">
              {skills.map((skill) => (
                <div key={skill.id} className="space-y-0.5">
                  <div className="flex justify-between font-medium">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200/20 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: accentColor }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-xs font-bold uppercase tracking-wider mb-3 pb-1 border-b" style={{ borderColor: `${accentColor}40`, color: isSidebar ? '#ffffff' : accentColor }}>
              Certifications
            </h3>
            <div className="space-y-2 text-[10px] text-slate-300">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <div className="font-bold text-white">{cert.name}</div>
                  <div className="opacity-80">{cert.issuer}</div>
                  {cert.date && <div className="text-[9px] opacity-65">{cert.date}</div>}
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
            <div className="space-y-1 text-[10px]">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between">
                  <span className="font-medium text-white">{lang.language}</span>
                  <span className="text-slate-300">{lang.proficiency}</span>
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
    <div className="w-full h-full flex text-slate-700 min-h-[297mm]" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Sidebar: Accent colored */}
      <div className="w-1/3 bg-slate-800 text-slate-100 p-8 flex flex-col justify-between" style={{ backgroundColor: '#1e293b' }}>
        <div>
          {/* Photo */}
          {showPhoto && personal.photo && (
            <div className="mb-6 flex justify-center">
              <div className="w-28 h-28 rounded-full overflow-hidden border-2 shadow-inner" style={{ borderColor: accentColor }}>
                <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* Contact Details */}
          <div className="mb-8 space-y-2 text-[10px] break-all border-b pb-6" style={{ borderColor: `${accentColor}25` }}>
            <h3 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: accentColor }}>
              Contact
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

          {/* Ordered Sidebar Sections */}
          {orderedSidebar.map((sectionId) => renderSection(sectionId, true))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-2/3 bg-white p-8">
        {/* Header Block */}
        <div className="mb-8 border-b-2 pb-6" style={{ borderColor: accentColor }}>
          <h1 className="text-2xl font-black tracking-tight" style={{ fontFamily: fontConfig?.cssHeading, color: '#0f172a' }}>
            {personal.name || 'Your Name'}
          </h1>
          {personal.title && (
            <p className="text-xs font-bold tracking-wider uppercase mt-1" style={{ color: accentColor }}>
              {personal.title}
            </p>
          )}
        </div>

        {/* Ordered Main Sections */}
        {orderedMain.map((sectionId) => renderSection(sectionId, false))}
      </div>
    </div>
  );
}
