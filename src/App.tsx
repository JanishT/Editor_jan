import { Button } from "@/components/ui/button";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
const serif = { fontFamily: "'Instrument Serif', serif" };

const aboutImages = [
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=480&q=80",
    alt: "Camera filming a landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=480&q=80",
    alt: "Cinema seats in a theater",
  },
  {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=480&q=80",
    alt: "Film camera on a production set",
  },
];

const projects = [
  { title: "Rone Garage", category: "Automotive", src: "https://drive.google.com/file/d/13YXLSIiF4dhAQNFq4zsbeD5enfqcnu4b/preview" },
  { title: "Nexuslite", category: "Real estate", src: "https://drive.google.com/file/d/1EPWvWTQrlM0MY_BJLYToDk_H-k1lJmnP/preview" },
  { title: "Makkah Market", category: "Offer campaign", src: "https://drive.google.com/file/d/1BHb7cF6X2N4x96oGdNZbvt_s5UOEhFgU/preview" },
  { title: "Medical Ad", category: "Commercial", src: "https://drive.google.com/file/d/1wrigfkdE-xMGkic1eMZK98KGUzS674cF/preview" },
  { title: "Arabuni Medical", category: "Brand story", src: "https://drive.google.com/file/d/1YrfEeIn_15B69zpXin55P6Hwn_A6iKBB/preview" },
];

function ProjectVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className="relative h-full w-full">
      <iframe
        className="h-full w-full scale-[1.15] border-0"
        src={src}
        title={`${title} project video`}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

export default function App() {
  const isWorkPage = window.location.pathname.replace(/\/+$/, "") === "/work";

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
        <a href="/" className="text-3xl text-foreground" style={serif}>
          Janish T.
        </a>
        {isWorkPage && (
          <a href="/" className="text-sm text-white/75 transition-colors hover:text-white">
            Back home <span aria-hidden="true">↗</span>
          </a>
        )}
      </nav>

      {isWorkPage ? (
        <main className="relative z-10 mx-auto max-w-7xl px-6 pb-20 sm:px-8">
          <section className="animate-fade-rise grid items-center gap-10 pb-16 pt-12 md:grid-cols-[1fr_0.85fr] md:gap-16 md:pb-24 md:pt-20">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.28em] text-white/65">A little about me</p>
              <h1 className="text-6xl font-normal tracking-tight sm:text-7xl md:text-8xl" style={serif}>
                About me<span className="text-white/55">.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                I’m Janish, a video editor who loves turning ordinary moments into stories people
                want to feel. From the first rough cut to the final color pass, I bring together
                thoughtful pacing, rich visuals, and sound to make every frame count.
              </p>
              <p className="mt-4 text-sm text-white/55">Currently creating films, brand stories, and social-first video.</p>
              <div className="mt-8">
                <h2 className="text-xs uppercase tracking-[0.24em] text-white/60">Used softwares</h2>
                <p className="mt-3 text-sm text-white/85 sm:text-base">
                  Adobe Premiere Pro <span className="px-2 text-white/40">·</span> After Effects
                  <span className="px-2 text-white/40">·</span> CapCut
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 md:pt-10">
              {aboutImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`h-32 w-full rounded-2xl object-cover shadow-xl sm:h-44 ${index === 1 ? "translate-y-6" : ""}`}
                  loading="lazy"
                />
              ))}
            </div>
          </section>

          <section className="liquid-glass rounded-[2rem] bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl sm:p-8 md:p-10">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-white/60">Selected work</p>
                <h2 className="text-5xl font-normal sm:text-6xl" style={serif}>Projects</h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-white/60">
                Short-form reels and full-frame edits. Videos stay fully visible in each portrait frame, including landscape clips.
              </p>
            </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group min-w-0">
                    <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-2xl border border-white/15 bg-black/50 shadow-xl">
                    <ProjectVideo src={project.src} title={project.title} />
                  </div>
                  <div className="flex items-baseline justify-between gap-3 px-1 pt-4">
                    <h3 className="text-lg text-white">{project.title}</h3>
                    <span className="text-right text-xs text-white/55">{project.category}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      ) : (
        <section className="relative z-10 flex flex-col items-center justify-center px-6 py-[90px] pb-40 pt-20 text-center ">
          <p className="animate-fade-rise mb-8 text-[14px] uppercase tracking-wide text-muted-foreground sm:text-[20px] md:text-[30px]">
            Janish T. | Video Editor
          </p>

          <h1 className="animate-fade-rise max-w-7xl text-5xl font-normal tracking-[-2.46px] sm:text-7xl md:text-8xl" style={serif}>
            Every Frame Tells a Story.
            <br />
          </h1>
<div className="animate-fade-rise-delay mt-8 flex items-center justify-center gap-4 sm:gap-5">
  {/* Premiere Pro */}
  <div className="flex flex-col items-center gap-1.5" title="Adobe Premiere Pro">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 text-white/85 transition-colors hover:border-white hover:text-white sm:h-12 sm:w-12">
      <span className="text-sm font-semibold tracking-tight sm:text-base">Pr</span>
    </div>
    <span className="text-[9px] uppercase tracking-widest text-white/55">Premiere Pro</span>
  </div>

  {/* After Effects */}
  <div className="flex flex-col items-center gap-1.5" title="Adobe After Effects">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/70 text-white/85 transition-colors hover:border-white hover:text-white sm:h-12 sm:w-12">
      <span className="text-sm font-semibold tracking-tight sm:text-base">Ae</span>
    </div>
    <span className="text-[9px] uppercase tracking-widest text-white/55">After Effects</span>
  </div>

  {/* CapCut */}
 {/* CapCut */}
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
      {/* top and bottom rounded frame */}
      <path d="M4 8V6.5A1.5 1.5 0 0 1 5.5 5H15.5A1.5 1.5 0 0 1 17 6.5V7" />
      <path d="M4 14v3.5A1.5 1.5 0 0 0 5.5 19H15.5A1.5 1.5 0 0 0 17 17.5V17" />
      {/* crossing diagonals */}
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

          {/* <Button asChild variant="glass" size="hero" className="animate-fade-rise-delay-2 mt-12 gap-3">
            <a href="/work">Explore My Work <span aria-hidden="true">↗</span></a>
          </Button> */}
          <a
  href="https://drive.google.com/drive/folders/15aAsuN1vt6S4jkhroczUVuWqg6LqUqih"
  target="_blank"
  rel="noopener noreferrer"
  className="animate-fade-rise-delay-2 group mt-10 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-xs uppercase tracking-widest text-white/85 transition-colors hover:border-white hover:bg-white/10 hover:text-white sm:text-sm"
>
  View Portfolio
  <span
    aria-hidden="true"
    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    ↗
  </span>
</a>

          <p className="animate-fade-rise-delay-2 mt-8 text-sm uppercase tracking-wide text-muted-foreground">
            Video Editing · Color Grading · Sound Design
          </p>
        </section>
      )}
    </div>
  );
}
