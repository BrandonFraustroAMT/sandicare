"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import './CheckaHero.css'
import { useEffect, useState } from "react";

/**
 * Props for `CheckaTuSaludHero`.
 */
export type CheckaTuSaludHeroProps =
  SliceComponentProps<Content.CheckaTuSaludHeroSlice>;

/**
 * Component for "CheckaTuSaludHero" Slices.
 */

const words = [
  'Check-Up Personalizado',
  'Monitoreo Remoto',
  'Seguimiento Personalizado',
  'Telemedicina 24 / 7'
];

const CheckaTuSaludHero = ({ slice }: CheckaTuSaludHeroProps): JSX.Element => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Cambiar la palabra cada 3 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-hero">
        <div className="checkat-hero__container">
          <div className="checkat-hero__box">
            <div className="checkat-hero__column1">
              <div className="checkat-hero__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
              {/* WORDS */}
              <div className="auto-animate-wrapper">
                {words.map((word, index) => (
                  <div
                    key={index}
                    className={`word-container ${index === currentWordIndex ? 'active' : 'inactive'}`}
                  >
                    <div className="word">{word}</div>
                  </div>
                ))}
              </div>
              <div className="checkat-hero__description"><>{slice.primary.description}</></div>

              <div className="checkat-hero__btn">
                <>
                  {slice.primary.grouphero.map((item) => (
                    // Render the item
                    <>
                      <PrismicNextLink field={item.linkbutton} className="checkat-hero__link">
                        <>{item.labelbutton}</>
                      </PrismicNextLink>
                    </>
                  ))}
                </>
              </div>
            </div >

            {/* VIDEO */}
            <div className="checkat-hero__column2">
                <div className="checkat-hero__video-container"></div>
            </div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default CheckaTuSaludHero;
