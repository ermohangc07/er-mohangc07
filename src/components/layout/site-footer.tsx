"use client";

import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-teal-600">er.mohangc07</h2>
          <p className="mt-2 text-sm text-gray-600">
            Computer engineer, coding instructor, and creator of practical video courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-2">Courses</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/courses/web">Web Development</Link></li>
            <li><Link href="/courses/ai">AI & Robotics</Link></li>
            <li><Link href="/courses/video">Videography</Link></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="mailto:your-email@example.com">Email</Link></li>
            <li><Link href="https://github.com/er-mohangc07">GitHub</Link></li>
            <li><Link href="https://linkedin.com/in/your-username">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-center text-sm text-gray-500">
        © {year} er.mohangc07. All rights reserved. · 
        <Link href="/privacy" className="ml-2">Privacy</Link> · 
        <Link href="/terms" className="ml-2">Terms</Link>
      </div>
    </footer>
  );
}
