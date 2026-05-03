// Vlad Burba — personal page (Variant A — visual)
// Inter only. Dark hero (3 palette options), cool indigo accent, mobile-adapted.

const PAGE_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "ink",
  "heroScale": "confident",
  "accentOn": true
}/*EDITMODE-END*/;

const PALETTES = {
  ink:      { hero: '#0e0e10', heroFg: '#fafaf7', paper: '#fafaf7', ink: '#1a1a1a',  mute: '#8a8a86', rule: '#e5e5df' },
  graphite: { hero: '#1a1d23', heroFg: '#f3f4f1', paper: '#f5f5f1', ink: '#1c1f24',  mute: '#8a8d8f', rule: '#e2e3dd' },
  navy:     { hero: '#0f1320', heroFg: '#f5f5f1', paper: '#f6f5f0', ink: '#181d28',  mute: '#8a8d92', rule: '#e3e2dc' },
};

// Cool accent — indigo / plum, anti-fingerprint (no teal).
const ACCENT      = '#6c5ce7';
const ACCENT_TEXT = '#ffffff';
const ACCENT_SOFT = 'rgba(108,92,231,.16)';

const HERO_SCALES = {
  restrained: { h1: 44, sub: 17, pad: '88px 0 104px' },
  confident:  { h1: 60, sub: 19, pad: '96px 0 120px' },
  editorial:  { h1: 76, sub: 20, pad: '108px 0 132px' },
};

const TG_URL    = 'https://t.me/vladburba';
const EMAIL     = 'vlad.burba@gmail.com';
const TG_HANDLE = '@vladburba';
const GH_USER   = 'vladburba';

