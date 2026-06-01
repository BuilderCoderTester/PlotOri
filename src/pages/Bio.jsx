import { useAuth } from "@/hooks/use-auth";
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
  Bookmark,
  GraduationCap,
  Calendar,
  CheckCircle2,
  MapPin,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Bio() {
  const { user, isLoading, isAuthenticated } = useAuth();
  const [_, setLocation] = useLocation();

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     setLocation("/");
  //   }
  // }, [isLoading, isAuthenticated, setLocation]);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#25997f] border-t-transparent animate-spin" />
      </div>
    );
  }

  // if (!isAuthenticated) {
  //   return null;
  // }

  const studentProfile = {
    class: "10",
    section: "A",
    school: "Kalyani Public School",
    board: "CBSE",
  };

  const classAssignments = [
    {
      id: 1,
      title: "Poetry Reinterpretation Challenge",
      teacher: "Mrs. Rina Mukherjee",
      startDate: "01 Jun 2026",
      endDate: "15 Jun 2026",
      status: "Active",
      color: "bg-emerald-50 border-emerald-200",
      badgeColor: "bg-emerald-100 text-emerald-700",
    },
    {
      id: 2,
      title: "Alternative Ending of Macbeth",
      teacher: "Mr. Souvik Das",
      startDate: "05 Jun 2026",
      endDate: "20 Jun 2026",
      status: "Active",
      color: "bg-amber-50 border-amber-200",
      badgeColor: "bg-amber-100 text-amber-700",
    },
  ];

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
      {/* Profile Header — forest green background */}
      <div className="bg-[#25997f] text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              {user?.profileImageUrl ? (
                <img
                  src={user.profileImageUrl}
                  alt={user.firstName || "User"}
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <User className="w-10 h-10 text-white" />
              )}
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-white">
                {user?.firstName ? `${user.firstName} ${user.lastName || ""}` : "Student"}
              </h1>
              <p className="text-white/80 text-sm mt-1">{user?.email}</p>
              <div className="flex items-center gap-4 mt-2 text-sm text-white/70">
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
            <Card key={stat.label} className="bg-white border border-[#e8e2d9] shadow-sm">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#25997f]/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#25997f]" />
                </div>
                <div>
                  <p className="text-xl font-bold text-[#1a1a1a]">{stat.value}</p>
                  <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Student Profile + Assignments */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-5">
          {/* Student Info */}
          <Card className="bg-white border border-[#e8e2d9] shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2 text-[#1a1a1a]">
                <GraduationCap className="w-4 h-4 text-[#25997f]" />
                Student Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm pt-0">
              <div className="flex justify-between">
                <span className="text-[#6b6b6b]">Class</span>
                <span className="font-medium text-[#1a1a1a]">{studentProfile.class}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b6b6b]">Section</span>
                <span className="font-medium text-[#1a1a1a]">{studentProfile.section}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6b6b6b]">Board</span>
                <span className="font-medium text-[#1a1a1a]">{studentProfile.board}</span>
              </div>
              <div className="pt-1 border-t border-[#e8e2d9]">
                <p className="text-[#6b6b6b] mb-1">School</p>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#25997f]" />
                  <span className="font-medium text-[#1a1a1a]">{studentProfile.school}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class Assignments */}
          <Card className="bg-white border border-[#e8e2d9] shadow-sm lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2 text-[#1a1a1a]">
                <ClipboardCheck className="w-4 h-4 text-[#25997f]" />
                Class {studentProfile.class} Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {classAssignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className={`border rounded-xl p-4 ${assignment.color}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-[#1a1a1a] text-sm">
                        {assignment.title}
                      </h3>
                      <p className="text-xs text-[#6b6b6b] mt-0.5">
                        Assigned by {assignment.teacher}
                      </p>
                    </div>
                    <Badge className={`text-xs ${assignment.badgeColor}`}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <div className="flex gap-6 mt-3 text-xs text-[#6b6b6b]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Start: {assignment.startDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      End: {assignment.endDate}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="mt-3 bg-[#d4a574] hover:bg-[#c49a6c] text-white"
                    onClick={() => setLocation("/draft")}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                    Open Assignment
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Sections */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sections.map((section) => (
            <Card
              key={section.title}
              className="bg-white border border-[#e8e2d9] shadow-sm hover:shadow-md transition-shadow group"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`w-11 h-11 rounded-xl ${section.color} flex items-center justify-center shrink-0`}>
                    <section.icon className={`w-5 h-5 ${section.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#1a1a1a] text-sm">{section.title}</h3>
                    <p className="text-xs text-[#6b6b6b] mt-1 leading-relaxed">
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
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#25997f] hover:text-[#1e8570] transition-colors"
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
          <Card className="bg-white border border-[#e8e2d9] shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold flex items-center gap-2 text-[#1a1a1a]">
                <Clock className="w-4 h-4 text-[#25997f]" />
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
                    className="flex items-center gap-3 py-2 border-b border-[#e8e2d9]/50 last:border-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f0ebe3] flex items-center justify-center shrink-0">
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-[#1a1a1a]">{activity.text}</p>
                    </div>
                    <span className="text-xs text-[#6b6b6b] shrink-0">{activity.time}</span>
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