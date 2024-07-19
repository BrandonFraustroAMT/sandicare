import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckatLideres.css'
import { PrismicNextImage } from "@prismicio/next";
/**
 * Props for `CheckaTuSaludLideres`.
 */
export type CheckaTuSaludLideresProps =
  SliceComponentProps<Content.CheckaTuSaludLideresSlice>;

/**
 * Component for "CheckaTuSaludLideres" Slices.
 */
const CheckaTuSaludLideres = ({
  slice,
}: CheckaTuSaludLideresProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="checkat-lideres">
        <div className="checkat-lideres__container">
          <div className="checkat-lideres__title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
          <div className="checkat-lideres__description"><>{slice.primary.description}</></div>
          <div className="checkat-lideres__list">
            <>
              {slice.primary.grouplideres.map((item) => (
                // Render the item
                <>
                  <div className="checkat-lideres__img">
                    <PrismicNextImage field={item.image} />
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

export default CheckaTuSaludLideres;
