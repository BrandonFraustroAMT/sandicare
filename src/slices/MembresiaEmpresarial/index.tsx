import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './MembresiaEmpresarial.css'
/**
 * Props for `MembresiaEmpresarial`.
 */
export type MembresiaEmpresarialProps =
  SliceComponentProps<Content.MembresiaEmpresarialSlice>;

/**
 * Component for "MembresiaEmpresarial" Slices.
 */
const MembresiaEmpresarial = ({
  slice,
}: MembresiaEmpresarialProps): JSX.Element => {
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
            <div className="membresiaempresarial-deadline">
              <>{slice.primary.deadline}</>
            </div>
            <div className="membresiaplus-img">
              <PrismicNextImage field={slice.primary.image} />
            </div>
            <div className="membresiaempresarial-price">
              <span><>{slice.primary.price}</></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembresiaEmpresarial;
