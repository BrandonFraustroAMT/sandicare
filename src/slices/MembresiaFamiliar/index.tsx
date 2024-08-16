import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiaFamiliar`.
 */
export type MembresiaFamiliarProps =
  SliceComponentProps<Content.MembresiaFamiliarSlice>;

/**
 * Component for "MembresiaFamiliar" Slices.
 */
const MembresiaFamiliar = ({ slice }: MembresiaFamiliarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="membresiaplus">
        <div className="membresiaplus-container">
          <div className="membresiaplus-column">
            <div className="membresiaplus-title">
              <h2><PrismicRichText field={slice.primary.title} /></h2>
            </div>
            <div className="membresiaplus-subtitle">
              <>{slice.primary.subtitle}</>:
            </div>
            <div className="membresiaplus-list">
              <>
                {slice.primary.groupbenefits.map((item) => (
                  // Render the item
                  <>
                    <div className="membresiaplus-list__text">
                      {item.text}
                    </div>
                  </>
                ))}
              </>
            </div>
            <div className="membresiaplus-price">
              <span>$<>{slice.primary.price}</> pesos</span>
            </div>
            <div className="membresiaplus-deadline">
              <>{slice.primary.deadline}</>
            </div>
            <div className="membresiaplus-img">
              <PrismicNextImage field={slice.primary.image} />
            </div>
            <div className="membresiaplus-button">
              <PrismicNextLink field={slice.primary.linkbutton} className="membresiaplus__link">
                <>{slice.primary.labelbutton}</>
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembresiaFamiliar;
