import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Concepto.css'
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `ConceptoSandicheck`.
 */
export type ConceptoSandicheckProps =
  SliceComponentProps<Content.ConceptoSandicheckSlice>;

/**
 * Component for "ConceptoSandicheck" Slices.
 */
const ConceptoSandicheck = ({
  slice,
}: ConceptoSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="concepto-sandicheck">
        <div className="concepto-sandicheck__container">
          <div className="concepto-sandicheck__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="concepto-sandicheck__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="concepto-sandicheck__description">
            <>{slice.primary.description}</>
          </div>
          <div className="concepto-sandicheck__list-data">
            <>
              {slice.primary.groupconcepto.map((item, index) => (
                // Render the item
                <>
                  <div className="concepto-sandicheck__data-box" key={index}>
                    <div className="concepto-sandicheck__img">
                      <PrismicNextImage field={item.image} />
                    </div>
                    <div className="concepto-sandicheck__data-text">
                      <>{item.label}</>
                    </div>
                  </div>
                </>
              ))}
            </>
          </div>
          <div className="concepto-sandicheck__list-text">
            <>
              {slice.primary.groupslider.map((item, index) => (
                // Render the item
                <div className="concepto-sandicheck__list-column" key={index}>
                    {
                      index % 2 == 0 ? (
                        <><div className="concepto-sandicheck__list-column1">
                        <div className="concepto-sandicheck__list-title">
                          <>{item.title}</>
                        </div>
                        <div className="concepto-sandicheck__list-subtitle">
                          <>{item.subtitle}</>
                        </div>
                      </div><div className="concepto-sandicheck__list-column2">
                          <div className="concepto-sandicheck__list-img">
                            <PrismicNextImage field={item.image} />
                          </div>
                        </div></>
                      ) : (
                        <>
                          <div className="concepto-sandicheck__list-column2">
                            <div className="concepto-sandicheck__list-img">
                              <PrismicNextImage field={item.image} />
                            </div>
                          </div>
                          <div className="concepto-sandicheck__list-column1">
                            <div className="concepto-sandicheck__list-title">
                              <>{item.title}</>
                            </div>
                            <div className="concepto-sandicheck__list-subtitle">
                              <>{item.subtitle}</>
                            </div>
                          </div>
                        </>
                      )
                    }
                  </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptoSandicheck;
