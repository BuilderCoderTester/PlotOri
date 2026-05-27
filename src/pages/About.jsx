import { motion } from "framer-motion";
import { BookOpen, XCircle, CheckCircle, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
function About() {
  return <div className="py-20 bg-white min-h-screen">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="mx-auto w-16 h-16 rounded-full bg-[hsl(158,20%,96%)] flex items-center justify-center mb-6 text-[hsl(158,50%,28%)]">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">Our Philosophy</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            PlotOri is built upon established literary theory, transforming abstract concepts into practical, creative interfaces.
          </p>
        </div>

        <div className="space-y-16 mb-20">
          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="prose prose-lg prose-blue max-w-none"
  >
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b pb-4 mb-6 border-l-4 border-l-amber-500 pl-4">Bakhtin's Dialogism</h2>
            <p className="text-slate-700 leading-relaxed">
              Mikhail Bakhtin argued that no text exists in isolation. Every utterance is a response to previous utterances and an anticipation of future ones. A novel is a "polyphony" of competing voices, none of which holds absolute authority.
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              PlotOri operationalizes dialogism. By allowing users to intervene in canonical texts—by rewriting endings, reviving minor characters, or introducing counterfactuals—we open closed, monologic texts into dynamic, living dialogues. You are no longer just a reader; you are an active participant in the literary conversation.
            </p>
          </motion.div>

          <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="prose prose-lg prose-blue max-w-none"
  >
            <h2 className="text-3xl font-serif font-bold text-slate-900 border-b pb-4 mb-6 border-l-4 border-l-amber-500 pl-4">Genette's Transtextuality</h2>
            <p className="text-slate-700 leading-relaxed">
              Gérard Genette defined transtextuality as "all that sets the text in relationship, whether obvious or concealed, with other texts." This encompasses intertextuality (quotation, allusion), paratextuality (titles, prefaces), and hypertextuality (where a new text, the hypertext, transforms an older text, the hypotext).
            </p>
            <p className="text-slate-700 leading-relaxed mt-4">
              Every creation on PlotOri is an act of hypertextuality. When you draft a Villain Revision or an Alternative Ending, you are creating a deliberate hypertext that depends upon the canonical hypotext for its meaning. Our platform makes this scholarly concept a tangible creative practice.
            </p>
          </motion.div>

          <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-300 text-center mt-12 text-[hsl(220,18%,16%)]">
            <h3 className="text-2xl font-serif font-bold mb-4">The Result</h3>
            <p className="text-lg leading-relaxed font-medium">
              By combining academic theory with creative writing tools, PlotOri proves that the highest form of literary criticism is not just the essay—it is the courageous, deeply informed act of rewriting.
            </p>
          </div>
        </div>

        {
    /* What PlotOri Is Not */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
          <h2 className="text-3xl font-serif font-bold text-slate-900 text-center mb-10 border-l-4 border-l-amber-500 pl-4 inline-block">What PlotOri Is Not</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 bg-[hsl(0,20%,97%)] opacity-90 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-red-400" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <XCircle className="w-8 h-8 text-red-500" />
                  <h3 className="text-xl font-bold text-slate-900">Fan Fiction Archives</h3>
                </div>
                <ul className="space-y-4">
                  <li className="text-slate-600 border-b border-slate-200 pb-3">Casual, unstructured storytelling</li>
                  <li className="text-slate-600 border-b border-slate-200 pb-3">Primarily focused on romance or self-insertion</li>
                  <li className="text-slate-600 border-b border-slate-200 pb-3">No rigorous academic evaluation</li>
                  <li className="text-slate-600">Often ignores or subverts original authorial intent without critical purpose</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-[hsl(158,30%,80%)] bg-[hsl(158,20%,96%)] shadow-md relative overflow-hidden border-t-0">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[hsl(158,50%,28%)]" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-[hsl(158,50%,28%)]" />
                  <h3 className="text-xl font-bold text-[hsl(158,50%,22%)]">PlotOri Platform</h3>
                </div>
                <ul className="space-y-4">
                  <li className="text-[hsl(220,18%,16%)] border-b border-slate-200 pb-3 font-medium">Scholarly, structured interventions</li>
                  <li className="text-[hsl(220,18%,16%)] border-b border-slate-200 pb-3 font-medium">Focused on character fidelity and thematic resonance</li>
                  <li className="text-[hsl(220,18%,16%)] border-b border-slate-200 pb-3 font-medium">Evaluated against a rigorous 5-part rubric</li>
                  <li className="text-[hsl(220,18%,16%)] font-medium">Respects the canon while deliberately opening it up to dialogue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {
    /* The Canon as Conversation */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-20"
  >
          <div className="bg-[hsl(158,50%,18%)] rounded-3xl p-12 md:p-16 relative shadow-lg text-center">
            <Quote className="absolute top-8 left-8 w-24 h-24 text-[hsl(158,50%,14%)] opacity-50 rotate-180" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-2xl md:text-3xl font-serif text-white leading-relaxed mb-8 italic">
                "A text continues to live through readers' responses, reinterpretations, and rewritings — and a digital platform can make that process visible, collaborative, and scholarly."
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-[hsl(158,30%,60%)] mb-4" />
                <span className="text-[hsl(158,30%,80%)] font-bold uppercase tracking-widest text-sm">PlotOri Project Manifest</span>
              </div>
            </div>
            <Quote className="absolute bottom-8 right-8 w-24 h-24 text-[hsl(158,50%,14%)] opacity-50" />
          </div>
        </motion.div>

        {
    /* The Project Origin */
  }
        <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-3xl border border-slate-200 p-10 md:p-16 shadow-sm"
  >
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 border-l-4 border-l-amber-500 pl-4">The Project Origin</h2>
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-slate-700 leading-relaxed">
              PlotOri began as a Digital Humanities initiative aimed at bridging the gap between passive consumption and active literary production. For decades, the primary method of assessing a student's understanding of a canonical text was the analytical essay. While valuable, the essay often positions the student outside the text, looking in.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We asked a different question: What if we treated reading as an act of creation? 
            </p>
            <p className="text-slate-700 leading-relaxed">
              By providing structured tools to rewrite canonical authors like Shakespeare, Dickens, and Brontë, we allow readers to inhabit the text. Emulating Shakespeare's iambic pentameter or Brontë's gothic syntax requires a more intimate understanding of their craft than merely describing it. PlotOri was built to make this process structured, measurable, and deeply engaging.
            </p>
          </div>
        </motion.div>

      </div>
    </div>;
}
export {
  About as default
};
