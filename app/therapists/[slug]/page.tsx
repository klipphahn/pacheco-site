import { notFound } from "next/navigation";
import Link from "next/link";
import { bookingUrl, therapists } from "../../site-data";

export function generateStaticParams() {
  return therapists.map(({ slug }) => ({ slug }));
}

export default async function TherapistProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const therapist = therapists.find((item) => item.slug === slug);

  if (!therapist) notFound();

  return (
    <main className="profile-page">
      <header className="site-header profile-header">
        <Link className="brand" href="/" aria-label="Root to Rise Therapy home">
          <img
            className="brand-logo"
            src="/brand/root-to-rise-logo.png"
            alt="Root to Rise Marriage Family Therapy Inc."
          />
        </Link>
        <Link className="back-link" href="/#therapists">← All therapists</Link>
        <a className="header-cta" href={bookingUrl}>Schedule a consultation <span aria-hidden="true">↗</span></a>
      </header>

      <section className="profile-hero">
        <div className="profile-portrait">
          <img src={therapist.image} alt={`${therapist.name}, marriage and family therapist`} />
        </div>
        <div className="profile-copy">
          <p className="eyebrow"><span /> Meet your therapist</p>
          <h1>{therapist.name}</h1>
          <p className="profile-credential">{therapist.credential}</p>
          <p className="profile-focus">{therapist.focus}</p>
          <div className="profile-actions">
            <a className="primary-button" href={`mailto:${therapist.email}`}>Email {therapist.name.split(" ")[0]}</a>
            <a
              className="secondary-profile-button"
              href={therapist.psychologyTodayUrl}
              target="_blank"
              rel="noreferrer"
            >
              Psychology Today profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {therapist.officePhotos.length > 0 && (
        <section className="profile-office" aria-labelledby="office-title">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Their space</p>
              <h2 id="office-title">A look inside the office.</h2>
            </div>
          </div>
          <div className={`profile-office-grid photos-${therapist.officePhotos.length}`}>
            {therapist.officePhotos.map((photo) => (
              <a href={photo.src} key={photo.src} aria-label="View office photo full size">
                <img src={photo.src} alt={photo.alt} />
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="profile-contact">
        <h2>Ready to connect?</h2>
        <p>Reach out to ask questions or schedule a consultation.</p>
        <div className="profile-actions">
          <a className="light-button" href={bookingUrl}>Book online <span aria-hidden="true">↗</span></a>
          <a className="contact-link" href="tel:+12094902870">209-490-2870</a>
        </div>
      </section>
    </main>
  );
}
