import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './MembresiaIndividual.css'

/**
 * Props for `MembresiaIndividual`.
 */
export type MembresiaIndividualProps =
  SliceComponentProps<Content.MembresiaIndividualSlice>;

/**
 * Component for "MembresiaIndividual" Slices.
 */
const MembresiaIndividual = ({
  slice,
}: MembresiaIndividualProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="membresiaindividual">
        <div className="membresiaindividual-container">
          <div className="membresiaindividual-column">
            <div className="membresiaindividual-title">
              <h2><PrismicRichText field={slice.primary.title} /></h2>
            </div>
            <div className="membresiaindividual-subtitle">
              <>{slice.primary.subtitle}</>:
            </div>
            <div className="membresiaindividual-list">
              <>
                {slice.primary.groupbenefits.map((item) => (
                  // Render the item
                  <>
                    <div className="membresiaindividual-list__text">
                      {item.text}
                    </div>
                  </>
                ))}
              </>
            </div>
            <div className="membresiaindividual-price">
              <span>$<>{slice.primary.price}</> pesos</span>
            </div>
            <div className="membresiaindividual-deadline">
              <>{slice.primary.deadline}</>
            </div>
            <div className="membresiaindividual-restrictions">
              <>{slice.primary.restrictions}</>
            </div>
            <div className="membresiaindividual-button">
              <PrismicNextLink field={slice.primary.linkbutton} className="membresiaindividual__link">
                <>{slice.primary.labelbutton}</>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembresiaIndividual;
