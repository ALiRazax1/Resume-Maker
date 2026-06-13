import React from 'react';
import { useResumeStore } from '../../../store/resumeStore';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github, Image as ImageIcon, Trash } from 'lucide-react';

export default function PersonalInfo() {
  const { resumeData, updatePersonal } = useResumeStore();
  const { personal } = resumeData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updatePersonal({ [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      updatePersonal({ photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = () => {
    updatePersonal({ photo: '' });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-1">Personal Details</h3>
        <p className="text-xs text-slate-400">Help employers contact you by filling in your core details.</p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> Full Name
          </label>
          <input
            type="text"
            name="name"
            value={personal.name || ''}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Job Title */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5" /> Job Title
          </label>
          <input
            type="text"
            name="title"
            value={personal.title || ''}
            onChange={handleChange}
            placeholder="Software Engineer"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" /> Email Address
          </label>
          <input
            type="email"
            name="email"
            value={personal.email || ''}
            onChange={handleChange}
            placeholder="john.doe@email.com"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={personal.phone || ''}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Location */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Location
          </label>
          <input
            type="text"
            name="location"
            value={personal.location || ''}
            onChange={handleChange}
            placeholder="San Francisco, CA"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* Website */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" /> Portfolio / Website
          </label>
          <input
            type="text"
            name="website"
            value={personal.website || ''}
            onChange={handleChange}
            placeholder="johndoe.com"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* LinkedIn */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn Link
          </label>
          <input
            type="text"
            name="linkedin"
            value={personal.linkedin || ''}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>

        {/* GitHub */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
            <Github className="w-3.5 h-3.5" /> GitHub Link
          </label>
          <input
            type="text"
            name="github"
            value={personal.github || ''}
            onChange={handleChange}
            placeholder="github.com/johndoe"
            className="w-full bg-slate-900 border border-slate-700/60 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-indigo-500 focus:outline-none transition"
          />
        </div>
      </div>

      {/* Photo Upload Area */}
      <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4">
        {personal.photo ? (
          <div className="relative group">
            <img
              src={personal.photo}
              alt="Profile"
              className="w-16 h-16 rounded-xl object-cover border border-slate-700 shadow-lg"
            />
            <button
              onClick={handleRemovePhoto}
              className="absolute -top-1.5 -right-1.5 bg-red-600 hover:bg-red-500 text-white p-1 rounded-full shadow transition-all scale-0 group-hover:scale-100"
              title="Remove photo"
            >
              <Trash className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-dashed border-slate-700 flex items-center justify-center text-slate-500">
            <ImageIcon className="w-6 h-6" />
          </div>
        )}

        <div className="flex-1 text-center sm:text-left space-y-1">
          <h4 className="text-xs font-bold text-slate-200">Profile Picture</h4>
          <p className="text-[10px] text-slate-500">
            Show / hide settings per template. Max recommended size: 2MB.
          </p>
          <div className="pt-1">
            <label className="inline-flex bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg cursor-pointer transition">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
