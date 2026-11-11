import { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home.jsx';
import ProjectPage from './ProjectPage.jsx';
import { profile } from './site.js';

// Scroll to the top on a new page, or to the #section named in the link.
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function Header() {
  const { pathname, hash } = useLocation();
  const onProject = pathname.startsWith('/projects');
  const active = (h) => (h === '#projects' ? (onProject || (pathname === '/' && hash !== '#coursework' && hash !== '#toolkit')) : hash === h);
  const links = [['Projects', '#projects'], ['Coursework', '#coursework'], ['Toolkit', '#toolkit']];
  return (
    <header className="bar">
      <Link to="/" className="brand">{profile.name}</Link>
      <nav aria-label="Main" className="seg nav">
        {links.map(([label, h]) => (
          <Link key={h} to={'/' + h} className={'seg-btn' + (active(h) ? ' on' : '')} aria-current={active(h) ? 'page' : undefined}>{label}</Link>
        ))}
      </nav>
      <a href={'mailto:' + profile.email} className="btn primary push">Email me</a>
    </header>
  );
}

function Footer() {
  const copy = (e) => {
    const btn = e.currentTarget;
    navigator.clipboard?.writeText(profile.email).then(
      () => { btn.textContent = 'Copied'; setTimeout(() => { btn.textContent = 'Copy email'; }, 1600); },
      () => {}
    );
  };
  return (
    <footer id="contact" className="panel footer">
      <span className="muted select">{profile.email}</span>
      <button type="button" className="btn primary" onClick={copy}>Copy email</button>
    </footer>
  );
}

function NotFound() {
  return (
    <section className="panel hero">
      <h1 className="h1">Page not found</h1>
      <p className="lead">That link doesn’t match a project.</p>
      <Link to="/" className="btn">Back to all projects</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <ScrollManager />
      <div className="wrap">
        <Header />
        <main className="stack">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
