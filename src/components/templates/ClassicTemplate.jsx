import React from 'react';

export default function ClassicTemplate({ data, accentColor, fontConfig, showPhoto }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  // Render Section Content
  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Professional Summary
            </h3>
            <p className="text-xs leading-relaxed text-slate-700 whitespace-pre-line">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-3" style={{ borderColor: accentColor, color: accentColor }}>
              Work Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{exp.position}</span>
                    <span>
                      {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500 italic mb-1">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
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
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-3" style={{ borderColor: accentColor, color: accentColor }}>
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>
                      {edu.degree} in {edu.field}
                    </span>
                    <span>
                      {edu.startDate} – {edu.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-500 italic mb-1">
                    <span>
                      {edu.institution}
                      {edu.gpa && `, GPA: ${edu.gpa}`}
                    </span>
                    <span>{edu.location}</span>
                  </div>
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
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-3" style={{ borderColor: accentColor, color: accentColor }}>
              Projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>
                      {proj.name}
                      {proj.link && (
                        <span className="text-[10px] font-normal text-slate-500 ml-2 italic">
                          ({proj.link})
                        </span>
                      )}
                    </span>
                    <span>
                      {proj.startDate} – {proj.endDate}
                    </span>
                  </div>
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] mb-1">
                      Technologies: {proj.technologies}
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
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Skills
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-1.5">
                  <span className="font-medium text-slate-800">{skill.name}</span>
                  <span className="text-slate-400">({skill.level}%)</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Certifications
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-600">
              {certifications.map((cert) => (
                <li key={cert.id} className="leading-relaxed">
                  <span className="font-bold text-slate-800">{cert.name}</span> – {cert.issuer}{' '}
                  {cert.date && `(${cert.date})`}
                </li>
              ))}
            </ul>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider border-b pb-1 mb-2" style={{ borderColor: accentColor, color: accentColor }}>
              Languages
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              {languages.map((lang) => (
                <div key={lang.id} className="text-slate-700">
                  <span className="font-bold text-slate-800">{lang.language}</span>: {lang.proficiency}
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
    <div
      className="p-12 w-full h-full text-slate-800"
      style={{ fontFamily: fontConfig?.cssBody }}
    >
      {/* Header */}
      <div className="text-center mb-8 border-b pb-4" style={{ borderColor: accentColor }}>
        <h1
          className="text-3xl font-extrabold uppercase tracking-wide mb-1"
          style={{ fontFamily: fontConfig?.cssHeading, color: accentColor }}
        >
          {personal.name || 'Your Name'}
        </h1>
        {personal.title && (
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
            {personal.title}
          </p>
        )}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-slate-500 text-[10px]">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {personal.location && <span>• {personal.location}</span>}
          {personal.website && <span>• {personal.website}</span>}
          {personal.linkedin && <span>• {personal.linkedin}</span>}
          {personal.github && <span>• {personal.github}</span>}
        </div>
      </div>

      {/* Dynamic Sections */}
      {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
    </div>
  );
}
