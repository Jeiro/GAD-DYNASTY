import React, { useEffect, useRef } from 'react';
import { HiArrowRight, HiPlay } from 'react-icons/hi';

export default function Hero(){
  const ref = useRef(null);
  useEffect(()=>{
    const el = ref.current;
    if(!el) return;
    const obs = new IntersectionObserver((e)=>{ e.forEach(i=>{ if(i.isIntersecting){ el.classList.add('in'); } }) }, {threshold: .3});
    obs.observe(el);
    return ()=>obs.disconnect();
  },[]);
  return (
    <section className="section" aria-label="Hero" style={{position:'relative', overflow:'hidden'}}>
      {/* Single, softer blob to avoid visible edges */}
      <div className="blob"
           style={{width:520,height:520, top:-160, left:-140, opacity:.35, filter:'blur(120px)'}}/>
      <div className="container">
        <div ref={ref} className="reveal">
          <h1 className="h1">Creative Legacy. <span style={{background:'var(--gradient)', WebkitBackgroundClip:'text', color:'transparent'}}>Timeless Impact.</span></h1>
          <p className="p" style={{maxWidth:720}}>
            GAD Dynasty delivers Photography, Videography, Editing, Model Training, Cinematography & Content Creation classes—crafted to turn passion into legacy.
          </p>
          <div style={{display:'flex', gap:12, marginTop:18, flexWrap:'wrap'}}>
            <a href="#services" className="btn">Explore Services <HiArrowRight/></a>
            <a href="#contact" className="btn outline">Book a Session <HiPlay/></a>
          </div>
          <ul style={{display:'flex',gap:24,marginTop:22, padding:0, listStyle:'none', color:'var(--muted)'}}>
            <li>Mobile-first</li><li>Pro Training</li><li>Fast Turnaround</li>
          </ul>
        </div>
      </div>
    </section>
  );
}