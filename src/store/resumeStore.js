import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultResumeData } from '../data/defaultResumeData';

export const useResumeStore = create(
  persist(
    (set) => ({
      // State
      resumeData: { ...defaultResumeData },
      activeTemplate: 'modern',
      accentColor: '#3b82f6', // Indigo-like blue default
      fontPairing: 'inter',
      showPhoto: true,
      sectionOrder: [
        'summary',
        'experience',
        'education',
        'skills',
        'projects',
        'certifications',
        'languages',
      ],

      // Actions
      updatePersonal: (fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personal: { ...state.resumeData.personal, ...fields },
          },
        })),

      updateSummary: (summary) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            summary,
          },
        })),

      // Experience actions
      addExperience: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: [
              ...state.resumeData.experience,
              {
                id: Date.now().toString(),
                company: '',
                position: '',
                location: '',
                startDate: '',
                endDate: '',
                current: false,
                description: '',
              },
            ],
          },
        })),

      updateExperience: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.map((exp) =>
              exp.id === id ? { ...exp, ...fields } : exp
            ),
          },
        })),

      deleteExperience: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter((exp) => exp.id !== id),
          },
        })),

      // Education actions
      addEducation: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: [
              ...state.resumeData.education,
              {
                id: Date.now().toString(),
                institution: '',
                degree: '',
                field: '',
                location: '',
                startDate: '',
                endDate: '',
                gpa: '',
                description: '',
              },
            ],
          },
        })),

      updateEducation: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.map((edu) =>
              edu.id === id ? { ...edu, ...fields } : edu
            ),
          },
        })),

      deleteEducation: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter((edu) => edu.id !== id),
          },
        })),

      // Skills actions
      addSkill: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: [
              ...state.resumeData.skills,
              {
                id: Date.now().toString(),
                name: '',
                level: 80,
              },
            ],
          },
        })),

      updateSkill: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.map((skill) =>
              skill.id === id ? { ...skill, ...fields } : skill
            ),
          },
        })),

      deleteSkill: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: state.resumeData.skills.filter((skill) => skill.id !== id),
          },
        })),

      // Projects actions
      addProject: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: [
              ...state.resumeData.projects,
              {
                id: Date.now().toString(),
                name: '',
                description: '',
                technologies: '',
                link: '',
                startDate: '',
                endDate: '',
              },
            ],
          },
        })),

      updateProject: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.map((proj) =>
              proj.id === id ? { ...proj, ...fields } : proj
            ),
          },
        })),

      deleteProject: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.filter((proj) => proj.id !== id),
          },
        })),

      // Certifications actions
      addCertification: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: [
              ...state.resumeData.certifications,
              {
                id: Date.now().toString(),
                name: '',
                issuer: '',
                date: '',
                link: '',
              },
            ],
          },
        })),

      updateCertification: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.map((cert) =>
              cert.id === id ? { ...cert, ...fields } : cert
            ),
          },
        })),

      deleteCertification: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            certifications: state.resumeData.certifications.filter((cert) => cert.id !== id),
          },
        })),

      // Languages actions
      addLanguage: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: [
              ...state.resumeData.languages,
              {
                id: Date.now().toString(),
                language: '',
                proficiency: 'Conversational',
              },
            ],
          },
        })),

      updateLanguage: (id, fields) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: state.resumeData.languages.map((lang) =>
              lang.id === id ? { ...lang, ...fields } : lang
            ),
          },
        })),

      deleteLanguage: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            languages: state.resumeData.languages.filter((lang) => lang.id !== id),
          },
        })),

      // Customization actions
      setActiveTemplate: (templateId) => set({ activeTemplate: templateId }),
      setAccentColor: (color) => set({ accentColor: color }),
      setFontPairing: (fontId) => set({ fontPairing: fontId }),
      setShowPhoto: (show) => set({ showPhoto: show }),
      setSectionOrder: (order) => set({ sectionOrder: order }),

      // Reset
      resetResume: () =>
        set({
          resumeData: {
            personal: {
              name: '',
              title: '',
              email: '',
              phone: '',
              location: '',
              website: '',
              linkedin: '',
              github: '',
              photo: '',
            },
            summary: '',
            experience: [],
            education: [],
            skills: [],
            projects: [],
            certifications: [],
            languages: [],
          },
          accentColor: '#3b82f6',
          fontPairing: 'inter',
          showPhoto: true,
          sectionOrder: [
            'summary',
            'experience',
            'education',
            'skills',
            'projects',
            'certifications',
            'languages',
          ],
        }),

      loadSampleData: () =>
        set({
          resumeData: { ...defaultResumeData },
        }),
    }),
    {
      name: 'resume-maker-storage',
    }
  )
);
