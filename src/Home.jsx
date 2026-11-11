import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, statuses } from './projects.js';
import { profile, coursework, toolkit } from './site.js';
import { StatusPill } from './bits.jsx';

function ProjectCard({ p }) {
  return (
    <Link to={'/projects/' + p.slug} className={'panel card' + (p.status === 'Planned' ? ' planned' : '') + (p.cardImage ? ' has-img' : '')}>
      {p.cardImage && (
        <div className="plate card-plate"><img src={p.cardImage} alt="" loading="lazy" /></div>
      )}
      <div className="card-body">
        <StatusPill status={p.status} />
        <h3 className="h3">{p.title}</h3>
        <p className="dim small">{p.org}</p>
        <p className="muted">{p.cardText}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  const [filter, setFilter] = useState('All');
  const shown = projects.filter((p) => filter === 'All' || p.status === filter);

  return (
    <>
      <section className="panel hero" aria-labelledby="name-h">
        <span className="eyebrow">{profile.study}</span>
        <h1 id="name-h" className="h1 xl">{profile.name}</h1>
        <p className="lead">{profile.pitch}</p>
        <div className="facts">{profile.facts.map((f) => <span key={f}>{f}</span>)}</div>
        <div className="row">
          {profile.links.map((l) => <a key={l.href} href={l.href} className="btn">{l.label}</a>)}
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="proj-h">
        <div className="section-head">
          <h2 id="proj-h" className="h2">Projects</h2>
          <div className="seg" role="group" aria-label="Filter by status">
            {statuses.map((s) => (
              <button key={s} type="button" className={'seg-btn' + (s === filter ? ' on' : '')} aria-pressed={s === filter} onClick={() => setFilter(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="grid two">
          {shown.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>

      <section id="coursework" className="section" aria-labelledby="cw-h">
        <h2 id="cw-h" className="h2 pad">Coursework</h2>
        <div className="grid three">
          {coursework.map((t) => (
            <div key={t.term} className="panel block">
              <h3 className="h4">{t.term}</h3>
              <ul className="courses">
                {t.courses.map(([num, name]) => (
                  <li key={num}><span className="num">{num}</span>{name}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="toolkit" className="section" aria-labelledby="tk-h">
        <h2 id="tk-h" className="h2 pad">Toolkit</h2>
        <div className="grid three">
          {toolkit.map((t) => (
            <div key={t.title} className="panel block">
              <h3 className="h4">{t.title}</h3>
              <p className="muted small">{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
