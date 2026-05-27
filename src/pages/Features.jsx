import { motion } from "framer-motion";
import { Link } from "wouter";
import { BookOpen, AlertCircle, FileQuestion, Users, Clock, EyeOff, UserPlus, ArrowRight, Play, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Alternative Endings",
    description: "Rewrite how canonical stories conclude by altering the final trajectory of the narrative. This format asks writers to consider the structural necessity of tragedies and comedies. Does Gatsby survive the pool? Does Juliet leave Tom?",
    example: {
      original: "Romeo takes the poison, believing Juliet to be dead.",
      prompt: "Rewrite the final tomb scene where Romeo discovers the plot just before drinking the poison.",
      rewrite: "He paused, the vial cool against his palm, as a subtle shift in her breathing shattered the silence of the crypt."
    }
  },
  {
    icon: <FileQuestion className="w-6 h-6" />,
    title: "Counterfactual Writing",
    description: "Explore the 'what if' scenarios of key plot moments. By changing a single, seemingly minor decision, writers can track the narrative ripple effect throughout the story. This format demonstrates how delicate the canonical plot structure truly is.",
    example: {
      original: "Pip goes to Satis House and meets Miss Havisham.",
      prompt: "What if Pip had refused to go to Satis House? Write the interaction with his sister.",
      rewrite: "'I shall not go to be stared at,' I said quietly, a defiant spark settling in my chest that Mrs. Joe had never seen before."
    }
  },
  {
    icon: <AlertCircle className="w-6 h-6" />,
    title: "Villain Revisions",
    description: "Antagonists rewritten from their own perspective, providing them with complex psychological motivations. Give voice to the silent monsters of literature. This format challenges readers to find humanity in the canon's darkest figures.",
    example: {
      original: "Iago plotting against Othello.",
      prompt: "Narrate the scene where Iago first decides to destroy Othello, in Iago's own voice.",
      rewrite: "It was not the promotion that stung, but the casual ease with which he overlooked me, as if my loyalty were mere furniture in his grand theater."
    }
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Intertextual Meetings",
    description: "Characters from completely different texts meeting and debating their worldviews. Imagine Hamlet discussing action with Achilles, or Jane Eyre taking tea with Lady Macbeth. This tests your grasp of character voice outside of their native environment.",
    example: {
      original: "N/A - Characters do not meet in canon.",
      prompt: "Write a dialogue between Sherlock Holmes and Hercule Poirot investigating the same crime scene.",
      rewrite: "'You observe the mud, but you fail to read its rhythm,' Poirot murmured, meticulously adjusting his cuffs while Holmes scowled at the footprints."
    }
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Temporal Transposition",
    description: "Classic stories placed in new historical or cultural settings while maintaining structural integrity. Transpose a Victorian drama to a modern corporate boardroom or a Shakespearean tragedy to a futuristic colony.",
    example: {
      original: "Macbeth receives prophecies from the witches on the heath.",
      prompt: "Transpose the witches' scene to a group of rogue AI algorithms in a server room.",
      rewrite: "The three core processors hummed in unison, spitting out predictive text that mapped a bloody path to the CEO's chair."
    }
  },
  {
    icon: <EyeOff className="w-6 h-6" />,
    title: "Missing Scenes",
    description: "Scenes implied by the text but never actually written by the author. Fill in the narrative gaps with scenes that perfectly match the surrounding context. This requires intense textual fidelity and a deep understanding of pacing.",
    example: {
      original: "Mr. Darcy writes his letter to Elizabeth Bennet (off-page).",
      prompt: "Write the scene of Darcy pacing his study as he drafting the infamous letter to Elizabeth.",
      rewrite: "He crushed the fourth sheet of parchment, the ink smearing across his fingers, realizing that no amount of aristocratic pride could mask the tremor in his words."
    }
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Minor Character Expansion",
    description: "Silent or background characters become central narrators with their own agency and voice. Shift the focus to the maids, the messengers, or the passing strangers who witnessed the main events without participating.",
    example: {
      original: "The servants in Wuthering Heights observe Miss Earnshaw.",
      prompt: "Describe Cathy's ghost from the perspective of the housemaid who cleans the windows.",
      rewrite: "They say it was the wind rattling the latch, but I know the sound of small, desperate knuckles scraping against cold glass."
    }
  }
];
function Features() {
  return <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Creative Formats</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            PlotOri provides seven structured methodologies for intervening in canonical texts. 
            Each format demands close reading, textual fidelity, and creative courage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {features.map((feature, idx) => <motion.div
    key={idx}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: idx * 0.1 }}
    className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col"
  >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(38,70%,94%)] rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 opacity-50" />
              <div className="w-14 h-14 rounded-full bg-[hsl(158,25%,90%)] text-[hsl(158,50%,28%)] flex items-center justify-center mb-6 relative z-10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 relative z-10">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10 mb-6 flex-grow">{feature.description}</p>
              
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-100 mb-8 relative z-10">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[hsl(158,50%,22%)] mb-3">Source Text Example</h4>
                <div className="space-y-3 text-sm">
                  <div><span className="font-semibold text-slate-700">Original:</span> <span className="text-slate-600">{feature.example.original}</span></div>
                  <div><span className="font-semibold text-slate-700">Prompt:</span> <span className="text-slate-600">{feature.example.prompt}</span></div>
                  <div className="pt-2 border-t border-slate-200"><span className="font-semibold text-[hsl(158,50%,18%)] italic">"{feature.example.rewrite}"</span></div>
                </div>
              </div>

              <Link href="/draft">
                <div className="mt-auto flex items-center text-[hsl(158,50%,28%)] font-medium text-sm group-hover:text-[hsl(158,50%,22%)] transition-colors cursor-pointer relative z-10 w-fit">
                  View Examples & Draft <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>)}
          
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.7 }}
    className="bg-[hsl(158,50%,20%)] rounded-2xl p-8 shadow-md flex flex-col items-center justify-center text-center text-white"
  >
            <h3 className="text-2xl font-serif font-bold mb-4">Propose a Format</h3>
            <p className="text-[hsl(158,20%,90%)] mb-6 max-w-md">
              Have an idea for a new way to intervene in texts? Our platform is constantly evolving.
            </p>
            <Button variant="secondary" className="rounded-full px-8 bg-white text-[hsl(158,50%,18%)] hover:bg-[hsl(158,20%,96%)]">
              Submit Proposal
            </Button>
          </motion.div>
        </div>

        {
    /* How It Works Section */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-24"
  >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">A seamless workflow from reading to writing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-[hsl(158,30%,80%)] z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[hsl(158,50%,28%)] text-white flex items-center justify-center mb-6 shadow-md shadow-[hsl(158,30%,80%)]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Choose Format</h3>
              <p className="text-slate-600">Select one of the seven creative intervention formats from the dashboard.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[hsl(158,50%,28%)] text-white flex items-center justify-center mb-6 shadow-md shadow-[hsl(158,30%,80%)]">
                <Play className="w-8 h-8 ml-1" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. Read Source Text</h3>
              <p className="text-slate-600">Analyze the provided canonical extract to understand the tone, style, and structure.</p>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-16 h-16 rounded-full bg-[hsl(158,50%,28%)] text-white flex items-center justify-center mb-6 shadow-md shadow-[hsl(158,30%,80%)]">
                <Edit3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Draft Intervention</h3>
              <p className="text-slate-600">Write your piece in the Drafting Canvas, applying the rubric constraints.</p>
            </div>
          </div>
        </motion.div>

        {
    /* Current Weekly Challenge Banner */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[hsl(158,50%,18%)] rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden"
  >
          <div className="absolute right-0 top-0 w-64 h-64 bg-[hsl(158,50%,14%)] rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-[hsl(158,40%,40%)] rounded-full blur-3xl opacity-20 -ml-10 -mb-10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(158,50%,14%)] border border-[hsl(158,50%,22%)] mb-6 text-sm font-medium text-[hsl(158,20%,90%)]">
                <Clock className="w-4 h-4" />
                3 Days Remaining
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">Current Weekly Challenge</h2>
              <div className="mb-6 space-y-2">
                <p className="text-xl text-[hsl(158,20%,90%)]"><span className="font-semibold text-white">Text:</span> Othello (Act 1, Scene 3)</p>
                <p className="text-xl text-[hsl(158,20%,90%)]"><span className="font-semibold text-white">Format:</span> Villain Revision</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <p className="text-lg font-serif italic text-[hsl(158,20%,96%)]">"Narrate the scene where Iago first decides to destroy Othello, in Iago's own voice."</p>
              </div>
            </div>
            
            <div className="md:w-1/3 flex justify-center md:justify-end w-full">
              <Link href="/draft" className="w-full md:w-auto">
                <Button size="lg" className="w-full bg-amber-500 text-slate-900 hover:bg-amber-400 text-lg px-8 h-16 rounded-full font-bold shadow-lg hover:-translate-y-1 transition-transform">
                  Join This Challenge
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>;
}
export {
  Features as default
};
