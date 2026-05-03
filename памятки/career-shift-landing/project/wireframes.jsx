// Wireframes for Vlad Burba personal page — 3 variants
// Lo-fi, Inter, b&w with one accent (yellow highlighter) — wireframe only.

const ACCENT = '#ffe168'; // sketchy highlighter — replace with brand later
const INK = '#1a1a1a';
const PAPER = '#fafaf7';
const MUTE = '#9a9a96';
const RULE = '#dcdcd6';

// Shared sketchy block — represents an image/avatar/logo placeholder
const Sketch = ({ w = '100%', h = 80, label, style = {} }) => (
  <div style={{
    width: w, height: h,
    border: `1.5px dashed ${MUTE}`,
    borderRadius: 6,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: MUTE, fontSize: 11, fontFamily: 'ui-monospace, Menlo, monospace',
    background: `repeating-linear-gradient(135deg, transparent 0 8px, rgba(0,0,0,.025) 8px 9px)`,
    ...style,
  }}>{label}</div>
);

// Annotation tag — marks structural intent on a wireframe
const Tag = ({ children, style = {} }) => (
  <span style={{
    fontSize: 10, fontFamily: 'ui-monospace, Menlo, monospace',
    color: '#7a5a00', background: ACCENT, padding: '2px 6px',
    borderRadius: 3, letterSpacing: '.02em', textTransform: 'uppercase',
    ...style,
  }}>{children}</span>
);

// Greybox text line
const Line = ({ w = '100%', h = 8, style = {} }) => (
  <div style={{ width: w, height: h, background: '#e7e7e2', borderRadius: 2, ...style }} />
);

// Wireframe button (rounded-md, NOT pill)
const WBtn = ({ children, dark = true, style = {} }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '12px 18px', borderRadius: 8,
    background: dark ? INK : 'transparent',
    color: dark ? PAPER : INK,
    border: dark ? 'none' : `1.5px solid ${INK}`,
    fontSize: 14, fontWeight: 500, letterSpacing: '-.01em',
    ...style,
  }}>{children}</div>
);

// Section divider with label
const SectionLabel = ({ n, name }) => (
  <div style={{
    display: 'flex', alignItems: 'center', gap: 10,
    fontFamily: 'ui-monospace, Menlo, monospace',
    fontSize: 10, color: MUTE, letterSpacing: '.08em',
    textTransform: 'uppercase', marginBottom: 14,
  }}>
    <span style={{ color: INK }}>{n}</span>
    <span style={{ flex: 1, height: 1, background: RULE }} />
    <span>{name}</span>
  </div>
);

