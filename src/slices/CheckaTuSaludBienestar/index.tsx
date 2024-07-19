import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckatBienestar.css'
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `CheckaTuSaludBienestar`.
 */
export type CheckaTuSaludBienestarProps =
  SliceComponentProps<Content.CheckaTuSaludBienestarSlice>;

/**
 * Component for "CheckaTuSaludBienestar" Slices.
 */
const CheckaTuSaludBienestar = ({
  slice,
}: CheckaTuSaludBienestarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-bienestar">
        <div className="checkat-bienestar__container">
          <div className="checkat-bienestar__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
          <div className="checkat-bienestar__list">
            <>
              {slice.primary.groupbienestar.map((item) => (
                // Render the item
                <>
                  <div className="checkat-bienestar__column">
                    <div className="checkat-bienestar__img">
                      <PrismicNextImage field={item.image} />
                    </div>
                    <div className="checkat-bienestar__text"><>{item.text}</></div>
                  </div>
                </>
              ))}
            </>
          </div>
          <div className="checkat-bienestar__description"><>{slice.primary.description}</></div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludBienestar;
