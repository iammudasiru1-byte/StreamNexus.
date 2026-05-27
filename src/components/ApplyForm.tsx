'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { SITE, PRICING } from '@/lib/config'

function ApplyFormInner() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [customBudget, setCustomBudget] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    channel: '',
    platform: '',
    viewers: '',
    plan: '',
    customAmount: '',
    customDetails: '',
    goals: '',
    referral: '',
  })

  useEffect(() => {
    const plan = searchParams.get('plan')
    if (plan) setForm(f => ({ ...f, plan }))
  }, [searchParams])

  const update = (field: string, val: string) => setForm(f => ({ ...f, [field]: val }))

  const selectedPlan = PRICING.find(p => p.id === form.plan)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const planLine = customBudget
      ? `Custom Budget Request: $${form.customAmount}\nCustom Plan Details: ${form.customDetails}`
      : `Plan Selected: ${selectedPlan?.name ?? form.plan} ($${selectedPlan?.price ?? ''})`

    const subject = encodeURIComponent(
      `StreamNexus Application — ${form.name} (${form.platform})`
    )
    const body = encodeURIComponent(
      `=== STREAMNEXUS APPLICATION ===\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Platform: ${form.platform}\n` +
      `Channel Link: ${form.channel}\n` +
      `Avg Viewers: ${form.viewers}\n` +
      `${planLine}\n` +
      `How they heard about us: ${form.referral}\n\n` +
      `Goals & Message:\n${form.goals}\n\n` +
      `=== END OF APPLICATION ===`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ padding:'3rem 2rem',textAlign:'center',background:'rgba(0,255,128,.04)',border:'1px solid rgba(0,255,128,.2)',borderRadius:'var(--r-xl)' }}>
      <div style={{ fontSize:'3rem',marginBottom:'1rem' }}>✅</div>
      <h2 style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.5rem',marginBottom:'.75rem' }}>Application Sent!</h2>
      <p style={{ color:'var(--text2)',marginBottom:'2rem',lineHeight:1.65 }}>
        We'll review your application and reply within 24 hours.<br />
        Check your email for confirmation.
      </p>
      <div style={{ display:'flex',justifyContent:'center',gap:'1rem',flexWrap:'wrap' }}>
        <Link href="/" className="btn btn-secondary btn-sm">Back to Home</Link>
        <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
          💬 Join Discord While You Wait
        </a>
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} style={{ background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:'var(--r-xl)',padding:'clamp(1.5rem,4vw,2.5rem)' }}>

      {/* Section: Personal Info */}
      <div style={{ marginBottom:'2rem' }}>
        <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1rem',marginBottom:'1.25rem',paddingBottom:'.75rem',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:'.5rem' }}>
          <span style={{ background:'var(--gold)',color:'#000',width:'24px',height:'24px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.72rem',fontWeight:800,flexShrink:0 }}>1</span>
          Your Details
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem' }}>
          <div className="form-field">
            <label className="form-label">Full Name *</label>
            <input className="form-input" required placeholder="Your name or streamer name" value={form.name} onChange={e => update('name', e.target.value)} />
          </div>
          <div className="form-field">
            <label className="form-label">Email Address *</label>
            <input className="form-input" type="email" required placeholder="you@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
          </div>
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem' }}>
          <div className="form-field">
            <label className="form-label">How did you find us?</label>
            <select className="form-select" value={form.referral} onChange={e => update('referral', e.target.value)}>
              <option value="">Select source</option>
              <option>Google Search</option>
              <option>YouTube</option>
              <option>Twitter / X</option>
              <option>Discord</option>
              <option>Friend / Referral</option>
              <option>Reddit</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Average Viewers *</label>
            <select className="form-select" required value={form.viewers} onChange={e => update('viewers', e.target.value)}>
              <option value="">Select range</option>
              <option>0–5 viewers</option>
              <option>5–20 viewers</option>
              <option>20–100 viewers</option>
              <option>100–500 viewers</option>
              <option>500+ viewers</option>
            </select>
          </div>
        </div>
      </div>

      {/* Section: Channel Info */}
      <div style={{ marginBottom:'2rem' }}>
        <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1rem',marginBottom:'1.25rem',paddingBottom:'.75rem',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:'.5rem' }}>
          <span style={{ background:'var(--gold)',color:'#000',width:'24px',height:'24px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.72rem',fontWeight:800,flexShrink:0 }}>2</span>
          Your Channel
        </div>
        <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem' }}>
          <div className="form-field">
            <label className="form-label">Platform *</label>
            <select className="form-select" required value={form.platform} onChange={e => update('platform', e.target.value)}>
              <option value="">Select your main platform</option>
              <option value="Twitch">🟣 Twitch</option>
              <option value="Kick">🟢 Kick</option>
              <option value="YouTube">🔴 YouTube</option>
              <option value="TikTok">⚫ TikTok</option>
              <option value="Multiple">📡 Multiple Platforms</option>
            </select>
          </div>
          <div className="form-field">
            <label className="form-label">Channel Link *</label>
            <input className="form-input" required placeholder="twitch.tv/yourchannel" value={form.channel} onChange={e => update('channel', e.target.value)} />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Your Goals</label>
          <textarea className="form-textarea" placeholder="Tell us about your streaming goals — what do you want to achieve? (e.g. reach Affiliate, grow to 100 avg viewers, build a community)" value={form.goals} onChange={e => update('goals', e.target.value)} style={{ minHeight:'90px' }} />
        </div>
      </div>

      {/* Section: Plan Selection */}
      <div style={{ marginBottom:'2rem' }}>
        <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1rem',marginBottom:'1.25rem',paddingBottom:'.75rem',borderBottom:'1px solid var(--border)',display:'flex',alignItems:'center',gap:'.5rem' }}>
          <span style={{ background:'var(--gold)',color:'#000',width:'24px',height:'24px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'.72rem',fontWeight:800,flexShrink:0 }}>3</span>
          Choose Your Plan
        </div>

        {/* Toggle custom budget */}
        <div style={{ display:'flex',alignItems:'center',gap:'1rem',marginBottom:'1.25rem',flexWrap:'wrap' }}>
          <button
            type="button"
            onClick={() => setCustomBudget(false)}
            style={{ flex:1,padding:'.65rem 1rem',borderRadius:'var(--r-md)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.82rem',border:'1px solid',transition:'all .2s',cursor:'pointer',
              background: !customBudget ? 'rgba(212,175,55,.12)' : 'transparent',
              borderColor: !customBudget ? 'var(--gold)' : 'var(--border)',
              color: !customBudget ? 'var(--gold)' : 'var(--text2)',
            }}
          >
            📋 Choose a Standard Plan
          </button>
          <button
            type="button"
            onClick={() => setCustomBudget(true)}
            style={{ flex:1,padding:'.65rem 1rem',borderRadius:'var(--r-md)',fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.82rem',border:'1px solid',transition:'all .2s',cursor:'pointer',
              background: customBudget ? 'rgba(0,207,255,.1)' : 'transparent',
              borderColor: customBudget ? 'rgba(0,207,255,.5)' : 'var(--border)',
              color: customBudget ? 'var(--blue)' : 'var(--text2)',
            }}
          >
            💡 Set My Own Budget
          </button>
        </div>

        {!customBudget ? (
          /* Standard plan cards */
          <div style={{ display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'.85rem' }}>
            {PRICING.map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => update('plan', p.id)}
                style={{
                  padding:'1.25rem .75rem',borderRadius:'var(--r-lg)',textAlign:'center',cursor:'pointer',
                  background: form.plan === p.id ? 'rgba(212,175,55,.1)' : 'var(--surface)',
                  border: form.plan === p.id ? '2px solid var(--gold)' : '1px solid var(--border)',
                  transition:'all .25s',
                }}
              >
                {p.badge && <div style={{ fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--gold)',marginBottom:'.35rem',letterSpacing:'.1em' }}>★ {p.badge}</div>}
                <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'.9rem',color:'var(--text)',marginBottom:'.25rem' }}>{p.name}</div>
                <div style={{ fontFamily:'var(--font-display)',fontWeight:800,fontSize:'1.5rem',color:'var(--gold)',lineHeight:1 }}>${p.price}</div>
                <div style={{ fontFamily:'var(--font-mono)',fontSize:'.58rem',color:'var(--text3)',marginTop:'.2rem' }}>{p.period}</div>
                <div style={{ marginTop:'.6rem',fontSize:'.72rem',color:'var(--text2)',lineHeight:1.4 }}>
                  {p.features.slice(0,2).join(' · ')}
                </div>
                {form.plan === p.id && (
                  <div style={{ marginTop:'.5rem',fontSize:'.7rem',color:'var(--gold)',fontWeight:700 }}>✓ Selected</div>
                )}
              </button>
            ))}
          </div>
        ) : (
          /* Custom budget */
          <div style={{ background:'rgba(0,207,255,.04)',border:'1px solid rgba(0,207,255,.2)',borderRadius:'var(--r-lg)',padding:'1.5rem' }}>
            <div style={{ display:'flex',alignItems:'center',gap:'.5rem',marginBottom:'1rem' }}>
              <span style={{ fontSize:'1.25rem' }}>💡</span>
              <div>
                <div style={{ fontFamily:'var(--font-display)',fontWeight:700,fontSize:'.9rem' }}>Custom Budget</div>
                <div style={{ fontSize:'.78rem',color:'var(--text2)' }}>Tell us what you can afford — we'll find the right package for you.</div>
              </div>
            </div>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 2fr',gap:'1rem' }}>
              <div className="form-field" style={{ marginBottom:0 }}>
                <label className="form-label">Your Budget (USD)</label>
                <div style={{ position:'relative' }}>
                  <span style={{ position:'absolute',left:'.85rem',top:'50%',transform:'translateY(-50%)',color:'var(--text3)',fontFamily:'var(--font-mono)' }}>$</span>
                  <input
                    className="form-input"
                    type="number"
                    min="1"
                    placeholder="e.g. 30"
                    value={form.customAmount}
                    onChange={e => update('customAmount', e.target.value)}
                    style={{ paddingLeft:'1.75rem' }}
                  />
                </div>
              </div>
              <div className="form-field" style={{ marginBottom:0 }}>
                <label className="form-label">What you need most</label>
                <select className="form-select" value={form.customDetails} onChange={e => update('customDetails', e.target.value)}>
                  <option value="">What matters most to you?</option>
                  <option>Raid network access — get more viewers live</option>
                  <option>Collab matchmaking — find co-stream partners</option>
                  <option>Discord community access</option>
                  <option>Growth coaching / guidance</option>
                  <option>Everything — I just have a limited budget</option>
                </select>
              </div>
            </div>
            <div style={{ marginTop:'.85rem',padding:'.75rem',background:'rgba(212,175,55,.05)',border:'1px solid rgba(212,175,55,.15)',borderRadius:'var(--r-sm)',fontSize:'.78rem',color:'var(--text2)',lineHeight:1.55 }}>
              💬 <strong style={{ color:'var(--gold)' }}>How this works:</strong> After you submit, we'll reply within 24h with a custom arrangement based on your budget. No pressure — we'll work with what you have.
            </div>
          </div>
        )}

        {/* Order link notice */}
        {!customBudget && form.plan && (
          <div style={{ marginTop:'1rem',padding:'.85rem 1rem',background:'rgba(0,255,128,.04)',border:'1px solid rgba(0,255,128,.15)',borderRadius:'var(--r-md)',fontSize:'.82rem',color:'var(--text2)',lineHeight:1.6 }}>
            <strong style={{ color:'#00ff80' }}>✓ {selectedPlan?.name} selected at ${selectedPlan?.price}.</strong>
            {' '}After submitting this form, you'll also need to complete payment via{' '}
            <a href={selectedPlan?.link} target="_blank" rel="noopener noreferrer" style={{ color:'var(--gold)' }}>
              Upwork (secure payment →)
            </a>
            . We'll send your Discord invite once both are done.
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width:'100%', justifyContent:'center', padding:'1rem', fontSize:'.95rem' }}
      >
        ✦ Submit Application
      </button>

      <p style={{ textAlign:'center',fontFamily:'var(--font-mono)',fontSize:'.68rem',color:'var(--text3)',marginTop:'1rem',lineHeight:1.6 }}>
        🔒 Your data is only used to process your application · Reply within 24h ·{' '}
        <a href={`mailto:${SITE.email}`} style={{ color:'var(--gold)' }}>Questions? Email us</a>
      </p>
    </form>
  )
}

export default function ApplyForm() {
  return (
    <Suspense fallback={<div style={{ padding:'2rem',textAlign:'center',color:'var(--text2)' }}>Loading form...</div>}>
      <ApplyFormInner />
    </Suspense>
  )
}
