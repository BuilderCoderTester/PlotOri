import { Link, useLocation } from "wouter";
import { BookOpen, Menu, X, LogIn, LogOut, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";

function Navbar() {
  const [location, setLocation] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isLoading, isAuthenticated, login, logout } = useAuth();

  const links = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/student-zone", label: "Student Zone" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/explore", label: "Explore" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#faf7f2]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf7f2]/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
          <BookOpen className="h-6 w-6" />
          <span>PlotOri</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {isLoading ? (
            <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
          ) : isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="max-w-[120px] truncate">
                  {user?.firstName || user?.email || "User"}
                </span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md border shadow-lg py-1 z-50">
                  <div className="px-4 py-2 border-b border-border">
                    <p className="text-sm font-medium text-foreground truncate">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {user?.email}
                    </p>
                  </div>
                  <a
                    href="/bio"
                    onClick={(e) => { e.preventDefault(); setLocation("/bio"); setIsProfileOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-muted flex items-center gap-2 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    My Dashboard
                  </a>
                  <button
                    onClick={() => { logout(); setIsProfileOpen(false); }}
                    className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-destructive/5 flex items-center gap-2 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                onClick={() => setLocation("/auth")}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                <LogIn className="w-4 h-4 mr-1" />
                Sign In
              </Button>
              <Link href="/challanges">
                <Button
                  variant="default"
                  className="font-sans font-semibold tracking-wide bg-amber-500 hover:bg-amber-600 text-white"
                >
                  Start Writing
                </Button>
              </Link>
            </div>
          )}
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {isAuthenticated ? (
              <div className="border-t pt-3 mt-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {user?.firstName || user?.email || "User"}
                  </span>
                </div>
                <button
                  onClick={() => { setLocation("/bio"); setIsMobileMenuOpen(false); }}
                  className="w-full text-left text-sm text-foreground hover:text-primary flex items-center gap-2 py-2"
                >
                  <User className="w-4 h-4" />
                  My Dashboard
                </button>
                <button
                  onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                  className="w-full text-left text-sm text-destructive flex items-center gap-2 py-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => { login(); setIsMobileMenuOpen(false); }}
                className="w-full text-left text-sm font-medium text-foreground hover:text-primary flex items-center gap-2 py-2"
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            )}

            <Link href="/draft" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                variant="default"
                className="w-full font-sans font-semibold tracking-wide bg-amber-500 hover:bg-amber-600 text-white"
              >
                Start Writing
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export { Navbar };