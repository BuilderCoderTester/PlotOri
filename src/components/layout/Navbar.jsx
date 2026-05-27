import { Link, useLocation } from "wouter";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/student-zone", label: "Student Zone" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" }
  ];
  return <header className="sticky top-0 z-50 w-full border-b bg-[#faf7f2]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf7f2]/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
          <BookOpen className="h-6 w-6" />
          <span>PlotOri</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => <Link
    key={link.href}
    href={link.href}
    className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
  >
              {link.label}
            </Link>)}
          <Link href="/draft">
            <Button variant="default" data-testid="button-start-writing-nav" className="ml-4 font-sans font-semibold tracking-wide bg-amber-500 hover:bg-amber-600 text-white">
              Start Writing
            </Button>
          </Link>
        </nav>
        <button
    className="md:hidden p-2 text-foreground"
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMobileMenuOpen && <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => <Link
    key={link.href}
    href={link.href}
    className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-muted-foreground"}`}
    onClick={() => setIsMobileMenuOpen(false)}
  >
                {link.label}
              </Link>)}
            <Link href="/draft" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="default" className="w-full mt-2 font-sans font-semibold tracking-wide bg-amber-500 hover:bg-amber-600 text-white">
                Start Writing
              </Button>
            </Link>
          </nav>
        </div>}
    </header>;
}
export {
  Navbar
};
