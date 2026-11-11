import { useEffect, useRef, useState } from 'react';

export function StatusPill({ status }) {
  const tone = status === 'Completed' ? 'ok' : status === 'Planned' ? 'plan' : 'work';
  return <span className={'status ' + tone}>{status}</span>;
}

// Full-screen image viewer: fit to screen or actual size, Esc or Close to leave.
export function Viewer({ image, onClose }) {
  const [full, setFull] = useState(false);
  const sizeBtn = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    sizeBtn.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [onClose]);
  return (
    <div className={'viewer' + (full ? ' full' : '')} role="dialog" aria-modal="true" aria-label={image.label}>
      <div className="viewer-bar">
        <span className="viewer-title">{image.label}</span>
        <div className="row">
          <button ref={sizeBtn} type="button" className="btn" onClick={() => setFull((f) => !f)}>{full ? 'Fit to screen' : 'Actual size'}</button>
          <button type="button" className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
      <div className="viewer-scroll" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <img src={image.src} alt={image.alt} />
      </div>
    </div>
  );
}
