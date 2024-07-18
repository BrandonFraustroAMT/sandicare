import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Porque.css'

/**
 * Props for `PorqueSandicheck`.
 */
export type PorqueSandicheckProps =
  SliceComponentProps<Content.PorqueSandicheckSlice>;

/**
 * Component for "PorqueSandicheck" Slices.
 */
const PorqueSandicheck = ({ slice }: PorqueSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="porque-sandicheck">
        <div className="porque-sandicheck__container">
          <div className="porque-sandicheck__title">
            <h2><PrismicRichText field={slice.primary.title} /></h2>
          </div>
          <div className="porque-sandicheck__column">
            <div className="porque-sandicheck__column1">
              <>
                {slice.primary.groupporque.map((item) => (
                  // Render the item
                  <>
                    <div className="porque-sandicheck__column-img"><PrismicNextImage field={item.image} /></div>
                  </>
                ))}
              </>
            </div>
            <div className="porque-sandicheck__column2">
              <>
                {slice.primary.groupporque.map((item) => (
                  // Render the item
                  <>
                    <div className="porque-sandicheck__column2-container">
                      <div className="porque-sandicheck__subtitle"><>{item.subtitle}</></div>
                      <div className="porque-sandicheck__description"><>{item.description}</></div>
                    </div>
                  </>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PorqueSandicheck;