function Page() {
  const [t, setT] = useTweaks(PAGE_DEFAULTS);
  const P = PALETTES[t.palette] || PALETTES.ink;
  const S = HERO_SCALES[t.heroScale] || HERO_SCALES.confident;
  const accentOn = t.accentOn;

  return (
    <div style={{ background: P.paper, color: P.ink, fontFamily: '"Inter", sans-serif', minHeight: '100vh' }}>
      <style>{`
        .vb-shell { padding-left: 72px; padding-right: 72px; }
        .vb-wrap  { max-width: 760px; margin: 0 auto; }
        .vb-h1    { font-size: ${S.h1}px; line-height: 1.05; letter-spacing: -.03em; font-weight: 600; margin: 0 0 28px; text-wrap: balance; }
        .vb-sub   { font-size: ${S.sub}px; line-height: 1.5; letter-spacing: -.005em; }
        .vb-skill { font-size: 22px; line-height: 1.3; letter-spacing: -.018em; font-weight: 500; text-wrap: balance; }
        .vb-hero-pad  { padding-top: ${S.pad.split(' ')[0]}; padding-bottom: ${S.pad.split(' ')[2]}; }
        .vb-section   { padding-top: 112px; padding-bottom: 112px; }

        @media (max-width: 720px) {
          .vb-shell { padding-left: 24px; padding-right: 24px; }
          .vb-h1    { font-size: ${Math.min(40, Math.round(S.h1 * 0.62))}px; letter-spacing: -.025em; }
          .vb-sub   { font-size: 16px; }
          .vb-skill { font-size: 18px; }
          .vb-hero-pad  { padding-top: 64px; padding-bottom: 80px; }
          .vb-section   { padding-top: 72px; padding-bottom: 72px; }
          .vb-topbar    { flex-direction: column; align-items: flex-start !important; gap: 12px; margin-bottom: 40px !important; }
          .vb-cta-row   { flex-direction: column; align-items: flex-start !important; gap: 14px !important; }
          .vb-footer    { flex-direction: column; align-items: flex-start !important; gap: 18px; }
          .vb-contacts  { gap: 18px !important; flex-wrap: wrap; }
          .vb-skill-row { grid-template-columns: 32px 1fr !important; gap: 16px !important; }
        }
        a.vb-link { color: inherit; text-decoration: none; transition: color .15s, border-color .15s; }
        a.vb-link:hover { color: ${accentOn ? ACCENT : P.ink}; border-color: ${accentOn ? ACCENT : P.ink}; }
        ::selection { background: ${ACCENT}; color: #fff; }
      `}</style>

      {/* HERO */}
      <section className="vb-shell vb-hero-pad" style={{ background: P.hero, color: P.heroFg }}>
        <div className="vb-wrap">
          {/* Top bar — name only (availability shown under CTA) */}
          <div className="vb-topbar" style={{
            display: 'flex', alignItems: 'center', marginBottom: 64,
            fontSize: 13, letterSpacing: '-.005em',
          }}>
            <div style={{ fontWeight: 500 }}>Влад Бурба</div>
          </div>

          {/* Slogan */}
          <h1 className="vb-h1">
            Инфра-инженер, собираю решения, которые держат прод
            <span style={{ color: accentOn ? ACCENT : 'rgba(255,255,255,.55)' }}>
              {' и думают сами.'}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="vb-sub" style={{
            color: 'rgba(255,255,255,.7)', margin: '0 0 44px', maxWidth: 600,
          }}>
            20+ лет с серверами и сетями <span style={{ color: 'rgba(255,255,255,.4)' }}>+</span> Python и Claude Code.
          </p>

          {/* CTA */}
          <div>
            <a href={TG_URL} target="_blank" rel="noopener" style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '14px 22px', borderRadius: 8,
              background: accentOn ? ACCENT : P.heroFg,
              color: accentOn ? ACCENT_TEXT : P.hero,
              fontSize: 15, fontWeight: 500, letterSpacing: '-.005em',
              textDecoration: 'none',
              transition: 'transform .15s, opacity .15s, background .15s',
              boxShadow: accentOn ? '0 1px 0 rgba(255,255,255,.15) inset, 0 8px 24px rgba(108,92,231,.35)' : '0 1px 0 rgba(255,255,255,.4) inset',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
              Связаться в Telegram
              <span style={{ opacity: .65, marginLeft: 2 }}>→</span>
            </a>
            <div style={{
              marginTop: 14,
              fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
              fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,.5)',
            }}>
              найм <span style={{ opacity: .6, padding: '0 6px' }}>·</span> консалтинг
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="vb-shell vb-section" style={{ borderBottom: `1px solid ${P.rule}` }}>
        <div className="vb-wrap">
          <SectionHeader n="01" name="Обо мне" P={P} />
          <div style={{
            display: 'grid', gap: 22,
            fontSize: 18, lineHeight: 1.65, letterSpacing: '-.005em',
            color: '#2c2c28', textWrap: 'pretty',
          }}>
            <p style={{ margin: 0 }}>
              Двадцать лет проектировал, разворачивал и держал на ходу инфраструктуру —
              сети, серверы, Linux, мониторинг. Знаю, как ведут себя системы под нагрузкой
              и почему они ломаются ночью.
            </p>
            <p style={{ margin: 0 }}>
              Сейчас собираю свою AI-инженерную практику: Python, Claude Code,
              интеграции LLM с реальными API и инфраструктурой. Связка{' '}
              <span style={{
                background: accentOn ? ACCENT_SOFT : 'transparent',
                color: accentOn ? ACCENT : 'inherit',
                padding: '0 5px', borderRadius: 3, fontWeight: 500,
              }}>
                инфра&nbsp;+&nbsp;AI
              </span>{' '}
              даёт автоматизации, которые не падают на проде.
            </p>
            <p style={{ margin: 0, color: '#52524e' }}>
              Ищу проекты на стыке: миграции, AI-автоматизации, интеграции систем —
              в формате найма или консалтинга.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="vb-shell vb-section" style={{ borderBottom: `1px solid ${P.rule}` }}>
        <div className="vb-wrap">
          <SectionHeader n="02" name="Что умею" P={P} />
          <div>
            {[
              'AI-автоматизации, которые работают в проде',
              'Миграции и поддержка инфраструктуры',
              'Интеграции систем — LLM, API, боты, мониторинг',
            ].map((text, i) => (
              <div key={i} className="vb-skill-row" style={{
                display: 'grid', gridTemplateColumns: '40px 1fr', gap: 24, alignItems: 'baseline',
                padding: '26px 0',
                borderTop: i === 0 ? `1px solid ${P.rule}` : 'none',
                borderBottom: `1px solid ${P.rule}`,
              }}>
                <span style={{
                  fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
                  fontSize: 12, color: accentOn ? ACCENT : P.mute, letterSpacing: '.04em',
                }}>
                  /0{i + 1}
                </span>
                <span className="vb-skill">{text}</span>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 32, fontSize: 12,
            color: P.mute, fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
            letterSpacing: '.04em', lineHeight: 1.7,
            display: 'flex', flexWrap: 'wrap', alignItems: 'baseline',
          }}>
            <span style={{ marginRight: 12, color: accentOn ? ACCENT : P.mute }}>stack ──</span>
            {['Python', 'Claude Code', 'Docker', 'Linux', 'n8n', 'Telegram Bot API'].map((s, i, a) => (
              <React.Fragment key={s}>
                <span>{s}</span>
                {i < a.length - 1 && <span style={{ opacity: .5, padding: '0 8px' }}>·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <footer className="vb-shell" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="vb-wrap vb-footer" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontSize: 13, color: P.mute, letterSpacing: '-.005em' }}>
            Влад Бурба · 2026
          </div>
          <div className="vb-contacts" style={{ display: 'flex', gap: 28, fontSize: 14 }}>
            <a className="vb-link" href={`mailto:${EMAIL}`} style={contactLink(P)}>{EMAIL}</a>
            <a className="vb-link" href={TG_URL} target="_blank" rel="noopener" style={contactLink(P)}>{TG_HANDLE}</a>
            <a className="vb-link" href={`https://github.com/${GH_USER}`} target="_blank" rel="noopener" style={contactLink(P)}>github/{GH_USER}</a>
          </div>
        </div>
      </footer>

      {/* TWEAKS */}
      <TweaksPanel title="Tweaks">
        <TweakSection title="Палитра">
          <TweakRadio
            value={t.palette} onChange={v => setT('palette', v)}
            options={[
              { value: 'ink', label: 'Чёрный' },
              { value: 'graphite', label: 'Графит' },
              { value: 'navy', label: 'Navy' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Размер hero">
          <TweakRadio
            value={t.heroScale} onChange={v => setT('heroScale', v)}
            options={[
              { value: 'restrained', label: 'Сдерж.' },
              { value: 'confident',  label: 'Увер.' },
              { value: 'editorial',  label: 'Редакц.' },
            ]}
          />
        </TweakSection>
        <TweakSection title="Акцент">
          <TweakToggle label="Индиго акцент" value={t.accentOn} onChange={v => setT('accentOn', v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

function SectionHeader({ n, name, P }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
      fontSize: 11, color: P.mute, letterSpacing: '.08em',
      textTransform: 'uppercase', marginBottom: 36,
    }}>
      <span style={{ color: P.ink }}>{n}</span>
      <span style={{ flex: 1, height: 1, background: P.rule }} />
      <span>{name}</span>
    </div>
  );
}

function contactLink(P) {
  return {
    color: 'inherit', textDecoration: 'none',
    borderBottom: `1px solid ${P.rule}`,
    paddingBottom: 2, letterSpacing: '-.005em',
  };
}

Object.assign(window, { Page });
