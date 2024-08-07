import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useState, useEffect } from "react";
import './hero.css'

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero-slice">
        <div className="hero-slice__container">
          <div className="hero-slice__text">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
            <div className="hero-slice__subtitle">{slice.primary.subtitle}</div>
            <div className="hero-slice__description">{slice.primary.description}</div>

            <div className="hero-slice__buttons">
              <>
                {slice.primary.groupbutton.map((item, index) => (
                  <PrismicNextLink key={index} field={item.linkbutton} className="hero-slice__link">
                    <>{item.labelbutton}</>
                  </PrismicNextLink>
                ))}
              </>
            </div>
          </div>
          <div className="hero-slice__video">
            {/* VIDEO */}
            <div className="hero-slice__video-container">
              <PrismicNextImage field={slice.primary.herogif} />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
