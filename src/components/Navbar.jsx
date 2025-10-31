import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#showcase', label: 'Showcase' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Close on outside click/touch, Esc; lock scroll
  useEffect(() => {
    const onDocPointer = (e) => {
      if (!open) return;
      const inDrawer = drawerRef.current?.contains(e.target);
      const inButton = menuBtnRef.current?.contains(e.target);
      if (!inDrawer && !inButton) setOpen(false);
    };
    const onEscape = (e) => { if (e.key === 'Escape') setOpen(false); };

    document.addEventListener('click', onDocPointer, true);
    document.addEventListener('touchstart', onDocPointer, true);
    document.addEventListener('keydown', onEscape);

    document.body.classList.toggle('no-scroll', open);
    return () => {
      document.removeEventListener('click', onDocPointer, true);
      document.removeEventListener('touchstart', onDocPointer, true);
      document.removeEventListener('keydown', onEscape);
      document.body.classList.remove('no-scroll');
    };
  }, [open]);

  return (
    <header style={{position:'sticky', top:0, zIndex:1000, backdropFilter:'blur(10px)'}}>
      <nav className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between', padding:'14px 0'}}>
        <a href="#" aria-label="GAD Dynasty home" style={{display:'inline-flex',alignItems:'center',gap:10,fontWeight:800,letterSpacing:.5}}>
          <Logo/> <span>GAD Dynasty</span>
        </a>

        <div className="desktop" style={{display:'none', gap:24, alignItems:'center'}}>
          {links.map(l => <a key={l.href} href={l.href} style={{color:'var(--muted)'}}>{l.label}</a>)}
          <a className="btn" href="#contact">Get in Touch</a>
        </div>

        <button
          ref={menuBtnRef}
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="btn outline"
          onClick={()=>setOpen(v=>!v)}
          style={{display:'inline-flex'}}
        >
          <HiOutlineMenu/>
        </button>
      </nav>

      {/* DIM OVERLAY */}
      {open && <div className="nav-overlay" onClick={()=>setOpen(false)} />}

      {/* DRAWER */}
      <div
        id="mobile-menu"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={open ? 'nav-drawer' : ''}
        style={{
          position:'fixed', left:16, right:16, top:72,
          background:'var(--bg)', border:'1px solid var(--ring)', borderRadius:16,
          boxShadow:'var(--shadow)', display: open ? 'block' : 'none', zIndex:1100,
        }}
      >
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', padding:'14px 16px'}}>
          <strong>Menu</strong>
          <button className="btn outline" aria-label="Close menu" onClick={()=>setOpen(false)}><HiOutlineX/></button>
        </div>
        <div style={{display:'flex',flexDirection:'column', padding:'8px 16px 16px', gap:10}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)}
               style={{padding:'12px 8px', borderRadius:10, border:'1px solid var(--ring)'}}>
              {l.label}
            </a>
          ))}
          <a className="btn" href="#contact" onClick={()=>setOpen(false)}>Get in Touch</a>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px){
          header nav .desktop{display:flex}
          header nav > button{display:none}
        }
      `}</style>
    </header>
  );
}

function Logo(){
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="gg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#7C3AED"/><stop offset="50%" stopColor="#DB2777"/><stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
      </defs>
      <rect rx="12" width="64" height="64" fill="url(#gg)"/>
      <text x="50%" y="52%" textAnchor="middle" fontFamily="Inter,system-ui" fontSize="28" fill="#fff" fontWeight="800">G</text>
    </svg>
  );
}