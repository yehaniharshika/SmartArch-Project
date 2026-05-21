import { Link } from "react-router-dom";
import {
  ArrowRight, ScanLine, MessageSquare, Share2,
  Layers, Ruler, DoorOpen, Bot, CheckCircle2
} from "lucide-react";

import SectionHeader from "../components/ui/SectionHeader.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const FEATURES = [
  {
    icon: ScanLine,
    title: "YOLOv8 Detection",
    desc:  "State-of-the-art object detection identifies walls, doors, windows and rooms with high accuracy.",
  },
  {
    icon: Ruler,
    title: "Dimension Extraction",
    desc:  "EasyOCR reads dimension annotations directly from your drawings and maps them to real-world measurements.",
  },
  {
    icon: Layers,
    title: "Area Calculation",
    desc:  "Automatic floor area calculation per room and total — in m² and ft².",
  },
  {
    icon: Bot,
    title: "GPT-4o Vision",
    desc:  "Deep architectural analysis provides room identification, layout summary, and design insights.",
  },
  {
    icon: Share2,
    title: "Instant Client Link",
    desc:  "Generate a private shareable link for your client in one click — no login required for them.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    desc:  "Clients ask natural language questions about the floor plan and receive accurate, contextual answers.",
  },
];

const STEPS = [
  { n: "01", title: "Upload",   desc: "Architect uploads PNG, JPG, or PDF floor plan." },
  { n: "02", title: "Analyse",  desc: "AI pipeline extracts all dimensions, labels, and areas in seconds." },
  { n: "03", title: "Share",    desc: "A unique client link is generated with a built-in chatbot." },
  { n: "04", title: "Interact", desc: "Client asks questions and gets instant, accurate answers." },
];

const SAMPLE_QUESTIONS = [
  "What is the width of the bathroom?",
  "What is the total floor area?",
  "How many windows does the living room have?",
  "Is the kitchen layout open-plan?",
  "What colour palette suits this layout?",
  "Is it good to put the bathroom door in the corner?",
];

