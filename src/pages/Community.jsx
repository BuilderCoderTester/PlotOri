import { motion } from "framer-motion";
import { Calendar, Trophy, ArrowRight, MessageSquare, Edit, Archive, Star, BookOpen, UserCheck, Activity, Lightbulb, Zap, FileText, CheckCircle, ShieldAlert, BookType } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function Community() {
  const workflow = [
    { day: "Sunday", title: "Voting", desc: "Community votes on the canonical text and format for the week.", icon: <MessageSquare className="w-6 h-6" /> },
    { day: "Monday", title: "Prompt Announcement", desc: "The official weekly prompt is published. Research begins.", icon: <Calendar className="w-6 h-6" /> },
    { day: "Tue - Fri", title: "Drafting & Review", desc: "Intense writing period combined with mandatory anonymous peer review.", icon: <Edit className="w-6 h-6" /> },
    { day: "Saturday", title: "Showcase", desc: "Top pieces are highlighted. The archive is updated. Winners receive badges.", icon: <Archive className="w-6 h-6" /> }
  ];
  const achievementBadges = [
    { name: "Master Stylist", icon: <Star className="w-6 h-6 text-yellow-500" />, desc: "Awarded for stylistic excellence across 3+ submissions", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Close Reader", icon: <BookOpen className="w-6 h-6 text-[hsl(158,50%,28%)]" />, desc: "Earned for submissions scoring 5/5 on Textual Intelligence", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Peer Mentor", icon: <UserCheck className="w-6 h-6 text-emerald-500" />, desc: "Given for providing 10 high-quality peer reviews", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Master Storyteller", icon: <Activity className="w-6 h-6 text-purple-500" />, desc: "4 weeks of consistent participation in challenges", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Brave Rewriter", icon: <Zap className="w-6 h-6 text-orange-500" />, desc: "Taking bold creative risks rated highly by peers", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Creative Thinker", icon: <Lightbulb className="w-6 h-6 text-cyan-500" />, desc: "Voted Most Creative Plot Twist in a weekly showcase", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Dialogue Master", icon: <MessageSquare className="w-6 h-6 text-rose-500" />, desc: "Achieved a 5/5 score purely on Character Fidelity", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" },
    { name: "Story Weaver", icon: <FileText className="w-6 h-6 text-indigo-500" />, desc: "Completing all 7 creative format types on the platform", color: "bg-[hsl(158,30%,90%)] border-[hsl(158,30%,80%)]" }
  ];
  const adminTasks = [
    "Maintain platform standards",
    "Enforce submission guidelines",
    "Oversee peer review",
    "Resolve disputes",
    "Protect authorship integrity",
    "Monitor plagiarism and AI detection",
    "Curate featured works",
    "Organize thematic events and challenges",
    "Ensure respectful discourse"
  ];
  return <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">The Weekly Rhythm</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Writing shouldn't be solitary. PlotOri operates on a structured weekly heartbeat 
            that turns literary creation into a communal event.
          </p>
        </div>

        {
    /* Workflow Timeline */
  }
        <div className="relative mb-24 max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[hsl(158,30%,80%)] transform md:-translate-x-1/2" />
          
          <div className="space-y-12 relative z-10">
            {workflow.map((step, idx) => <div key={idx} className={`flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:w-1/2" />
                <div className="absolute left-8 md:left-1/2 w-12 h-12 rounded-full bg-[hsl(158,50%,28%)] text-white flex items-center justify-center border-4 border-slate-50 transform -translate-x-1/2 shadow-md">
                  {step.icon}
                </div>
                <div className={`md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"} pt-2 md:pt-0`}>
                  <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <span className="text-sm font-bold text-[hsl(158,50%,28%)] uppercase tracking-wider mb-2 block">{step.day}</span>
                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>)}
          </div>
        </div>

        {
    /* Leaderboard Preview */
  }
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2 flex items-center gap-3">
                <Trophy className="text-amber-500 w-8 h-8" />
                Current Leaders
              </h2>
              <p className="text-slate-600">Top contributors based on peer-reviewed rubric scores.</p>
            </div>
            <button className="mt-4 md:mt-0 text-[hsl(158,50%,28%)] font-medium flex items-center gap-2 hover:text-[hsl(158,50%,22%)] transition-colors">
              View Full Archive <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="pb-4 font-semibold text-slate-500 w-16">Rank</th>
                  <th className="pb-4 font-semibold text-slate-500">Author Alias</th>
                  <th className="pb-4 font-semibold text-slate-500">Latest Masterpiece</th>
                  <th className="pb-4 font-semibold text-slate-500 text-right">Rubric Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
    { rank: 1, name: "InkAndIron", piece: "The Creature's Soliloquy (Frankenstein)", score: "4.9/5" },
    { rank: 2, name: "GatsbyGhost", piece: "If Myrtle Swerved", score: "4.8/5" },
    { rank: 3, name: "MacbethsDagger", piece: "Banquo's Warning", score: "4.7/5" },
    { rank: 4, name: "AustenEcho", piece: "Mr. Darcy's Letter Unsent", score: "4.6/5" }
  ].map((row) => <tr key={row.rank} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 font-bold text-slate-900">#{row.rank}</td>
                    <td className="py-4 font-medium text-[hsl(158,50%,28%)]">{row.name}</td>
                    <td className="py-4 text-slate-600 italic">{row.piece}</td>
                    <td className="py-4 text-right font-bold text-slate-900">{row.score}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>

        {
    /* Badge & Achievement System */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Badge & Achievement System</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Earn recognition for your specific literary strengths and community contributions.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementBadges.map((badge, idx) => <div key={idx} className={`p-6 rounded-2xl border shadow-sm flex flex-col items-center text-center ${badge.color}`}>
                <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                  {badge.icon}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{badge.name}</h3>
                <p className="text-sm text-slate-600">{badge.desc}</p>
              </div>)}
          </div>
        </motion.div>

        {
    /* Admin Responsibilities */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/3">
                <ShieldAlert className="w-12 h-12 text-[hsl(158,50%,28%)] mb-6" />
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Admin Oversight</h2>
                <p className="text-slate-600">The community is supported by a dedicated admin team ensuring a safe, rigorous, and respectful academic environment.</p>
              </div>
              <div className="md:w-2/3 w-full">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {adminTasks.map((task, idx) => <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[hsl(158,50%,28%)] shrink-0" />
                      <span className="text-slate-700 font-medium">{task}</span>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {
    /* Annual E-Anthology Banner */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[hsl(158,50%,18%)] rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
  >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
          
          <div className="md:w-2/3 relative z-10">
            <div className="inline-block px-4 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 text-sm font-bold uppercase tracking-wider mb-6">
              End of Year Release
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">Annual E-Anthology</h2>
            <p className="text-xl text-[hsl(158,20%,90%)] mb-8 max-w-xl font-light">
              A curated digital publication featuring the most profound, creative, and highly-rated student interventions from the entire academic year.
            </p>
            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-[hsl(158,20%,90%)]"><CheckCircle className="w-5 h-5 text-amber-400" /> Foreword by faculty</li>
              <li className="flex items-center gap-2 text-[hsl(158,20%,90%)]"><CheckCircle className="w-5 h-5 text-amber-400" /> Top selections across all 7 formats</li>
              <li className="flex items-center gap-2 text-[hsl(158,20%,90%)]"><CheckCircle className="w-5 h-5 text-amber-400" /> Beautifully formatted PDF/EPUB export</li>
            </ul>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-6 rounded-full text-lg shadow-lg">
              Pre-order Current Volume
            </Button>
          </div>
          
          <div className="md:w-1/3 flex justify-center relative z-10">
            <div className="w-64 h-80 bg-[hsl(158,50%,14%)] rounded-lg shadow-2xl border border-[hsl(158,50%,22%)]/50 flex flex-col items-center justify-center p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[hsl(158,50%,10%)]/50 shadow-[1px_0_0_rgba(255,255,255,0.1)]" />
              <BookType className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="font-serif font-bold text-2xl text-center text-white mb-2">PlotOri Vol. IV</h3>
              <p className="text-[hsl(158,30%,80%)] text-center font-serif italic text-sm">Selected Student Interventions</p>
              <div className="mt-auto pt-6 border-t border-[hsl(158,50%,22%)]/50 w-full text-center">
                <span className="text-xs text-[hsl(158,40%,60%)] uppercase tracking-widest font-bold">2024-2025</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>;
}
export {
  Community as default
};