// ─────────────────────────────────────────────────────────────
// VARIANT A — Classic stacked. Centered hero, conventional rhythm.
// ─────────────────────────────────────────────────────────────
function VariantA() {
  return (
    <div style={{ background: PAPER, fontFamily: '"Inter", sans-serif', color: INK }}>
      {/* HERO — dark */}
      <section style={{ background: INK, color: PAPER, padding: '90px 64px 110px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 64 }}>
            <div style={{ fontSize: 13, letterSpacing: '-.01em', opacity: .8 }}>Влад Бурба</div>
            <Tag style={{ background: 'rgba(255,225,104,.2)', color: ACCENT }}>HERO · dark</Tag>
          </div>
          <h1 style={{
            fontSize: 52, lineHeight: 1.08, letterSpacing: '-.025em',
            fontWeight: 600, margin: '0 0 28px', textWrap: 'balance',
          }}>
            Инфра-инженер, собираю решения, которые держат прод и думают сами.
          </h1>
          <p style={{
            fontSize: 19, lineHeight: 1.5, letterSpacing: '-.01em',
            color: 'rgba(250,250,247,.7)', margin: '0 0 40px', maxWidth: 580,
          }}>
            20+ лет с серверами и сетями + Python и Claude Code.
          </p>
          <WBtn dark={false} style={{ background: PAPER, color: INK, border: 'none' }}>
            Связаться в Telegram <span style={{ opacity: .5 }}>→</span>
          </WBtn>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${RULE}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <SectionLabel n="01" name="Обо мне" />
          <div style={{ display: 'grid', gap: 18, fontSize: 15, lineHeight: 1.6, color: '#444' }}>
            <Line w="92%" /><Line w="98%" /><Line w="88%" /><Line w="40%" />
            <div style={{ height: 8 }} />
            <Line w="95%" /><Line w="90%" /><Line w="60%" />
            <div style={{ height: 8 }} />
            <Line w="86%" /><Line w="55%" />
          </div>
          <div style={{ marginTop: 18 }}>
            <Tag>2–3 параграфа · кто / чем занимаюсь / куда иду</Tag>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${RULE}` }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <SectionLabel n="02" name="Что умею" />
          <div style={{ display: 'grid', gap: 0 }}>
            {[
              'AI-автоматизации, которые работают в проде',
              'Миграции и поддержка инфраструктуры',
              'Интеграции систем (LLM, API, боты, мониторинг)',
            ].map((t, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'baseline', gap: 20,
                padding: '22px 0', borderTop: i === 0 ? `1px solid ${RULE}` : 'none',
                borderBottom: `1px solid ${RULE}`,
              }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 12, color: MUTE, width: 24 }}>
                  0{i + 1}
                </span>
                <span style={{ fontSize: 20, letterSpacing: '-.015em', fontWeight: 500 }}>{t}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, fontSize: 12, color: MUTE, fontFamily: 'ui-monospace, monospace' }}>
            stack: Python · Claude Code · Docker · Linux · n8n · Telegram Bot API
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <footer style={{ padding: '64px' }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontSize: 13, color: MUTE }}>Влад Бурба · 2026</div>
          <div style={{ display: 'flex', gap: 28, fontSize: 14 }}>
            <span>email</span><span>·</span><span>Telegram</span><span>·</span><span>GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIANT B — Split / asymmetric. Hero with name-left, slogan-right grid.
// ─────────────────────────────────────────────────────────────
function VariantB() {
  return (
    <div style={{ background: PAPER, fontFamily: '"Inter", sans-serif', color: INK }}>
      {/* HERO — dark, split */}
      <section style={{ background: INK, color: PAPER, padding: '72px 64px 96px' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64, alignItems: 'start',
        }}>
          {/* Left: identity */}
          <div style={{ position: 'sticky', top: 24 }}>
            <div style={{ fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase',
              color: 'rgba(250,250,247,.5)', marginBottom: 12 }}>Влад Бурба</div>
            <Sketch h={72} w={72} label="avatar" style={{ borderColor: 'rgba(250,250,247,.3)', color: 'rgba(250,250,247,.4)', marginBottom: 24 }} />
            <div style={{ fontSize: 13, lineHeight: 1.5, color: 'rgba(250,250,247,.6)' }}>
              ИТ-инфраструктура<br />+ AI-инженерия
            </div>
            <div style={{ marginTop: 16 }}>
              <Tag style={{ background: 'rgba(255,225,104,.18)', color: ACCENT }}>двойной режим</Tag>
            </div>
          </div>

          {/* Right: slogan + cta */}
          <div>
            <h1 style={{
              fontSize: 56, lineHeight: 1.05, letterSpacing: '-.03em',
              fontWeight: 600, margin: '0 0 24px', textWrap: 'pretty',
            }}>
              Инфра-инженер, собираю решения, которые держат прод <span style={{ color: 'rgba(250,250,247,.4)' }}>и думают сами.</span>
            </h1>
            <p style={{
              fontSize: 18, lineHeight: 1.5, letterSpacing: '-.01em',
              color: 'rgba(250,250,247,.7)', margin: '0 0 36px', maxWidth: 540,
            }}>
              20+ лет с серверами и сетями + Python и Claude Code.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <WBtn dark={false} style={{ background: PAPER, color: INK, border: 'none' }}>
                Связаться в Telegram <span style={{ opacity: .5 }}>→</span>
              </WBtn>
              <span style={{ fontSize: 12, color: 'rgba(250,250,247,.45)', fontFamily: 'ui-monospace, monospace' }}>
                найм · консалтинг
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT — asymmetric */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${RULE}` }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64,
        }}>
          <div>
            <SectionLabel n="01" name="Обо мне" />
          </div>
          <div style={{ display: 'grid', gap: 16, maxWidth: 620 }}>
            <Line w="94%" /><Line w="98%" /><Line w="86%" /><Line w="50%" />
            <div style={{ height: 6 }} />
            <Line w="92%" /><Line w="80%" />
            <div style={{ marginTop: 12 }}>
              <Tag>2–3 параграфа · placeholder</Tag>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS — asymmetric */}
      <section style={{ padding: '96px 64px', borderBottom: `1px solid ${RULE}` }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64,
        }}>
          <div>
            <SectionLabel n="02" name="Что умею" />
          </div>
          <div>
            {[
              ['AI-автоматизации,', 'которые работают в проде'],
              ['Миграции и поддержка', 'инфраструктуры'],
              ['Интеграции систем', 'LLM, API, боты, мониторинг'],
            ].map(([a, b], i) => (
              <div key={i} style={{
                padding: '24px 0',
                borderTop: i === 0 ? `1px solid ${RULE}` : 'none',
                borderBottom: `1px solid ${RULE}`,
                display: 'grid', gridTemplateColumns: '32px 1fr', gap: 16, alignItems: 'baseline',
              }}>
                <span style={{ fontFamily: 'ui-monospace, monospace', fontSize: 11, color: MUTE }}>
                  / 0{i + 1}
                </span>
                <div>
                  <div style={{ fontSize: 22, letterSpacing: '-.02em', fontWeight: 500 }}>{a}</div>
                  <div style={{ fontSize: 22, letterSpacing: '-.02em', color: MUTE }}>{b}</div>
                </div>
              </div>
            ))}
            <div style={{ marginTop: 28, fontSize: 12, color: MUTE, fontFamily: 'ui-monospace, monospace', lineHeight: 1.6 }}>
              stack ──────<br />
              Python · Claude Code · Docker · Linux · n8n · Telegram Bot API
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <footer style={{ padding: '48px 64px' }}>
        <div style={{
          maxWidth: 1080, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '220px 1fr', gap: 64, alignItems: 'baseline',
        }}>
          <div style={{ fontSize: 12, color: MUTE, fontFamily: 'ui-monospace, monospace' }}>03 · контакты</div>
          <div style={{ display: 'flex', gap: 32, fontSize: 14 }}>
            <span>email</span><span>Telegram</span><span>GitHub</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// VARIANT C — Editorial. Big type, numbered sections, very airy.
