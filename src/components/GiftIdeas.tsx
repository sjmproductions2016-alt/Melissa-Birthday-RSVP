import './GiftIdeas.css'

const GIFTS = [
  { emoji: '🏰', name: 'Disney-Style Gifts',    desc: 'Princess-themed games, books, or accessories' },
  { emoji: '👗', name: 'Girls Dresses',          desc: "Size 10 — princess gowns, party dresses, fun outfits" },
  { emoji: '💇', name: 'Hair Accessories',       desc: 'Tiaras, clips, headbands, sparkle ribbons'    },
  { emoji: '📿', name: 'Bracelets',              desc: 'Charm bracelets, friendship sets, sparkle wraps' },
  { emoji: '💎', name: 'Earrings',               desc: 'Studs, hoops, or princess-style drop earrings' },
  { emoji: '🎁', name: 'Gift Cards',             desc: 'Let Melissa choose her own royal treasure'    },
]

export default function GiftIdeas() {
  return (
    <section className="section gifts-section" id="gifts" aria-label="Gift Ideas">
      <div className="container">
        <div className="gifts-photo-wrap">
          <img
            src="/images/melissa-birthday/princess-gift-ideas-flatlay.png"
            alt="Princess-themed gift ideas for Melissa's 10th birthday"
            className="gifts-photo"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h2 className="section-title">Royal Gift Ideas</h2>
        <p className="gifts-sub">Not required — your presence is the greatest gift! But if you'd like a guide:</p>

        <div className="gifts-grid">
          {GIFTS.map((g) => (
            <div key={g.name} className="gift-card">
              <span className="gift-emoji" aria-hidden="true">{g.emoji}</span>
              <div>
                <h3 className="gift-name">{g.name}</h3>
                <p className="gift-desc">{g.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="gifts-note">
          No registry links provided — these are inspiration ideas only.
        </p>
      </div>
    </section>
  )
}
