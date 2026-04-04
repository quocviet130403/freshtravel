'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function TourGallery({ images, title }) {
  const [current, setCurrent] = useState(0);
  const displayImages = images && images.length > 0 ? images : ['/images/tour-korea.png'];

  return (
    <div className="td-gallery">
      <div className="td-gallery__main">
        <Image
          src={displayImages[current]}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 65vw"
          priority
        />
        {displayImages.length > 1 && (
          <>
            <button className="td-gallery__nav td-gallery__nav--prev" onClick={() => setCurrent(p => p === 0 ? displayImages.length - 1 : p - 1)}>❮</button>
            <button className="td-gallery__nav td-gallery__nav--next" onClick={() => setCurrent(p => (p + 1) % displayImages.length)}>❯</button>
          </>
        )}
        <span className="td-gallery__count">📷 ({displayImages.length})</span>
      </div>
      {displayImages.length > 1 && (
        <div className="td-gallery__thumbs">
          {displayImages.map((img, i) => (
            <button key={i} className={`td-gallery__thumb ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}>
              <Image src={img} alt="" fill style={{ objectFit: 'cover' }} sizes="25vw" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