// ─────────────────────────────────────────────────────────────
function VariantC() {
  return (
    <div style={{ background: PAPER, fontFamily: '"Inter", sans-serif', color: INK }}>
      {/* HERO — dark, oversized */}
      <section style={{ background: INK, color: PAPER, padding: '56px 56px 80px', position: 'relative' }}>
        {/* Top bar */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'ui-monospace, monospace', fontSize: 11,
          color: 'rgba(250,250,247,.5)', letterSpacing: '.06em',
          paddingBottom: 64, borderBottom: '1px solid rgba(250,250,247,.12)',
        }}>
          <span>VB · 2026</span>
          <span>Двойной режим — найм / консалтинг</span>
        </div>

        <div style={{ paddingTop: 80, maxWidth: 1100 }}>
          <div style={{
            fontFamily: 'ui-monospace, monospace', fontSize: 12,
            color: 'rgba(250,250,247,.5)', marginBottom: 28, letterSpacing: '.06em',
          }}>
            ВЛАД БУРБА — ИНФРА + AI
          </div>
          <h1 style={{
            fontSize: 76, lineHeight: 1.02, letterSpacing: '-.04em',
            fontWeight: 600, margin: '0 0 48px', maxWidth: 1000, textWrap: 'pretty',
          }}>
            Инфра-инженер, собираю&nbsp;решения, которые держат&nbsp;прод <span style={{ color: 'rgba(250,250,247,.45)' }}>и&nbsp;думают&nbsp;сами.</span>
          </h1>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            gap: 48, flexWrap: 'wrap',
          }}>
            <p style={{
              fontSize: 17, lineHeight: 1.5, color: 'rgba(250,250,247,.65)',
              margin: 0, maxWidth: 420,
            }}>
              20+ лет с серверами и сетями<br />+ Python и Claude Code.
            </p>
            <WBtn dark={false} style={{ background: PAPER, color: INK, border: 'none', padding: '14px 22px' }}>
              Связаться в Telegram <span style={{ opacity: .5 }}>→</span>
            </WBtn>
          </div>
        </div>
      </section>

      {/* ABOUT — numbered, big */}
      <section style={{ padding: '120px 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '60px 1fr', gap: 32 }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, color: MUTE }}>§01</div>
          <div>
            <div style={{
              fontSize: 13, fontFamily: 'ui-monospace, monospace', color: MUTE,
              textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 32,
            }}>
              Обо мне
            </div>
            <div style={{ display: 'grid', gap: 14, maxWidth: 720 }}>
              <Line w="90%" h={10} /><Line w="96%" h={10} /><Line w="82%" h={10} /><Line w="40%" h={10} />
              <div style={{ height: 8 }} />
              <Line w="92%" h={10} /><Line w="78%" h={10} />
              <div style={{ height: 8 }} />
              <Line w="86%" h={10} /><Line w="55%" h={10} />
            </div>
            <div style={{ marginTop: 20 }}><Tag>placeholder · 2–3 параграфа</Tag></div>
          </div>
        </div>
      </section>

      {/* SKILLS — numbered */}
      <section style={{ padding: '0 56px 120px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '60px 1fr', gap: 32 }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, color: MUTE }}>§02</div>
          <div>
            <div style={{
              fontSize: 13, fontFamily: 'ui-monospace, monospace', color: MUTE,
              textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 40,
            }}>
              Что умею
            </div>
            <div style={{ display: 'grid', gap: 4 }}>
              {[
                'AI-автоматизации, которые работают в проде',
                'Миграции и поддержка инфраструктуры',
                'Интеграции систем (LLM, API, боты, мониторинг)',
              ].map((t, i) => (
                <div key={i} style={{
                  fontSize: 32, lineHeight: 1.2, letterSpacing: '-.025em',
                  fontWeight: 500, padding: '20px 0',
                  borderBottom: `1px solid ${RULE}`,
                  display: 'flex', alignItems: 'baseline', gap: 24,
                }}>
                  <span style={{ fontSize: 14, color: MUTE, fontFamily: 'ui-monospace, monospace' }}>
                    .0{i + 1}
                  </span>
                  <span style={{ textWrap: 'balance' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: 32, fontSize: 12, color: MUTE,
              fontFamily: 'ui-monospace, monospace', display: 'flex', flexWrap: 'wrap', gap: '4px 14px',
            }}>
              {['Python', 'Claude Code', 'Docker', 'Linux', 'n8n', 'Telegram Bot API'].map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <footer style={{
        padding: '48px 56px', borderTop: `1px solid ${RULE}`,
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '60px 1fr', gap: 32, alignItems: 'baseline',
        }}>
          <div style={{ fontFamily: 'ui-monospace, monospace', fontSize: 13, color: MUTE }}>§03</div>
          <div style={{
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
            fontSize: 14,
          }}>
            <div style={{ display: 'flex', gap: 24 }}>
              <span>email</span><span>Telegram</span><span>GitHub</span>
            </div>
            <span style={{ color: MUTE, fontFamily: 'ui-monospace, monospace', fontSize: 12 }}>
              vb · 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { VariantA, VariantB, VariantC });
