import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import './RSVPForm.css'

interface RsvpEntry {
  id: string
  guestName: string
  guardianName: string
  attending: string
  count: string
  foodNotes: string
  favoriteIdea: string
  message: string
  timestamp: string
}

const EMPTY_FORM = {
  guestName: '',
  guardianName: '',
  attending: '',
  count: '1',
  foodNotes: '',
  favoriteIdea: '',
  message: '',
}

export default function RSVPForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [, setRsvps] = useLocalStorage<RsvpEntry[]>('melissa_rsvps', [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const entry: RsvpEntry = {
      id: `rsvp-${Date.now()}`,
      ...form,
      timestamp: new Date().toISOString(),
    }
    setRsvps((prev) => [...prev, entry])
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section rsvp-section" id="rsvp" aria-label="RSVP">
        <div className="container">
          <div className="rsvp-confirmation" role="status" aria-live="polite">
            <span className="rsvp-confirm-icon" aria-hidden="true">🎉</span>
            <h2 className="rsvp-confirm-title">Royal RSVP Received!</h2>
            <p className="rsvp-confirm-msg">
              Thank you! Your RSVP has been added for Melissa's magical birthday celebration.
            </p>
            <p className="rsvp-confirm-note">
              We can't wait to celebrate with you on October 10, 2026! 👑
            </p>
            <button
              className="btn-outline rsvp-again-btn"
              onClick={() => { setSubmitted(false); setForm(EMPTY_FORM) }}
            >
              Submit Another RSVP
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section rsvp-section" id="rsvp" aria-label="RSVP Form">
      <div className="container">
        <span className="section-crown" aria-hidden="true">📬</span>
        <h2 className="section-title">Send Your Royal RSVP</h2>
        <p className="rsvp-deadline-note">
          Please RSVP by <strong>September 8, 2026</strong>
        </p>

        <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
          <div className="rsvp-note">
            <span aria-hidden="true">ℹ️</span>
            RSVPs are saved locally in your browser. Backend integration (Formspree / email) can be connected here.
          </div>

          <div className="rsvp-row rsvp-row-2">
            <div className="rsvp-field">
              <label htmlFor="guestName" className="rsvp-label">Guest Name <span aria-hidden="true">*</span></label>
              <input
                id="guestName"
                name="guestName"
                type="text"
                className="rsvp-input"
                value={form.guestName}
                onChange={handleChange}
                required
                placeholder="Child's full name"
                aria-required="true"
              />
            </div>
            <div className="rsvp-field">
              <label htmlFor="guardianName" className="rsvp-label">Parent / Guardian Name <span aria-hidden="true">*</span></label>
              <input
                id="guardianName"
                name="guardianName"
                type="text"
                className="rsvp-input"
                value={form.guardianName}
                onChange={handleChange}
                required
                placeholder="Parent or guardian"
                aria-required="true"
              />
            </div>
          </div>

          <div className="rsvp-row rsvp-row-2">
            <div className="rsvp-field">
              <label htmlFor="count" className="rsvp-label">Number Attending</label>
              <input
                id="count"
                name="count"
                type="number"
                min="1"
                max="20"
                className="rsvp-input"
                value={form.count}
                onChange={handleChange}
              />
            </div>
            <div className="rsvp-field">
              <label htmlFor="attending" className="rsvp-label">Will you attend? <span aria-hidden="true">*</span></label>
              <select
                id="attending"
                name="attending"
                className="rsvp-input rsvp-select"
                value={form.attending}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="" disabled>Select one…</option>
                <option value="yes">✅ Yes, we'll be there!</option>
                <option value="no">❌ Sorry, we can't make it</option>
                <option value="maybe">🤔 Maybe / Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="rsvp-field">
            <label htmlFor="foodNotes" className="rsvp-label">Food Allergies or Dietary Notes</label>
            <textarea
              id="foodNotes"
              name="foodNotes"
              className="rsvp-input rsvp-textarea"
              value={form.foodNotes}
              onChange={handleChange}
              placeholder="Any allergies or dietary restrictions we should know about?"
              rows={3}
            />
          </div>

          <div className="rsvp-field">
            <label htmlFor="favoriteIdea" className="rsvp-label">Favorite Princess, Color, or Brick-Building Idea</label>
            <input
              id="favoriteIdea"
              name="favoriteIdea"
              type="text"
              className="rsvp-input"
              value={form.favoriteIdea}
              onChange={handleChange}
              placeholder="e.g. Pink, Castle builder, Princess Warrior…"
            />
          </div>

          <div className="rsvp-field">
            <label htmlFor="message" className="rsvp-label">Message to Robin (optional)</label>
            <textarea
              id="message"
              name="message"
              className="rsvp-input rsvp-textarea"
              value={form.message}
              onChange={handleChange}
              placeholder="Any notes or questions for the host?"
              rows={3}
            />
          </div>

          <button type="submit" className="btn-gold rsvp-submit">
            <span aria-hidden="true">👑</span>
            Send My Royal RSVP
          </button>
        </form>
      </div>
    </section>
  )
}
