import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, PenTool, Users, ArrowRight, Library, Feather, Quote, Flame, GitBranch, Clock, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";
import featuresBg from "@/assets/features-bg.png";

function Home() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0d2b1f]/85 mix-blend-multiply z-10" />
          <img src={heroBg} alt="Library Digital Humanities Hero" className="w-full h-full object-cover object-center opacity-80" />
        </div>
        <div className="container relative z-20 px-4 mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Library className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-medium text-[hsl(158,20%,96%)] tracking-wide uppercase">The Living Archive</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Literature is Not a Monument.<br />
              <span className="text-amber-500 italic">It's a Conversation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[hsl(158,20%,90%)] mb-10 leading-relaxed font-light drop-shadow-md max-w-2xl mx-auto">
              Transform from a passive reader into an active literary creator. Reimagine endings, explore counterfactuals, and converse with the canon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/challenges">
                <Button size="lg" className="bg-white text-[hsl(158,50%,18%)] hover:bg-[hsl(158,20%,96%)] text-lg px-8 h-14 rounded-full font-semibold shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Begin Drafting
                </Button>
              </Link>
              <Link href="/community">
                <Button size="lg" variant="outline" className="border-white/30 bg-black/20 backdrop-blur-md text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full font-semibold">
                  Explore The Archive
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Live Weekly Challenge */}
      <section className="py-16 bg-[#faf7f2]">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-medium text-[#25997f] uppercase tracking-wide">Live Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a]">This Week's Challenge</h2>
            </div>
            <Link href="/challenges">
              <Button variant="outline" className="border-[#25997f] text-[#25997f] hover:bg-[#25997f] hover:text-white rounded-full px-6">
                View All Challenges
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Active Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-2 border-emerald-200 shadow-md overflow-hidden h-full">
                <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-semibold text-emerald-800">Week 1 — Active</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-600">
                    <Clock className="w-3.5 h-3.5" />
                    3 days left
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <GitBranch className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] text-lg">Alternative Endings</h3>
                      <p className="text-xs text-[#6b6b6b]">Rewrite how the story concludes</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                    Choose a canonical text and rewrite its conclusion. Respect the tone, logic, and emotional shape of the original work. What if a key character made a different choice at the climax?
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#6b6b6b] mb-5">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />124 participants</span>
                    <span className="flex items-center gap-1"><PenTool className="w-3.5 h-3.5" />500–1500 words</span>
                  </div>
                  <Link href="/draft">
                    <Button className="bg-[#25997f] hover:bg-[#1e8570] text-white rounded-full w-full" onClick={() => setLocation("/draft")}>
                      Participate Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Challenge Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white border border-[#e8e2d9] shadow-sm opacity-80 h-full">
                <div className="bg-amber-50 px-6 py-4 border-b border-amber-100 flex items-center justify-between">
                  <span className="text-sm font-semibold text-amber-800">Week 2 — Upcoming</span>
                  <span className="text-xs text-amber-600">Starts in 4 days</span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Users className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a] text-lg">Counterfactual Writing</h3>
                      <p className="text-xs text-[#6b6b6b]">What if a key event never happened?</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b6b6b] leading-relaxed mb-4">
                    Explore missed encounters, delayed confessions, or reversed decisions that would have changed everything. Ask a pivotal "what if" question and follow its consequences.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#6b6b6b] mb-5">
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />89 pre-registered</span>
                    <span className="flex items-center gap-1"><PenTool className="w-3.5 h-3.5" />800–2000 words</span>
                  </div>
                  <Button variant="outline" className="w-full border-[#e8e2d9] text-[#6b6b6b] rounded-full" disabled>
                    Starts Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              A Scholarship of Imagination
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              PlotOri sits at the intersection of rigorous academic analysis and creative writing. We believe that to truly understand a text, you must dismantle it, question its boundaries, and rebuild it from within.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-none shadow-lg bg-[hsl(158,20%,96%)] hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 px-6 pb-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center mb-6 text-[hsl(158,50%,28%)]">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">Deep Reading</h3>
                  <p className="text-slate-600">Analyze the invisible mechanics of classic texts to understand how narratives manipulate time, space, and perspective.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-none shadow-lg bg-[hsl(158,20%,96%)] hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 px-6 pb-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center mb-6 text-[hsl(158,50%,28%)]">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">Creative Revision</h3>
                  <p className="text-slate-600">Rewrite character arcs, invent counterfactual historical scenarios, and draft scenes the author left unwritten.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-none shadow-lg bg-[hsl(158,20%,96%)] hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 px-6 pb-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[hsl(158,30%,90%)] flex items-center justify-center mb-6 text-[hsl(158,50%,28%)]">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">Peer Dialogue</h3>
                  <p className="text-slate-600">Engage in rigorous, anonymous peer-critique using our 5-part evaluation rubric focused on stylistic craft and character fidelity.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* By The Numbers Section */}
      <section className="py-16 bg-[hsl(158,50%,22%)]">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[hsl(158,40%,40%)]/50">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">7</div>
              <div className="text-[hsl(158,20%,90%)] font-medium tracking-wide">Creative Formats</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">17+</div>
              <div className="text-[hsl(158,20%,90%)] font-medium tracking-wide">Canonical Texts</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5-Part</div>
              <div className="text-[hsl(158,20%,90%)] font-medium tracking-wide">Rubric</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center px-4"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">Weekly</div>
              <div className="text-[hsl(158,20%,90%)] font-medium tracking-wide">Community Prompts</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[hsl(38,40%,95%)]">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">Student Voices</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Hear how PlotOri is transforming the way literature is experienced in the classroom.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-100 shadow-sm bg-slate-50 relative pt-6">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-500 opacity-20" />
                <CardContent className="p-8">
                  <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                    "Rewriting Iago's monologue taught me more about his psychology than any essay I wrote."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(158,30%,80%)] text-[hsl(158,50%,22%)] flex items-center justify-center font-bold">A</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Ananya S.</h4>
                      <p className="text-sm text-slate-500">Class 11</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full border-slate-100 shadow-sm bg-slate-50 relative pt-6">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-500 opacity-20" />
                <CardContent className="p-8">
                  <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                    "The anonymous peer review gave me honest feedback I never got in a normal classroom."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(158,30%,80%)] text-[hsl(158,50%,22%)] flex items-center justify-center font-bold">R</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Rohan M.</h4>
                      <p className="text-sm text-slate-500">Class 9</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-slate-100 shadow-sm bg-slate-50 relative pt-6">
                <Quote className="absolute top-4 right-4 w-10 h-10 text-amber-500 opacity-20" />
                <CardContent className="p-8">
                  <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">
                    "Miss Havisham finally got to tell her own story. It was the best thing I have ever written."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[hsl(158,30%,80%)] text-[hsl(158,50%,22%)] flex items-center justify-center font-bold">P</div>
                    <div>
                      <h4 className="font-bold text-slate-900">Priya D.</h4>
                      <p className="text-sm text-slate-500">Class 12</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="container px-4 mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                Seven Ways to Intervene
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From Alternative Endings to Minor Character Expansion, PlotOri provides structured creative activities that demand both rigorous textual intelligence and daring creative originality.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Villain Revisions — Antagonists speak for themselves",
                  "Missing Scenes — Write what the author implied",
                  "Intertextual Meetings — Characters across centuries converse",
                  "Counterfactuals — What if the tragedy never happened?"
                ].map((item, i) => <li key={i} className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 rounded-full bg-[hsl(158,50%,28%)]" />
                    <span className="font-medium">{item}</span>
                  </li>)}
              </ul>
              
              <Link href="/features">
                <Button className="bg-[hsl(158,50%,28%)] hover:bg-[hsl(158,50%,23%)] text-white rounded-full px-6 h-12 flex items-center gap-2 group shadow-md hover:shadow-lg transition-all">
                  Explore All Formats
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 w-full relative">
              <div className="absolute inset-0 bg-[hsl(158,50%,28%)] rounded-2xl transform translate-x-4 translate-y-4 opacity-10" />
              <img
                src={featuresBg}
                alt="Digital Book Features"
                className="relative z-10 rounded-2xl shadow-2xl object-cover aspect-square w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[hsl(158,45%,18%)] text-white text-center">
        <div className="container px-4 mx-auto max-w-4xl">
          <Feather className="w-12 h-12 mx-auto mb-6 text-amber-500 opacity-80" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Ready to Rewrite the Canon?</h2>
          <p className="text-xl text-[hsl(158,20%,90%)] mb-10 font-light">
            Join thousands of students and scholars in the Student Zone. Earn badges, participate in weekly prompts, and elevate your analytical writing.
          </p>
          <Link href="/challenges">
            <Button size="lg" className="bg-white text-[hsl(158,50%,18%)] hover:bg-[hsl(158,20%,96%)] text-lg px-8 h-14 rounded-full font-semibold shadow-xl">
              Enter the Student Zone
            </Button>
          </Link>
        </div>
      </section>
    </div>;
}

export { Home as default };