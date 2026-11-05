import { list } from "@vercel/blob";
import { CalEmbed } from "@/components/CalEmbed";
import { PortfolioVideo, type PortfolioVideoItem } from "@/components/PortfolioVideo";
import { PortfolioTabs } from "@/components/PortfolioTabs";

export const dynamic = "force-dynamic";

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

const blobVideoItems = (pathnames: string[]): PortfolioVideoItem[] =>
  pathnames.map((pathname) => ({
    src: blobVideoUrl(pathname),
  }));

const campaignStats = [
  { label: "Instagram", value: "1.25k", highlight: false },
  { label: "TikTok", value: "8k", highlight: false },
  { label: "Facebook", value: "8.2k", highlight: false },
  { label: "Total Followers", value: "17.45k", highlight: true },
  { label: "Last Month's Views", value: "990k", highlight: true },
];

function parseBangerFilename(pathname: string) {
  const filename = (pathname.split("/").pop() ?? pathname).replace(
    /\.(mp4|mov|m4v|webm)$/i,
    "",
  );
  const viewsMatch = filename.match(/(?:[-–_\s]+)?(\d+(?:\.\d+)?[kKmM])\b/);
  const viewsRaw = viewsMatch ? viewsMatch[1].toLowerCase() : null;
  const viewsNum = viewsRaw
    ? parseFloat(viewsRaw) * (viewsRaw.endsWith("m") ? 1_000_000 : 1_000)
    : 0;

  const cleanTitle = (
    viewsMatch ? filename.replace(viewsMatch[0], "") : filename
  )
    .replace(/^Edits_/i, "")
    .replace(/_\d{8}_\d{6}$/, "")
    .replace(/[_-]+/g, " ")
    .trim();

  return {
    title: cleanTitle || "Campaign Banger",
    views: viewsRaw ? `${viewsRaw} views` : "Featured",
    viewsNum,
  };
}

function isVideoBlob(pathname: string, size: number) {
  return (
    size > 0 &&
    !pathname.endsWith("/") &&
    /\.(mp4|mov|m4v|webm)$/i.test(pathname)
  );
}

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

export default async function Home() {
  const inventory = await list({ limit: 200 }).catch(() => ({ blobs: [] }));
  const videoBlobs = inventory.blobs.filter((b) => isVideoBlob(b.pathname, b.size));

  // Videos inside Composio/Bangers/ (or fallback to Composio/ if Bangers is still being uploaded)
  const composioBangerBlobs = videoBlobs.filter((b) =>
    b.pathname.toLowerCase().startsWith("composio/bangers/"),
  );
  const composioAllBlobs = videoBlobs.filter((b) =>
    b.pathname.toLowerCase().startsWith("composio/"),
  );

  const selectedBangers = (
    composioBangerBlobs.length > 0
      ? composioBangerBlobs
      : composioAllBlobs.length > 0
        ? composioAllBlobs
        : videoBlobs
  ).slice(0, 3);

  const featuredBlobVideos = selectedBangers
    .map((b) => {
      const parsed = parseBangerFilename(b.pathname);
      return {
        pathname: b.pathname,
        title: parsed.title,
        views: parsed.views,
        viewsNum: parsed.viewsNum,
      };
    })
    .sort((a, b) => b.viewsNum - a.viewsNum);

  const bangerPathSet = new Set(featuredBlobVideos.map((b) => b.pathname));
  const portfolioBlobs = videoBlobs.filter((b) => !bangerPathSet.has(b.pathname));
  const portfolioVideoPaths = (
    portfolioBlobs.length > 0 ? portfolioBlobs : videoBlobs
  ).map((b) => b.pathname);

  const portfolioCategories = [
    { label: "AI & Tools", videos: blobVideoItems(portfolioVideoPaths) },
  ];

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

        {/* ── CURRENT CAMPAIGN #1: COMPOSIO ──────────────────────── */}
        <section className="campaign section-wrap" id="CurrentCampaign">
          <div className="container">
            {/* Top Header Row: Kicker + Logo/Title + Subheading + CTA */}
            <div className="campaign-top">
              <div className="campaign-brand-block">
                <span className="campaign-kicker">Current Campaign #1</span>
                <div className="campaign-title-row">
                  <img
                    src="/assets/brands/composio.png"
                    alt="Composio logo"
                    className="campaign-logo"
                  />
                  <h2 className="campaign-title">Composio</h2>
                </div>
                <p className="campaign-sub">
                  The action &amp; integration layer for AI agents — letting
                  Claude, Cursor, and custom AI workflows connect to 250+ tools
                  and APIs out of the box.
                </p>
              </div>

              <div className="campaign-cta-wrap">
                <a
                  href="https://composio.dev/for-you"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary campaign-cta"
                >
                  Try Composio ↗
                </a>
              </div>
            </div>

            {/* Single Clean Stats Bar */}
            <div className="campaign-stats-bar" aria-label="Campaign reach and views">
              {campaignStats.map((stat) => (
                <div
                  key={stat.label}
                  className={`campaign-stat-item ${stat.highlight ? "is-highlight" : ""}`}
                >
                  <strong className="campaign-stat-value">{stat.value}</strong>
                  <span className="campaign-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* 3 Recent Bangers */}
            <div className="campaign-bangers-head">
              <h3>Recent bangers</h3>
            </div>

            <div className="grid-3 best-grid">
              {featuredBlobVideos.map((item, idx) => (
                <div key={item.pathname} className="featured-video-card">
                  <PortfolioVideo
                    src={blobVideoUrl(item.pathname)}
                    eager={idx === 0}
                  />
                  <div className="featured-video-meta">
                    <p className="featured-video-title">{item.title}</p>
                    <span className="featured-video-tag">{item.views}</span>
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
                Real content for real AI &amp; tech brands.
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
