"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Camera, Heart } from "lucide-react";
import image1 from "/public/images/image1.png";
import image2 from "/public/images/image2.png";
import image3 from "/public/images/image3.png";

const photos = [
  {
    id: 1,
    src: image2,
    caption: "القمر بتاعتى",
    alt: "Esraa memory one",
  },
  
  {
    id: 2,
    src: image3,
    caption: "القمر بتاعتى بردو",
    alt: "Esraa memory three",
  },
  {
    id: 3,
    src: image1,
    caption: "القمر بتاعتى بردو بس معايا",
    alt: "Esraa memory two",
  }
];

export default function PhotoGallery() {
  return (
    <section className="gallery-section" id="memories">
      <div className="section-heading">
        <span>OUR LITTLE MEMORIES</span>
        <h2>
          Some Beautiful Moments
          <Heart size={23} fill="currentColor" />
        </h2>
        <p>Every picture tells a lovely story.</p>
      </div>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <motion.article
            key={photo.id}
            className={`photo-card photo-${photo.id}`}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.13 }}
            whileHover={{ y: -12, rotate: 0, scale: 1.035 }}
          >
            <div className="photo-image">
              {photo.src ? (
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 400px) 60vw, 30vw"
                  className="gallery-photo"
                />
              ) : (
                <div className="photo-placeholder">
                  <Camera size={40} />
                  <span>Add Your Photo Here</span>
                </div>
              )}
            </div>
            <p>{photo.caption}</p>
            <Heart className="photo-heart" size={16} fill="currentColor" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
