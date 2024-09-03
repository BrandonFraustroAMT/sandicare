"use client"
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Hero.css'

/**
 * Props for `HeroSandicheck`.
 */
export type HeroSandicheckProps =
  SliceComponentProps<Content.HeroSandicheckSlice>;

/**
 * Component for "HeroSandicheck" Slices.
 */
const HeroSandicheck = ({ slice }: HeroSandicheckProps): JSX.Element => {
  const handleClick = (label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: label,
      });
    }
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="hero-sandicheck">
        <div className="hero-sandicheck__container">
          <div className="hero-sandicheck__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="hero-sandicheck__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="hero-sandicheck__btn">
          <>
            {slice.primary.grouphero.map((item) => (
              <>
                <PrismicNextLink field={item.linkbutton} className="hero-sandicheck__link" onClick={() => handleClick(item.labelbutton ?? 'Default Label')}>
                  <>{item.labelbutton}</>
                </PrismicNextLink>
              </>
            ))}
          </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSandicheck;
