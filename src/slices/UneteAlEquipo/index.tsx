import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './Unetealequipo.css'

/**
 * Props for `UneteAlEquipo`.
 */
export type UneteAlEquipoProps =
  SliceComponentProps<Content.UneteAlEquipoSlice>;

/**
 * Component for "UneteAlEquipo" Slices.
 */
const UneteAlEquipo = ({ slice }: UneteAlEquipoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="unete">
        <div className="unete-container">
          <div className="unete-columns">
            <div className="unete-col1">
              <div className="unete-title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
              <div className="unete-subtitle"><>{slice.primary.subtitle}</></div>
              <div className="unete-button">
                <PrismicNextLink field={slice.primary.linkbutton} className="unete__link">
                  <>{slice.primary.labelbutton}</>
                </PrismicNextLink>
              </div>
            </div>
            <div className="unete-col2">
              <div className="unete-image">
                <PrismicNextImage field={slice.primary.image} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UneteAlEquipo;
