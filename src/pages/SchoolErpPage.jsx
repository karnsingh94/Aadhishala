import {
  ArrowRight,
  Check,
  ChevronRight,
  Eye,
  GraduationCap,
  Layers,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import {
  erpCategories,
  erpFeatures,
  erpScreenshots,
} from '../data/schoolErpData.js';
import { navigate } from '../utils.js';

export default function SchoolErpPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeImageModal, setActiveImageModal] = useState(null);

  const filteredFeatures = useMemo(() => {
    return erpFeatures.filter((feature) => {
      const matchesCategory =
        selectedCategory === 'all' || feature.category === selectedCategory;

      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = feature.title.toLowerCase().includes(query);
      const matchesTagline = feature.tagline.toLowerCase().includes(query);
      const matchesCategoryName = feature.categoryName
        .toLowerCase()
        .includes(query);
      const matchesItems = feature.items.some((item) =>
        item.toLowerCase().includes(query)
      );

      return (
        matchesCategory &&
        (matchesTitle || matchesTagline || matchesCategoryName || matchesItems)
      );
    });
  }, [selectedCategory, searchQuery]);

  const activeScreenshot = erpScreenshots[activeTab];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-school-50/60 to-white px-5 pt-16 pb-20 sm:px-8 lg:px-[6vw] lg:pt-24 lg:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          <span className="eyebrow mx-auto justify-center">
            <Sparkles size={18} className="text-school-600" />
            School Management System
          </span>

          <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            All-in-One <span className="bg-gradient-to-r from-school-700 to-school-600 bg-clip-text text-transparent">School ERP</span> Solution
          </h1>

          <p className="body-copy mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-slate-600">
            A comprehensive, modular platform with <strong>26 powerful functionalities</strong> built to automate school administration, admissions, fees, classroom operations, and academic excellence.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="primary-button group inline-flex items-center gap-2"
            >
              <span>Book a Live Demo</span>
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>

            <a
              href="#features-list"
              className="secondary-button inline-flex items-center gap-2"
            >
              <span>Explore All 26 Features</span>
              <ChevronRight size={18} />
            </a>
          </div>

          {/* Quick Metrics Badges */}
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-2xl border border-school-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-school-700">26</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">Core Modules</p>
            </div>
            <div className="rounded-2xl border border-school-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-school-700">100%</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">Cloud Powered</p>
            </div>
            <div className="rounded-2xl border border-school-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-school-700">360°</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">Student Lifecycle</p>
            </div>
            <div className="rounded-2xl border border-school-100 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-3xl font-black text-school-700">Zero</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-600">Paper Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Software Interface & Live Screenshots Showcase */}
      <section className="page-section bg-white border-y border-slate-100">
        <div className="section-title mx-auto text-center">
          <span className="eyebrow mx-auto justify-center">
            <Eye size={18} />
            Software Interface & Live Previews
          </span>
          <h2 className="heading-lg">
            See the School ERP in Action
          </h2>
          <p className="body-copy mx-auto mt-4 max-w-2xl text-slate-600">
            Intuitive, clean, and responsive design engineered for school principals, administrative staff, teachers, and parents.
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          {erpScreenshots.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`rounded-2xl px-5 py-3 text-sm font-bold transition sm:text-base ${isActive
                    ? 'bg-school-700 text-white shadow-lg shadow-school-700/25 ring-2 ring-school-700'
                    : 'border border-school-100 bg-slate-50 text-slate-700 hover:bg-school-50 hover:text-school-700'
                  }`}
              >
                <span className="opacity-75 mr-2">#{item.id}</span>
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Big Active Preview Frame */}
        <div className="mt-8 mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-2xl">
            {/* Window Top Bar Mockup */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full bg-rose-500"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-amber-500"></span>
                <span className="h-3.5 w-3.5 rounded-full bg-emerald-500"></span>
                <span className="ml-3 hidden text-xs font-semibold text-slate-400 sm:inline-block">
                  Aadishala ERP - {activeScreenshot.title}
                </span>
              </div>
              <span className="rounded-full bg-school-600/20 px-3 py-1 text-xs font-bold text-school-200">
                {activeScreenshot.tag}
              </span>
            </div>

            {/* Main Screenshot Image */}
            <div className="relative group bg-slate-900">
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                className="w-full object-cover max-h-[620px] transition duration-300 group-hover:scale-[1.008]"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-6">
                <button
                  type="button"
                  onClick={() => setActiveImageModal(activeScreenshot.src)}
                  className="rounded-xl bg-white/95 px-4 py-2 text-sm font-bold text-slate-900 shadow hover:bg-white flex items-center gap-2"
                >
                  <Eye size={16} /> Click to Expand View
                </button>
              </div>
            </div>

            {/* Screenshot Details Footer */}
            <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-slate-300">
              <div>
                <h3 className="text-base font-bold !text-white" style={{ color: '#ffffff' }}>{activeScreenshot.title}</h3>
                <p className="text-sm text-slate-400">{activeScreenshot.description}</p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="shrink-0 rounded-xl bg-school-600 hover:bg-school-500 px-4 py-2 text-xs font-bold text-white transition"
              >
                Request Demo of this Module
              </button>
            </div>
          </div>

          {/* All 3 Screenshots Side-by-Side Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {erpScreenshots.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={`cursor-pointer overflow-hidden rounded-2xl border bg-white p-3 shadow transition hover:-translate-y-1 ${activeTab === idx
                    ? 'border-school-700 ring-2 ring-school-700/30'
                    : 'border-slate-200 hover:border-school-200'
                  }`}
              >
                <div className="overflow-hidden rounded-xl bg-slate-100 aspect-video">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition hover:scale-105"
                  />
                </div>
                <div className="mt-3 px-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-school-700">Preview 0{item.id}</span>
                    <span className="text-[11px] font-semibold text-slate-600">{item.tag}</span>
                  </div>
                  <h4 className="mt-1 text-sm font-bold text-slate-900">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Functionalities Main Section */}
      <section id="features-list" className="page-section bg-gradient-to-b from-white via-school-50/30 to-white">
        <div className="section-title">
          <span className="eyebrow">
            <Layers size={18} />
            Project Features & Functionalities
          </span>
          <h2 className="heading-lg">
            26 Complete School Management Modules
          </h2>
          <p className="body-copy mt-3">
            Every feature your institution needs from student enrollment to certificate generation, automated exams, and developer API settings.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {erpCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${isSelected
                      ? 'bg-school-700 text-white shadow-md shadow-school-700/20'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-school-200 hover:text-school-700'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full max-w-sm">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any module or feature..."
              className="form-field pl-11 py-3 text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-slate-200 p-1 text-xs text-slate-600 hover:bg-slate-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Showing Count */}
        <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-600">
          <span>
            Showing {filteredFeatures.length} of {erpFeatures.length} modules
          </span>
          {searchQuery && (
            <span>Filtered by: &ldquo;{searchQuery}&rdquo;</span>
          )}
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature) => {
            const { number, title, tagline, Icon, items, categoryName } = feature;
            return (
              <article
                key={number}
                className="school-card group flex flex-col justify-between transition duration-200 hover:-translate-y-1 hover:border-school-600 hover:shadow-xl"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-school-50 text-school-700 transition group-hover:bg-school-700 group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300 transition group-hover:text-school-600">
                      {number}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="mt-4">
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                      {categoryName}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="mt-2 text-xl font-black text-slate-900 group-hover:text-school-700 transition">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-slate-600">
                    {tagline}
                  </p>

                  {/* Sub-items Checklist */}
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {items.map((subItem) => (
                      <li
                        key={subItem}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="font-medium leading-snug">{subItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Action */}
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-school-700 transition hover:text-school-800"
                  >
                    <span>Request demo for {title}</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {filteredFeatures.length === 0 && (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-lg font-bold text-slate-700">No modules match your search criteria</p>
            <p className="mt-2 text-sm text-slate-600">Try searching for other keywords like &quot;attendance&quot;, &quot;fees&quot;, &quot;exam&quot;, or &quot;transport&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 primary-button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Why Choose Aadishala ERP */}
      <section className="page-section bg-slate-950 text-white">
        <div className="section-title">
          <span className="eyebrow text-school-200">
            <Zap size={18} />
            Institutional Advantages
          </span>
          <h2 className="heading-lg !text-white" style={{ color: '#ffffff' }}>
            Built for Scale, Reliability & Security
          </h2>
          <p className="body-copy mt-3 text-slate-400">
            Everything your administrative board, educators, and IT teams need to maintain complete digital governance.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-school-600 text-white">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold !text-white" style={{ color: '#ffffff' }}>Bank-Grade Security</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Role-based permissions, encrypted data transfers, and complete audit trail logs for every action.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-school-600 text-white">
              <Smartphone size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold !text-white" style={{ color: '#ffffff' }}>Mobile & App Ready</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Fully responsive web dashboard plus dedicated apps for parents, teachers, and school management.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-school-600 text-white">
              <Zap size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold !text-white" style={{ color: '#ffffff' }}>Automated Reminders</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Instant WhatsApp, SMS, and email alerts for fee reminders, attendance status, and exam circulars.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-school-600 text-white">
              <GraduationCap size={24} />
            </div>
            <h3 className="mt-4 text-lg font-bold !text-white" style={{ color: '#ffffff' }}>Smooth Onboarding</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Dedicated implementation specialists assist with legacy data migration, teacher training, and setup.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-br from-school-950 via-school-700 to-school-600 px-5 py-20 text-center text-white sm:px-8 lg:px-[6vw]">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-white">
            <Sparkles size={16} /> Transform Your Institution Today
          </span>
          <h2
            className="mt-6 text-3xl font-black !text-white sm:text-5xl"
            style={{ color: '#ffffff' }}
          >
            Ready to upgrade to the Aadishala School ERP?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-school-100 sm:text-lg">
            Schedule a personalized walkthrough of all 26 modules with our product team. See how we can automate your operations in days.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="rounded-2xl bg-white px-8 py-4 text-base font-black text-school-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-school-50"
            >
              Schedule Live Walkthrough
            </button>
            <a
              href="tel:9983996171"
              className="rounded-2xl border-2 border-white/80 px-8 py-4 text-base font-black text-white transition hover:bg-white/10"
            >
              Call 9983996171
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Full Image View */}
      {activeImageModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-h-[90vh] max-w-6xl overflow-hidden rounded-2xl bg-slate-900 p-2">
            <button
              type="button"
              onClick={() => setActiveImageModal(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black"
            >
              ✕
            </button>
            <img
              src={activeImageModal}
              alt="Expanded preview"
              className="max-h-[85vh] w-auto rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}

