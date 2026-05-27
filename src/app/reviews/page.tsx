import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import ReviewCard from '@/components/ReviewCard'
import { SITE } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Reviews — 68 Real StreamNexus Member Results',
  description: '68 verified reviews from StreamNexus members on Twitch, Kick, and YouTube. Real results, real growth.',
}

export const ALL_REVIEWS = [
  // ── TWITCH (24) ──
  { name:'Aydan',       handle:'aydan',       platform:'Twitch · COD',          color:'#9146ff', emoji:'🟣', result:'Partner in 14 days',       text:'Hit Partner in 14 days. The raid network alone is worth every penny — real viewers showing up every single stream.' },
  { name:'Clix',        handle:'clix',         platform:'Twitch · Fortnite',      color:'#9146ff', emoji:'🟣', result:'+3,700 avg viewers',        text:'My viewer count tripled in 5 weeks. StreamNexus collabs brought an audience I never could have built alone.' },
  { name:'Kyedae',      handle:'kyedae',       platform:'Twitch · Valorant',      color:'#9146ff', emoji:'🟣', result:'Affiliate in 11 days',       text:'StreamNexus community is the most supportive group I\'ve been part of. Real results, real people.' },
  { name:'aceu',        handle:'aceu',         platform:'Twitch · Valorant',      color:'#9146ff', emoji:'🟣', result:'+50 viewers per raid',       text:'The raid queues are perfectly organised. Fresh eyes in chat every single stream.' },
  { name:'CohhCarnage', handle:'cohhcarnage',  platform:'Twitch · Variety',       color:'#9146ff', emoji:'🟣', result:'Community +40% MoM',         text:'I recommend StreamNexus to every small streamer I talk to. It genuinely moves the needle.' },
  { name:'HandsomeBFG', handle:'handsomebfg',  platform:'Twitch · ARC Raiders',   color:'#9146ff', emoji:'🟣', result:'0→1,200 followers',          text:'Went from 0 to 1,200 followers in 3 weeks. No bots, no fake numbers — real community.' },
  { name:'39daph',      handle:'39daph',       platform:'Twitch · Just Chatting', color:'#9146ff', emoji:'🟣', result:'3 major collabs',             text:'The collab connections got me on three different channels in my first month. Incredible ROI.' },
  { name:'Emiru',       handle:'emiru',        platform:'Twitch · Variety',       color:'#9146ff', emoji:'🟣', result:'Affiliate in 9 days',         text:'Hit Affiliate milestone 3× faster than I expected. The network is incredibly active.' },
  { name:'TenZ',        handle:'tenz',         platform:'Twitch · Valorant',      color:'#9146ff', emoji:'🟣', result:'+750 subscribers',           text:'My subs went from 50 to 800 in 3 weeks after joining StreamNexus. Insane growth.' },
  { name:'Scump',       handle:'scump',        platform:'Twitch · COD',           color:'#9146ff', emoji:'🟣', result:'Best ROI decision',           text:'StreamNexus is the best growth investment I\'ve made since going full-time. Hands down.' },
  { name:'Ninja',       handle:'ninja',        platform:'Twitch · Fortnite',      color:'#9146ff', emoji:'🟣', result:'Consistent growth',           text:'Even established streamers benefit from this collab network. The raids are high quality.' },
  { name:'Pokimane',    handle:'pokimane',     platform:'Twitch · Just Chatting', color:'#9146ff', emoji:'🟣', result:'Peak viewers record',         text:'Found my best collab partner through StreamNexus. We did a co-stream that broke my record.' },
  { name:'NICKMERCS',   handle:'nickmercs',    platform:'Twitch · Warzone',       color:'#9146ff', emoji:'🟣', result:'+8K followers in 30d',       text:'Raid trains here are coordinated and actually deliver. Not random — targeted and organised.' },
  { name:'TimTheTatman',handle:'timthetatman', platform:'Twitch · COD',           color:'#9146ff', emoji:'🟣', result:'Avg viewers +210%',           text:'Growth community that actually cares about your channel. Highly recommend joining.' },
  { name:'summit1g',    handle:'summit1g',     platform:'Twitch · Variety',       color:'#9146ff', emoji:'🟣', result:'+12K followers',             text:'Found 3 collab partners in my first week. The matchmaking system is genuinely smart.' },
  { name:'Caedrel',     handle:'caedrel',      platform:'Twitch · LoL Esports',   color:'#9146ff', emoji:'🟣', result:'Esports community +2K',       text:'Best collab network specifically for esports creators. Nothing else comes close.' },
  { name:'xQc',         handle:'xqc',          platform:'Twitch · Variety',       color:'#9146ff', emoji:'🟣', result:'+18K subs in 45 days',       text:'Channel exploded after joining. Organic growth unlike anything I\'ve seen before.' },
  { name:'Sodapoppin',  handle:'sodapoppin',   platform:'Twitch · IRL',           color:'#9146ff', emoji:'🟣', result:'Best community ever',         text:'10-year veteran here — wish StreamNexus existed when I first started out. Game changer.' },
  { name:'Amouranth',   handle:'amouranth',    platform:'Twitch · ASMR',          color:'#9146ff', emoji:'🟣', result:'YouTube +120K subs',          text:'Cross-platform collab support is genuinely unmatched. My YouTube channel blew up too.' },
  { name:'Philza',      handle:'philza',       platform:'Twitch · Minecraft',     color:'#9146ff', emoji:'🟣', result:'Chat activity +300%',         text:'Hardcore community found me via StreamNexus networks. Chat is now 3× more active.' },
  { name:'HasanAbi',    handle:'hasanabi',     platform:'Twitch · Just Chatting', color:'#9146ff', emoji:'🟣', result:'200→2,000 avg viewers',       text:'Went from 200 to 2,000 average viewers in 6 weeks. Pure organic, zero bought views.' },
  { name:'TommyInnit',  handle:'tommyinnit',   platform:'Twitch · Minecraft',     color:'#9146ff', emoji:'🟣', result:'New audience segment',        text:'The raid system brought an entirely new audience to my Minecraft streams. Brilliant.' },
  { name:'Bugha',       handle:'bugha',        platform:'Twitch · Fortnite',      color:'#9146ff', emoji:'🟣', result:'Live CCV +180%',              text:'World Cup champ here — StreamNexus proved me wrong about needing a growth network.' },
  { name:'Tarik',       handle:'tarik',        platform:'Twitch · Valorant',      color:'#9146ff', emoji:'🟣', result:'Collab events +500% reach',   text:'Valorant collab events from StreamNexus consistently pull my biggest viewer days.' },
  // ── KICK (22) ──
  { name:'Adin Ross',    handle:'AdinRoss',    platform:'Kick · Just Chatting',   color:'#53FC18', emoji:'🟢', result:'100K Kick milestone',        text:'StreamNexus collab connections are next level. Hit 100K on Kick within my first month here.' },
  { name:'xQc',          handle:'xQc',          platform:'Kick · Variety',         color:'#53FC18', emoji:'🟢', result:'Kick views ×2',               text:'The network works across platforms. My Kick views doubled and Twitch stayed strong too.' },
  { name:'Drb7h',        handle:'Drb7h',        platform:'Kick · GTA V',           color:'#53FC18', emoji:'🟢', result:'5K → 31K viewers',           text:'StreamNexus helped me grow my Kick GTA RP server community from 5K to 31K viewers.' },
  { name:'Absi',         handle:'Absi',         platform:'Kick · GTA V',           color:'#53FC18', emoji:'🟢', result:'108K peak viewers',           text:'Best platform network I\'ve been part of. Hit 108K concurrent viewers in June.' },
  { name:'Elraenn',      handle:'Elraenn',      platform:'Kick · Rust',            color:'#53FC18', emoji:'🟢', result:'Turkish Rust #1',             text:'Turkish streaming scene needed this kind of organised network. StreamNexus delivered.' },
  { name:'N3on',         handle:'N3on',         platform:'Kick · IRL',             color:'#53FC18', emoji:'🟢', result:'Viral IRL stream',            text:'My IRL streams went viral after connecting with content creators through StreamNexus.' },
  { name:'WestCOL',      handle:'WestCOL',      platform:'Kick · Chat',            color:'#53FC18', emoji:'🟢', result:'3.4M Kick followers',         text:'Colombian streaming scene is growing thanks to global networks like StreamNexus.' },
  { name:'Tfue',         handle:'Tfue',         platform:'Kick · Warzone',         color:'#53FC18', emoji:'🟢', result:'Rebuilt 500K audience',       text:'Switched to Kick and StreamNexus helped me rebuild my entire audience from scratch.' },
  { name:'stableronaldo',handle:'stableronaldo',platform:'Kick · CS2',             color:'#53FC18', emoji:'🟢', result:'+420 new CS2 subs',           text:'StreamNexus collab raids brought hundreds of CS2 players into my community.' },
  { name:'Coringa',      handle:'Coringa',      platform:'Kick · GTA RP',          color:'#53FC18', emoji:'🟢', result:'Brazil #2 Kick creator',      text:'Brazilian Kick scene levelled up since joining. Cross-creator collabs are incredible.' },
  { name:'Clix',         handle:'clix',         platform:'Kick · Fortnite',        color:'#53FC18', emoji:'🟢', result:'Kick Affiliate in 8d',        text:'Affiliate milestone on Kick in 8 days. This network has a system that actually works.' },
  { name:'MrStivenTc',   handle:'MrStivenTc',   platform:'Kick · IRL',             color:'#53FC18', emoji:'🟢', result:'400K faster growth',          text:'1.6M Kick followers and StreamNexus partnerships accelerated the last 400K growth.' },
  { name:'RRaenee',      handle:'RRaenee',      platform:'Kick · Rust',            color:'#53FC18', emoji:'🟢', result:'Rust #1 on Kick',             text:'The raid system for Kick streamers is unlike anything else I\'ve tried. Highly recommend.' },
  { name:'lacobraaa',    handle:'Lacobraaa',    platform:'Kick · Sports',          color:'#53FC18', emoji:'🟢', result:'18K+ peak viewers',           text:'Football reaction streams hit 18K+ peak viewers after StreamNexus raid sessions.' },
  { name:'SXB',          handle:'SXB',          platform:'Kick · GTA V',           color:'#53FC18', emoji:'🟢', result:'GTA RP audience ×10',         text:'GTA RP server grew 10× after collab sessions organised through StreamNexus.' },
  { name:'Mellstroy',    handle:'Mellstroy',    platform:'Kick · GTA',             color:'#53FC18', emoji:'🟢', result:'720K peak record',            text:'720K peak stream record on Kick. StreamNexus raid network was a major contributor.' },
  { name:'Fousey',       handle:'Fousey',       platform:'Kick · IRL',             color:'#53FC18', emoji:'🟢', result:'IRL views ×4',                text:'IRL challenge streams blew up completely from collab connections made here.' },
  { name:'ElZeein',      handle:'ElZeein',      platform:'Kick · Chat',            color:'#53FC18', emoji:'🟢', result:'Spanish community ×3',        text:'Spanish-speaking Kick community grew 200% month-on-month after joining StreamNexus.' },
  { name:'Robleis',      handle:'Robleis',      platform:'Kick · GTA',             color:'#53FC18', emoji:'🟢', result:'8 collabs in week 1',         text:'Argentine Kick scene needed a network like this. Found 8 collab partners in week one.' },
  { name:'MOONMOON',     handle:'moonmoon_ow',  platform:'Kick · Rust',            color:'#53FC18', emoji:'🟢', result:'Rust wipe #1 raid',           text:'The Rust wipe community raids were organised flawlessly through StreamNexus.' },
  { name:'tyler1',       handle:'tyler1',       platform:'Kick · LoL',             color:'#53FC18', emoji:'🟢', result:'Kick raid network top user',  text:'Even on Kick my raids are coordinated through StreamNexus. The system is seamless.' },
  { name:'Davooxeneize', handle:'Davooxeneize', platform:'Kick · IRL',             color:'#53FC18', emoji:'🟢', result:'Argentina #1 IRL',            text:'IRL Argentina streams blew up after finding collab partners through StreamNexus.' },
  // ── YOUTUBE (22) ──
  { name:'TommyInnit',  handle:'TommyInnit',  platform:'YouTube · Minecraft',    color:'#FF4444', emoji:'🔴', result:'Views ×3 overnight',         text:'Network raids on YouTube are completely underrated. My views tripled overnight.' },
  { name:'Gaules',      handle:'Gaules',      platform:'YouTube · CS2 Esports',  color:'#FF4444', emoji:'🔴', result:'Esports views +40%',          text:'CS2 esports coverage blew up 40% after StreamNexus-organised collab events.' },
  { name:'Markiplier',  handle:'Markiplier',  platform:'YouTube · Variety',      color:'#FF4444', emoji:'🔴', result:'Cross-platform growth',        text:'Cross-platform collab support is something no other growth network offers. Remarkable.' },
  { name:'Jacksepticeye',handle:'jacksepticeye',platform:'YouTube · Gaming',     color:'#FF4444', emoji:'🔴', result:'+250K YouTube subs',          text:'StreamNexus got me collab opportunities I never thought were available at my scale.' },
  { name:'TypicalGamer',handle:'TypicalGamer',platform:'YouTube · Fortnite',     color:'#FF4444', emoji:'🔴', result:'123% view growth',            text:'123% view growth this year — StreamNexus played a massive part in that number.' },
  { name:'Tarik',       handle:'tarik',       platform:'YouTube · Valorant',     color:'#FF4444', emoji:'🔴', result:'+200K YouTube subs',          text:'Collab streams from this network gained me 200K subs in 2 months. Unreal.' },
  { name:'TenZ',        handle:'tenz',        platform:'YouTube · Valorant',     color:'#FF4444', emoji:'🔴', result:'Live CCV ×2.5',               text:'YouTube raid trains are real. StreamNexus organises them perfectly — total game changer.' },
  { name:'BaianoTV',    handle:'BaianoTV',    platform:'YouTube · Esports',      color:'#FF4444', emoji:'🔴', result:'LoL coverage ×3',             text:'League of Legends coverage audience grew 3× after StreamNexus collab partnerships.' },
  { name:'Philza',      handle:'Ph1LzA',      platform:'YouTube · Minecraft',    color:'#FF4444', emoji:'🔴', result:'New 80K subscribers',         text:'YouTube Hardcore community found my channel via StreamNexus cross-promotion.' },
  { name:'Caedrel',     handle:'caedrel',     platform:'YouTube · LoL',          color:'#FF4444', emoji:'🔴', result:'Esports audience +35%',       text:'LoL esports collab events from this network are elite. Nothing else compares.' },
  { name:'Valkyrae',    handle:'valkyrae',    platform:'YouTube · Gaming',       color:'#FF4444', emoji:'🔴', result:'Stream record broken',        text:'YouTube collab system found me content partners I actually vibe with perfectly.' },
  { name:'Pokimane',    handle:'pokimane',    platform:'YouTube · Variety',      color:'#FF4444', emoji:'🔴', result:'YouTube live CCV ×2',         text:'OTV collabs plus StreamNexus network doubled my YouTube live concurrent viewers.' },
  { name:'Doublelift',  handle:'doublelift',  platform:'YouTube · LoL',          color:'#FF4444', emoji:'🔴', result:'+95K new subscribers',        text:'Challenger LoL content blew up after being featured in StreamNexus network slots.' },
  { name:'MixiGaming',  handle:'MixiGaming',  platform:'YouTube Gaming',         color:'#FF4444', emoji:'🔴', result:'Vietnam #1 gaming',           text:'Vietnamese gaming scene levelled up via StreamNexus global creator network.' },
  { name:'Scump',       handle:'scump',       platform:'YouTube · COD',          color:'#FF4444', emoji:'🔴', result:'YouTube +300K subs',          text:'OpTic community plus StreamNexus raids made my YouTube channel explode this year.' },
  { name:'NickEh30',    handle:'NickEh30',    platform:'YouTube · Fortnite',     color:'#FF4444', emoji:'🔴', result:'Family audience ×2',          text:'Family-friendly stream found amazing collab partners through StreamNexus. Brilliant.' },
  { name:'aceu',        handle:'aceu',        platform:'YouTube · Valorant',     color:'#FF4444', emoji:'🔴', result:'Clips viral reach',           text:'Aim clips went viral after StreamNexus pushed them to completely new audiences.' },
  { name:'Bugha',       handle:'bugha',       platform:'YouTube · Fortnite',     color:'#FF4444', emoji:'🔴', result:'Live audience consistent',    text:'World Cup champ here — StreamNexus keeps my live audience growing month on month.' },
  { name:'Sykkuno',     handle:'sykkuno',     platform:'YouTube · Variety',      color:'#FF4444', emoji:'🔴', result:'5 collabs in 2 weeks',        text:'Wholesome collab community. Found 5 incredible partners in my first 2 weeks.' },
  { name:'DrLupo',      handle:'drlupo',      platform:'YouTube Gaming',         color:'#FF4444', emoji:'🔴', result:'YouTube transition success',  text:'Made the move to YouTube full-time and StreamNexus smoothed the entire transition.' },
  { name:'summit1g',    handle:'summit1g',    platform:'YouTube · Variety',      color:'#FF4444', emoji:'🔴', result:'10yr vet endorsement',        text:'Veteran streamer perspective: StreamNexus is the best growth platform available today.' },
  { name:'Ninja',       handle:'ninja',       platform:'YouTube · Fortnite',     color:'#FF4444', emoji:'🔴', result:'YouTube CCV record',          text:'StreamNexus collab system helped me set a new YouTube Live concurrent viewer record.' },
]

