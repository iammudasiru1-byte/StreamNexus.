import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import StreamerCard from '@/components/StreamerCard'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Streamers — StreamNexus Network Members',
  description: 'Browse StreamNexus members across Twitch, Kick, YouTube, and TikTok. 10,000+ real streamers growing together.',
}

const TWITCH = [
  { name:'Aydan',       handle:'aydan',       cat:'COD',           viewers:'28K', live:true  },
  { name:'Clix',        handle:'clix',         cat:'Fortnite',      viewers:'21K', live:true  },
  { name:'NICKMERCS',   handle:'nickmercs',    cat:'Warzone',       viewers:'48K', live:true  },
  { name:'CohhCarnage', handle:'cohhcarnage',  cat:'Variety',       viewers:'14K', live:false },
  { name:'Pokimane',    handle:'pokimane',     cat:'Just Chatting', viewers:'52K', live:true  },
  { name:'Caedrel',     handle:'caedrel',      cat:'LoL Esports',   viewers:'43K', live:true  },
  { name:'HasanAbi',    handle:'hasanabi',     cat:'Just Chatting', viewers:'38K', live:true  },
  { name:'TenZ',        handle:'tenz',         cat:'Valorant',      viewers:'41K', live:false },
  { name:'Emiru',       handle:'emiru',        cat:'Variety',       viewers:'18K', live:true  },
  { name:'aceu',        handle:'aceu',         cat:'Valorant',      viewers:'22K', live:false },
  { name:'Scump',       handle:'scump',        cat:'COD',           viewers:'31K', live:true  },
  { name:'TimTheTatman',handle:'timthetatman', cat:'COD',           viewers:'28K', live:false },
  { name:'Bugha',       handle:'bugha',        cat:'Fortnite',      viewers:'14K', live:true  },
  { name:'Kyedae',      handle:'kyedae',       cat:'Valorant',      viewers:'19K', live:false },
  { name:'Amouranth',   handle:'amouranth',    cat:'Just Chatting', viewers:'22K', live:true  },
  { name:'summit1g',    handle:'summit1g',     cat:'Variety',       viewers:'22K', live:false },
  { name:'TommyInnit',  handle:'tommyinnit',   cat:'Minecraft',     viewers:'52K', live:true  },
  { name:'Philza',      handle:'philza',       cat:'Minecraft',     viewers:'21K', live:false },
  { name:'Sodapoppin',  handle:'sodapoppin',   cat:'IRL',           viewers:'24K', live:true  },
  { name:'tyler1',      handle:'tyler1',       cat:'LoL',           viewers:'67K', live:true  },
  { name:'39daph',      handle:'39daph',       cat:'Just Chatting', viewers:'12K', live:false },
  { name:'HandsomeBFG', handle:'handsomebfg',  cat:'ARC Raiders',   viewers:'4K',  live:true  },
  { name:'Tarik',       handle:'tarik',        cat:'Valorant',      viewers:'34K', live:true  },
  { name:'Ninja',       handle:'ninja',        cat:'Fortnite',      viewers:'38K', live:false },
]

