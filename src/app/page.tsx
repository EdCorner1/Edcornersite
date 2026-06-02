import { PortfolioVideo } from "@/components/PortfolioVideo";

const brandLogos = [
  {
    alt: "Detris AI",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/Detris-rldlrjfei45smq848j5zg9zvjsiska8b8lrcyqv0o0.png",
  },
  {
    alt: "Pingo",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/Pingo-rldb3up2rox7gxjvp6jc5lla6lnzk40q5j35plrajk.png",
  },
  {
    alt: "Clawbite.com",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/clawbite-rldb3stee0umtpmm05q30m2cztx94pt9h9s6r1u2w0.png",
  },
  {
    alt: "Polymarket",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/Polymarket-ogo-rldlrkd8oy72yc6r31km0rrc56e5rzc1kqeug0tmhs.png",
  },
  {
    alt: "Language app",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/images-ri1kqwze7gvc7ewentqlvy6wodbhkk7v6sx5uq7uao.png",
  },
  {
    alt: "Airalo",
    src: "https://edcorner.co.uk/wp-content/uploads/elementor/thumbs/Airalo-rldb3qxq0cs26hpcb4wtvmjft26ipblst0h7shwv8g.png",
  },
];

const featuredVideos = [
  "https://edcorner.co.uk/wp-content/uploads/2026/05/Snapchat-885877959.mp4#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/05/0-to-car.mov#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/04/Airalo-Video-2-916-No-captions-With-Endscreen.mov#t=0",
];

const techVideos = [
  "https://edcorner.co.uk/wp-content/uploads/2026/01/Detris-Today.m4v#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/01/Pipo-AI-Day-3.mp4#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/01/b33f8fccf3642c8cb8fb3783c39f400b-1.mp4#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/01/b5c75a8a67327a81e15ad0e17658aa8d.mp4#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/01/Detris.m4v#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/04/Snapchat-1787621788.mp4#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/05/0-to-car.mov#t=0",
  "https://edcorner.co.uk/wp-content/uploads/2026/04/Airalo-Video-2-916-No-captions-With-Endscreen.mov#t=0",
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
    image: "https://edcorner.co.uk/wp-content/uploads/2026/03/images.jpeg.webp",
  },
  {
    quote:
      "Always tinkering and searching for new concepts that work, Ed has slotted straight into the team and makes some really funny content too!",
    name: "Maggie",
    role: "Creator campaign manager",
    image: "https://edcorner.co.uk/wp-content/uploads/2026/04/Pingo.png.webp",
  },
  {
    quote:
      "Ed gave us some good insights not only for the content but product as well, we've iterated and learnt so much together already.",
    name: "Julie",
    role: "Campaign Manager",
    image: "https://edcorner.co.uk/wp-content/uploads/2026/03/400x400bb-75.webp",
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

function Tabs({ items }: { items: string[] }) {
  return (
    <div className="tabs" role="tablist" aria-label="Portfolio categories">
      {items.map((item, index) => (
        <button key={item} className={index === 0 ? "tab active" : "tab"} type="button" role="tab">
          {item}
        </button>
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
            src="https://edcorner.co.uk/wp-content/uploads/2026/03/Untitled-design-6-40x40.png"
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
            src="https://edcorner.co.uk/wp-content/uploads/2026/03/cropped-Untitled-design-6.png.webp"
            alt=""
          />
        </div>
        <h1>Solo founder and tech UGC creator</h1>
        <p className="hero-copy">
          Your new favourite <strong>AI &amp; Tech obsessed UGC creator</strong>{" "}
          from the UK with 6 years experience in all things product design, marketing &amp; conversion rate optimisation.
        </p>
        <a className="lime-button hero-cta" href="mailto:hello@darkblue-giraffe-994309.hostingersite.com">
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
        <Tabs items={["Tech and AI", "Travel", "Language Learning"]} />
        <VideoGrid videos={techVideos} />
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
        <iframe
          title="Book a call"
          src="https://app.cal.com/edcorner/30min/embed?layout=month_view&useSlotsViewOnSmallScreen=true&embedType=inline&embed=30min"
        />
      </section>

      <footer className="site-footer section-wrap">
        <p>Made with good food, energy and Wordpress</p>
      </footer>
    </main>
  );
}
