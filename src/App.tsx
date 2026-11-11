import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const serif = { fontFamily: "'Instrument Serif', serif" };

// ====== EDIT THESE ======
const EMAIL = "janishtzx@gmail.com";
const COFFEE_URL = "https://buymeacoffee.com/YOUR_USERNAME"; // replace after you create your page
const MY_PHOTO = "/assets/profile/profile.png"; // replace with your photo (e.g. "/janish.jpg" inside /public)

type Project = {
  title: string;
  category: string;
  description: string;
  result: string;
  thumb: string; // replace with your own thumbnail later
  drive?: string; // Google Drive "/preview" link
  youtubeId?: string; // if you upload to YouTube, put only the video ID here
tools: ToolId[];
};

const projects: Project[] = [
  {
    title: "Rone Garage",
    category: "Automotive",
    description: "High-energy cuts synced with powerful engine beats, showcasing Dubai’s automotive excellence, premium craftsmanship, and workshop expertise.",
    result: "Built for: brand trust & service enquirie",
    thumb: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
    drive: "https://drive.google.com/file/d/13YXLSIiF4dhAQNFq4zsbeD5enfqcnu4b/preview",
      tools: ["premiere", "aftereffects"],
  },
  {
    title: "Nexuslite",
    category: "Real estate",
    description: "Smooth cinematic walkthroughs, premium color grading, and elegant motion graphics that highlight property value, strengthen brand identity, and attract potential investors in Dubai’s real estate market.",
    result: "Built for: property interest & qualified leads",
    thumb: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80",
    drive: "https://drive.google.com/file/d/1EPWvWTQrlM0MY_BJLYToDk_H-k1lJmnP/preview",
    tools: ["premiere", "aftereffects"],
  },
  {
    title: "Makkah Market",
    category: "Offer campaign",
    description: "AI-generated promotional visuals, creative product compositions, and dynamic offer-focused editing to highlight Makkah Supermarket’s Dhamakka Offers, capture attention, and boost brand engagement across Saudi Arabia.",
    result: "Built for: offer awareness & store footfall",
    thumb: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80",
    drive: "https://drive.google.com/file/d/1BHb7cF6X2N4x96oGdNZbvt_s5UOEhFgU/preview",
    tools: ["premiere", "gemini"],
  },
  {
    title: "Medical Ad",
    category: "Advertisement",
    description: "Professional Arabic voiceovers, engaging medical-focused storytelling, and clear sound design to communicate healthcare services, build institutional credibility, and establish trust with Arabic-speaking audiences.",
    result: "Built for: Arabic medical language learning & awareness",
    thumb: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    drive: "https://drive.google.com/file/d/1wrigfkdE-xMGkic1eMZK98KGUzS674cF/preview",
    tools: ["premiere", "aftereffects"],
  },
  {
    title: "Arabuni Medical",
    category: "Advertisement",
    description: "A professionally crafted medical promotional video combining informative storytelling, clear visuals, and engaging Arabic voiceovers to highlight Arabic Uni’s healthcare education, strengthen institutional credibility, and build audience trust.",
    result: "Built for: educational credibility & institutional brand awareness",
    thumb: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    drive: "https://drive.google.com/file/d/1YrfEeIn_15B69zpXin55P6Hwn_A6iKBB/preview",
    tools: ["premiere", "aftereffects"],
  
  },
];

type ToolId = "premiere" | "aftereffects" | "capcut" | "claude" | "gemini" | "flow";

const TOOL_NAMES: Record<ToolId, string> = {
  premiere: "Premiere Pro",
  aftereffects: "After Effects",
  capcut: "CapCut",
  claude: "Claude",
  gemini: "Gemini",
  flow: "Google Flow",
};

function ToolIcon({ id, labeled = false }: { id: ToolId; labeled?: boolean }) {
  const box =
    "flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 backdrop-blur-md";

  let icon: JSX.Element;

  switch (id) {
    case "premiere":
      icon = <span className="text-[11px] font-bold text-[#9999FF]">Pr</span>;
      break;
    case "aftereffects":
      icon = <span className="text-[11px] font-bold text-[#D291FF]">Ae</span>;
      break;
    case "capcut":
      icon = (
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none" stroke="currentColor"
          strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 8V6.5A1.5 1.5 0 0 1 5.5 5H15.5A1.5 1.5 0 0 1 17 6.5V7" />
          <path d="M4 14v3.5A1.5 1.5 0 0 0 5.5 19H15.5A1.5 1.5 0 0 0 17 17.5V17" />
          <path d="M4 8l16.5 8.5" />
          <path d="M4 14L20.5 5.5" />
        </svg>
      );
      break;
    case "claude":
      icon = (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#D97757"
          strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
          <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
        </svg>
      );
      break;
    case "gemini":
      icon = (
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <defs>
            <linearGradient id="gemGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4285F4" />
              <stop offset="50%" stopColor="#9B72CB" />
              <stop offset="100%" stopColor="#D96570" />
            </linearGradient>
          </defs>
          <path fill="url(#gemGrad)" d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10z" />
        </svg>
      );
      break;
    case "flow":
      icon = (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#8AB4F8"
          strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M3 9c3-4 6-4 9 0s6 4 9 0M3 15c3-4 6-4 9 0s6 4 9 0" />
        </svg>
      );
      break;
  }

 if (labeled) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-md">
      <span className={box}>{icon}</span>
      <span className="text-sm font-medium text-white/90">{TOOL_NAMES[id]}</span>
    </span>
  );
}