const KICK = [
  { name:'Adin Ross',    kickHandle:'AdinRoss',    twitch:'',            cat:'Just Chatting', viewers:'48K', live:true  },
  { name:'xQc',          kickHandle:'xQc',          twitch:'xqc',         cat:'Variety',       viewers:'61K', live:true  },
  { name:'WestCOL',      kickHandle:'WestCOL',      twitch:'',            cat:'IRL',           viewers:'54K', live:false },
  { name:'Absi',         kickHandle:'Absi',         twitch:'',            cat:'GTA V',         viewers:'28K', live:true  },
  { name:'tyler1',       kickHandle:'tyler1',       twitch:'tyler1',      cat:'LoL',           viewers:'67K', live:true  },
  { name:'Elraenn',      kickHandle:'Elraenn',      twitch:'elraenn',     cat:'Rust',          viewers:'16K', live:false },
  { name:'Tfue',         kickHandle:'Tfue',         twitch:'tfue',        cat:'Warzone',       viewers:'18K', live:true  },
  { name:'Clix',         kickHandle:'clix',         twitch:'clix',        cat:'Fortnite',      viewers:'21K', live:false },
  { name:'MrStivenTc',   kickHandle:'MrStivenTc',   twitch:'',            cat:'IRL',           viewers:'32K', live:true  },
  { name:'Trainwreckstv',kickHandle:'Trainwreckstv',twitch:'trainwreckstv',cat:'Casino',       viewers:'12K', live:false },
  { name:'Coringa',      kickHandle:'Coringa',      twitch:'',            cat:'GTA RP',        viewers:'19K', live:true  },
  { name:'Robleis',      kickHandle:'Robleis',      twitch:'',            cat:'GTA RP',        viewers:'14K', live:true  },
  { name:'N3on',         kickHandle:'N3on',         twitch:'',            cat:'IRL',           viewers:'14K', live:false },
  { name:'Drb7h',        kickHandle:'Drb7h',        twitch:'',            cat:'GTA V',         viewers:'31K', live:true  },
  { name:'SXB',          kickHandle:'SXB',          twitch:'',            cat:'GTA V',         viewers:'24K', live:true  },
  { name:'stableronaldo',kickHandle:'stableronaldo',twitch:'stableronaldo',cat:'Rust',         viewers:'12K', live:false },
  { name:'summit1g',     kickHandle:'summit1g',     twitch:'summit1g',    cat:'Rust',          viewers:'22K', live:true  },
  { name:'MOONMOON',     kickHandle:'moonmoon_ow',  twitch:'moonmoon_ow', cat:'ARC Raiders',   viewers:'9K',  live:false },
  { name:'lacobraaa',    kickHandle:'Lacobraaa',    twitch:'',            cat:'Sports',        viewers:'18K', live:true  },
  { name:'Mellstroy',    kickHandle:'Mellstroy',    twitch:'',            cat:'GTA V',         viewers:'15K', live:true  },
  { name:'Fousey',       kickHandle:'Fousey',       twitch:'fousey',      cat:'IRL',           viewers:'8K',  live:false },
  { name:'ElZeein',      kickHandle:'ElZeein',      twitch:'',            cat:'Just Chatting', viewers:'18K', live:true  },
  { name:'nickeh30',     kickHandle:'nickeh30',     twitch:'nickeh30',    cat:'Fortnite',      viewers:'16K', live:false },
  { name:'Davooxeneize', kickHandle:'Davooxeneize', twitch:'',            cat:'IRL',           viewers:'22K', live:true  },
]

const YOUTUBE = [
  { name:'TommyInnit',  handle:'TommyInnit',  cat:'Minecraft',   viewers:'52K', live:true  },
  { name:'Gaules',      handle:'Gaules',      cat:'CS2 Esports', viewers:'38K', live:false },
  { name:'Markiplier',  handle:'Markiplier',  cat:'Variety',     viewers:'42K', live:true  },
  { name:'Jacksepticeye',handle:'jacksepticeye',cat:'Gaming',    viewers:'31K', live:false },
  { name:'TypicalGamer',handle:'TypicalGamer',cat:'Fortnite',    viewers:'18K', live:true  },
  { name:'TenZ',        handle:'tenz',        cat:'Valorant',    viewers:'41K', live:false },
  { name:'Valkyrae',    handle:'valkyrae',    cat:'Gaming',      viewers:'28K', live:true  },
  { name:'Caedrel',     handle:'caedrel',     cat:'LoL Esports', viewers:'43K', live:false },
  { name:'Pokimane',    handle:'pokimane',    cat:'Variety',     viewers:'52K', live:true  },
  { name:'Doublelift',  handle:'doublelift',  cat:'LoL',         viewers:'22K', live:false },
  { name:'Tarik',       handle:'tarik',       cat:'Valorant',    viewers:'34K', live:true  },
  { name:'BaianoTV',    handle:'BaianoTV',    cat:'Esports',     viewers:'28K', live:false },
  { name:'Bugha',       handle:'bugha',       cat:'Fortnite',    viewers:'14K', live:true  },
  { name:'NickEh30',    handle:'NickEh30',    cat:'Fortnite',    viewers:'16K', live:false },
  { name:'Sykkuno',     handle:'sykkuno',     cat:'Variety',     viewers:'18K', live:true  },
  { name:'aceu',        handle:'aceu',        cat:'Valorant',    viewers:'22K', live:false },
  { name:'Philza',      handle:'Ph1LzA',      cat:'Minecraft',   viewers:'21K', live:true  },
  { name:'summit1g',    handle:'summit1g',    cat:'Variety',     viewers:'22K', live:false },
  { name:'Scump',       handle:'scump',       cat:'COD',         viewers:'31K', live:true  },
  { name:'NICKMERCS',   handle:'nickmercs',   cat:'Warzone',     viewers:'48K', live:false },
  { name:'Ninja',       handle:'ninja',       cat:'Fortnite',    viewers:'38K', live:true  },
  { name:'MixiGaming',  handle:'MixiGaming',  cat:'Gaming',      viewers:'19K', live:false },
]

