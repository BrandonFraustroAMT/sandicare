import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './Nosotrosvalores.css'
/**
 * Props for `NosotrosValores`.
 */
export type NosotrosValoresProps =
  SliceComponentProps<Content.NosotrosValoresSlice>;

/**
 * Component for "NosotrosValores" Slices.
 */
const NosotrosValores = ({ slice }: NosotrosValoresProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="nosotrosvalores">
        <div className="nosotrosvalores-container">
          <div className="nosotrosvalores-data">
            <div className="nosotrosvalores-title"><h2><PrismicRichText field={slice.primary.title} /></h2></div>
            <div className="nosotrosvalores-list">
              <>
                {slice.primary.groupvalores.map((item, index) => (
                  // Render the item
                  <div className="nosotrosvalores-list__data" key={index}>
                    <>
                      <div className="nosotrosvalores-column">
                        <div className="nosotrosvalores-col1">
                          <div className="nosotrosvalores-img"><PrismicNextImage field={item.icono} /></div>
                        </div>
                        <div className="nosotrosvalores-col2">
                          <div className="nosotrosvalores-subtitle"><>{item.subtitle}</></div>
                          <div className="nosotrosvalores-description"><>{item.descripcion}</></div>
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosValores;
