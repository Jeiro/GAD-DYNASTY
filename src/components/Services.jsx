import React, { useEffect, useRef } from 'react';
import { FaCameraRetro, FaVideo, FaEdit, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import { GiDirectorChair } from 'react-icons/gi';

const SERVICES = [
  { icon:<FaCameraRetro/>, title:'Photography', desc:'Portraits, events, products—crafted with cinematic lighting.' },
  { icon:<FaVideo/>, title:'Videography', desc:'Story-driven videos for brands, events, and music.' },
  { icon:<FaEdit/>, title:'Video Editing', desc:'Snappy cuts, color, sound—ready for socials or film.' },
  { icon:<FaUserFriends/>, title:'Model Photoshoots', desc:'Direction, posing, sets & styling guidance.' },
  { icon:<FaChalkboardTeacher/>, title:'Content Creation Classes', desc:'Plan, shoot, edit, and publish with confidence.' },
  { icon:<GiDirectorChair/>, title:'Cinematography Training', desc:'Hands-on camera & lighting techniques for film.' },
];

export default function Services(){
  const gridRef = useRef(null);
  useEffect(()=>{
    const els = gridRef.current?.querySelectorAll('.card');
    if(!els) return;
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); } });
    }, {threshold:.2});
    els.forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="h2">Services</h2>
        <p className="p" style={{marginBottom:18}}>Select a service to get started—every project is tailored.</p>
        <div ref={gridRef} className="grid grid-3">
          {SERVICES.map((s)=>(
            <article key={s.title} className="card reveal" style={{padding:20}}>
              <div style={{fontSize:26, display:'inline-grid', placeItems:'center', width:46, height:46, borderRadius:12, background:'var(--gradient)', color:'#fff', marginBottom:12}} aria-hidden="true">{s.icon}</div>
              <h3 style={{margin:'0 0 6px'}}>{s.title}</h3>
              <p className="p" style={{margin:0}}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}