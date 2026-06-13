import React from 'react';

export default function MinimalTemplate({ data, accentColor, fontConfig }) {
  const { personal, summary, experience, education, skills, projects, certifications, languages } = data;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case 'summary':
        if (!summary) return null;
        return (
          <div key="summary" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Summary
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-700 whitespace-pre-line col-span-3">{summary}</p>
          </div>
        );

      case 'experience':
        if (!experience || experience.length === 0) return null;
        return (
          <div key="experience" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Experience
            </h3>
            <div className="col-span-3 space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{exp.position} &bull; <span className="font-medium text-slate-500">{exp.company}</span></span>
                    <span className="font-normal text-[10px] text-slate-400">
                      {exp.startDate} &ndash; {exp.current ? 'Present' : exp.endDate}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-400 mb-1">{exp.location}</div>
                  <p className="text-slate-600 whitespace-pre-line leading-relaxed font-light">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        if (!education || education.length === 0) return null;
        return (
          <div key="education" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Education
            </h3>
            <div className="col-span-3 space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{edu.degree} in {edu.field}</span>
                    <span className="font-normal text-[10px] text-slate-400">
                      {edu.startDate} &ndash; {edu.endDate}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-500 font-light mb-0.5">
                    {edu.institution} &bull; {edu.location} {edu.gpa && `| GPA: ${edu.gpa}`}
                  </div>
                  {edu.description && <p className="text-slate-500 font-light mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        if (!projects || projects.length === 0) return null;
        return (
          <div key="projects" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Projects
            </h3>
            <div className="col-span-3 space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="text-[11px]">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{proj.name}</span>
                    <span className="font-normal text-[10px] text-slate-400">
                      {proj.startDate} &ndash; {proj.endDate}
                    </span>
                  </div>
                  {proj.link && (
                    <div className="text-[9px] text-slate-400 italic">Link: {proj.link}</div>
                  )}
                  {proj.technologies && (
                    <div className="text-slate-500 text-[10px] mb-1">
                      Focus: {proj.technologies}
                    </div>
                  )}
                  <p className="text-slate-600 leading-relaxed font-light">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'skills':
        if (!skills || skills.length === 0) return null;
        return (
          <div key="skills" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Skills
            </h3>
            <div className="col-span-3 flex flex-wrap gap-x-6 gap-y-2 text-[10px]">
              {skills.map((skill) => (
                <div key={skill.id} className="text-slate-700">
                  <span className="font-bold text-slate-900">{skill.name}</span>
                  <span className="text-slate-400 ml-1">({skill.level}%)</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        if (!certifications || certifications.length === 0) return null;
        return (
          <div key="certifications" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Certificates
            </h3>
            <div className="col-span-3 space-y-1.5 text-[10px] text-slate-600">
              {certifications.map((cert) => (
                <div key={cert.id}>
                  <span className="font-semibold text-slate-800">{cert.name}</span> &ndash; {cert.issuer} {cert.date && `(${cert.date})`}
                </div>
              ))}
            </div>
          </div>
        );

      case 'languages':
        if (!languages || languages.length === 0) return null;
        return (
          <div key="languages" className="mb-6 grid grid-cols-4 gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 col-span-1">
              Languages
            </h3>
            <div className="col-span-3 flex gap-6 text-[10px]">
              {languages.map((lang) => (
                <div key={lang.id}>
                  <span className="font-semibold text-slate-800">{lang.language}</span> &bull; <span className="text-slate-500">{lang.proficiency}</span>
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
    <div className="p-16 w-full h-full text-slate-800 bg-white" style={{ fontFamily: fontConfig?.cssBody }}>
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-light tracking-tight text-slate-900 mb-1" style={{ fontFamily: fontConfig?.cssHeading }}>
          {personal.name || 'Your Name'}
        </h1>
        {personal.title && (
          <p className="text-[10px] font-bold uppercase tracking-widest mb-6" style={{ color: accentColor }}>
            {personal.title}
          </p>
        )}
        <div className="flex flex-wrap gap-x-6 gap-y-1 text-slate-500 text-[10px] border-t border-b border-slate-100 py-3">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>{personal.phone}</span>}
          {personal.location && <span>{personal.location}</span>}
          {personal.website && <span>{personal.website}</span>}
          {personal.linkedin && <span>{personal.linkedin}</span>}
          {personal.github && <span>{personal.github}</span>}
        </div>
      </div>

      {/* Dynamic Sections */}
      <div className="space-y-6">
        {data.sectionOrder ? data.sectionOrder.map(renderSection) : null}
      </div>
    </div>
  );
}
