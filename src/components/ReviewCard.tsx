'use client'

interface ReviewProps {
  name: string
  handle: string
  platform: string
  color: string
  emoji: string
  result: string
  text: string
}

export default function ReviewCard({ r }: { r: ReviewProps }) {
  const avatarSrc = r.emoji === '🟣'
    ? `https://unavatar.io/twitch/${r.handle}`
    : r.emoji === '🔴'
    ? `https://unavatar.io/youtube/${r.handle}`
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name.slice(0,2))}&background=0a1a05&color=53FC18&bold=true&size=80`

  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name.slice(0,2))}&background=1a1a1a&color=D4AF37&bold=true&size=80`

  return (
    <div className="testi-card">
      <div className="testi-header">
        <div className="testi-av">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt={r.name}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback }}
          />
        </div>
        <div>
          <div className="testi-name">{r.name}</div>
          <div className="testi-plat" style={{ color: r.color }}>{r.platform}</div>
        </div>
        <div className="testi-stars">★★★★★</div>
      </div>
      <p className="testi-text">&ldquo;{r.text}&rdquo;</p>
      <div className="testi-result">{r.result}</div>
    </div>
  )
}
