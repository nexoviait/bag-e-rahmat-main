import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.png";
import towerHero from "@/assets/tower-hero.png";
import flagshipTower from "@/assets/flagship-tower.png";
import aboutTower from "@/assets/about-tower.png";
import projectStatusImg from "@/assets/project-status.png";
import {
  Mail, MapPin, Building2, ShieldCheck, TrendingUp, Sparkles,
  Eye, Target, Check, Clock, DollarSign, BarChart3, Users, Award,
  Home, Store, Landmark, PieChart, ArrowRight, CheckCircle2,
  Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bag-e-Rahmat Holdings Limited — Building Today, Empowering Tomorrow" },
      { name: "description", content: "Bag-e-Rahmat Holdings Limited — a trusted name in real estate development. Investment, corporate governance, and the Darul Aman Tower flagship project in Dhaka, Bangladesh." },
      { property: "og:title", content: "Bag-e-Rahmat Holdings Limited" },
      { property: "og:description", content: "Diversified investments, project development, and the Darul Aman Tower — a landmark commercial project in Dhaka, Bangladesh." },
      { property: "og:image", content: towerHero},
      { name: "twitter:image", content: towerHero },
    ],
  }),
  component: Home_,
});

const nav = [
  ["About", "#about"],
  ["Vision", "#vision"],
  ["Project", "#flagship"],
  ["Highlights", "#highlights"],
  ["Status", "#status"],
  ["Investment", "#investment"],
  ["Roadmap", "#roadmap"],
  ["Why Us", "#why"],
  ["Governance", "#governance"],
  ["Contact", "#contact"],
];

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-gold mb-5">
      <span className="text-gold-deep">{n}</span>
      <span className="w-8 h-px bg-gold/50" />
      {children}
    </div>
  );
}

