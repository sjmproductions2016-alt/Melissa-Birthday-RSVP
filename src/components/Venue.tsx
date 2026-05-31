import './Venue.css'

const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=3500+Peachtree+Rd+NE+Suite+G-1+Atlanta+GA+30326'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Venue() {
  return (
    <section className="section venue-section" id="venue" aria-label="Venue and Location">
      <div className="venue-photo-banner">
        <img
          src="/images/melissa-birthday/princess-venue-pre-event-setup.png"
          alt="LEGO Discovery Center Atlanta venue set up for Melissa's princess birthday party"
          className="venue-banner-img"
          loading="lazy"
          decoding="async"
        />
        <div className="venue-banner-overlay" aria-hidden="true" />
        <div className="venue-banner-label">
          <h2 className="venue-banner-title">Venue & Location</h2>
        </div>
      </div>

      <div className="container">
        <div className="venue-card">
          <div className="venue-info">
            <h3 className="venue-name">LEGO Discovery Center</h3>
            <address className="venue-address">
              3500 Peachtree Rd NE, Suite G-1<br />
              Atlanta, GA 30326
            </address>

            <div className="venue-details">
              <div className="venue-detail">
                <span aria-hidden="true">📅</span>
                <span>October 10, 2026</span>
              </div>
              <div className="venue-detail">
                <span aria-hidden="true">🕒</span>
                <span>3:00 PM</span>
              </div>
              <div className="venue-detail">
                <span aria-hidden="true">👑</span>
                <span>Hosted by Robin</span>
              </div>
            </div>

            <div className="venue-actions">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold venue-btn"
                aria-label="Get directions to LEGO Discovery Center in Atlanta"
              >
                <span aria-hidden="true">🗺️</span>
                Get Directions
              </a>
              <button
                className="btn-outline venue-btn"
                onClick={() => scrollTo('rsvp')}
              >
                <span aria-hidden="true">📬</span>
                RSVP Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
