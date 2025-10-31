import React from 'react';

export default function SmartImage({src, alt, sizes="(max-width: 900px) 50vw, 25vw", className, style}) {
  // Fix image path: Ensure no extra slashes at the start or end.
  const fixedSrc = src.startsWith('/') ? src : `/images/${src}`;

  const src2x = fixedSrc.replace(/(\.\w+)$/, '@2x$1');
  const src3x = fixedSrc.replace(/(\.\w+)$/, '@3x$1');

  return (
    <img
      src={fixedSrc}
      srcSet={`${fixedSrc} 1x, ${src2x} 2x, ${src3x} 3x`}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
      style={style}
    />
  );
}