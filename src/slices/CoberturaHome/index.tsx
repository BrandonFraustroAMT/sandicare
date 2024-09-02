"use client"
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Cobertura.css'
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `CoberturaHome`.
 */
export type CoberturaHomeProps =
  SliceComponentProps<Content.CoberturaHomeSlice>;

/**
 * Component for "CoberturaHome" Slices.
 */
const CoberturaHome = ({ slice }: CoberturaHomeProps): JSX.Element => {
  const handleClick = (label: string) => {
    gtag('event', 'click', {
      event_category: 'Button',
      event_label: label,
    });
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="cobertura-slice">
        <div className="cobertura-slice__container">
          <div className="cobertura-slice__title">
            <h2><PrismicRichText field={slice.primary.title} /></h2>
          </div>
          <div className="cobertura-slice__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="cobertura-slice__button">
            <PrismicNextLink field={slice.primary.linkbutton} className="cobertura-slice__link" onClick={() => handleClick(slice.primary.labelbutton)}>
              <>{slice.primary.labelbutton}</>
            </PrismicNextLink>
          </div>
        </div>
      </div>
      
      
      
    </section>
  );
};

export default CoberturaHome;
