import './PhotoSection.css'

const PLACEHOLDERS = [
  { label: 'Birthday Princess Photo',    icon: '👑', color: 'ph-pink'   },
  { label: 'Friends & Family Moment',    icon: '🤝', color: 'ph-purple' },
  { label: 'Brick Adventure Memory',     icon: '🧱', color: 'ph-gold'   },
  { label: 'Cake Celebration Moment',    icon: '🎂', color: 'ph-pink'   },
]

export default function PhotoSection() {
  return (
    <section className="section photo-section" id="memories" aria-label="Memory Photos">
      <div className="container">
        <span className="section-crown" aria-hidden="true">📸</span>
        <h2 className="section-title">Birthday Memories</h2>
        <p className="photo-sub">Photos from the celebration will appear here after the party!</p>

        <div className="photo-grid">
          {PLACEHOLDERS.map((p) => (
            <div
              key={p.label}
              className={`photo-placeholder ${p.color}`}
              role="img"
              aria-label={p.label}
            >
              <span className="ph-icon" aria-hidden="true">{p.icon}</span>
              <p className="ph-label">{p.label}</p>
              <p className="ph-note">Photo coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
