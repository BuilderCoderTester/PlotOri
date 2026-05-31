// import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { useEffect } from "react";
import {
  Pencil,
  ClipboardCheck,
  Languages,
  BookOpen,
  Archive,
  Trophy,
  Star,
  Clock,
  ArrowRight,
  Flame,
  BarChart3,
  FileText,
  Globe,
  Bookmark
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Bio() {
  // const { user, isLoading, isAuthenticated } = useAuth();
  const user = {
    firstName: "Anurag",
    lastName: "Sarkar",
    email: "anurag@example.com",
  };
  
  const isLoading = false;
  const isAuthenticated = true;
  const [location, setLocation] = useLocation();

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     setLocation("/bio");
  //   }
  // }, [isLoading, isAuthenticated, setLocation]);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  // if (!isAuthenticated) {
  //   return null;
  // }
  const stats = [
    { label: "Drafts", value: "12", icon: FileText },
    { label: "Submissions", value: "8", icon: Star },
    { label: "Achievements", value: "5", icon: Trophy },
    { label: "Study Streak", value: "7 days", icon: Flame },
  ];

  const sections = [
    {
      title: "Drafting Canvas",
      icon: Pencil,
      description: "Continue your creative rewrites. Pick up where you left off with your latest drafts.",
      action: "Open Canvas",
      href: "/draft",
      color: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Assessment Hub",
      icon: ClipboardCheck,
      description: "Track your assignments, peer reviews, and instructor feedback.",
      action: "View Assessments",
      href: "/student-zone",
      color: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Translate Into English",
      icon: Languages,
      description: "Translate your work or source texts into English with smart context-aware tools.",
      action: "Translate",
      href: "#",
      color: "bg-sky-50",
      iconColor: "text-sky-600",
    },
    {
      title: "Course Work",
      icon: BookOpen,
      description: "Log into your courses, view syllabi, and track your learning progress.",
      action: "My Courses",
      href: "#",
      color: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      title: "Archive",
      icon: Archive,
      description: "Browse your complete body of work — drafts, revisions, and published pieces.",
      action: "Browse Archive",
      href: "#",
      color: "bg-stone-50",
      iconColor: "text-stone-600",
    },
    {
      title: "Your Achievements",
      icon: Trophy,
      description: "Collect badges for milestones like first rewrite, peer review, and featured work.",
      action: "View Badges",
      href: "#",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      title: "Featured Submissions",
      icon: Star,
      description: "Your best work, curated and featured by the community or instructors.",
      action: "View Featured",
      href: "#",
      color: "bg-rose-50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Profile Header */}
      <div className="bg-primary text-foreground">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-3xl font-serif font-bold">
                {(user?.firstName?.[0] || user?.email?.[0] || "S").toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-black">
                {user?.firstName ? `${user.firstName} ${user.lastName || ""}` : "Student"}
              </h1>
              <p className="text-gray-700 text-sm mt-1">{user?.email}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <BarChart3 className="w-3.5 h-3.5" />
                  Level 3 Scholar
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  Member since 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="container mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-white border-0 shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Sections */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow group"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${section.color} flex items-center justify-center shrink-0`}>
                    <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm">{section.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {section.description}
                    </p>
                    <div className="mt-3">
                      <a
                        href={section.href}
                        onClick={(e) => {
                          if (section.href.startsWith("/")) {
                            e.preventDefault();
                            setLocation(section.href);
                          }
                        }}
                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        {section.action}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <Card className="bg-white border-0 shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {[
                  {
                    icon: Pencil,
                    text: "Drafted a new ending for \"Pride and Prejudice\"",
                    time: "2 hours ago",
                    color: "text-emerald-600",
                  },
                  {
                    icon: Star,
                    text: "\"The Great Gatsby — Alternate Chapter 7\" was featured",
                    time: "1 day ago",
                    color: "text-amber-600",
                  },
                  {
                    icon: Trophy,
                    text: "Earned the \"First Rewrite\" badge",
                    time: "3 days ago",
                    color: "text-yellow-600",
                  },
                  {
                    icon: Bookmark,
                    text: "Saved \"Frankenstein\" to your reading list",
                    time: "5 days ago",
                    color: "text-rose-600",
                  },
                ].map((activity, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{activity.text}</p>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Bio;