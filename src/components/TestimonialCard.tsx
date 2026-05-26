'use client'

interface Testimonial {
  name: string
  platform: string
  avatar: string
  text: string
  result: string
  color: string
}

export default function TestimonialCard({ t, delay }: { t: Testimonial; delay: number }) {
  return (
    <div className={`testi-card reveal reveal-delay-${delay}`}>
      <div className="testi-header">
        <div className="testi-av">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={t.avatar}
            alt={t.name}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                `https://ui-avatars.com/api/?name=${t.name.slice(0, 2)}&background=1a1a1a&color=D4AF37&bold=true&size=80`
            }}
          />
        </div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-plat" style={{ color: t.color }}>{t.platform}</div>
        </div>
        <div className="testi-stars">★★★★★</div>
      </div>
      <p className="testi-text">&ldquo;{t.text}&rdquo;</p>
      <div className="testi-result">{t.result}</div>
    </div>
  )
}