return (
  <span className={box} title={TOOL_NAMES[id]} aria-label={TOOL_NAMES[id]}>
    {icon}
  </span>
);
}

const aboutImages = [
  { src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=480&q=80", alt: "Camera filming a landscape" },
  { src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=480&q=80", alt: "Film camera on a production set" },
];
const display = { fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "-0.03em" };
const strengths = [
  "Trend-aware edits that follow what your audience is watching now",
  "Visuals matched to your customers, not just your taste",
  "Trending beats and sound design for reels that get replayed",
  "Cuts made to bring enquiries, sales and followers",
];

function embedUrl(p: Project) {
  return p.youtubeId
    ? `https://www.youtube.com/embed/${p.youtubeId}?autoplay=1&rel=0`
    : p.drive!;
}

function PlayIcon() {
  return (
    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition-transform group-hover:scale-110">
      <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    </span>
  );
}

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/15 bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
          aria-label="Close video"
        >
          ✕
        </button>
        <div className="aspect-[9/16] max-h-[70vh] w-full bg-black">
          <iframe
            className="h-full w-full border-0"
            src={embedUrl(project)}
            title={`${project.title} reel`}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="p-5">
          <p className="text-xs text-white/55">{project.category}</p>
          <h3 className="mt-1 text-3xl" style={serif}>{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/70">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const isWorkPage = window.location.pathname.replace(/\/+$/, "") === "/work";
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <video
        className="fixed inset-0 z-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="fixed inset-0 z-0 bg-slate-950/35" aria-hidden="true" />

      <nav className="relative z-10 mx-auto flex max-w-7xl flex-row items-center justify-between px-6 py-6 sm:px-8">
      <a href="/" className="text-2xl font-bold leading-tight text-foreground" style={display}>
  Janish T.
</a>
        {isWorkPage && (
          <div className="flex items-center gap-6 text-sm text-white/75">
            <a href="#contact" className="transition-colors hover:text-white">Contact</a>
            <a href="/" className="transition-colors hover:text-white">
              Back home <span aria-hidden="true">↗</span>
            </a>
          </div>
        )}
      </nav>

      {isWorkPage ? (
        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8">
          {/* ABOUT */}
       <section className="animate-fade-rise grid items-start gap-10 pb-16 pt-10 md:grid-cols-[1fr_260px] md:gap-16 md:pb-24 md:pt-20 lg:grid-cols-[1fr_280px]">
  {/* Photo: first on mobile, right side on desktop */}
  <div className="order-first mx-auto w-full max-w-[200px] md:order-none md:col-start-2 md:row-start-1 md:max-w-none md:sticky md:top-8">
    <img
      src={MY_PHOTO}
      alt="Janish T., video editor"
      className="aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/20"
    />
    <p className="mt-3 text-center text-sm text-white/70">Janish T. · Video Editor</p>
  </div>

  <div className="md:col-start-1 md:row-start-1">
    <p className="text-sm font-medium tracking-wide text-white/60">About me</p>

   <h1
  className="mt-3 max-w-3xl text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl"
  style={display}
>
  See the vision, <span className="text-white/60">elevate your business.</span>
</h1>

    <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
      I’m Janish, a creative video editor who actively edits across the latest trends.
      I study what’s working right now, find who your business is really speaking to,
      and turn your brand into visuals that fit that audience, cut to trending beats
      that keep people watching.
    </p>
    <p className="mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
      Whether you run a clinic, a garage, a shop or a property business, my edits are
      made to help you get noticed, earn trust and bring in more customers.
    </p>

    {/* Highlighted points */}
    <div className="mt-12">
   <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl" style={display}>
  How my edits grow your business
</h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {strengths.map((s) => (
          <li
            key={s}
            className="flex items-start gap-4 rounded-2xl border border-white/25 bg-white/10 p-5 text-base font-medium leading-7 text-white shadow-xl backdrop-blur-md"
          >
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-900"
              aria-hidden="true"
            >
              ✓
            </span>
            {s}
          </li>
        ))}
      </ul>
    </div>

   <div className="mt-12 border-t border-white/15 pt-6">
  <h2 className="text-sm font-medium text-white/60">Software I use</h2>
  <div className="mt-4 flex flex-wrap gap-3">
    {(["premiere", "aftereffects", "capcut"] as ToolId[]).map((t) => (
      <ToolIcon key={t} id={t} labeled />
    ))}
  </div>
</div>
  </div>
</section>

          {/* PROJECTS */}
          <section className="liquid-glass rounded-[2rem] bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
               <p className="mb-3 text-sm font-medium tracking-wide text-white/60">Selected work</p>
<h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl" style={display}>Projects</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                  Real edits made for real businesses. Tap any reel to watch it right here.
                </p>
              </div>
              {/* <a
                href={COFFEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full bg-[#FFDD00] px-5 py-2.5 text-sm font-medium text-slate-900 shadow-lg transition-transform hover:scale-105"
              >
                <span aria-hidden="true">☕</span> Buy me a coffee
              </a> */}
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="min-w-0">
                  <button
                    onClick={() => setActive(project)}
                    className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label={`Play ${project.title}`}
                  >
                    <img
                      src={project.thumb}
                      alt={`${project.title} thumbnail`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <PlayIcon />
                    </span>
                    <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs text-white/90 backdrop-blur">
                      {project.category}
                    </span>
                  </button>
                  <div className="px-1 pt-4">

                    {/* ======= Project Title ======= */}
                   <h3 className="text-xl font-bold leading-tight text-white" style={display}>{project.title}</h3>


                    <p className="mt-1 text-sm leading-6 text-white/65">{project.description}</p>
                   <div className="mt-3 flex items-center gap-2">
  <span className="mr-1 text-xs text-white/50">Tools</span>
  {project.tools.map((t) => (
    <ToolIcon key={t} id={t} />
  ))}
</div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mx-auto mt-20 max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl" style={display}>
  Let’s grow your business with video.
</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
              Tell me about your brand and who you want to reach. I’ll reply with ideas for
              edits that fit your audience.
            </p>
            <Button asChild variant="glass" size="hero" className="mt-8 gap-3">
              <a href={`mailto:${EMAIL}?subject=Video%20editing%20enquiry`}>Email {EMAIL}</a>
            </Button>
          </section>

          {active && <VideoModal project={active} onClose={() => setActive(null)} />}
        </main>
      ) : (
        <section className="relative z-10 flex flex-col items-center justify-center px-6 py-[90px] pb-40 pt-4 text-center sm:pt-20">
          <p className="animate-fade-rise mb-8 text-[14px] uppercase tracking-wide text-muted-foreground sm:text-[20px] md:text-[30px]">
            Janish T. | Video Editor
          </p>

          <h1 className="animate-fade-rise max-w-7xl text-5xl font-normal tracking-[-2.46px] sm:text-7xl md:text-8xl" style={serif}>
            Every Frame Tells a Story.
            <br />
          </h1>

          <div className="animate-fade-rise-delay mt-8 flex items-center justify-center gap-4 sm:gap-5">
            {[
              { t: "Pr", n: "Premiere Pro" },
              { t: "Ae", n: "After Effects" },
            ].map((s) => (
              <div key={s.t} className="flex flex-col items-center gap-1.5" title={`Adobe ${s.n}`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 text-white/85 transition-colors hover:border-white hover:text-white sm:h-12 sm:w-12">
                  <span className="text-sm font-semibold tracking-tight sm:text-base">{s.t}</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest text-white/55">{s.n}</span>
              </div>
            ))}

            <div className="flex flex-col items-center gap-1.5" title="CapCut">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 text-white/85 transition-colors hover:border-white hover:text-white sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 8V6.5A1.5 1.5 0 0 1 5.5 5H15.5A1.5 1.5 0 0 1 17 6.5V7" />
                  <path d="M4 14v3.5A1.5 1.5 0 0 0 5.5 19H15.5A1.5 1.5 0 0 0 17 17.5V17" />
                  <path d="M4 8l16.5 8.5" />
                  <path d="M4 14L20.5 5.5" />
                </svg>
              </div>
              <span className="text-[9px] uppercase tracking-widest text-white/55">CapCut</span>
            </div>
          </div>

          <p className="animate-fade-rise-delay mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Crafting cinematic edits, engaging reels, and compelling advertisements through creative
            storytelling, rhythm, and sound.
          </p>

          <Button asChild variant="glass" size="hero" className="animate-fade-rise-delay-2 mt-12 gap-3">
            <a href="/work">Explore My Work <span aria-hidden="true">↗</span></a>
          </Button>

          <p className="animate-fade-rise-delay-2 mt-8 text-sm uppercase tracking-wide text-muted-foreground">
            Video Editing · Color Grading · Sound Design
          </p>
        </section>
      )}
    </div>
  );
}
