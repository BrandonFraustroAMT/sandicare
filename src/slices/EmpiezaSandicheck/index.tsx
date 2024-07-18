import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

import './Empieza.css'

/**
 * Props for `EmpiezaSandicheck`.
 */
export type EmpiezaSandicheckProps =
  SliceComponentProps<Content.EmpiezaSandicheckSlice>;

/**
 * Component for "EmpiezaSandicheck" Slices.
 */
const EmpiezaSandicheck = ({ slice }: EmpiezaSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="empieza-sandicheck">
        <div className="empieza-sandicheck__container">
          <div className="empieza-sandicheck__title">
            <h2><PrismicRichText field={slice.primary.title} /></h2>
          </div>
          <div className="empieza-sandicheck__subtitle"><>{slice.primary.subtitle}</></div>
          <div className="empieza-sandicheck__list">
            <>
              {slice.primary.groupempieza.map((item) => (
                // Render the item
                <> 
                  <div className="empieza-sandicheck__btn">
                    <PrismicNextLink field={item.linkbutton} className="empieza-sandicheck__link">
                      <>{item.labelbutton}</>
                    </PrismicNextLink>
                  </div>
                </>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpiezaSandicheck;
