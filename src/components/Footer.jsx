import { navItems } from '../data/siteData.js';
import { navigate } from '../utils.js';

export default function Footer() {
  return (
    <footer className="grid gap-8 bg-school-950 px-5 py-10 text-white sm:px-8 lg:grid-cols-[1fr_1fr_auto] lg:px-[6vw]">
      <div>
        <h2 className="text-xl font-extrabold text-white">Information</h2>

        <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
          Aadishala brings school administration and learning together in one
          platform. Manage admissions, fees, academics, transport, staff, and
          reports from a connected dashboard.
        </p>
        <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
          Share study materials, assignments, results, and progress updates with
          students and parents. Simplify fee collection, track admission enquiries,
          and keep your school community informed.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-extrabold text-white">Contact Us</h2>
        <p className="mt-4 text-base leading-7 text-slate-300">Email us for school software information and enquiries.</p>
        <a className="mt-2 inline-block break-all text-base font-bold text-white underline underline-offset-4 hover:text-slate-300" href="mailto:info@aadishala.com">info@aadishala.com</a>
      </div>

      <div className="flex flex-col items-start gap-2">
        <h2 className="mb-2 px-3 text-xl font-extrabold text-white">Services</h2>
        {navItems.map((item) => (
          <button
            key={item.path}
            className="rounded-xl px-3 py-2 text-m font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
            type="button"
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}

        <button
          className="rounded-xl px-3 py-2 text-m font-bold text-slate-200 transition hover:bg-white/10 hover:text-white"
          type="button"
          onClick={() => navigate('/contact')}
        >
          Book Demo
        </button>
      </div>

      <p className="border-t border-white/10 pt-5 text-sm text-slate-400 lg:col-span-3">
        Copyright @ 2026 Aadishala. All Rights Reserved.
      </p>
    </footer>
  );
}
