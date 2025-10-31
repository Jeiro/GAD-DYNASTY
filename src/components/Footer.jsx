// /src/components/Footer.jsx  (REPLACE ENTIRE FILE)
import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6'; // <-- TikTok from fa6

export default function Footer(){
  return (
    <footer className="section" aria-label="Footer">
      <div className="container" style={{display:'grid', gap:12}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <strong>GAD Dynasty</strong>
          <div style={{display:'flex',gap:12}}>
            <a aria-label="Instagram" href="https://www.instagram.com/drip_king_the_creator_001?igsh=MTA5Z21tZ2lnb2Zt"><FaInstagram/></a>
            <a aria-label="TikTok" href="https://www.tiktok.com/@drip_king_the_creator"><FaTiktok/></a>
            <a aria-label="Facebook" href="https://www.facebook.com/gaddynastystudio"><FaFacebook/></a>
            <a aria-label="WhatsApp" href="https://wa.link/mnu2n4"><FaWhatsapp/></a>
          </div>
        </div>
        <hr style={{border:'none', borderTop:'1px solid var(--ring)'}}/>
        <small className="p">© {new Date().getFullYear()} GAD Dynasty — Creative Legacy, Timeless Impact.</small>
      </div>
    </footer>
  );
}