import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './Nosotroshero.css';

/**
 * Props for `NosotrosHero`.
 */
export type NosotrosHeroProps = SliceComponentProps<Content.NosotrosHeroSlice>;

/**
 * Component for "NosotrosHero" Slices.
 */
const NosotrosHero = ({ slice }: NosotrosHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="nosotroshero-container">
        <div className="nosotroshero-column">
          <div className="nosotroshero-title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
          <div className="nosotroshero-subtitle"><>{slice.primary.subtitle}</></div>
          <div className="nosotroshero-button">
            <PrismicNextLink field={slice.primary.linkbutton} className="nosotroshero__link">
              <>{slice.primary.labelbutton}</>
            </PrismicNextLink>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default NosotrosHero;
