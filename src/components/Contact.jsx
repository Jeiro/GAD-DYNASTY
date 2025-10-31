// /src/components/Contact.jsx  (REPLACE ENTIRE FILE)
import React, { useMemo, useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6'; // <-- TikTok lives in fa6

const CONTACTS = {
  phone: '08119122642',
  email: 'gaddynastyltd@gmail.com',
  whatsapp: 'https://wa.link/mnu2n4',
  instagram: 'https://www.instagram.com/g.a.d_dynasty?igsh=MTA5Z21tZ2lnb2Zt',
  tiktok: 'https://www.tiktok.com/@drip_king_the_creator',
  facebook: 'https://www.facebook.com/gaddynastystudio',
};

export default function Contact(){
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const isValid = useMemo(()=>{
    if(!name.trim() || !message.trim()) return false;
    if(email && !/^\S+@\S+\.\S+$/.test(email)) return false;
    return true;
  }, [name,email,message]);

  const mailHref = useMemo(()=>{
    const subject = encodeURIComponent(`New inquiry from ${name || 'GAD Dynasty website'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    return `mailto:${CONTACTS.email}?subject=${subject}&body=${body}`;
  }, [name,email,message]);

  const waHref = useMemo(()=>{
    const text = encodeURIComponent(`Hello GAD Dynasty, I'm ${name || '...'}.\n${message || ''}`);
    return `${CONTACTS.whatsapp}${CONTACTS.whatsapp.includes('?') ? '&' : '?'}text=${text}`;
  }, [name,message]);

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container grid grid-2">
        <div className="card reveal" style={{padding:24}}>
          <h2 id="contact-title" className="h2">Let’s Create Something</h2>
          <p className="p">Tell us about your project or training needs. We’ll reply quickly.</p>
          <form onSubmit={(e)=>{ if(!isValid) e.preventDefault(); }} style={{display:'grid', gap:12, marginTop:16}}>
            <label>
              <span className="visually-hidden">Name</span>
              <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" aria-label="Your name" style={inputStyle}/>
            </label>
            <label>
              <span className="visually-hidden">Email</span>
              <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email (optional)" aria-label="Email" style={inputStyle} type="email"/>
            </label>
            <label>
              <span className="visually-hidden">Message</span>
              <textarea required value={message} onChange={e=>setMessage(e.target.value)} placeholder="Tell us what you need…" rows={5} aria-label="Message" style={{...inputStyle, resize:'vertical'}}/>
            </label>
            <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
              <a className="btn" href={mailHref} target="_blank" rel="noreferrer" aria-disabled={!isValid}
                 onClick={(e)=>{ if(!isValid){ e.preventDefault(); alert('Please fill name and message.'); } }}>
                Send Email
              </a>
              <a className="btn outline" href={waHref} target="_blank" rel="noreferrer">WhatsApp <FaWhatsapp/></a>
            </div>
            <small className="p">Or call us: <a href={`tel:${CONTACTS.phone.replace(/\s+/g,'')}`} style={{textDecoration:'underline'}}>{CONTACTS.phone}</a></small>
          </form>
        </div>

        <aside className="card reveal" style={{padding:24}}>
          <h3 style={{margin:'0 0 10px'}}>Connect</h3>
          <div style={{display:'grid', gap:10}}>
            <Social href={CONTACTS.whatsapp} label="WhatsApp"><FaWhatsapp/></Social>
            <Social href={CONTACTS.instagram} label="Instagram"><FaInstagram/></Social>
            <Social href={CONTACTS.tiktok} label="TikTok"><FaTiktok/></Social>
            <Social href={CONTACTS.facebook} label="Facebook"><FaFacebook/></Social>
            <Social href={`mailto:${CONTACTS.email}`} label="Email"><FaEnvelope/></Social>
            <Social href={`tel:${CONTACTS.phone}`} label="Phone"><FaPhone/></Social>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Social({href, label, children}){
  return (
    <a href={href} target="_blank" rel="noreferrer"
       style={{display:'flex',alignItems:'center', gap:12, padding:'12px 14px', border:'1px solid var(--ring)', borderRadius:12}}>
      <span style={{fontSize:18}} aria-hidden="true">{children}</span>
      <span>{label}</span>
    </a>
  );
}

const inputStyle = {
  width:'100%', padding:'14px 16px', borderRadius:12,
  border:'1px solid var(--ring)', background:'transparent', outline:'none'
};