const TIKTOK = [
  { name:'Gaming Creator',handle:'gaming_creator',cat:'Gaming',      viewers:'12K',live:true  },
  { name:'StreamerPro',   handle:'streamerpro',   cat:'Just Chatting',viewers:'8K',live:false },
  { name:'LiveGamer',     handle:'livegamer',     cat:'Fortnite',    viewers:'15K',live:true  },
  { name:'TikTokStream',  handle:'tiktokstream',  cat:'Variety',     viewers:'9K', live:false },
  { name:'CreatorLive',   handle:'creatorlive',   cat:'IRL',         viewers:'11K',live:true  },
  { name:'GamingLive',    handle:'gaminglive',    cat:'COD',         viewers:'7K', live:false },
]

function PlatformHeader({ emoji, name, count, color, bg, border, desc }: {
  emoji:string; name:string; count:string; color:string; bg:string; border:string; desc:string
}) {
  return (
    <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem',padding:'1rem 1.5rem',background:bg,border:`1px solid ${border}`,borderRadius:'var(--r-lg)' }}>
      <div style={{ display:'flex',alignItems:'center',gap:'.85rem' }}>
        <span style={{ fontSize:'1.75rem' }}>{emoji}</span>
        <div>
          <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.1rem',color }}>{name}</div>
          <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>{desc}</div>
        </div>
      </div>
      <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.1rem',color }}>{count} creators</div>
    </div>
  )
}

