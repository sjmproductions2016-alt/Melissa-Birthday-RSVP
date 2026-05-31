import './Menu.css'

const MENU_ITEMS = [
  { emoji: '🍕', name: 'Pizza',           desc: 'Fresh-baked party pizza for all royal guests'            },
  { emoji: '🍗', name: 'Wings',           desc: 'Crispy wings fit for a princess celebration'              },
  { emoji: '🎂', name: 'Birthday Cake',   desc: 'The royal 10-layer cake moment — candles included'        },
  { emoji: '🍦', name: 'Ice Cream',       desc: 'Creamy scoops in every royal flavor'                      },
  { emoji: '🥦', name: 'Veggie Platter',  desc: 'Fresh veggies & dip for the health-conscious royals'      },
  { emoji: '🧃', name: 'Capri Sun Bar',   desc: 'A princess-worthy juice bar with every flavor'            },
]

export default function Menu() {
  return (
    <section className="section menu-section" id="menu" aria-label="Party Menu">
      <div className="container">
        <div className="menu-photo-banner">
          <img
            src="/images/melissa-birthday/princess-party-food-table.png"
            alt="Party food table set up for Melissa's princess birthday celebration"
            className="menu-banner-img"
            loading="lazy"
            decoding="async"
          />
          <div className="menu-banner-overlay" aria-hidden="true" />
          <h2 className="menu-banner-title">Royal Party Menu</h2>
        </div>
        <p className="menu-sub">Served to all kingdom guests on October 10, 2026</p>

        <div className="menu-grid">
          {MENU_ITEMS.map((item) => (
            <div key={item.name} className="menu-card">
              <span className="menu-emoji" aria-hidden="true">{item.emoji}</span>
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
