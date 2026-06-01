import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  PenTool,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Save,
  Clock,
  AlignLeft,
  RefreshCcw,
  Lightbulb,
  Users,
  GitBranch,
  Shuffle,
  FileText,
  UserRound,
  GraduationCap,
  Shield,
  Eye
} from "lucide-react";
const ACTIVITY_TYPES = [
  {
    id: "student",
    icon: GraduationCap,    // or BookOpen, Pencil
    label: "Student",
    tagline: "Explore literary worlds through creative writing",
    description: "Access curated writing exercises, submit your work for feedback, and track your progress through guided literary challenges.",
    prompt: "Choose a writing mode and begin your creative journey.",
    color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
    activeColor: "bg-[hsl(158,50%,28%)]",
    example: "Creative Writing, Peer Review, Progress Tracking"
  },
  {
    id: "admin",
    icon: Shield,           // or Settings, Lock
    label: "Admin",
    tagline: "Manage the platform and oversee operations",
    description: "Oversee user accounts, moderate submissions, manage content, and configure platform settings to ensure smooth operation.",
    prompt: "Access the admin dashboard to manage the platform.",
    color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
    activeColor: "bg-[hsl(158,50%,28%)]",
    example: "User Management, Content Moderation, Analytics"
  },
  {
    id: "pedestrian",
    icon: Eye,              // or Globe, Footprints
    label: "Pedestrian",
    tagline: "Browse and read without an account",
    description: "Explore published works, read community submissions, and discover literary adaptations without needing to sign in or write.",
    prompt: "Browse the public gallery of literary works.",
    color: "bg-[hsl(200,10%,96%)] border-[hsl(200,20%,88%)]", // blue-ish tint for guest
    activeColor: "bg-[hsl(200,50%,28%)]",
    example: "Public Gallery, Featured Works, Community Reads"
  },
  {
    id: "teacher",
    icon: Lightbulb, // or Presentation, Users
    label: "Teacher",
    tagline: "Guide students and evaluate their work",
    description: "Create assignments, review student submissions, provide detailed feedback, and track class performance across writing exercises.",
    prompt: "Access your teaching dashboard and student submissions.",
    color: "bg-[hsl(10,10%,96%)] border-[hsl(10,20%,88%)]",   // slightly different hue for distinction
    activeColor: "bg-[hsl(10,50%,28%)]",
    example: "Assignment Creation, Grading, Class Analytics"
  }
  // ,
  // {
  //   id: "alternative-ending",
  //   icon: GitBranch,
  //   label: "Alternative Ending",
  //   tagline: "Rewrite how the story concludes",
  //   description: "Craft a new ending that respects the tone, logic, and emotional shape of the original work \u2014 hopeful, tragic, ambiguous, or ironic.",
  //   prompt: 'Choose a canonical text and rewrite its conclusion. For example: "What if Emilia exposed Iago before Othello murdered Desdemona?"',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Othello, Jane Eyre, Great Expectations"
  // },
  // {
  //   id: "counterfactual",
  //   icon: Shuffle,
  //   label: "Counterfactual Writing",
  //   tagline: "What if a key event never happened?",
  //   description: "Explore missed encounters, delayed confessions, reversed decisions, or interrupted revelations that would have changed everything.",
  //   prompt: 'Ask a pivotal "what if" question and follow its consequences. For example: "What if Macbeth refused the prophecy?"',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Macbeth, Pride & Prejudice, Othello"
  // },
  // {
  //   id: "villain-revision",
  //   icon: UserRound,
  //   label: "Villain Revision",
  //   tagline: "Give the antagonist a voice",
  //   description: "Rewrite an antagonistic character from their own perspective \u2014 revealing inner conflict, social pressure, and hidden complexity.",
  //   prompt: 'Choose a villain and narrate a key scene from their point of view. For example: "Miss Havisham narrates the morning she stopped the clocks."',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Miss Havisham, Iago, Bertha Mason"
  // },
  // {
  //   id: "intertextual-meeting",
  //   icon: Users,
  //   label: "Intertextual Meeting",
  //   tagline: "Characters across centuries meet",
  //   description: "Stage an encounter between characters from different texts. These meetings can be serious, comic, philosophical, or absurd.",
  //   prompt: 'Place two characters from different works in the same scene. For example: "Iago meets Lady Macbeth in a tavern the night before their respective schemes."',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Taranath Tantrik & Dr. Faustus, Miss Havisham & Mrs. Dalloway"
  // },
  // {
  //   id: "temporal-transposition",
  //   icon: Clock,
  //   label: "Temporal Transposition",
  //   tagline: "A classic story in a new era",
  //   description: "Place a story in another historical period, social context, or political setting to test how the narrative changes in a new world.",
  //   prompt: 'Transplant a canonical work into a different time and place. For example: "The Merchant of Venice set in Kalyani, West Bengal."',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "King Lear, Julius Caesar, The Merchant of Venice"
  // },
  // {
  //   id: "missing-scene",
  //   icon: FileText,
  //   label: "Missing / Recovered Scene",
  //   tagline: "Write the scene the author left out",
  //   description: "Reconstruct a scene that the original text implies but never shows \u2014 a conversation, a journey, a decision made offstage.",
  //   prompt: 'Identify a gap in the narrative and fill it. For example: "Write the scene in which Rochester first confronts his conscience about keeping Bertha."',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Jane Eyre, Hamlet, Wuthering Heights"
  // },
  // {
  //   id: "minor-character",
  //   icon: AlignLeft,
  //   label: "Minor Character Expansion",
  //   tagline: "A silent character takes centre stage",
  //   description: "Give a peripheral or silent character the central narrative voice, offering an entirely new perspective on the events of the original.",
  //   prompt: 'Select a minor character and let them narrate. For example: "The Nurse in Romeo and Juliet tells the story from the beginning."',
  //   color: "bg-[hsl(158,10%,96%)] border-[hsl(158,20%,88%)]",
  //   activeColor: "bg-[hsl(158,50%,28%)]",
  //   example: "Horatio in Hamlet, The Nurse in Romeo & Juliet"
  // }
];
const SOURCE_TEXTS = [
  "Othello \u2014 William Shakespeare (1604)",
  "Macbeth \u2014 William Shakespeare (1606)",
  "King Lear \u2014 William Shakespeare (1606)",
  "The Merchant of Venice \u2014 William Shakespeare (1596)",
  "Hamlet \u2014 William Shakespeare (1601)",
  "Romeo and Juliet \u2014 William Shakespeare (1597)",
  "Jane Eyre \u2014 Charlotte Bront\xEB (1847)",
  "Wuthering Heights \u2014 Emily Bront\xEB (1847)",
  "Great Expectations \u2014 Charles Dickens (1861)",
  "A Tale of Two Cities \u2014 Charles Dickens (1859)",
  "Pride and Prejudice \u2014 Jane Austen (1813)",
  "Sense and Sensibility \u2014 Jane Austen (1811)",
  "Mrs. Dalloway \u2014 Virginia Woolf (1925)",
  "The Picture of Dorian Gray \u2014 Oscar Wilde (1890)",
  "Doctor Faustus \u2014 Christopher Marlowe (1604)",
  "Julius Caesar \u2014 William Shakespeare (1599)",
  "Other / Custom Text"
];
const RUBRIC = [
  { label: "Character Fidelity", desc: "Does the rewrite understand the character's psychology?" },
  { label: "Textual Intelligence", desc: "Does it show close knowledge of the source text?" },
  { label: "Creative Originality", desc: "Does it offer a fresh and interesting possibility?" },
  { label: "Stylistic Craft", desc: "Is the writing polished and effective?" },
  { label: "Interpretive Insight", desc: "Does it reveal something new about the original?" }
];
const AUTOSAVE_KEY = "plotori_draft_v1";
function Draft() {
  const [step, setStep] = useState(3);
  const [selectedType] = useState("student");
  const [sourceText] = useState("Other / Custom Text");
  const [title, setTitle] = useState("Untitled Draft");
  const [customText, setCustomText] = useState("");
  const [body, setBody] = useState("");
  const [authorNote, setAuthorNote] = useState("");
  const [savedAt, setSavedAt] = useState(null);
  const [showRubric, setShowRubric] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const wordCount = body.trim() === "" ? 0 : body.trim().split(/\s+/).length;
  const charCount = body.length;
  const activityType = ACTIVITY_TYPES.find((a) => a.id === selectedType);
  const saveDraft = useCallback(() => {
    const draft = { step, selectedType, sourceText, customText, title, body, authorNote };
    localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(draft));
    const now = /* @__PURE__ */ new Date();
    setSavedAt(
      now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  }, [step, selectedType, sourceText, customText, title, body, authorNote]);
  useEffect(() => {
    const saved = localStorage.getItem(AUTOSAVE_KEY);
    if (saved) {
      try {
        const d = JSON.parse(saved);
        if (d.body) {
          setStep(d.step || 1);
          setSelectedType(d.selectedType || null);
          setSourceText(d.sourceText || "");
          setCustomText(d.customText || "");
          setTitle(d.title || "");
          setBody(d.body || "");
          setAuthorNote(d.authorNote || "");
        }
      } catch {
      }
    }
  }, []);
  useEffect(() => {
    if (step === 3 && body.length > 0) {
      const timer = setTimeout(() => saveDraft(), 1500);
      return () => clearTimeout(timer);
    }
  }, [body, step, saveDraft]);
  const handleClearDraft = () => {
    localStorage.removeItem(AUTOSAVE_KEY);
    setStep(1);
    setSelectedType(null);
    setSourceText("");
    setCustomText("");
    setTitle("");
    setBody("");
    setAuthorNote("");
    setSavedAt(null);
    setSubmitted(false);
  };
  const handleSubmit = () => {
    localStorage.removeItem(AUTOSAVE_KEY);
    setSubmitted(true);
    setStep(4);
  };
  const effectiveSource = sourceText === "Other / Custom Text" ? customText : sourceText;
  return <div className="min-h-screen bg-slate-50">
    {
      /* Top bar */
    }
    <div className="sticky top-16 z-40 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <button className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-[hsl(158,50%,28%)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          </Link>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[hsl(158,50%,28%)]">
              Drafting Canvas
            </span>
          </div>
        </div>
        {step === 3 && <div className="flex items-center gap-3">
          {savedAt && <span className="hidden sm:flex items-center gap-1.5 text-xs text-slate-400">
            <Save className="w-3 h-3" />
            Saved at {savedAt}
          </span>}
          <button
            onClick={saveDraft}
            data-testid="button-save-draft"
            className="flex items-center gap-1.5 text-xs bg-[hsl(158,15%,94%)] text-[hsl(158,50%,28%)] px-3 py-1.5 rounded-full hover:bg-[hsl(158,20%,90%)] transition-colors font-medium"
          >
            <Save className="w-3 h-3" />
            Save
          </button>
        </div>}
      </div>
    </div>

    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <AnimatePresence mode="wait">
        {
          /* ── STEP 1: Choose Activity Type ── */
        }
        {/* {step === 1 && <motion.div
          key="step1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-[hsl(158,20%,90%)] text-[hsl(158,50%,28%)] border-[hsl(158,20%,80%)] font-medium px-3 py-1">
              Step 1 of 3
            </Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
              Choose Your Creative Profile
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Each mode asks something different of you as a reader and a writer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ACTIVITY_TYPES.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return <button
                key={type.id}
                data-testid={`activity-type-${type.id}`}
                onClick={() => setSelectedType(type.id)}
                className={`text-left p-5 rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${isSelected ? "border-[hsl(158,50%,28%)] bg-[hsl(158,15%,96%)] shadow-md ring-2 ring-[hsl(158,30%,80%)]" : `${type.color} hover:border-[hsl(158,30%,80%)]`}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isSelected ? "bg-[hsl(158,50%,28%)] text-white" : "bg-white text-[hsl(158,50%,28%)] border border-[hsl(158,20%,88%)]"}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-tight">
                      {type.label}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{type.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {type.description}
                </p>
                <p className="mt-3 text-xs text-slate-400 italic">e.g. {type.example}</p>
              </button>;
            })}
          </div>

          <div className="flex justify-end mt-8">
            <Button
              size="lg"
              disabled={!selectedType}
              onClick={() => setStep(2)}
              data-testid="button-next-step1"
              className="bg-[hsl(158,50%,28%)] hover:bg-[hsl(158,50%,23%)] text-white rounded-full px-8 h-12 flex items-center gap-2 disabled:opacity-40"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>} */}

        {
          /* ── STEP 2: Source Text & Prompt ── */
        }
        {/*         
        {step === 2 && <motion.div
          key="step2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-10 text-center">
            <Badge className="mb-4 bg-[hsl(158,20%,90%)] text-[hsl(158,50%,28%)] border-[hsl(158,20%,80%)] font-medium px-3 py-1">
              Step 2 of 3
            </Badge>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-3">
              Set Your Context
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Choose your source text and give your piece a working title.
            </p>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm p-8 max-w-2xl mx-auto space-y-6">
            {activityType && <div className="flex items-start gap-3 p-4 bg-[hsl(158,15%,96%)] rounded-xl border border-[hsl(158,20%,88%)]">
              <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[hsl(158,50%,28%)] mb-1">
                  Writing prompt for {activityType.label}
                </p>
                <p className="text-sm text-[hsl(158,50%,22%)] leading-relaxed">
                  {activityType.prompt}
                </p>
              </div>
            </div>}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Source Text *
              </label>
              <div className="grid grid-cols-1 gap-2 max-h-64 overflow-y-auto pr-1">
                {SOURCE_TEXTS.map((text) => <button
                  key={text}
                  data-testid={`source-text-${text.replace(/\s+/g, "-").toLowerCase()}`}
                  onClick={() => setSourceText(text)}
                  className={`text-left text-sm px-4 py-2.5 rounded-lg border transition-all ${sourceText === text ? "border-[hsl(158,50%,28%)] bg-[hsl(158,15%,96%)] text-[hsl(158,50%,22%)] font-medium" : "border-slate-200 bg-white text-slate-600 hover:border-[hsl(158,30%,80%)] hover:bg-[hsl(158,15%,96%)]"}`}
                >
                  {text}
                </button>)}
              </div>
              {sourceText === "Other / Custom Text" && <Input
                className="mt-3"
                placeholder="Enter your source text title and author"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                data-testid="input-custom-text"
              />}
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Working Title *
              </label>
              <Input
                placeholder="Give your piece a title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                data-testid="input-title"
                className="text-base"
              />
            </div>
          </div>

          <div className="flex justify-between mt-8 max-w-2xl mx-auto">
            <Button
              variant="ghost"
              onClick={() => setStep(1)}
              data-testid="button-back-step2"
              className="flex items-center gap-2 text-slate-500"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <Button
              size="lg"
              disabled={!sourceText || !title.trim() || sourceText === "Other / Custom Text" && !customText.trim()}
              onClick={() => setStep(3)}
              data-testid="button-next-step2"
              className="bg-[hsl(158,50%,28%)] hover:bg-[hsl(158,50%,23%)] text-white rounded-full px-8 h-12 flex items-center gap-2 disabled:opacity-40"
            >
              Open Drafting Canvas
              <PenTool className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>} */}

        {
          /* ── STEP 3: Writing Canvas ── */
        }
        {step === 3 && <motion.div
          key="step3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {
              /* Main editor */
            }
            <div className="flex-1">
              <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                {
                  /* Editor header */
                }
                <div className="px-6 pt-6 pb-4 border-b bg-[hsl(158,20%,98%)]">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-[hsl(158,20%,90%)] text-[hsl(158,50%,28%)]">
                      Student Draft
                    </Badge>
                  </div>
                  <h2
                    className="text-2xl font-serif font-bold text-slate-900 mt-2 outline-none"
                    contentEditable
                    suppressContentEditableWarning
                    data-testid="title-display"
                    onBlur={(e) => setTitle(e.currentTarget.textContent || title)}
                  >
                    {title}
                  </h2>
                </div>

                {
                  /* Textarea */
                }
                <div className="p-6">
                  <Textarea
                    data-testid="textarea-body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Begin your piece here. Let the characters speak. Let the scene unfold. There are no wrong first drafts..."
                    className="min-h-[480px] text-base leading-8 text-slate-800 border-none shadow-none resize-none focus-visible:ring-0 p-0 font-serif placeholder:text-slate-300 placeholder:font-sans"
                  />
                </div>

                {
                  /* Editor footer */
                }
                <div className="px-6 pb-4 pt-2 border-t bg-[hsl(158,20%,98%)] flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <span data-testid="word-count">{wordCount} words</span>
                    <span>{charCount} characters</span>
                    {wordCount > 0 && wordCount < 150 && <span className="text-amber-500 font-medium">
                      Aim for at least 150 words for a complete scene
                    </span>}
                    {wordCount >= 150 && <span className="text-[hsl(158,50%,28%)] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Good length
                    </span>}
                  </div>
                  <button
                    onClick={saveDraft}
                    data-testid="button-autosave-footer"
                    className="flex items-center gap-1 hover:text-[hsl(158,50%,28%)] transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    {savedAt ? `Saved ${savedAt}` : "Save draft"}
                  </button>
                </div>
              </div>

              {
                /* Author's Note */
              }
              <div className="mt-4 bg-white rounded-2xl border shadow-sm p-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Author's Note{" "}
                  <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <p className="text-xs text-slate-500 mb-3">
                  Explain your choices. Why did you change this specific
                  element? How does it re-interpret the original work?
                </p>
                <Textarea
                  data-testid="textarea-author-note"
                  value={authorNote}
                  onChange={(e) => setAuthorNote(e.target.value)}
                  placeholder="My intervention focuses on..."
                  className="min-h-[100px] text-sm"
                />
              </div>
            </div>

            {
              /* Sidebar */
            }
            <div className="w-full lg:w-80 space-y-4">
              {
                /* Rubric Card */
              }
              <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
                <button
                  onClick={() => setShowRubric(!showRubric)}
                  className="w-full px-5 py-4 bg-slate-50 border-b flex items-center justify-between font-semibold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[hsl(158,50%,28%)]">
                    <BookOpen className="w-4 h-4" />
                    Evaluation Rubric
                  </div>
                  <span className="text-slate-400 text-sm">
                    {showRubric ? "Hide" : "Show"}
                  </span>
                </button>
                <AnimatePresence>
                  {showRubric && <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 space-y-4">
                      {RUBRIC.map((r, i) => <div key={i}>
                        <h4 className="text-sm font-bold text-slate-800 mb-1">
                          {r.label}
                        </h4>
                        <p className="text-xs text-slate-500">{r.desc}</p>
                      </div>)}
                    </div>
                  </motion.div>}
                </AnimatePresence>
              </div>

              <Button
                size="lg"
                disabled={wordCount < 50}
                onClick={handleSubmit}
                data-testid="button-submit-draft"
                className="w-full bg-[hsl(158,50%,28%)] hover:bg-[hsl(158,50%,23%)] text-white rounded-xl h-14 font-bold disabled:opacity-40 shadow-sm"
              >
                Submit Draft
              </Button>
              {wordCount < 50 && <p className="text-center text-xs text-amber-500 font-medium px-2">
                Please write at least 50 words to submit.
              </p>}
              <Button
                variant="ghost"
                onClick={handleClearDraft}
                className="w-full text-slate-400 hover:text-red-500 text-sm"
              >
                <RefreshCcw className="w-3 h-3 mr-2" /> Start Over
              </Button>
            </div>
          </div>
        </motion.div>}

        {
          /* ── STEP 4: Success ── */
        }
        {step === 4 && submitted && <motion.div
          key="step4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto mt-12 text-center"
        >
          <div className="w-20 h-20 bg-[hsl(158,20%,92%)] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-[hsl(158,50%,28%)]" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
            Draft Submitted
          </h2>
          <p className="text-slate-500 mb-8">
            Your intervention has been saved to your portfolio. It will be available for anonymous peer review shortly.
          </p>
          <div className="space-y-3">
            <Button
              onClick={handleClearDraft}
              className="w-full bg-[hsl(158,50%,28%)] hover:bg-[hsl(158,50%,23%)] rounded-full h-12"
            >
              Write Another
            </Button>
            <Link href="/community">
              <Button
                variant="outline"
                className="w-full rounded-full h-12 border-slate-200"
              >
                Return to Community
              </Button>
            </Link>
          </div>
        </motion.div>}
      </AnimatePresence>
    </div>
  </div>;
}
export {
  Draft as default
};
