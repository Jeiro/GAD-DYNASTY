import React, { useState } from 'react';
import Lightbox from './lightbox';

const ABOUT_IMAGES = [
  { src: './public/Images/aboutimage1.jpg', alt: 'Portrait session' },
  { src: './public/Images/aboutimage2.jpg', alt: 'Outdoor fashion' },
  { src: './public/Images/aboutimage3.jpg', alt: 'Studio lighting' },
  { src: './public/Images/aboutimage4.jpg', alt: 'Event coverage' },
];

export default function About(){
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setLightboxOpen(true);
    };

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container grid grid-2">
        <div className="card reveal" style={{padding:24}}>
          <h2 id="about-title" className="h2">About GAD Dynasty</h2>
          <p className="p">
            We empower creators to capture unforgettable moments and master their craft.
            From pro shoots to hands-on training, we help you build a portfolio that endures.
          </p>
          <ul className="p" style={{marginTop:6, paddingLeft:18}}>
            <li>Creative direction & mentorship</li>
            <li>Skill development & career guidance</li>
            <li>Industry-standard workflows</li>
          </ul>
        </div>
        <div className="card reveal" style={{padding:24, position:'relative', overflow:'hidden', minHeight:240}}>
          <div style={{position:'absolute', inset:0, background:'radial-gradient(1000px 500px at -10% -20%, #7C3AED22 0%, transparent 35%)'}}/>
                    <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            {ABOUT_IMAGES.map((img, i)=>(
                <div
                    key={i}
                    className="card"
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(img)}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openLightbox(img); }}
                    style={{position:'relative', aspectRatio:'1/1', borderRadius:12, overflow:'hidden', border:'1px dashed var(--ring)', cursor:'pointer'}}>
                <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    style={{position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block',
                            transform:'scale(1)', transition:'transform .3s ease'}}
                    onError={(e)=>{ e.currentTarget.style.opacity='0.25'; e.currentTarget.alt='Image not found'; }}
                />
                </div>
            ))}
            </div>
          <small className="p" style={{display:'block', marginTop:10}}>A few of our best shots.</small>
        </div>
      </div>

      {lightboxOpen && currentImage && (
        <Lightbox
          image={currentImage}
          onClose={() => {
            setLightboxOpen(false);
            setCurrentImage(null);
          }}
        />
      )}
    </section>
  );
}