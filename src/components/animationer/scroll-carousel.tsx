import type React from "react";
import { useEffect, useRef, useState } from "react";

interface ScrollCarouselProps {
  images?: {
    src: string;
    alt: string;
  }[];
  scrollHeight?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const ScrollCarousel: React.FC<ScrollCarouselProps> = ({
  images = [
    {
      src: "src/assets/images/carousel/Asparges.webp",
      alt: "Green asparagus spears",
    },
    {
      src: "src/assets/images/carousel/Kartofler.webp",
      alt: "Small potatoes with soil",
    },
    {
      src: "src/assets/images/carousel/Rabarber.webp",
      alt: "Fresh rhubarb stalks with green leaves",
    },
    {
      src: "src/assets/images/carousel/Svampe.webp",
      alt: "Mushrooms",
    },
    {
      src: "src/assets/images/carousel/Jordbær.webp",
      alt: "Fresh strawberries in containers",
    },
  ],
  scrollHeight = "300vh",
  imageWidth = 350,
  imageHeight = 480,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ticking) {
        animationFrameId = window.requestAnimationFrame(() => {
          // Beregner hvor langt man er scrollet ned på siden
          const scrollTop = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.body.clientHeight;

          // Beregner scroll progress (0 to 1)
          const scrollPercentage = scrollTop / (documentHeight - windowHeight);
          setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 1));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Beregner the translation amount baseret på scroll progress
  const translateX =
    -scrollProgress * (images.length * (imageWidth + 32) - window.innerWidth + 100);

  return (
    <div
      className="scroll-carousel-container"
      ref={containerRef}
      style={{
        minHeight: scrollHeight,
      }}
    >
      <div
        className="scroll-carousel-sticky"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="scroll-carousel-track"
          style={{
            display: "flex",
            gap: "32px",
            padding: "0 32px",
            transform: `translateX(${translateX}px)`,
            transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="scroll-carousel-item"
              style={{
                flexShrink: 0,
                borderRadius: "px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                width: `${imageWidth}px`,
                height: `${imageHeight}px`,
                position: "relative",
              }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollCarousel;
