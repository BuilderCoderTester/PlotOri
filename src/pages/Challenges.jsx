import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Trophy, Clock, Users, ArrowRight, Flame,
  GitBranch, Shuffle, UserRound, PenTool, Calendar, CheckCircle2,
} from "lucide-react";

const WEEKLY_CHALLENGES = [
  {
    id: "week-1",
    week: "Week 1",
    title: "Alternative Endings",
    tagline: "Rewrite how the story concludes",
    description: "Choose a canonical text and rewrite its conclusion. Respect the tone, logic, and emotional shape of the original work.",
    icon: GitBranch,
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    participants: 124,
    daysLeft: 3,
    wordCount: "500–1500",
    prompt: "What if a key character made a different choice at the climax?",
    example: "Othello, Jane Eyre, Great Expectations",
    active: true,
  },
  {
    id: "week-2",
    week: "Week 2",
    title: "Counterfactual Writing",
    tagline: "What if a key event never happened?",
    description: "Explore missed encounters, delayed confessions, or reversed decisions that would have changed everything.",
    icon: Shuffle,
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200",
    participants: 89,
    daysLeft: 10,
    wordCount: "800–2000",
    prompt: "Ask a pivotal 'what if' question and follow its consequences.",
    example: "Macbeth, Pride & Prejudice, Romeo & Juliet",
    active: true,
  },
  {
    id: "week-3",
    week: "Week 3",
    title: "Villain Revision",
    tagline: "Give the antagonist a voice",
    description: "Rewrite an antagonist from their own perspective — revealing inner conflict, social pressure, and hidden complexity.",
    icon: UserRound,
    color: "bg-violet-50",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    participants: 0,
    daysLeft: 17,
    wordCount: "600–1800",
    prompt: "Choose a villain and narrate a key scene from their point of view.",
    example: "Miss Havisham, Iago, Bertha Mason",
    active: false,
  },
];

const PAST_CHALLENGES = [
  { week: "Week 52", title: "Minor Character Expansion", participants: 203, winner: "Sarah M.", color: "bg-slate-50", borderColor: "border-slate-200" },
  { week: "Week 51", title: "Temporal Transposition", participants: 178, winner: "James L.", color: "bg-slate-50", borderColor: "border-slate-200" },
  { week: "Week 50", title: "Intertextual Meeting", participants: 156, winner: "Priya K.", color: "bg-slate-50", borderColor: "border-slate-200" },
];

function Challenges() {
  const [_, setLocation] = useLocation();
  const [joinedChallenges, setJoinedChallenges] = useState(() => {
    try { return JSON.parse(localStorage.getItem("plotori_joined_challenges") || "[]"); } catch { return []; }
  });

  const handleParticipate = (challenge) => {
    const joined = [...joinedChallenges, challenge.id];
    setJoinedChallenges(joined);
    localStorage.setItem("plotori_joined_challenges", JSON.stringify(joined));
    localStorage.setItem("plotori_active_challenge", JSON.stringify(challenge));
    setLocation("/draft");
  };

  const isJoined = (id) => joinedChallenges.includes(id);

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Header */}
      <div className="bg-emerald-700 text-white">
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
            <Flame className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium">Weekly Writing Challenges</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            This Week's Challenge
          </h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Join a weekly challenge, write your intervention, and compete with fellow scholars.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Active Challenges */}
        <div className="space-y-6">
          <h2 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Active Challenges
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WEEKLY_CHALLENGES.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`border-2 ${challenge.active ? `${challenge.borderColor} shadow-sm` : "border-slate-200 opacity-70"} overflow-hidden`}>
                  <CardContent className="p-0">
                    <div className={`${challenge.color} px-5 py-4 border-b ${challenge.borderColor}`}>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs font-medium bg-white">{challenge.week}</Badge>
                        {challenge.active ? (
                          <div className="flex items-center gap-1 text-xs text-amber-600 font-medium">
                            <Flame className="w-3.5 h-3.5" />{challenge.daysLeft} days left
                          </div>
                        ) : (
                          <div className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="w-3.5 h-3.5" />Starts in {challenge.daysLeft} days
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-10 h-10 rounded-lg ${challenge.color} flex items-center justify-center shrink-0`}>
                          <challenge.icon className={`w-5 h-5 ${challenge.iconColor}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground text-base">{challenge.title}</h3>
                          <p className="text-xs text-muted-foreground">{challenge.tagline}</p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{challenge.description}</p>

                      <div className="bg-muted rounded-lg p-3 mb-4">
                        <p className="text-xs font-semibold text-foreground mb-1">Prompt:</p>
                        <p className="text-xs text-muted-foreground">{challenge.prompt}</p>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{challenge.participants} participants</span>
                        <span className="flex items-center gap-1"><PenTool className="w-3.5 h-3.5" />{challenge.wordCount} words</span>
                      </div>

                      {isJoined(challenge.id) ? (
                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white" onClick={() => { localStorage.setItem("plotori_active_challenge", JSON.stringify(challenge)); setLocation("/draft"); }}>
                          <CheckCircle2 className="w-4 h-4 mr-2" />Continue Writing
                        </Button>
                      ) : (
                        <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white" onClick={() => handleParticipate(challenge)} disabled={!challenge.active}>
                          {challenge.active ? <>Participate<ArrowRight className="w-4 h-4 ml-2" /></> : "Starts Soon"}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Challenges */}
        <div className="mt-12">
          <h2 className="text-xl font-serif font-bold text-foreground flex items-center gap-2 mb-5">
            <Trophy className="w-5 h-5 text-amber-500" />
            Past Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {PAST_CHALLENGES.map((c, i) => (
              <motion.div key={c.week} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                <Card className={`${c.color} border ${c.borderColor}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">{c.week}</Badge>
                      <Trophy className="w-4 h-4 text-amber-500" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{c.title}</h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{c.participants}</span>
                      <span className="text-amber-600 font-medium">Winner: {c.winner}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Challenges;