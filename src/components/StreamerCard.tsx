'use client'

interface StreamerCardProps {
  name: string
  avatarSrc: string
  fallback: string
  cat: string
  viewers: string
  live: boolean
  href: string
  platformColor: string
  platformBorder: string
}

export default function StreamerCard({
  name, avatarSrc, fallback, cat, viewers, live, href, platformColor, platformBorder
}: StreamerCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="streamer-link-card"
    >
      <div style={{ position:'relative', width:'50px', height:'50px', margin:'0 auto .7rem' }}>
        <div style={{ width:'50px', height:'50px', borderRadius:'50%', overflow:'hidden', border:`2px solid ${platformBorder}` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatarSrc}
            alt={name}
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallback }}
          />
        </div>
        {live && (
          <div style={{
            position:'absolute', bottom:0, right:0,
            width:'12px', height:'12px', borderRadius:'50%',
            background:'#ff3355', border:'2px solid var(--bg)',
            animation:'logoPulse 2s infinite'
          }} />
        )}
      </div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'.82rem', marginBottom:'.2rem', color:'var(--text)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
        {name}
      </div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:'.62rem', color:'var(--text3)', marginBottom:'.4rem' }}>
        {cat}
      </div>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'.3rem' }}>
        <span style={{
          width:'6px', height:'6px', borderRadius:'50%',
          background: live ? '#ff3355' : 'var(--text3)', display:'inline-block'
        }} />
        <span style={{ fontFamily:'var(--font-mono)', fontSize:'.65rem', color: live ? platformColor : 'var(--text3)' }}>
          {live ? `${viewers} live` : 'offline'}
        </span>
      </div>
    </a>
  )
}
