import { CalEmbed } from "@/components/CalEmbed";
import { PortfolioVideo, type PortfolioVideoItem } from "@/components/PortfolioVideo";
import { PortfolioTabs } from "@/components/PortfolioTabs";

const brandLogos = [
  { name: "Manus", src: "/assets/brands/manus.png" },
  { name: "Composio", src: "/assets/brands/composio.png" },
  { name: "Polymarket", src: "/assets/brands/polymarket.png" },
  { name: "Pingo AI", src: "/assets/brands/pingo.png" },
  { name: "Airalo", src: "/assets/brands/airalo.png" },
  { name: "Detris AI", src: "/assets/brands/detris.png" },
  { name: "Clawbite", src: "/assets/brands/clawbite.png" },
  { name: "Language App", src: "/assets/brands/language-app.png" },
];

const blobVideoUrl = (pathname: string) =>
  `/api/blob-video?pathname=${encodeURIComponent(pathname)}`;

const blobPosterUrl = (pathname: string) => {
  const filename = pathname
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `/assets/video-posters/${filename}.jpg`;
};

const blobVideoItems = (pathnames: string[]): PortfolioVideoItem[] =>
  pathnames.map((pathname) => ({
    src: blobVideoUrl(pathname),
    poster: blobPosterUrl(pathname),
  }));

const featuredBlobVideos = [
  {
    pathname: "UGC Content/Clients/Pingo/Snapchat-785767472.mp4",
    title: "Speak with confidence",
    client: "Pingo AI",
    tag: "Language Learning",
  },
  {
    pathname: "UGC Content/Clients/Pipo AI/Pipo-AI-Day-11-V2.mp4",
    title: "AI daily coaching flow",
    client: "Pipo AI",
    tag: "AI & Health",
  },
  {
    pathname: "UGC Content/Clients/Airalo/Video-1-with-captions.mp4",
    title: "Instant eSIM travel hook",
    client: "Airalo",
    tag: "Travel Tech",
  },
];

const travelBlobVideos = [
  "UGC Content/Clients/Airalo/19.6_Video1_PinkShell_Ed.mp4",
  "UGC Content/Clients/Airalo/airalo 2 - Footie! 9-16 - Captions.mov",
  "UGC Content/Clients/Airalo/Video 1 - Airport 9-16.mov",
  "UGC Content/Clients/Airalo/Video-1-with-captions.mp4",
];

const techAiBlobVideos = [
  "UGC Content/Clients/Clawbite/0-to-car.mov",
  "UGC Content/Clients/Clawbite/Clawbite-Today2.m4v",
];

const languageLearningBlobVideos = [
  "UGC Content/Clients/Pingo/Snapchat-1004537007.mp4",
  "UGC Content/Clients/Pingo/Snapchat-1007477723.mp4",
  "UGC Content/Clients/Pingo/Snapchat-1202039003-1.mp4",
  "UGC Content/Clients/Pingo/Snapchat-785767472.mp4",
];

const healthFitnessBlobVideos = [
  "UGC Content/Clients/Pipo AI/Pipo-AI-Day-10-V4.mp4",
  "UGC Content/Clients/Pipo AI/Pipo-AI-Day-11-V2.mp4",
  "UGC Content/Clients/Pipo AI/Pipoday6.mp4",
];

const portfolioCategories = [
  { label: "All", videos: [] },
  { label: "Tech & AI", videos: blobVideoItems(techAiBlobVideos) },
  { label: "Travel", videos: blobVideoItems(travelBlobVideos) },
  { label: "Language Learning", videos: blobVideoItems(languageLearningBlobVideos) },
  { label: "Health & Fitness", videos: blobVideoItems(healthFitnessBlobVideos) },
];

const testimonials = [
  {
    quote:
      "It's been a few months now and we've seen good growth, Ed is always trying different angles and is sometimes hilarious with his ideas.",
    name: "Jay",
    role: "Founder",
    image: "/assets/testimonials/jay.webp",
  },
  {
    quote:
      "Always tinkering and searching for new concepts that work, Ed has slotted straight into the team and makes some really funny content too!",
    name: "Maggie",
    role: "Creator Campaign Manager",
    image: "/assets/testimonials/maggie.webp",
  },
  {
    quote:
      "Ed gave us some good insights not only for the content but product as well, we've iterated and learnt so much together already.",
    name: "Julie",
    role: "Campaign Manager",
    image: "/assets/testimonials/julie.webp",
  },
];

