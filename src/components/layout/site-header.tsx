"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/assistant", label: "Assistant" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-teal-600">
          er.mohangc07
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-semibold text-teal-600 underline"
                  : "text-gray-700 hover:text-teal-600"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sign In Button */}
        <Button className="hidden md:inline-flex">Sign in</Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden rounded-md border px-4 py-2 text-sm font-medium">
            Menu
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "font-semibold text-teal-600 underline"
                      : "text-gray-700 hover:text-teal-600"
                  }
                >
                  {link.label}
                </Link>
              ))}
              <Button className="mt-4">Sign in</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
