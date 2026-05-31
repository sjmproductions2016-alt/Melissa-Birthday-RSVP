import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './SignatureWall.css'

interface Wish {
  id: string
  name: string
  message: string
  timestamp: string
  isSample?: boolean
}

const SAMPLE_WISHES: Wish[] = [
  {
    id: 'sample-1',
    name: 'A Magical Party Guest',
    message: 'Melissa, may your 10th birthday be filled with sparkle, laughter, and all the brick-building magic in the kingdom! 🌟',
    timestamp: '2026-09-01T10:00:00',
    isSample: true,
  },
  {
    id: 'sample-2',
    name: 'A Royal Friend',
    message: 'Happy birthday, Princess Melissa! 10 years of pure awesomeness. Wishing you the most magical day! 👑',
    timestamp: '2026-09-05T14:00:00',
    isSample: true,
  },
]

const CARD_COLORS = [
  'wish-pink',
  'wish-gold',
  'wish-purple',
  'wish-teal',
]

export default function SignatureWall() {
  const [wishes, setWishes] = useLocalStorage<Wish[]>('melissa_wishes', SAMPLE_WISHES)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [justAdded, setJustAdded] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const newWish: Wish = {
      id: `wish-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    }
    setWishes((prev) => [newWish, ...prev])
    setJustAdded(newWish.id)
    setName('')
    setMessage('')
    setTimeout(() => setJustAdded(null), 2000)
  }

  return (
    <section className="section signature-section" id="wishes" aria-label="Birthday Wish Wall">
      <div className="container">
        <span className="section-crown" aria-hidden="true">✨</span>
        <h2 className="section-title">Birthday Wish Wall</h2>
        <p className="signature-sub">Leave Melissa a birthday wish — she'll treasure every one!</p>

        {/* Input form */}
        <form className="wish-form" onSubmit={handleSubmit} aria-label="Add a birthday wish">
          <div className="wish-form-fields">
            <div className="wish-field">
              <label htmlFor="wishName" className="wish-label">Your Name</label>
              <input
                id="wishName"
                type="text"
                className="wish-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
                aria-required="true"
                maxLength={60}
              />
            </div>
            <div className="wish-field wish-field-msg">
              <label htmlFor="wishMessage" className="wish-label">Your Birthday Wish</label>
              <textarea
                id="wishMessage"
                className="wish-input wish-textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your birthday wish for Melissa…"
                required
                aria-required="true"
                rows={3}
                maxLength={280}
              />
            </div>
          </div>
          <button type="submit" className="btn-gold wish-submit">
            <span aria-hidden="true">⭐</span>
            Add My Birthday Wish
          </button>
        </form>

        {/* Wall */}
        <div
          className="wish-wall"
          aria-label={`${wishes.length} birthday wishes`}
          aria-live="polite"
          aria-atomic="false"
        >
          {wishes.map((w, i) => (
            <div
              key={w.id}
              className={`wish-card ${CARD_COLORS[i % CARD_COLORS.length]} ${w.id === justAdded ? 'wish-card-new' : ''}`}
            >
              <div className="wish-brick-studs" aria-hidden="true">
                <span className="wish-stud" />
                <span className="wish-stud" />
                <span className="wish-stud" />
                <span className="wish-stud" />
              </div>
              {w.isSample && (
                <span className="wish-sample-badge" aria-label="Example wish">Example</span>
              )}
              <p className="wish-message">"{w.message}"</p>
              <p className="wish-name">— {w.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