export default function Home() {
  return (
    <div className="site">
      {/* ── NAV ─────────────────────────────────────────────────── */}
      <header className="site-header">
        <div className="container header-inner">
          <a href="#content" className="logo-link" aria-label="Ed Corner UGC">
            <span className="logo-text">Ed Corner</span>
          </a>
          <nav className="header-nav" aria-label="Primary site navigation">
            <a href="#HowIWork" className="header-link">
              How I work
            </a>
            <a href="#Portfolio" className="header-link">
              Portfolio
            </a>
            <a href="#Reviews" className="header-link">
              Reviews
            </a>
            <a href="#About" className="header-link">
              About
            </a>
            <a href="#GetInTouch" className="header-link">
              Contact
            </a>
          </nav>
          <a href="#GetInTouch" className="btn btn-primary header-cta">
            Book a call
          </a>
        </div>
      </header>

      <main id="content">
        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="hero section-wrap">
          <div className="container hero-grid">
            <div className="hero-text">
              <div className="hero-intro-row">
                <span className="hero-greeting">Hi, I&apos;m Ed</span>
                <img
                  src="/assets/profile/ed-logo.png"
                  alt="Ed Corner"
                  className="hero-greeting-avatar"
                />
              </div>
              <div className="hero-proof-badge">
                <span className="hero-stars" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
                <span>Completed 50+ brand deals · AI &amp; Tech UGC Creator</span>
              </div>
              <h1>
                AI &amp; Tech UGC
                <br />
                <span className="slaps">THAT SLAPS</span>
              </h1>
              <p className="hero-sub">
                Your new favourite <strong>AI &amp; Tech obsessed UGC creator</strong>{" "}
                from the UK. With over 6 years of experience in product design,
                marketing, and conversion rate optimisation, I know what it takes
                to get a customer to actually use your product.
              </p>
              <div className="hero-actions">
                <a href="#GetInTouch" className="btn btn-primary">
                  Book a call
                </a>
                <a href="#Portfolio" className="btn btn-secondary">
                  See my work
                </a>
              </div>
            </div>

            <div className="hero-image-wrap">
              <div className="hero-image-panel">
                <img
                  src="/assets/profile/ed-hero.jpg"
                  alt="Ed Corner — AI & Tech UGC Creator"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── BRAND TICKER ────────────────────────────────────────── */}
        <section className="brands" aria-label="Brands I've worked with">
          <div className="container">
            <p className="brands-label">Brands I&apos;ve worked with recently</p>
            <div className="marquee-wrap" aria-label="Brand logos marquee">
              <div className="marquee">
                <div className="marquee-track">
                  {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
                    <div key={`${brand.name}-${i}`} className="brand-tile">
                      <img
                        src={brand.src}
                        alt={i < brandLogos.length ? brand.name : ""}
                        className="brand-logo-img"
                      />
                      <span className="brand-name">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── RECENT BANGERS ──────────────────────────────────────── */}
        <section className="best section-wrap">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Recent bangers</h2>
              <p className="section-sub">
                A few of the vertical cuts that hooked fast and converted recently.
              </p>
            </div>

            <div className="grid-3 best-grid">
              {featuredBlobVideos.map((item, idx) => (
                <div key={item.pathname} className="featured-video-card">
                  <PortfolioVideo
                    src={blobVideoUrl(item.pathname)}
                    poster={blobPosterUrl(item.pathname)}
                    eager={idx === 0}
                  />
                  <div className="featured-video-meta">
                    <div>
                      <p className="featured-video-title">{item.title}</p>
                      <p className="featured-video-client">{item.client}</p>
                    </div>
                    <span className="featured-video-tag">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW I WORK ──────────────────────────────────────────── */}
        <section className="work section-wrap" id="HowIWork">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">How I work</h2>
              <p className="section-sub">
                Three things that set my content apart.
              </p>
            </div>

            <div className="grid-3 work-grid">
              <article className="work-card">
                <div className="work-icon">01</div>
                <h3>Message-market fit first</h3>
                <p>
                  Every concept is built around audience pains, objections, and
                  outcomes before a single frame is shot. The content is designed
                  to convert, not just entertain.
                </p>
              </article>

              <article className="work-card">
                <div className="work-icon">02</div>
                <h3>Native-feeling content</h3>
                <p>
                  TikToks, Reels, and Shorts that blend into the feed. Fast hooks,
                  real energy, and product-as-hero framing that doesn&apos;t feel
                  like an ad.
                </p>
              </article>

              <article className="work-card">
                <div className="work-icon">03</div>
                <h3>Reliable partner</h3>
                <p>
                  Fast communication, clean handover, and reusable assets your
                  team can run across paid social, landing pages, and email.
                  Not a one-off creator.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ───────────────────────────────────────────── */}
        <section className="portfolio section-wrap" id="Portfolio">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Full Portfolio</h2>
              <p className="section-sub">
                Real content for real brands. Filter by category.
              </p>
            </div>

            <PortfolioTabs categories={portfolioCategories} />
          </div>
        </section>

        {/* ── CLIENT TESTIMONIALS ─────────────────────────────────── */}
        <section className="reviews section-wrap" id="Reviews" aria-label="Client reviews">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">What founders &amp; teams say</h2>
              <p className="section-sub">
                Feedback from brands I&apos;ve partnered with on repeatable UGC.
              </p>
            </div>

            <div className="grid-3 reviews-grid">
              {testimonials.map((t) => (
                <article key={t.name} className="review-card">
                  <div className="review-stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                  <blockquote className="review-quote">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="review-author">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="review-avatar"
                    />
                    <div>
                      <strong className="review-name">{t.name}</strong>
                      <span className="review-role">{t.role}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 THINGS YOU SHOULD KNOW ────────────────────────────── */}
        <section className="things section-wrap" id="About">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">5 things you should know about me</h2>
              <p className="section-sub">
                The short version of who I am and how I work.
              </p>
            </div>

            <ol className="numbered-list">
              <li>
                <span>
                  I&apos;ve spent 6 years in marketing, CRO, and customer experience
                  before I ever picked up a camera — so every video is built on
                  how people actually make buying decisions.
                </span>
              </li>
              <li>
                <span>
                  I&apos;m an AI &amp; tech specialist. That&apos;s where the
                  momentum is, and it&apos;s where I&apos;ve found the hooks that
                  consistently go viral.
                </span>
              </li>
              <li>
                <span>
                  I batch-record. One day of filming can cover a week&apos;s worth of
                  content — so I can move fast without dropping quality.
                </span>
              </li>
              <li>
                <span>
                  I&apos;m not here to be a long-term agency dependency. I&apos;ll make
                  your product look obvious, hand over decent assets, and you can
                  run them wherever you need.
                </span>
              </li>
              <li>
                <span>
                  I&apos;m building toward YouTube long-form full-time. Short-form is
                  the engine right now, but the endgame is bigger content — which
                  means I&apos;m motivated to make every piece of short-form count.
                </span>
              </li>
            </ol>
          </div>
        </section>

        {/* ── CTA + CAL.COM EMBED ─────────────────────────────────── */}
        <section className="cta section-wrap" id="GetInTouch">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-text">
                <h2 className="cta-heading">
                  Let&apos;s build something that actually converts
                </h2>
                <p className="cta-sub">
                  Book a 30-minute call below or send an email — no pressure, no
                  generic pitch. Just a real conversation about your product and
                  your audience.
                </p>
              </div>
              <div className="cta-actions">
                <a
                  href="mailto:Hello@edcorner.co.uk"
                  className="btn btn-primary cta-btn"
                >
                  Send me an email ✉️
                </a>
              </div>
            </div>

            <CalEmbed />
          </div>
        </section>
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Made with good food and energy</p>
          <p className="footer-copy">
            © {new Date().getFullYear()} Ed Corner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
