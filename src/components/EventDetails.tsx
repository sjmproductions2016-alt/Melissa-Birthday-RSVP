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
      <div className="container">
        <span className="section-crown" aria-hidden="true">👑</span>
        <h2 className="section-title">Royal Event Details</h2>

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
