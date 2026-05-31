import './EventDetails.css'

const DETAILS = [
  { icon: '📅', label: 'Date',           value: 'October 10, 2026', accent: 'pink' },
  { icon: '🕒', label: 'Time',           value: '3:00 PM',          accent: 'gold' },
  { icon: '🏰', label: 'Venue',          value: 'LEGO Discovery Center', accent: 'purple' },
  { icon: '📍', label: 'Address',        value: '3500 Peachtree Rd NE, Suite G-1\nAtlanta, GA 30326', accent: 'pink' },
  { icon: '👑', label: 'Hosted by',      value: 'Robin',            accent: 'gold' },
  { icon: '📬', label: 'RSVP Deadline', value: 'September 8, 2026', accent: 'purple' },
]

export default function EventDetails() {
  return (
    <section className="section event-details" id="details" aria-label="Event Details">
      <div className="event-banner">
        <img
          src="/images/melissa-birthday/melissa-princess-brick-activity.png"
          alt="Princess brick-building activities at Melissa's birthday party"
          className="event-banner-img"
          loading="lazy"
          decoding="async"
        />
        <div className="event-banner-overlay" aria-hidden="true" />
        <div className="event-banner-caption">
          <h2 className="event-banner-title">Royal Event Details</h2>
          <p className="event-banner-sub">October 10, 2026 · LEGO Discovery Center, Atlanta</p>
        </div>
      </div>

      <div className="container">
        <div className="details-grid">
          {DETAILS.map((d) => (
            <div key={d.label} className={`detail-card detail-card-${d.accent}`}>
              <div className="detail-icon" aria-hidden="true">{d.icon}</div>
              <div className="detail-body">
                <p className="detail-label">{d.label}</p>
                <p className="detail-value">{d.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

