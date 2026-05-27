import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, Globe, Edit3, Heart, Lightbulb, HelpCircle, ToggleLeft, Activity, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
function StudentZone() {
  const badges = [
    "Master Stylist",
    "Close Reader",
    "Peer Mentor",
    "Master Storyteller",
    "Brave Rewriter",
    "Creative Thinker",
    "Dialogue Master",
    "Story Weaver"
  ];
  return <div className="py-20 bg-white min-h-screen">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 border-green-200 text-[hsl(158,50%,26%)] bg-[hsl(158,20%,94%)] px-4 py-1 text-sm rounded-full">For Students & Teachers</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">The Student Zone</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A dedicated workspace designed for rigorous academic creativity. 
            Draft, review, and evaluate with purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Master Toolset</h2>
            <p className="text-lg text-slate-600 mb-8">
              Equip yourself with literary devices as Superpowers. Our drafting canvas includes embedded tools to help you analyze syntax, manage tone, and ensure character fidelity as you write.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center text-[hsl(158,50%,28%)]">
                  <Edit3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Drafting Canvas</h4>
                  <p className="text-slate-600">A distraction-free writing environment built for literary imitation and structural analysis.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center text-[hsl(158,50%,28%)]">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Anonymous Peer-Critique</h4>
                  <p className="text-slate-600">Give and receive honest, constructive feedback protected by our academic anonymity protocols.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1 w-10 h-10 shrink-0 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center text-[hsl(158,50%,28%)]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Multi-Lingual Adaptation</h4>
                  <p className="text-slate-600">Write across languages. Translate idiom and cultural context while maintaining thematic resonance.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-inner">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">Evaluation Rubric</h3>
            <div className="space-y-4">
              {[
    { name: "Character Fidelity", desc: "Does the character sound and act like the original?" },
    { name: "Textual Intelligence", desc: "Are themes and motifs recognized and deployed?" },
    { name: "Creative Originality", desc: "Is the intervention bold and unexpected?" },
    { name: "Stylistic Craft", desc: "Is the prose polished and tonally appropriate?" },
    { name: "Interpretive Insight", desc: "Does the piece reveal something new about the source text?" }
  ].map((rubric, i) => <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[hsl(158,50%,22%)]">{rubric.name}</span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => <div key={star} className="w-2 h-2 rounded-full bg-[hsl(158,30%,80%)]" />)}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{rubric.desc}</p>
                </div>)}
            </div>
          </div>
        </div>

        <div className="bg-[hsl(158,50%,18%)] rounded-3xl p-12 text-center text-white overflow-hidden relative mb-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="relative z-10">
            <Award className="w-16 h-16 mx-auto mb-6 text-[hsl(158,30%,80%)]" />
            <h2 className="text-4xl font-serif font-bold mb-6">Creative Writing Badges</h2>
            <p className="text-xl text-[hsl(158,20%,90%)] mb-10 max-w-2xl mx-auto font-light">
              Earn recognition for your specific strengths. Whether you're a master of dialogue or a meticulous close reader, build a portfolio of academic creativity.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {badges.map((badge) => <div key={badge} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white font-medium shadow-sm hover:bg-white/20 transition-colors cursor-default">
                  {badge}
                </div>)}
            </div>
          </div>
        </div>

        {
    /* Student Progression Levels */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Student Progression Levels</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Writing tasks scaled appropriately for different stages of academic development.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardContent className="p-8">
                <Badge className="bg-[hsl(158,30%,90%)] text-[hsl(158,50%,28%)] hover:bg-[hsl(158,30%,80%)] border-none mb-6">Junior</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Classes 5–7</h3>
                <p className="text-slate-500 mb-6">Foundational imaginative interventions</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,28%)] shrink-0 mt-0.5" /> Imagination-driven scenarios</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,28%)] shrink-0 mt-0.5" /> Simple plot changes</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,28%)] shrink-0 mt-0.5" /> Character feeling explorations</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,28%)] shrink-0 mt-0.5" /> Short scene additions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardContent className="p-8">
                <Badge className="bg-[hsl(158,25%,85%)] text-[hsl(158,50%,22%)] hover:bg-[hsl(158,25%,75%)] border-none mb-6">Middle</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Classes 8–10</h3>
                <p className="text-slate-500 mb-6">Structural and stylistic manipulations</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,22%)] shrink-0 mt-0.5" /> Dialogue crafting and nuance</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,22%)] shrink-0 mt-0.5" /> Alternative endings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,22%)] shrink-0 mt-0.5" /> Point-of-view shifts</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,22%)] shrink-0 mt-0.5" /> Navigating moral conflicts</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow h-full">
              <CardContent className="p-8">
                <Badge className="bg-[hsl(158,50%,18%)] text-white hover:bg-[hsl(158,50%,14%)] border-none mb-6">Senior</Badge>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Classes 11–12</h3>
                <p className="text-slate-500 mb-6">Rigorous textual intelligence</p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,18%)] shrink-0 mt-0.5" /> Complex narrative rewrites</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,18%)] shrink-0 mt-0.5" /> Intertextual meetings</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,18%)] shrink-0 mt-0.5" /> Thematic reflection & critique</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-[hsl(158,50%,18%)] shrink-0 mt-0.5" /> Exacting voice emulation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {
    /* The Classroom Weekly Workflow */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Classroom Weekly Workflow</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">A structured rhythm designed for deep literary engagement over five days.</p>
            </div>
            
            <div className="relative border-l-2 border-[hsl(158,30%,80%)] pl-8 ml-4 md:ml-12 space-y-10">
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-[hsl(158,40%,40%)] border-4 border-slate-50 shadow-sm" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Monday (Day): The Mission</h3>
                <p className="text-slate-600">The teacher pushes a new StoryLab Mission to the class dashboard, introducing the target canonical text and the specific format challenge.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-[hsl(158,40%,50%)] border-4 border-slate-50 shadow-sm" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Monday (Night): The Reading</h3>
                <p className="text-slate-600">Students read the original text, analyze the excerpt, and begin brainstorming their interventions.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-[hsl(158,50%,28%)] border-4 border-slate-50 shadow-sm" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tuesday–Wednesday: The Lab</h3>
                <p className="text-slate-600">Students use the Drafting Canvas to write their scenes, utilizing built-in tools for style checking and format compliance.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-[hsl(158,50%,22%)] border-4 border-slate-50 shadow-sm" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Thursday: Peer Review</h3>
                <p className="text-slate-600">Anonymous structured feedback and voting begins. Every student evaluates their peers' works using the 5-point rubric.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-11 w-6 h-6 rounded-full bg-amber-500 border-4 border-slate-50 shadow-sm" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Friday: The Showcase</h3>
                <p className="text-slate-600">The teacher reveals the top stories. Standout works are discussed and added to the prestigious Class Hall of Fame.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {
    /* Positive Peer Review Template */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="bg-amber-50 rounded-3xl p-10 md:p-14 border border-amber-200 shadow-sm">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Positive Peer Review Template</h2>
                <p className="text-lg text-slate-600 mb-6">Feedback on PlotOri is highly structured to remain constructive, academic, and encouraging.</p>
                <div className="w-16 h-1 bg-amber-500 rounded-full" />
              </div>
              <div className="md:w-2/3 w-full">
                <Card className="border-none shadow-md bg-white">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center text-[hsl(158,50%,28%)]">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">1. One thing you captured well</h4>
                        <p className="text-slate-600 italic mt-1">"You perfectly captured Iago's cynical tone when he referred to the promotion."</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-100" />
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                        <Lightbulb className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">2. One creative suggestion</h4>
                        <p className="text-slate-600 italic mt-1">"To make the scene more intense, maybe add more physical stage directions detailing his anger."</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-slate-100" />
                    <div className="flex gap-4">
                      <div className="mt-1 w-8 h-8 shrink-0 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">3. One analytical question</h4>
                        <p className="text-slate-600 italic mt-1">"Why did you choose to have him speak in prose rather than verse in this particular moment?"</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>

        {
    /* The Teacher's Hub */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">The Teacher's Hub</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Powerful administrative controls to guide the classroom literary experience.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[hsl(158,50%,28%)] transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[hsl(158,30%,90%)] text-[hsl(158,50%,28%)] flex items-center justify-center mb-6 group-hover:bg-[hsl(158,50%,28%)] group-hover:text-white transition-colors">
                <ToggleLeft className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Anonymous Critique Toggle</h3>
              <p className="text-slate-600">Instantly toggle anonymity on or off for the entire classroom to ensure a safe, unbiased environment for peer reviews.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[hsl(158,50%,28%)] transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[hsl(158,30%,90%)] text-[hsl(158,50%,28%)] flex items-center justify-center mb-6 group-hover:bg-[hsl(158,50%,28%)] group-hover:text-white transition-colors">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Assessment Hub</h3>
              <p className="text-slate-600">Access comprehensive Student Writing Portfolios. Track each student's stylistic evolution, rubric scores, and participation over the term.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[hsl(158,50%,28%)] transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[hsl(158,30%,90%)] text-[hsl(158,50%,28%)] flex items-center justify-center mb-6 group-hover:bg-[hsl(158,50%,28%)] group-hover:text-white transition-colors">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Class Hall of Fame</h3>
              <p className="text-slate-600">Showcase top stories on the class dashboard with custom category awards like 'Most Faithful to Original Style' or 'Most Creative Plot Twist'.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>;
}
export {
  StudentZone as default
};
