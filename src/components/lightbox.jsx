import React from 'react';

export default function Lightbox({ image, onClose }) {
  return (
    <div
      className="lightbox-overlay"
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.8)', display: 'flex', justifyContent: 'center', alignItems: 'center',
        zIndex: 2000, animation: 'fadeIn .3s ease',
      }}
      onClick={onClose}
    >
      <div style={{position: 'relative', maxWidth: '80%', maxHeight: '80%'}}>
        <img
          src={image.src}
          alt={image.alt}
          style={{width: '100%', height: '100%', objectFit: 'contain'}}
        />
        <div
          style={{
            position: 'absolute', top: 10, right: 10, color: '#fff', background: 'rgba(0,0,0,0.5)', borderRadius: '50%',
            padding: '5px 10px', cursor: 'pointer'
          }}
          onClick={(e) => { e.stopPropagation(); onClose(); }}
        >
          Close
        </div>
      </div>
    </div>
  );
}