const bookingUrl = "https://www.roottorise-therapy.net/book-online";

const specialties = [
  {
    number: "01",
    title: "Children & teens",
    text: "Playful, age-attuned support for big feelings, school pressure, identity, behavior, and difficult experiences.",
  },
  {
    number: "02",
    title: "Adults",
    text: "Space to untangle anxiety, depression, trauma, grief, burnout, relationships, and major life transitions.",
  },
  {
    number: "03",
    title: "Couples & families",
    text: "Practical care for clearer communication, stronger connection, conflict repair, and shared healing.",
  },
];

const therapists = [
  {
    name: "Jennifer Boss Kinser",
    credential: "LMFT 137499",
    focus: "Youth, families, trauma, anxiety, depression, and mood disorders",
    email: "Jennifer@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_61f7d0f373f845c7a610376b1e374c37~mv2.webp/v1/fill/w_720,h_880,al_c,lg_1,q_90/jbo.webp",
  },
  {
    name: "Arthur D. Tolbert Jr.",
    credential: "LMFT 378862",
    focus: "Adults, couples, families, adolescents, trauma, and life change",
    email: "Art@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_7c1b432a24374c01a579f13948277e98~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/Art%2BTolbert.webp",
  },
  {
    name: "Angela Pacheco",
    credential: "LMFT 156676",
    focus: "Root-focused, strengths-based care centered on your unique story",
    email: "Angela@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_62c0ba2fde14407fa2bd36b00d411040~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/thumbnail_Outlook-Image.webp",
  },
  {
    name: "Jasmine Olvera",
    credential: "LMFT 146988 · Bilingual",
    focus: "Grief, families, life transitions, and patterns that no longer serve you",
    email: "Jasmine@roottorise-therapy.com",
    image:
      "https://static.wixstatic.com/media/c9fb13_6e0f901f7bae4b609ccf4f28ebb74950~mv2.webp/v1/fill/w_720,h_880,al_c,q_90/IMG_3179.webp",
  },
];

const approaches = [
  "ACT",
  "Art Therapy",
  "CBT",
  "DBT",
  "EMDR",
  "Family Systems",
  "Gottman Method",
  "IFS",
  "Narrative Therapy",
  "Play Therapy",
  "Psychodynamic Therapy",
  "Solution-Focused Therapy",
  "Trauma-Focused CBT",
];