export default function LandingPage() {
  return (
    <PageWrapper navTransparent>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-stone-900" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        {/* Warm glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] bg-bronze-DEFAULT/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5
                            bg-white/5 border border-white/10 rounded-sm">
              <span className="w-1.5 h-1.5 bg-bronze-light rounded-full animate-pulse-slow" />
              <span className="font-mono text-xs text-stone-300">
                AI-Powered Floor Plan Analysis
              </span>
            </div>

            <h1 className="font-display text-display-xl text-arch-cream leading-[0.92]">
              Your floor plans,{" "}
              <em className="text-bronze-light not-italic">analysed</em>{" "}
              intelligently.
            </h1>

            <p className="font-sans text-base text-stone-400 leading-relaxed max-w-md">
              Upload any floor plan — PNG, JPG or PDF. SmartArch extracts every
              dimension, detects rooms, doors and windows, then gives your client
              a private AI chatbot to explore the design.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link to="/register" className="btn-primary bg-bronze-DEFAULT hover:bg-bronze-dark
                                              text-white border-0 px-8 py-3.5 text-sm">
                Start analysing
                <ArrowRight size={15} />
              </Link>
              <Link to="/login" className="btn-secondary border-white/20 text-stone-300
                                           hover:bg-white/5 hover:border-white/30">
                Sign in
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              {["YOLOv8", "EasyOCR", "GPT-4o", "PyMuPDF"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 font-mono text-xs text-stone-500">
                  <CheckCircle2 size={11} className="text-bronze-light" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Mock UI Preview */}
          <div className="hidden lg:block">
            <div className="relative bg-white/5 border border-white/10 rounded-lg p-1 backdrop-blur-sm">
              {/* Fake window chrome */}
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
                {["bg-red-400", "bg-amber-400", "bg-emerald-400"].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 ${c} rounded-full opacity-60`} />
                ))}
                <div className="flex-1 mx-3 bg-white/5 rounded-sm h-5 flex items-center px-2">
                  <span className="font-mono text-[10px] text-stone-500">
                    smartarch.app/dashboard
                  </span>
                </div>
              </div>

              {/* Mock content */}
              <div className="p-4 space-y-3">
                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-2">
                  {[["12", "Walls"], ["4", "Doors"], ["8", "Windows"], ["5", "Rooms"]].map(([v, l]) => (
                    <div key={l} className="bg-white/5 border border-white/8 rounded-sm p-2 text-center">
                      <p className="font-display text-xl text-arch-cream">{v}</p>
                      <p className="font-mono text-[9px] text-stone-500">{l}</p>
                    </div>
                  ))}
                </div>
                {/* Area bar */}
                <div className="bg-bronze-DEFAULT/20 border border-bronze-DEFAULT/30 rounded-sm p-3
                                flex items-center justify-between">
                  <span className="font-mono text-xs text-bronze-light">Total floor area</span>
                  <span className="font-display text-2xl text-arch-cream">142.50 <span className="text-sm text-stone-400">m²</span></span>
                </div>
                {/* Fake floor plan placeholder */}
                <div className="bg-white/5 rounded-sm aspect-[4/3] flex items-center justify-center
                                border border-white/8 relative overflow-hidden">
                  <div className="absolute inset-4 border border-white/10 rounded-sm" />
                  <div className="absolute top-8 left-8 w-16 h-20 border border-blue-400/40 bg-blue-400/5 rounded-sm" />
                  <div className="absolute top-8 right-8 w-20 h-16 border border-blue-400/40 bg-blue-400/5 rounded-sm" />
                  <div className="absolute bottom-8 left-8 w-24 h-12 border border-blue-400/40 bg-blue-400/5 rounded-sm" />
                  <div className="absolute bottom-8 right-10 w-3 h-8 border border-red-400/60 bg-red-400/10 rounded-sm" />
                  <div className="absolute top-[45%] left-[40%] w-2 h-6 border border-emerald-400/60 bg-emerald-400/10" />
                  <span className="font-mono text-[10px] text-stone-600 absolute bottom-2 right-2">
                    annotated · YOLOv8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────────── */}
      <section id="how" className="py-28 bg-arch-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <SectionHeader
            eyebrow="How it works"
            title="Four steps from upload to insight."
            center
          />
          <div className="grid md:grid-cols-4 gap-0">
            {STEPS.map((step, i) => (
              <div key={step.n} className="relative flex flex-col items-center text-center p-6 group">
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-12 w-1/2 h-px bg-stone-200" />
                )}
                <div className="w-12 h-12 bg-stone-900 rounded-sm flex items-center justify-center mb-5
                                group-hover:bg-bronze-DEFAULT transition-colors duration-300 relative z-10">
                  <span className="font-display text-arch-cream text-xl">{step.n}</span>
                </div>
                <h3 className="font-display text-2xl text-stone-900 mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────── */}
      <section id="features" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-16">
          <SectionHeader
            eyebrow="Features"
            title="Everything you need."
            description="SmartArch combines computer vision, OCR, and large language models into one seamless pipeline."
            center
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title}
                className="group p-6 rounded-md border border-stone-200 hover:border-bronze-light
                           hover:shadow-warm-md transition-all duration-300 space-y-4">
                <div className="w-10 h-10 bg-stone-100 rounded-sm flex items-center justify-center
                                group-hover:bg-bronze-DEFAULT/10 transition-colors duration-200">
                  <f.icon size={18} className="text-stone-600 group-hover:text-bronze-DEFAULT transition-colors" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-stone-900 mb-1">{f.title}</h3>
                  <p className="font-sans text-sm text-stone-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Questions ──────────────────────────────────────────── */}
      <section className="py-28 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
          <SectionHeader
            eyebrow="Client chatbot"
            title="Your clients can ask anything."
            description="Natural language questions about dimensions, areas, and design suggestions."
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {SAMPLE_QUESTIONS.map((q) => (
              <div key={q}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-md
                           hover:bg-white/10 transition-colors duration-200">
                <p className="font-sans text-sm text-stone-300 leading-relaxed">"{q}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-24 bg-arch-parchment border-t border-stone-200">
        <div className="max-w-xl mx-auto text-center px-6 space-y-6">
          <h2 className="font-display text-display-lg text-stone-900">
            Ready to analyse your first floor plan?
          </h2>
          <p className="font-sans text-sm text-stone-500">
            Free to get started. No credit card required.
          </p>
          <Link to="/register" className="btn-primary mx-auto px-10 py-4">
            Create your account
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

    </PageWrapper>
  );
}
