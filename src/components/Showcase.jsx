import React, { useState } from 'react';
import Lightbox from './lightbox'; // Import the Lightbox component
import SmartImage from './SmartImage'; // Assuming you're using SmartImage for responsive images

export default function Showcase() {
  const [lightboxOpen, setLightboxOpen] = useState(false); // Track if lightbox is open
  const [currentImage, setCurrentImage] = useState(null); // Track the current image in lightbox

  // Directly adding the images
  const showcaseImages = [
    { src: '/Images/showcase1.jpg', alt: 'Brand Reel', caption: 'Brand introduction reel' },
    { src: '/Images/showcase2.jpg', alt: 'Model Shoot', caption: 'Fashion model photoshoot' },
    { src: '/Images/showcase3.jpg', alt: 'Event Highlight', caption: 'model shoot' },
    { src: '/Images/showcase4.jpg', alt: 'Studio Portrait', caption: 'Studio portrait photography' },
    { src: '/Images/showcase5.jpg', alt: 'Creative Edit', caption: 'Creative photo editing' },
    { src: '/Images/showcase6.jpg', alt: 'Fashion Series', caption: 'Fashion photoshoot series' },
    { src: '/Images/showcase7.jpg', alt: 'Product Scene', caption: 'Product scene photography' },
    { src: '/Images/showcase8.jpg', alt: 'Cinematic Frame', caption: 'Cinematic shot frame' }
  ];

  const openLightbox = (image) => {
    setCurrentImage(image); // Set the clicked image to be displayed in the lightbox
    setLightboxOpen(true);   // Open the lightbox
  };

  const closeLightbox = () => setLightboxOpen(false); // Close the lightbox

  return (
    <section id="showcase" className="section" aria-labelledby="showcase-title">
      <div className="container">
        <h2 id="showcase-title" className="h2">Showcase</h2>
        <p className="p" style={{marginBottom:18}}>A peek at recent frames and edits.</p>

        {/* Basic Grid Layout for Images */}
        <div className="grid grid-4" style={{gap:16, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}>
          {showcaseImages.map((img, idx) => (
            <figure key={idx} className="card" style={{position: 'relative', display: 'flex', flexDirection: 'column', cursor: 'pointer'}}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  borderRadius: '8px',
                }}
                onClick={() => openLightbox(img)} // Trigger the lightbox when clicked
              />
              <figcaption style={{position:'absolute', left:10, bottom:10, background:'#0009', padding:'6px 10px', borderRadius:10, fontSize:14}}>
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && <Lightbox image={currentImage} onClose={closeLightbox} />}
    </section>
  );
}