function Home_() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoAsset} alt="Bag-e-Rahmat Holdings" className="h-10 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="hover:text-gold transition-colors">{label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:opacity-90 transition">
              Invest with us
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-foreground hover:text-gold hover:border-gold/40 transition"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4 text-sm text-muted-foreground">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-gradient-gold text-primary-foreground text-sm font-medium shadow-gold hover:opacity-90 transition"
            >
              Invest with us
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 overflow-hidden min-h-[92vh] flex items-center">
        <div className="absolute inset-0">
          <img src={towerHero} alt="Darul Aman Tower" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 radial-glow" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-card/40 text-xs uppercase tracking-[0.2em] text-gold mb-8">
              <Sparkles className="w-3 h-3" /> Est. Holdings · Dhaka, Bangladesh
            </div>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.02] mb-6">
              Building Today,<br />
              <span className="text-gradient-gold italic">Empowering</span><br />
              Tomorrow.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bag-e-Rahmat Holdings Limited — a diversified investment and business
              management company committed to excellence, innovation, and sustainable growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#flagship" className="px-7 py-3 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition">
                View Flagship Project
              </a>
              <a href="#contact" className="px-7 py-3 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="divider-gold" /></div>

      {/* ABOUT */}
      <section id="about" className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <SectionLabel n="01">About The Company</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              <span className="text-gradient-gold italic">Bag-e-Rahmat</span> Holdings Ltd.
            </h2>
            <div className="space-y-5">
              {[
                { icon: Landmark, t: "A trusted name in real estate development" },
                { icon: ShieldCheck, t: "Committed to quality, transparency & excellence" },
                { icon: Building2, t: "Building commercial assets for long-term value" },
                { icon: TrendingUp, t: "Focused on growth, sustainability & innovation" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <p className="text-lg text-muted-foreground pt-2">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-gold">
              <img src={aboutTower} alt="Darul Aman Tower architectural rendering" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision" className="py-28 bg-card/30 relative">
        <div className="absolute inset-0 radial-glow opacity-40" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="02">Vision &amp; Mission</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">Where we're <span className="text-gradient-gold italic">headed.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-display mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become one of the most trusted and leading real estate developers in Bangladesh.
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all">
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-2xl font-display mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {[
                  "Develop high-value commercial properties",
                  "Ensure transparency & integrity",
                  "Maximize shareholder value",
                  "Generate sustainable rental income",
                ].map((m) => (
                  <li key={m} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECT */}
      <section id="flagship" className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <SectionLabel n="03">Our Flagship Project</SectionLabel>
            <h2 className="text-5xl md:text-6xl font-light leading-none mb-6">
              <span className="text-gradient-gold italic">Darul Aman</span><br />Tower
            </h2>
            <div className="flex items-start gap-3 mb-8 text-muted-foreground">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
              <div>
                53/2, D.I.T Extension Road,<br />
                Fakirapool, Naya Paltan,<br />
                Dhaka-1000
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Building2, t: "Commercial Building" },
                { icon: MapPin, t: "Prime Location" },
                { icon: Sparkles, t: "Modern Design" },
                { icon: TrendingUp, t: "High Rental Potential" },
              ].map(({ icon: Icon, t }) => (
                <div key={t} className="p-4 rounded-xl bg-card border border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <div className="text-sm text-foreground font-medium">{t}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-gold">
              <img src={flagshipTower} alt="Darul Aman Tower" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section id="highlights" className="py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="04">Project Highlights</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">What makes it <span className="text-gradient-gold italic">exceptional.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, t: "Prime & Strategic Location", d: "In the heart of Dhaka" },
              { icon: Building2, t: "B + G + 6 Commercial Building", d: "Basement, Ground plus 6 floors" },
              { icon: Sparkles, t: "Modern Architectural Design", d: "With all modern facilities" },
              { icon: TrendingUp, t: "High Rental Yield", d: "& long-term asset value" },
              { icon: Store, t: "Multi-Use Potential", d: "Corporate office, hotel, showroom & retail" },
              { icon: Award, t: "Landmark Development", d: "Iconic architectural presence" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT STATUS */}
      <section id="status" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="05">Project Status</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">Where we <span className="text-gradient-gold italic">stand today.</span></h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
              {[
                { t: "Land Agreement", done: true },
                { t: "Piling", done: true },
                { t: "Site Preparation", done: true },
                { t: "Basement", done: false },
                { t: "Super Structure", done: false },
                { t: "Finishing & Operation", done: false },
              ].map((s, i) => (
                <div key={s.t} className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${s.done ? "bg-gold/15 border-gold" : "bg-card border-border"}`}>
                    {s.done ? <CheckCircle2 className="w-7 h-7 text-gold" /> : <Clock className="w-7 h-7 text-muted-foreground" />}
                  </div>
                  <div className="mt-4 text-sm font-medium text-foreground">{s.t}</div>
                  <div className={`text-xs mt-1 ${s.done ? "text-gold" : "text-muted-foreground"}`}>{s.done ? "Completed" : "Upcoming"}</div>
                  {i < 5 && <div className="hidden md:block absolute" />}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-card to-card/40 border border-gold/30">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-3">Current Progress</div>
              <p className="text-lg text-foreground leading-relaxed mb-3">
                Piling and site protection work completed successfully.
              </p>
              <p className="text-muted-foreground">
                Basement & Ground Floor construction will start soon.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border">
              <img src={projectStatusImg} alt="Construction site progress" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT STRUCTURE */}
      <section id="investment" className="py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="06">Investment Structure</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">The <span className="text-gradient-gold italic">numbers.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded-2xl border border-border">
              {[
                ["Total Project Cost", "22.80 Crore BDT"],
                ["Land & Registration", "15.00 Crore BDT"],
                ["Construction Cost", "07.80 Crore BDT"],
                ["Total Shares", "19 Shares"],
                ["Share Value (Each)", "1.20 Crore BDT"],
                ["Commercial Use", "100%"],
              ].map(([k, v], i) => (
                <div key={k} className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-card" : "bg-card/50"}`}>
                  <div className="px-6 py-4 bg-gradient-to-r from-gold-deep/30 to-transparent border-r border-border font-medium text-foreground">{k}</div>
                  <div className="px-6 py-4 text-gold font-display text-lg">{v}</div>
                </div>
              ))}
            </div>

            {/* Donut */}
            <div className="flex flex-col items-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 42 42" className="w-full h-full -rotate-90">
                  <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.30 0.02 250)" strokeWidth="6" />
                  <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.55 0.14 65)" strokeWidth="6" strokeDasharray="65.8 100" />
                  <circle cx="21" cy="21" r="15.9" fill="transparent" stroke="oklch(0.82 0.12 82)" strokeWidth="6" strokeDasharray="34.2 100" strokeDashoffset="-65.8" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-display text-gradient-gold">22.80</div>
                  <div className="text-sm text-muted-foreground">Crore BDT</div>
                </div>
              </div>
              <div className="mt-6 space-y-2 w-full max-w-xs">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gold-deep" /> Land & Registration</span>
                  <span className="text-gold font-medium">65.8%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-gold" /> Construction</span>
                  <span className="text-gold font-medium">34.2%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL ROADMAP */}
      <section id="roadmap" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="07">Financial Roadmap</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">From investment to <span className="text-gradient-gold italic">returns.</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {[
              { icon: DollarSign, t: "Investment", d: "Shareholders Investment" },
              { icon: Building2, t: "Construction", d: "Building with Quality" },
              { icon: Store, t: "Commercial Rental", d: "Attractive Rental Income" },
              { icon: BarChart3, t: "Monthly Income", d: "Sustainable Cash Flow" },
              { icon: Users, t: "Dividend", d: "Return to Shareholders" },
            ].map(({ icon: Icon, t, d }, i, a) => (
              <div key={t} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-card border-2 border-gold/40 flex items-center justify-center shadow-gold">
                  <Icon className="w-8 h-8 text-gold" />
                </div>
                {i < a.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 w-6 h-6 text-gold/60" />
                )}
                <div className="mt-4 font-display text-lg text-foreground">{t}</div>
                <div className="text-xs text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
          <div className="p-8 rounded-2xl bg-gradient-gold text-primary-foreground flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <MapPin className="w-6 h-6" />
            <div>
              <div className="text-xl font-display font-semibold">Expected Income Start: September – October 2026</div>
              <div className="text-sm opacity-80">Shops, Offices &amp; Hotel Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY INVEST */}
      <section id="why" className="py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="08">Why Invest With Us</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">Confidence <span className="text-gradient-gold italic">by design.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, t: "Prime Location", d: "High demand area" },
              { icon: Users, t: "Experienced Management", d: "Proven track record" },
              { icon: TrendingUp, t: "Long Term Income", d: "Sustainable returns" },
              { icon: BarChart3, t: "Asset Appreciation", d: "Value grows over time" },
              { icon: ShieldCheck, t: "Transparent Operation", d: "Clear reporting & governance" },
              { icon: PieChart, t: "Strong Growth Potential", d: "Positioned for scale" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="p-7 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="font-display text-lg text-foreground">{t}</div>
                  <div className="text-sm text-muted-foreground">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & COMMITMENT */}
      <section id="governance" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-60" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <SectionLabel n="09">Corporate Governance &amp; Our Commitment</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
            Integrity. Transparency. <span className="text-gradient-gold italic">Professionalism.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are dedicated to maintaining the highest standards across all our business
            operations — focused on efficient management, strategic growth, and delivering
            sustainable value through responsible business practices.
          </p>
          <div className="mt-14 grid sm:grid-cols-3 gap-6">
            {[
              { k: "Integrity", v: "Uncompromising ethical standards in every decision." },
              { k: "Transparency", v: "Open governance and clear accountability." },
              { k: "Sustainability", v: "Long-term value through responsible practice." },
            ].map((p) => (
              <div key={p.k} className="p-8 rounded-2xl bg-card/60 border border-border backdrop-blur-sm">
                <div className="text-2xl font-display text-gradient-gold mb-3">{p.k}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section id="offices" className="py-28 bg-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel n="10">Our Offices</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-light">Where you'll <span className="text-gradient-gold italic">find us.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Corporate Office", lines: ["1/A Alauddin Bhaban", "DIT Extension Road, Fakirapool", "Motijheel, Dhaka — Level 3", "Bangladesh"] },
              { title: "Head Office", lines: ["53/2 DIT Extension Road", "Fakirapool, Nayabadan", "Dhaka-1000", "Bangladesh"] },
            ].map((o) => (
              <div key={o.title} className="group relative p-10 rounded-2xl bg-card border border-border hover:border-gold/50 transition-all">
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <MapPin className="w-7 h-7 text-gold mb-5" />
                <h3 className="text-2xl font-display mb-5">{o.title}</h3>
                <address className="not-italic space-y-1.5 text-muted-foreground">
                  {o.lines.map((l) => <div key={l}>{l}</div>)}
                </address>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel n="11">Contact</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Let's <span className="text-gradient-gold italic">connect.</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            For partnership inquiries, investment opportunities, or general correspondence —
            reach our team directly.
          </p>
          <a
            href="mailto:brholdings2025@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-gold text-primary-foreground font-medium shadow-gold hover:opacity-90 transition"
          >
            <Mail className="w-5 h-5" />
            brholdings2025@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={logoAsset} alt="Bag-e-Rahmat Holdings" className="h-10 w-auto" />
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div className="text-gold font-display text-base mb-1">Bag-e-Rahmat Holdings Limited</div>
            © {new Date().getFullYear()} — Building Today, Empowering Tomorrow.
          </div>
        </div>
      </footer>
    </div>
  );
}