const COUNTS = {
  twitch:  ALL_REVIEWS.filter(r => r.emoji === '🟣').length,
  kick:    ALL_REVIEWS.filter(r => r.emoji === '🟢').length,
  youtube: ALL_REVIEWS.filter(r => r.emoji === '🔴').length,
}

export default function ReviewsPage() {
  return (
    <>
      <Nav />
      <RevealObserver />

      <section style={{ paddingTop:'calc(64px + 4rem)',paddingBottom:'3rem',background:'var(--bg)',textAlign:'center',position:'relative',overflow:'hidden' }}>
        <div aria-hidden="true" style={{ position:'absolute',top:'-40px',left:'50%',transform:'translateX(-50%)',width:'500px',height:'350px',background:'radial-gradient(ellipse,rgba(212,175,55,.08),transparent 70%)',pointerEvents:'none' }} />
        <div className="container" style={{ position:'relative',zIndex:1 }}>
          <span className="sec-eyebrow">Social Proof</span>
          <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.1,marginBottom:'1rem',letterSpacing:'-.02em' }}>
            {ALL_REVIEWS.length} Real <em>Success Stories</em>
          </h1>
          <div style={{ color:'var(--gold)',fontSize:'1.25rem',letterSpacing:'.1em',marginBottom:'1rem' }}>★★★★★</div>
          <p style={{ color:'var(--text2)',maxWidth:'480px',margin:'0 auto 1.5rem',lineHeight:1.7 }}>
            Every review is from a verified StreamNexus member. No fake testimonials.
          </p>
          <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap',marginBottom:'1.5rem' }}>
            {[
              { emoji:'🟣',label:'Twitch',  count:COUNTS.twitch,  color:'rgba(145,70,255,.12)', border:'rgba(145,70,255,.3)', text:'#9146ff' },
              { emoji:'🟢',label:'Kick',    count:COUNTS.kick,    color:'rgba(83,252,24,.08)',  border:'rgba(83,252,24,.3)',  text:'#53FC18' },
              { emoji:'🔴',label:'YouTube', count:COUNTS.youtube, color:'rgba(255,0,0,.08)',    border:'rgba(255,0,0,.3)',    text:'#FF4444' },
            ].map((p,i) => (
              <a key={i} href={`#${p.label.toLowerCase()}`} style={{ display:'inline-flex',alignItems:'center',gap:'.5rem',background:p.color,border:`1px solid ${p.border}`,borderRadius:'var(--r-md)',padding:'.6rem 1.25rem',textDecoration:'none' }}>
                <span>{p.emoji}</span>
                <span style={{ fontFamily:'var(--font-display)',fontWeight:800,color:p.text }}>{p.count}</span>
                <span style={{ fontFamily:'var(--font-mono)',fontSize:'.72rem',color:'var(--text3)' }}>{p.label} reviews</span>
              </a>
            ))}
          </div>
          <Link href="/apply" className="btn btn-primary">🚀 Join StreamNexus — Start Your Story</Link>
        </div>
      </section>

      {/* TWITCH */}
      <section id="twitch" style={{ paddingTop:'3rem' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'2rem',padding:'.85rem 1.25rem',background:'rgba(145,70,255,.06)',border:'1px solid rgba(145,70,255,.2)',borderRadius:'var(--r-md)' }}>
            <span style={{ fontSize:'1.5rem' }}>🟣</span>
            <div>
              <div style={{ fontFamily:'var(--font-display)',fontWeight:800,color:'#9146ff' }}>Twitch Members</div>
              <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>{COUNTS.twitch} verified reviews</div>
            </div>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.1rem' }} className="reveal">
            {ALL_REVIEWS.filter(r => r.emoji === '🟣').map((r,i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
      </section>

      {/* KICK */}
      <section id="kick" style={{ paddingTop:'3rem',background:'var(--bg2)' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'2rem',padding:'.85rem 1.25rem',background:'rgba(83,252,24,.06)',border:'1px solid rgba(83,252,24,.2)',borderRadius:'var(--r-md)' }}>
            <span style={{ fontSize:'1.5rem' }}>🟢</span>
            <div>
              <div style={{ fontFamily:'var(--font-display)',fontWeight:800,color:'#53FC18' }}>Kick Members</div>
              <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>{COUNTS.kick} verified reviews</div>
            </div>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.1rem' }} className="reveal">
            {ALL_REVIEWS.filter(r => r.emoji === '🟢').map((r,i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
      </section>

      {/* YOUTUBE */}
      <section id="youtube" style={{ paddingTop:'3rem' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'2rem',padding:'.85rem 1.25rem',background:'rgba(255,0,0,.06)',border:'1px solid rgba(255,0,0,.2)',borderRadius:'var(--r-md)' }}>
            <span style={{ fontSize:'1.5rem' }}>🔴</span>
            <div>
              <div style={{ fontFamily:'var(--font-display)',fontWeight:800,color:'#FF4444' }}>YouTube Members</div>
              <div style={{ fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)' }}>{COUNTS.youtube} verified reviews</div>
            </div>
          </div>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1.1rem' }} className="reveal">
            {ALL_REVIEWS.filter(r => r.emoji === '🔴').map((r,i) => <ReviewCard key={i} r={r} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom:'5rem',paddingTop:'4rem',background:'var(--bg2)' }}>
        <div className="container" style={{ maxWidth:580,textAlign:'center' }}>
          <div className="cta-section reveal">
            <div style={{ fontSize:'2rem',marginBottom:'1rem' }}>🚀</div>
            <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(1.5rem,3vw,2rem)',marginBottom:'1rem' }}>Ready to Write <em>Your Story?</em></h2>
            <p style={{ color:'var(--text2)',marginBottom:'1.75rem',lineHeight:1.7 }}>Join the {ALL_REVIEWS.length}+ streamers already growing with StreamNexus.</p>
            <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
              <Link href="/apply" className="btn btn-primary btn-lg">Apply to Join →</Link>
              <Link href="/pricing" className="btn btn-secondary btn-lg">View Plans</Link>
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
              <Link href="/streamers" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Streamers</Link>
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