export default function StreamersPage() {
  return (
    <>
      <Nav />
      <RevealObserver />

      {/* HERO */}
      <section style={{ paddingTop:'calc(64px + 4rem)',paddingBottom:'3rem',background:'var(--bg)',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:'-40px',left:'50%',transform:'translateX(-50%)',width:'600px',height:'400px',background:'radial-gradient(ellipse,rgba(123,47,247,.07),transparent 70%)',pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="sec-eyebrow">Network Members</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.1,marginBottom:'1rem',letterSpacing:'-.02em' }}>
            Streamers from Every <em>Platform</em>
          </h1>
          <p style={{ color:'var(--text2)',maxWidth:'500px',margin:'0 auto 1.5rem',lineHeight:1.7 }}>
            Browse active StreamNexus members. Click any card to visit their channel.
          </p>
          <div style={{ display:'flex',justifyContent:'center',gap:'.75rem',flexWrap:'wrap',marginBottom:'2rem' }}>
            {[
              { emoji:'🟣',label:'Twitch',  count:'6,500+',color:'rgba(145,70,255,.15)',border:'rgba(145,70,255,.3)' },
              { emoji:'🟢',label:'Kick',    count:'2,800+',color:'rgba(83,252,24,.1)',  border:'rgba(83,252,24,.3)'  },
              { emoji:'🔴',label:'YouTube', count:'1,200+',color:'rgba(255,0,0,.1)',    border:'rgba(255,0,0,.3)'    },
              { emoji:'⚫',label:'TikTok',  count:'500+',  color:'rgba(255,255,255,.05)',border:'rgba(255,255,255,.12)'},
            ].map((p,i) => (
              <a key={i} href={`#${p.label.toLowerCase()}`}
                style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',background:p.color,border:`1px solid ${p.border}`,borderRadius:'100px',padding:'.4rem 1rem',textDecoration:'none',fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--text2)' }}>
                <span>{p.emoji}</span>
                <strong style={{ color:'var(--text)' }}>{p.label}</strong>
                <span style={{ color:'var(--text3)' }}>{p.count}</span>
              </a>
            ))}
          </div>
          <Link href="/apply" className="btn btn-primary">🚀 Join the Network →</Link>
        </div>
      </section>

      {/* TWITCH */}
      <section id="twitch" style={{ paddingTop:'3rem' }}>
        <div className="container">
          <PlatformHeader emoji="🟣" name="Twitch" count="6,500+" color="#9146ff" bg="rgba(145,70,255,.06)" border="rgba(145,70,255,.2)" desc="Category-wide raid queues & collab matching" />
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(155px,1fr))',gap:'1rem',marginTop:'1.25rem' }} className="reveal">
            {TWITCH.map((s,i) => (
              <StreamerCard key={i}
                name={s.name}
                avatarSrc={`https://unavatar.io/twitch/${s.handle}`}
                fallback={`https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=0d0020&color=9146ff&bold=true&size=80`}
                cat={s.cat} viewers={s.viewers} live={s.live}
                href={`https://twitch.tv/${s.handle}`}
                platformColor="#9146ff" platformBorder="rgba(145,70,255,.35)"
              />
            ))}
          </div>
        </div>
      </section>

      {/* KICK */}
      <section id="kick" style={{ paddingTop:'3rem',background:'var(--bg2)' }}>
        <div className="container">
          <PlatformHeader emoji="🟢" name="Kick" count="2,800+" color="#53FC18" bg="rgba(83,252,24,.06)" border="rgba(83,252,24,.2)" desc="Dedicated Kick raid network & IRL collab events" />
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(155px,1fr))',gap:'1rem',marginTop:'1.25rem' }} className="reveal">
            {KICK.map((s,i) => {
              const avatarSrc = s.twitch
                ? `https://unavatar.io/twitch/${s.twitch}`
                : `https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=0a1a05&color=53FC18&bold=true&size=80`
              return (
                <StreamerCard key={i}
                  name={s.name}
                  avatarSrc={avatarSrc}
                  fallback={`https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=0a1a05&color=53FC18&bold=true&size=80`}
                  cat={s.cat} viewers={s.viewers} live={s.live}
                  href={`https://kick.com/${s.kickHandle}`}
                  platformColor="#53FC18" platformBorder="rgba(83,252,24,.35)"
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" style={{ paddingTop:'3rem' }}>
        <div className="container">
          <PlatformHeader emoji="🔴" name="YouTube" count="1,200+" color="#FF4444" bg="rgba(255,0,0,.06)" border="rgba(255,0,0,.2)" desc="Live stream collaborations & YouTube raid trains" />
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(155px,1fr))',gap:'1rem',marginTop:'1.25rem' }} className="reveal">
            {YOUTUBE.map((s,i) => (
              <StreamerCard key={i}
                name={s.name}
                avatarSrc={`https://unavatar.io/youtube/${s.handle}`}
                fallback={`https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=1a0000&color=FF4444&bold=true&size=80`}
                cat={s.cat} viewers={s.viewers} live={s.live}
                href={`https://youtube.com/@${s.handle}`}
                platformColor="#FF4444" platformBorder="rgba(255,68,68,.35)"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TIKTOK */}
      <section id="tiktok" style={{ paddingTop:'3rem',background:'var(--bg2)',paddingBottom:'4rem' }}>
        <div className="container">
          <PlatformHeader emoji="⚫" name="TikTok" count="500+" color="#ffffff" bg="rgba(255,255,255,.04)" border="rgba(255,255,255,.1)" desc="TikTok Live co-streams and growth events" />
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(155px,1fr))',gap:'1rem',marginTop:'1.25rem' }} className="reveal">
            {TIKTOK.map((s,i) => (
              <StreamerCard key={i}
                name={s.name}
                avatarSrc={`https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=0a0a0a&color=ffffff&bold=true&size=80`}
                fallback={`https://ui-avatars.com/api/?name=${s.name.slice(0,2)}&background=0a0a0a&color=ffffff&bold=true&size=80`}
                cat={s.cat} viewers={s.viewers} live={s.live}
                href={`https://tiktok.com/@${s.handle}`}
                platformColor="#ffffff" platformBorder="rgba(255,255,255,.2)"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container" style={{ maxWidth:600,textAlign:'center' }}>
          <div className="cta-section reveal">
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.5rem,3vw,2rem)',marginBottom:'1rem' }}>
              Want to Be <em>Listed Here?</em>
            </h2>
            <p style={{ color:'var(--text2)',marginBottom:'1.75rem',lineHeight:1.7 }}>
              Join StreamNexus and your channel gets featured in our public directory — in front of thousands of potential collab partners.
            </p>
            <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
              <Link href="/apply" className="btn btn-primary btn-lg">Apply to Join →</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">See Plans</Link>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background:'var(--bg2)',borderTop:'1px solid var(--border)',padding:'2rem 0' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
            <div className="nav-logo"><div className="nav-logo-dot"/>StreamNexus</div>
            <div style={{ display:'flex',gap:'1.25rem',flexWrap:'wrap' }}>
              <Link href="/" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Home</Link>
              <Link href="/reviews" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Reviews</Link>
              <Link href="/pricing" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Pricing</Link>
              <Link href="/apply" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Apply</Link>
            </div>
          </div>
          <div style={{ borderTop:'1px solid var(--border)',marginTop:'1.25rem',paddingTop:'1.25rem' }}>
            <div className="footer-copy">© 2025 StreamNexus · {SITE.email}</div>
          </div>
        </div>
      </footer>
    </>
  )
}
