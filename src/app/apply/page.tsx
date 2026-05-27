import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import RevealObserver from '@/components/RevealObserver'
import ApplyForm from '@/components/ApplyForm'
import { PRICING, SITE } from '@/lib/config'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Apply to Join StreamNexus',
  description: 'Submit your StreamNexus application. Choose your plan, share your channel details, and start growing in 24 hours.',
}

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <RevealObserver />

      <section style={{ paddingTop:'calc(64px + 4rem)', paddingBottom:'5rem', background:'var(--bg)', position:'relative', overflow:'hidden' }}>
        {/* bg orb */}
        <div aria-hidden="true" style={{ position:'absolute',top:'-80px',right:'-80px',width:'500px',height:'500px',borderRadius:'50%',background:'radial-gradient(circle,rgba(212,175,55,.07),transparent 70%)',pointerEvents:'none' }} />

        <div className="container" style={{ maxWidth:900 }}>
          <div style={{ textAlign:'center', marginBottom:'3rem' }} className="reveal">
            <span className="sec-eyebrow">Application</span>
            <h1 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'clamp(2rem,4vw,3rem)',lineHeight:1.1,letterSpacing:'-.02em',marginBottom:'1rem' }}>
              Join <em>StreamNexus</em>
            </h1>
            <p style={{ color:'var(--text2)',maxWidth:'520px',margin:'0 auto',lineHeight:1.7 }}>
              Fill in your details below. We'll confirm your plan, process your order, and send your Discord invite within 24 hours.
            </p>
          </div>

          {/* Plan summary pills */}
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginBottom:'3rem' }} className="reveal">
            {PRICING.map(p => (
              <Link
                key={p.id}
                href={`/apply?plan=${p.id}`}
                style={{ textDecoration:'none' }}
              >
                <div style={{
                  padding:'1.25rem',textAlign:'center',borderRadius:'var(--r-lg)',cursor:'pointer',
                  background: p.badge ? 'rgba(212,175,55,.07)' : 'var(--card-bg)',
                  border: p.badge ? '1px solid var(--border-gold)' : '1px solid var(--card-border)',
                  transition:'all .25s',
                }}>
                  {p.badge && <div className="plan-badge" style={{ marginBottom:'.4rem' }}>{p.badge}</div>}
                  <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'.95rem',marginBottom:'.25rem' }}>{p.name}</div>
                  <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.5rem',color:'var(--gold)' }}>${p.price}</div>
                  <div style={{ fontFamily:'var(--font-mono)',fontSize:'.62rem',color:'var(--text3)',marginTop:'.15rem' }}>{p.period}</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal reveal-delay-2">
            <ApplyForm />
          </div>
        </div>
      </section>

      <footer style={{ background:'var(--bg2)',borderTop:'1px solid var(--border)',padding:'2rem 0' }}>
        <div className="container">
          <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem' }}>
            <div className="nav-logo"><div className="nav-logo-dot"/>StreamNexus</div>
            <div style={{ display:'flex',gap:'1.25rem',flexWrap:'wrap' }}>
              <Link href="/" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Home</Link>
              <Link href="/pricing" style={{ fontSize:'.85rem',color:'var(--text2)' }}>Pricing</Link>
              <Link href="/faq" style={{ fontSize:'.85rem',color:'var(--text2)' }}>FAQ</Link>
            </div>
          </div>
          <div style={{ borderTop:'1px solid var(--border)',marginTop:'1.25rem',paddingTop:'1.25rem' }}>
            <div className="footer-copy">© 2025 StreamNexus · {SITE.email} · 🔒 Secure payments via Upwork</div>
          </div>
        </div>
      </footer>
    </>
  )
}
