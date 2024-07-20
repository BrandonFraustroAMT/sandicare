'use client'
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Porque.css'
import { useState } from "react";

/**
 * Props for `PorqueSandicheck`.
 */
export type PorqueSandicheckProps =
  SliceComponentProps<Content.PorqueSandicheckSlice>;

/**
 * Component for "PorqueSandicheck" Slices.
 */
const PorqueSandicheck = ({ slice }: PorqueSandicheckProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const handleItemIndex = (index:number) => {
    setCurrentIndex(index);
  }

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
            {currentIndex !== null && (
              <div className="porque-sandicheck__column1">
                <div className="porque-sandicheck__column-img">
                  <PrismicNextImage field={slice.primary.groupporque[currentIndex].image} />
                </div>
              </div>
            )}
            <div className="porque-sandicheck__column2">
              <>
                {slice.primary.groupporque.map((item, index) => (
                  // Render the item
                  <>
                    <div className="porque-sandicheck__column2-container" key={index} onClick={() => handleItemIndex(index)}>
                      <div className="porque-sandicheck__subtitle"><>{item.subtitle}</></div>
                      {currentIndex === index && (
                        <div className="porque-sandicheck__description"><>{item.description}</></div>
                      )}
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
