import { useMemo } from 'react'
import { useCountdown } from '../hooks/useCountdown'
import './Countdown.css'

const PARTY_DATE = new Date('2026-10-10T15:00:00')

const UNITS = [
  { key: 'days',    label: 'Days' },
  { key: 'hours',   label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
] as const

export default function Countdown() {
  const target = useMemo(() => PARTY_DATE, [])
  const { days, hours, minutes, seconds, isPast } = useCountdown(target)

  const values: Record<string, number> = { days, hours, minutes, seconds }

  return (
    <section className="section countdown-section" id="countdown" aria-label="Countdown to Melissa's Birthday">
      <div className="container">
        <span className="section-crown" aria-hidden="true">⏳</span>
        <h2 className="section-title">Countdown to the Magic</h2>

        {isPast ? (
          <div className="countdown-past" role="status">
            <span aria-hidden="true">🎉</span>
            <p>Melissa's magical birthday is here! Happy 10th Birthday!</p>
            <span aria-hidden="true">🎂</span>
          </div>
        ) : (
          <div
            className="countdown-grid"
            role="timer"
            aria-label={`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds until Melissa's birthday`}
            aria-live="off"
          >
            {UNITS.map((u, idx) => (
              <div key={u.key} className={`countdown-block countdown-block-${idx}`} aria-hidden="true">
                <div className="cb-studs">
                  <span className="cb-stud" />
                  <span className="cb-stud" />
                </div>
                <div className="cb-face">
                  <span className="cb-number">
                    {String(values[u.key]).padStart(2, '0')}
                  </span>
                </div>
                <p className="cb-label">{u.label}</p>
              </div>
            ))}
          </div>
        )}

        <p className="countdown-note">
          Party starts <strong>October 10, 2026 at 3:00 PM</strong> · LEGO Discovery Center, Atlanta
        </p>
      </div>
    </section>
  )
}
