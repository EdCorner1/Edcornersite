import { CalEmbed } from "@/components/CalEmbed";
import { PortfolioVideo } from "@/components/PortfolioVideo";
import { PortfolioTabs } from "@/components/PortfolioTabs";

const brandLogos = [
  {
    alt: "Detris AI",
    src: "/assets/brands/detris.png",
  },
  {
    alt: "Pingo",
    src: "/assets/brands/pingo.png",
  },
  {
    alt: "Clawbite.com",
    src: "/assets/brands/clawbite.png",
  },
  {
    alt: "Polymarket",
    src: "/assets/brands/polymarket.png",
  },
  {
    alt: "Language app",
    src: "/assets/brands/language-app.png",
  },
  {
    alt: "Airalo",
    src: "/assets/brands/airalo.png",
  },
];

const featuredBlobVideos = [
  "UGC Content/Clients/Pingo/Snapchat-1007477723.mp4",
  "UGC Content/Clients/Clawbite/0-to-car.mov",
  "UGC Content/Clients/Airalo/airalo 2 - Footie! 9-16 - Captions.mov",
];

const blobVideoUrl = (pathname: string) => `/api/blob-video?pathname=${encodeURIComponent(pathname)}`;
const blobVideoUrls = (pathnames: string[]) => pathnames.map(blobVideoUrl);

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

const featuredVideos = blobVideoUrls(featuredBlobVideos);
const travelVideos = blobVideoUrls(travelBlobVideos);
const techAiVideos = blobVideoUrls(techAiBlobVideos);
const languageLearningVideos = blobVideoUrls(languageLearningBlobVideos);
const healthFitnessVideos = blobVideoUrls(healthFitnessBlobVideos);

const portfolioCategories = [
  { label: "All", videos: [] },
  { label: "Tech & AI", videos: techAiVideos },
  { label: "Travel", videos: travelVideos },
  { label: "Language Learning", videos: languageLearningVideos },
  { label: "Health & Fitness", videos: healthFitnessVideos },
];

const serviceCards = [
  {
    emoji: "🎬",
    label: "Creative",
    title: "Scroll-stopping vertical videos",
    copy: "Native-feeling TikToks, Reels, and Shorts that blend into the feed, hook fast, and make the product the hero.",
  },
  {
    emoji: "🧠",
    label: "Strategy",
    title: "Message-market fit before filming",
    copy: "Each concept is built around audience pains, objections, and outcomes so the final cut is designed to convert — not just entertain.",
  },
  {
    emoji: "🤝",
    label: "Execution",
    title: "Reliable partner, not a one-off creator",
    copy: "Fast communication, clean handover, and reusable assets your team can run across paid social, landing pages, and email.",
  },
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
    role: "Creator campaign manager",
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

function VideoGrid({ videos }: { videos: string[] }) {
  return (
    <div className="portfolio-video-grid">
      {videos.map((src, index) => (
        <PortfolioVideo key={`${src}-${index}`} src={src} />
      ))}
    </div>
  );
}



export default function Home() {
  return (
    <main id="content">
      <header className="site-header">
        <a className="logo-link" href="#content" aria-label="Ed Corner UGC">
          <img
            src="/assets/profile/ed-logo.png"
            alt="Ed Corner UGC"
          />
          <span>Ed Corner</span>
        </a>
        <nav aria-label="Primary Site Navigation">
          <a href="#Portfolio">Portfolio</a>
        </nav>
        <a className="book-button" href="#GetInTouch">Book a call with me</a>
      </header>

      <section className="hero section-wrap">
        <div className="rating-row" aria-label="Rated 4.6 out of 5">
          <span>★★★★★</span>
        </div>
        <p className="proof-line">Completed over 50 brand deals, with many happy clients 🙂</p>
        <div className="intro-row">
          <h2>Hi, I&apos;m Ed</h2>
          <img
            src="/assets/profile/ed-headshot.webp"
            alt=""
          />
        </div>
        <h1>Solo founder and tech UGC creator</h1>
        <p className="hero-copy">
          Your new favourite <strong>AI &amp; Tech obsessed UGC creator</strong>{" "}
          from the UK with 6 years experience in all things product design, marketing &amp; conversion rate optimisation.
        </p>
        <a className="lime-button hero-cta" href="mailto:Hello@edcorner.co.uk">
          Let&apos;s talk
        </a>
      </section>

      <section className="brand-section section-wrap" aria-label="Brands I've worked with recently">
        <h3>Brands I&apos;ve worked with recently</h3>
        <div className="brand-ticker" aria-label="Brands ticker">
          <div className="brand-track">
            {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, index) => (
              <img key={`${logo.alt}-${index}`} src={logo.src} alt={index < brandLogos.length ? logo.alt : ""} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap featured-videos" aria-label="Featured videos">
        <VideoGrid videos={featuredVideos} />
      </section>

      <section className="services section-wrap" aria-label="How I help brands win with UGC">
        <h2>How I help brands win with UGC</h2>
        <div className="service-grid">
          {serviceCards.map((card) => (
            <article key={card.label} className="service-card">
              <div className="service-emoji" aria-hidden="true">{card.emoji}</div>
              <div className="service-pill">{card.label}</div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap portfolio-block" id="Portfolio">
        <PortfolioTabs categories={portfolioCategories} />
      </section>

      <section className="testimonial-breakout" aria-label="Client reviews">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <article className="testimonial-card" key={`${testimonial.name}-${index}`}>
              <div className="testimonial-stars" aria-label="5 stars">★★★★★</div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-wrap" id="GetInTouch">
        <h2>Let&apos;s build something amazing together</h2>
        <p>Book a call with me below or click to send an email</p>
        <a className="lime-button message-button" href="mailto:Hello@edcorner.co.uk">
          Send me a message ✉️
        </a>
        <CalEmbed />
      </section>

      <footer className="site-footer section-wrap">
        <p>Made with good food, energy and Wordpress</p>
      </footer>
    </main>
  );
}
