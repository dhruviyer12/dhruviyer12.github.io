import { useCallback, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects } from './projects.js';
import { StatusPill, Viewer } from './bits.jsx';

function Gallery({ gallery }) {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const img = gallery.images[Math.min(i, gallery.images.length - 1)];
  return (
    <section className="panel gallery" aria-label={gallery.title}>
      <div className="gallery-head">
        <span className="muted small strong">{gallery.title}</span>
        {gallery.images.length > 1 && (
          <div className="seg" role="group" aria-label="Choose view">
            {gallery.images.map((g, k) => (
              <button key={g.src} type="button" className={'seg-btn' + (k === i ? ' on' : '')} aria-pressed={k === i} onClick={() => setI(k)}>{g.label}</button>
            ))}
          </div>
        )}
      </div>
      <button type="button" className="plate frame" onClick={() => setOpen(true)} aria-label={'Zoom: ' + img.label}>
        <img src={img.src} alt={img.alt} />
      </button>
      <p className="muted small caption">{img.caption} <span className="dim">Select the image to zoom.</span></p>
      {open && <Viewer image={img} onClose={close} />}
    </section>
  );
}

export default function ProjectPage() {
  const { slug } = useParams();
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx < 0) {
    return (
      <section className="panel hero">
        <h1 className="h1">Project not found</h1>
        <Link to="/" className="btn">Back to all projects</Link>
      </section>
    );
  }
  const p = projects[idx];
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Link to="/#projects" className="back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14.5 6 8.5 12l6 6" /></svg>
        All projects
      </Link>

      <section className="panel hero" aria-labelledby="ptitle">
        <StatusPill status={p.status} />
        <h1 id="ptitle" className="h1">{p.title}</h1>
        <p className="lead">{p.summary}</p>
        <div className="facts"><span>{p.org}</span><span>{p.period}</span><span>{p.role}</span></div>
      </section>

      {p.gallery && <Gallery key={p.slug} gallery={p.gallery} />}

      <div className="grid split">
        <section className="panel block" aria-labelledby="did-h">
          <h2 id="did-h" className="h3">What I did</h2>
          <ul className="bullets">{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          {p.explainer && (
            <>
              <h3 className="h4 gap-top">How it works</h3>
              <p className="muted">{p.explainer}</p>
            </>
          )}
          {p.chain && <p className="dim small chain">{p.chain.join(' → ')}</p>}
          {p.parts && (
            <>
              <h3 className="h4 gap-top">Key parts</h3>
              <ul className="bullets">{p.parts.map((x) => <li key={x}>{x}</li>)}</ul>
            </>
          )}
        </section>

        <div className="stack">
          {p.figures.length > 0 && (
            <section className="grid figs" aria-label="Key figures">
              {p.figures.map((f) => (
                <div key={f.label} className="panel fig">
                  <div className="fig-num">{f.value}</div>
                  <div className="dim small">{f.label}</div>
                </div>
              ))}
            </section>
          )}
          <section className="panel block" aria-labelledby="tools-h">
            <h2 id="tools-h" className="h4">Tools</h2>
            <div className="row">{p.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          </section>
          {p.links && (
            <section className="panel block" aria-labelledby="links-h">
              <h2 id="links-h" className="h4">Links</h2>
              <ul className="links">
                {p.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
                    {l.note && <span className="dim small">{l.note}</span>}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>

      <nav aria-label="More projects" className="grid two pnav">
        <Link to={'/projects/' + prev.slug} className="panel card nav-card">
          <span className="dim small">Previous</span>
          <span className="h4">{prev.title}</span>
        </Link>
        <Link to={'/projects/' + next.slug} className="panel card nav-card end">
          <span className="dim small">Next</span>
          <span className="h4">{next.title}</span>
        </Link>
      </nav>
    </>
  );
}