const officePhotos = [
  { src: "/office/office-counseling-room-1.jpg", alt: "Comfortable therapy room with a leather sofa, armchairs, and ocean artwork" },
  { src: "/office/office-counseling-room-2.jpg", alt: "Warm therapy room with leather chairs, plants, and colorful artwork" },
  { src: "/office/office-counseling-room-3.jpg", alt: "Inviting therapy room with a green sofa, soft lighting, and nature artwork" },
  { src: "/office/office-counseling-room-4.jpg", alt: "Spacious counseling room arranged for comfortable conversation" },
  { src: "/office/office-counseling-room-5.jpg", alt: "Sunlit counseling room with a sofa, armchair, plants, and a desk" },
  { src: "/office/office-counseling-room-6.jpg", alt: "Private therapy office with natural light and comfortable seating" },
  { src: "/office/office-waiting-area.jpg", alt: "Root to Rise Therapy waiting area with orange chairs, plants, and nature artwork" },
  { src: "/office/office-hallway.jpg", alt: "Bright hallway leading to private therapy offices" },
  { src: "/office/office-reception-area.jpg", alt: "Welcoming reception area with comfortable seating and warm fall colors" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Root to Rise Therapy home">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span className="brand-copy">
            <strong>Root to Rise</strong>
            <small>Therapy</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#care">How we help</a>
          <a href="#therapists">Our therapists</a>
          <a href="#office">Our space</a>
          <a href="#approach">Our approach</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href={bookingUrl}>
          Schedule a consultation <Arrow />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#care">How we help</a>
            <a href="#therapists">Our therapists</a>
            <a href="#office">Our space</a>
            <a href="#approach">Our approach</a>
            <a href="#contact">Contact</a>
            <a href={bookingUrl}>Book online</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> A grounded place to begin</p>
          <h1>Therapy that meets you <em>where you are.</em></h1>
          <p className="hero-intro">
            Compassionate, evidence-based care for children, teens, adults,
            couples, and families—rooted in who you are and shaped around where
            you want to grow.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#therapists">
              Find your therapist <span aria-hidden="true">→</span>
            </a>
            <p className="service-area">
              <span aria-hidden="true" /> Serving Stanislaus &amp; San Joaquin Counties
            </p>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract illustration symbolizing support and growth" role="img">
          <div className="portrait-shape">
            <span className="portrait-head" />
            <span className="portrait-body" />
            <span className="portrait-shadow" />
          </div>
          <div className="growth-line" aria-hidden="true">
            <i /><i /><i />
          </div>
          <div className="promise-card">
            <small>Our promise</small>
            <p>A space to feel heard, supported, and fully yourself.</p>
            <span aria-hidden="true">~</span>
          </div>
        </div>
      </section>

      <section className="care-section" id="care">
        <div className="care-intro">
          <p className="eyebrow">Care that fits real life</p>
          <h2>Support for every season.</h2>
          <p>
            Thoughtful care that makes room for the whole person—not just the
            problem in front of them.
          </p>
          <a className="text-link" href="#approach">Explore our approach <Arrow /></a>
        </div>
        {specialties.map((specialty) => (
          <article className="specialty" key={specialty.number}>
            <span className="specialty-number">{specialty.number}</span>
            <div className="specialty-icon" aria-hidden="true">{specialty.title.charAt(0).toLowerCase()}</div>
            <h3>{specialty.title}</h3>
            <p>{specialty.text}</p>
          </article>
        ))}
      </section>

      <section className="mission-section">
        <div className="mission-art" aria-hidden="true">
          <span className="mission-circle" />
          <span className="mission-arch" />
          <span className="mission-leaf leaf-one" />
          <span className="mission-leaf leaf-two" />
        </div>
        <div className="mission-copy">
          <p className="eyebrow"><span /> Care with dignity</p>
          <h2>You are more than a list of symptoms.</h2>
          <p>
            We see therapy as a partnership. Together, we make space for your
            story, understand what is happening beneath the surface, and build
            practical ways forward with compassion and respect.
          </p>
          <blockquote>
            “Every person deserves care that honors their dignity and makes
            room for meaningful change.”
          </blockquote>
        </div>
      </section>

      <section className="office-section" id="office">
        <div className="section-heading office-heading">
          <div>
            <p className="eyebrow">Step inside</p>
            <h2>A space designed for comfort.</h2>
          </div>
          <p>
            Warm, private rooms with thoughtful details—created to help you
            settle in, feel at ease, and focus on what matters.
          </p>
        </div>
        <div className="office-gallery">
          {officePhotos.map((photo, index) => (
            <a
              className="office-photo"
              href={photo.src}
              key={photo.src}
              aria-label={`View office photo ${index + 1} full size`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="therapists-section" id="therapists">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Meet your support system</p>
            <h2>A team that feels human.</h2>
          </div>
          <p>
            Different perspectives and specialties, united by thoughtful,
            person-centered care.
          </p>
        </div>
        <div className="therapist-grid">
          {therapists.map((therapist) => (
            <article className="therapist-card" key={therapist.name}>
              <div className="therapist-photo-wrap">
                <img
                  src={therapist.image}
                  alt={`${therapist.name}, marriage and family therapist`}
                />
                <a href={`mailto:${therapist.email}`} aria-label={`Email ${therapist.name}`}>
                  <Arrow />
                </a>
              </div>
              <h3>{therapist.name}</h3>
              <p className="credential">{therapist.credential}</p>
              <p>{therapist.focus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-copy">
          <p className="eyebrow"><span /> A thoughtful toolkit</p>
          <h2>Evidence-based, always personal.</h2>
          <p>
            No single method fits every person. Your therapist draws from
            proven approaches and adapts care to your age, goals, experiences,
            strengths, and pace.
          </p>
          <a className="secondary-button" href={bookingUrl}>Talk with our team <Arrow /></a>
        </div>
        <div className="approach-list" aria-label="Therapeutic approaches">
          {approaches.map((approach) => <span key={approach}>{approach}</span>)}
        </div>
      </section>

      <section className="process-section">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">Starting therapy</p>
            <h2>A first step that feels manageable.</h2>
          </div>
        </div>
        <ol className="process-grid">
          <li><span>01</span><h3>Reach out</h3><p>Call, email, or book online. Tell us what support you are looking for.</p></li>
          <li><span>02</span><h3>Find your fit</h3><p>We will help connect you with a therapist whose experience fits your needs.</p></li>
          <li><span>03</span><h3>Begin together</h3><p>Your first session is a calm conversation about your story, goals, and pace.</p></li>
        </ol>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">Good to know</p>
          <h2 id="faq-title">Questions before you begin.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>What does a session cost?</summary>
            <p>Individual therapy is listed at $200 for a 60-minute session. Couples counseling is listed at $250 for 60 minutes.</p>
          </details>
          <details>
            <summary>Where are your offices?</summary>
            <p>We have two Modesto locations: 627 13th Street, Suite E, and 4641 Spyres Way, Suite 4.</p>
          </details>
          <details>
            <summary>Is therapy confidential?</summary>
            <p>Privacy and confidentiality are central to a safe therapeutic relationship. Your therapist will explain the standard legal limits during your first conversation.</p>
          </details>
          <details>
            <summary>How do I choose a therapist?</summary>
            <p>Start with the concerns you want help with and the kind of connection that helps you feel comfortable. Our team can guide you toward a good fit.</p>
          </details>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">A place to feel seen</p>
          <h2>Ready when you are.</h2>
          <p>
            Reaching out can be the hardest part. We’ll meet your questions with
            warmth and help you understand what comes next.
          </p>
          <div className="contact-actions">
            <a className="light-button" href={bookingUrl}>Book online <Arrow /></a>
            <a className="contact-link" href="tel:+12096458630">209-645-8630 ext. 100</a>
            <a className="contact-link" href="mailto:Admin@roottorise-therapy.com">Admin@roottorise-therapy.com</a>
          </div>
        </div>
        <div className="locations">
          <p className="eyebrow">Modesto office locations</p>
          <address>
            <strong>Downtown</strong>
            627 13th Street, Suite E<br />Modesto, CA 95354
          </address>
          <address>
            <strong>North Modesto</strong>
            4641 Spyres Way, Suite 4<br />Modesto, CA 95356
          </address>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true"><span /></span>
          <span className="brand-copy"><strong>Root to Rise</strong><small>Therapy</small></span>
        </a>
        <p>Compassionate care for children, teens, adults, couples, and families.</p>
        <div className="footer-links">
          <a href="https://www.roottorise-therapy.net/privacy-policy">Privacy</a>
          <a href="https://www.roottorise-therapy.net/accessibility-statement">Accessibility</a>
          <span>© {new Date().getFullYear()} Root to Rise Therapy</span>
        </div>
      </footer>
    </main>
  );
}
